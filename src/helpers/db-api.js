const axios = require('axios')
const https = require('https')

module.exports = {
    query: async function(sql, values = null) {
        const requestData = {
            data: {
                "queries": [
                    {
                        "command": sql,
                        "parameters": values,
                        "name": "query"
                    }
                ],
                "source": "MBS"
            }
        }

        return await module.exports.performDatabaseAPI(requestData, false, 'query')
    },

    multipleQuery: async function(queries) {
        const requestData = {
            data: {
                "queries": queries,
                "source": "MBS"
            }
        }

        return await module.exports.performDatabaseAPI(requestData, false, 'multiple')
    },

    performDatabaseAPI: async function(requestData, includeErrors = false, defaultResultKey = 'query') {
        console.log("\x1b[33m", 'Performing Request to Database API...')
        console.log("\x1b[0m")

        const maxRetry = 3
        let currentTry = 1
        let error = null
        let rows = null
        let fullReturn = null

        const host = process.env.RDS_DB_HOST
        const host_read = process.env.RDS_DB_HOST_READ === undefined ? process.env.RDS_DB_HOST : process.env.RDS_DB_HOST_READ
        const user = process.env.RDS_DB_USER
        const password = process.env.RDS_DB_PASSWORD
        const database = process.env.RDS_DB_NAME
        console.log(host)
        console.log(host_read)
        console.log(user)
        console.log(password)
        console.log(database)
        const encodeBuffer = Buffer.from(JSON.stringify({ host, host_read, user, password, database }))
        const token = encodeBuffer.toString('base64')

        requestData.headers = {}
        requestData.method = 'post'
        requestData.url = `${process.env.DATABASE_API_URL}/query`
        requestData.headers['Authorization'] = `Basic ${token}`

        // console.log('Payload: ', JSON.stringify({
        //     headers: requestData.headers,
        //     method: requestData.method,
        //     url: requestData.url,
        //     data: requestData.data
        // }))

        if (! global.HTTPS_AGENT) {
            global.HTTPS_AGENT = new https.Agent({ keepAlive: true })
            requestData.httpsAgent = global.HTTPS_AGENT
        }

        while (true) {
            try {
                console.log(`Executing Database API... (${currentTry}/${maxRetry})`)
                const request = await axios.request(requestData)

                if (defaultResultKey == 'query') {
                    fullReturn = request.data.data.query

                    if (request.data.data.query.errno !== undefined) {
                        error = fullReturn
                    } else {
                        rows = fullReturn
                    }
                } else {
                    fullReturn = request.data.data
                }

                console.log("\x1b[32m", 'Database API Success')
                console.log("\x1b[0m")
                break
            } catch (error) {
                // console.log(error.response)
                // console.log('Database API Error: ', error)
                if (currentTry >= maxRetry) {
                    console.log("\x1b[31m", `Unable to perform datbase API after ${maxRetry} retries.`)
                    console.log("\x1b[0m")
                    break
                }

                if (error.toString().includes('ECONNRESET')) {
                    console.log(`Retrying... (${currentTry}/${maxRetry})`)

                    await new Promise(function (resolve, reject) {
                        console.log('Pausing for 1 second...')
                        setTimeout(function(){
                            console.log('Retry Resume.')
                            resolve()
                        }, 1000)
                    })

                    global.HTTPS_AGENT = new https.Agent({ keepAlive: true })
                    requestData.httpsAgent = global.HTTPS_AGENT

                    currentTry++
                } else {
                    error = 'Can not connect to the database.'
                    fullReturn = error
                    break
                }   
            }
        }

        if (includeErrors) {
            return { error, rows }
        }

        return fullReturn
    },

    releaseHttps: async function(res) {
        res.on('finish', async () => {
            console.log('Releasing HTTPS AGENT...')
            if (global.HTTPS_AGENT) {
                try {
                    await global.HTTPS_AGENT.destroy()
                    console.log("\x1b[32m", 'HTTPS AGENT Released')
                    console.log("\x1b[0m")
                } catch(error) {
                    console.log("\x1b[31m", 'Unable to Release HTTPS AGENT: ', error)
                    console.log("\x1b[0m")
                }
            } else {
                console.log('Nothing to Release: ', global.HTTPS_AGENT)
            }
        })
    }
}