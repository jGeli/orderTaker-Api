const fullNamer = (firstName, lastName) => {
    return `${firstName} ${lastName}`
};

const withFullNames = (data) => {
    let arr = data.map((a) => {
            let user = a._doc;
            return {...user, fullName: fullNamer(user.firstName, user.lastName)}
    });
    return arr
}


module.exports = {
    fullNamer,
    withFullNames
}