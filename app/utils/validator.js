
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
  // ROLE DATA VALIDATION
    const validateRoleData = (data) => {
    let errors = {};
  
    if (isEmpty(data.title)) errors.title = 'Title must not be empty';
  
    return {
      errors,
      valid: Object.keys(errors).length === 0 ? true : false
    };
  };

  const validateSignupData = (data) => {
    let errors = {};
  
    if (isEmpty(data.email_address)) errors.email_address = 'Email address must not be empty';
    if (!isEmail(data.email_address)) errors.email_address = 'Email address must be a valid email';
    if (isEmpty(data.username)) errors.username = 'Username must not be empty';
    if (isPasswordLength(data.password, 8)) errors.password = 'Password must be 8 characters';
    if (isEmpty(data.password)) errors.password = 'Password must not be empty';
  
  
    return {
      errors,
      valid: Object.keys(errors).length === 0 ? true : false
    };
  };


  const validateLoginData = (data) => {
    let errors = {};
  
  
    if (isEmpty(data.username)) errors.username = 'username must not be empty';
    if (isPasswordLength(data.password, 8)) errors.password = 'Password must be 8 characters';
    if (isEmpty(data.password)) errors.password = 'password must not be empty';
  
  
    return {
      errors,
      valid: Object.keys(errors).length === 0 ? true : false
    };
  };






  //USER DATA VALIDATION
const validateUserData = (data) => {
  let errors = {};

  if (isEmpty(data.email_address)) errors.email_address = 'email must not be empty';

  if (isEmpty(data.username)) errors.username = 'username must not be empty';

  if (isEmpty(data.password)) errors.password = 'password must not be empty';

  if (isEmpty(data.firstName)) errors.firstName = 'FirstName must not be empty';
  
  if (isEmpty(data.lastName)) errors.lastName = 'lastName must not be empty';

  if (isEmpty(data.birthDate)) errors.birthDate = 'birthDate must not be empty';

  if (isEmpty(data.gender)) errors.gender = 'gender must not be empty';

  if (isEmpty(data.contact)) errors.contact = 'contact must not be empty';

  if (isEmpty(data.address)) errors.address = 'address must not be empty';

  if (isEmpty(data.roles)) errors.roles = 'roles must not be empty';

  if (isEmpty(data.businesses)) errors.businesses = 'businesses must not be empty';

  


  return {
    errors,
    valid: Object.keys(errors).length === 0 ? true : false
  };
};
  //NOTIFICATION DATA VALIDATION
const validateNotificationData = (data) => {
  let errors = {};

  if (isEmpty(data.title)) errors.title = 'Title must not be empty';

  if (isEmpty(data.content)) errors.content = 'contents must not be empty';

  if (isEmpty(data.type)) errors.type = 'type must not be empty';

  if (isEmpty(data.status)) errors.status = 'status must not be empty';


  return {
    errors,
    valid: Object.keys(errors).length === 0 ? true : false
  };
};
  
  //PURCHASES DATA VALIDATION
const validatePurchaseData = (data) => {
  let errors = {};

  if (isEmpty(data.products)) errors.products = 'products must not be empty';

  if (isEmpty(data.qty)) errors.qty = 'qty not be empty';

  if (isEmpty(data.price)) errors.price = 'price must not be empty';

  if (isEmpty(data.total)) errors.total = 'total must not be empty';

  if (isEmpty(data.type)) errors.type = 'type must not be empty';

  if (isEmpty(data.purchaseBy)) errors.purchaseBy = 'purchaseBy must not be empty';



  return {
    errors,
    valid: Object.keys(errors).length === 0 ? true : false
  };
};


   //BUSINESS DATA VALIDATION
const validateBusinessData = (data) => {
  let errors = {};

  if (isEmpty(data.name)) errors.name = 'name must not be empty';

  if (isEmpty(data.address)) errors.address = 'address must not be empty';

  if (isEmpty(data.contact)) errors.contact = 'contact must not be empty';

  if (isEmpty(data.email_address)) errors.email_address = 'email_address must not be empty';

  if (isEmpty(data.type)) errors.type = 'type must not be empty';

  if (isEmpty(data.inventory)) errors.inventory = 'inventory must not be empty';

  if (isEmpty(data.orders)) errors.orders = 'orders must not be empty';

  if (isEmpty(data.purchases)) errors.purchases = 'purchases must not be empty';

  if (isEmpty(data.payments)) errors.payments = 'payments must not be empty';

  if (isEmpty(data.users)) errors.users = 'users must not be empty';



  return {
    errors,
    valid: Object.keys(errors).length === 0 ? true : false
  };
};


   //PRODUCTS DATA VALIDATION
