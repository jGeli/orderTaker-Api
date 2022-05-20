
const isEmail = (email) => {
    const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email.match(regEx)) return true;
    else return false;
  };

  const isPasswordLength = (string, val) => {

    if (String(string).length < val) return true;
    else return false;
  };


const isBD = (data) => {
  console.log(Number(new Date().getFullYear() - new Date(data).getFullYear()))
  if(new Date(data).getFullYear() == new Date().getFullYear()) return true;
  if(Number(new Date().getFullYear() - new Date(data).getFullYear()) < 18) return true
  else false
}
  

  const isEmptyArray = (arr) => {

    if(!arr) return true;
    if (arr.length === 0) return true;
    else return false;
  }
  
  const isEmpty = (string) => {
    if(!string) return true;
    if (String(string).trim() === '') return true;
    else return false;
  };

  const isMobile = (string) => {
    if(!string) return false;
    if (String(string).trim() === '') return false;
    if (String(string).trim().charAt(0) !== '9' ) return true;
    if (String(string).trim().length !== 10) return true;
    else return false;
  };

  const isNotLogin = (string) => {
    let logins = ['googleId', 'facebookId', 'mobile'];
      let ind = logins.indexOf(string);
      if(ind === -1) return true;
      else return false;
  };

    const validateRoleData = (data) => {
    let errors = {};
  
    if (isEmpty(data.title)) errors.title = 'Title must not be empty';
    if (isEmpty(data.title)) errors.title = 'Title must not be empty';

    // if (isEmpty(data.notes)) errors.note = 'Note must not be empty';
    return {
      errors,
      valid: Object.keys(errors).length === 0 ? true : false
    };
  };


//   const validateLoginData = (data) => {
//     let errors = {};
  
//     if (isEmpty(data.username)) errors.username = 'Username must not be empty';
//     if (isEmpty(data.password)) errors.password = 'Password must be empty';
//     return {
//       errors,
//       valid: Object.keys(errors).length === 0 ? true : false
//     };
//   };

//   const validateSignupData = (data) => {
//     let errors = {};
  
//     if (isEmpty(data.username)) errors.username = 'Username must not be empty';
//     if (isEmpty(data.password)) errors.password = 'Password must be empty';
//     if (isPassword8(data.password)) errors.password = 'Password must be 8 characters';
//     if (isEmpty(data.supporterId)) errors.supporterId = 'Re-input basic details';
//     if (isEmpty(data.roles)) errors.roles= 'Role must not be empty';
//     if (isEmpty(data.areaCode)) errors.areaCode = 'Designated area must not be empty';
    

//     return {
//       errors,
//       valid: Object.keys(errors).length === 0 ? true : false
//     };
//   };







  module.exports = {
    isEmail,
    isPasswordLength,
    isBD,
    isEmpty,
    isMobile,
    isEmptyArray,
    isNotLogin,
    validateRoleData
  }
