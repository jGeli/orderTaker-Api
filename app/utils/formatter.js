const fullNamer = (firstName, lastName) => {
    return `${firstName} ${lastName}`
};

const roleString = (data) => {
    let str = ''

    for(let i = 0; i < data.length; i++){
      str = i == 0 ? str + String(data[i].title).toUpperCase() :  str + `/${String(data[i].title).toUpperCase()}`;
    }

 
    console.log(str)
    return str
};

const withFullNames = (data) => {
    let arr = data.map((a) => {
            let user = a._doc;
            return {...user, fullName: fullNamer(user.firstName, user.lastName), role: roleString(user.roles)}
    });
    return arr
}


module.exports = {
    fullNamer,
    withFullNames
}