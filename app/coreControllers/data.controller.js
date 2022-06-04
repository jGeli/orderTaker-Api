
const RoleService = require('../services/role.services');



exports.getData = async (req, res) => {
    console.log('aaaaddd')
    try {
        let roles = await RoleService.getAll();
        console.log(roles)
    }catch(err){
        console.log(err)
        res.status(400).json({message: { text: 'Something went wrong!', type: 'error' }})
    }
  
}