const validateProductData = (data) => {
  let errors = {};

  if (isEmpty(data.name)) errors.name = 'name must not be empty';

  if (isEmpty(data.description)) errors.description = 'description must not be empty';

  if (isEmpty(data.type)) errors.type = 'type must not be empty';

  if (isEmpty(data.categories)) errors.categories = 'categories must not be empty';

  return {
    errors,
    valid: Object.keys(errors).length === 0 ? true : false
  };
};


   //INVENTORY DATA VALIDATION
const validateInventoryData = (data) => {
  let errors = {};

  if (isEmpty(data.products)) errors.products = 'products must not be empty';

  if (isEmpty(data.purchases)) errors.purchases = 'purchases must not be empty';

  if (isEmpty(data.inStocks)) errors.inStocks = 'inStocks must not be empty';

  if (isEmpty(data.pricings)) errors.pricings = 'pricings must not be empty';


  return {
    errors,
    valid: Object.keys(errors).length === 0 ? true : false
  };
};


   //PAYMENTS DATA VALIDATION
const validatePaymentData = (data) => {
  let errors = {};

  if (isEmpty(data.orders)) errors.orders = 'orders must not be empty';

  if (isEmpty(data.customers)) errors.customers = 'customers must not be empty';

  if (isEmpty(data.businesses)) errors.businesses = 'businesses must not be empty';

  if (isEmpty(data.description)) errors.description = 'description must not be empty';

  if (isEmpty(data.amount)) errors.amount = 'amount must not be empty';

  if (isEmpty(data.type)) errors.type = 'type must not be empty';

  return {
    errors,
    valid: Object.keys(errors).length === 0 ? true : false
  };
};


   //CUSTOMER DATA VALIDATION
const validateCustomerData = (data) => {
  let errors = {};

  if (isEmpty(data.firstName)) errors.firstName = 'firstName must not be empty';

  if (isEmpty(data.lastName)) errors.lastName = 'lastName must not be empty';

  if (isEmpty(data.birthDate)) errors.birthDate = 'birthDate must not be empty';

  if (isEmpty(data.age)) errors.age = 'age must not be empty';

  if (isEmpty(data.contact)) errors.contact = 'contact must not be empty';

  if (isEmpty(data.gender)) errors.gender = 'gender must not be empty';

  if (isEmpty(data.address)) errors.address = 'address must not be empty';
  return {
    errors,
    valid: Object.keys(errors).length === 0 ? true : false
  };
};


   //CATEGORIES DATA VALIDATION
const validateCategoryData = (data) => {
  let errors = {};

  if (isEmpty(data.name)) errors.name = 'name must not be empty';

  if (isEmpty(data.description)) errors.description = 'description must not be empty';




  return {
    errors,
    valid: Object.keys(errors).length === 0 ? true : false
  };
};


   //ORDER_ITEMS DATA VALIDATION
const validateOrder_itemData = (data) => {
  let errors = {};

  if (isEmpty(data.inventories)) errors.inventories = 'inventories must not be empty';

  if (isEmpty(data.qty)) errors.qty = 'qty must not be empty';

  if (isEmpty(data.pricings)) errors.pricings = 'pricings must not be empty';

  if (isEmpty(data.subtotal)) errors.subtotal = 'subtotal must not be empty';

  return {
    errors,
    valid: Object.keys(errors).length === 0 ? true : false
  };
};


   //ORDERS VALIDATION
const validateOrderData = (data) => {
  let errors = {};

  if (isEmpty(data.description)) errors.description = 'description must not be empty';

  if (isEmpty(data.order_no)) errors.order_no = 'order_no must not be empty';

  if (isEmpty(data.order_items)) errors.order_items = 'order_items must not be empty';

  if (isEmpty(data.total_amount)) errors.total_amount = 'total_amount must not be empty';

  if (isEmpty(data.customer_id)) errors.customer_id = 'customer_id must not be empty';

  if (isEmpty(data.recordedBy)) errors.recordedBy = 'recordedBy must not be empty';

  return {
    errors,
    valid: Object.keys(errors).length === 0 ? true : false
  };
};



//PRICING VALIDATION
const validatePricingData = (data) => {
  let errors = {};

  if (isEmpty(data.name)) errors.name = 'name must not be empty';


  if (isEmpty(data.price)) errors.price = 'price must not be empty';

  if (isEmpty(data.description)) errors.description = 'description must not be empty';


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
    validateLoginData,
    validateSignupData,
    validateRoleData,
    validateUserData,
    validateNotificationData,
    validatePurchaseData,
    validateBusinessData,
    validateProductData,
    validateInventoryData,
    validatePaymentData,
    validateCustomerData,
    validateCategoryData,
    validateOrder_itemData,
    validateOrderData,
    validatePricingData
    
  }
