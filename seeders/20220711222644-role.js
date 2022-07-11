'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.bulkInsert('role',[
          {
            id: 1,
            role_name: 'admin',
            role_description: 'admin only',
        },{
            userId: 2,
            role_name: 'super',
            role_description: 'all access permission',
      },{
            userId: 3,
            role_name: 'cashier',
            role_description: 'cashier only',
    },
      ])
      ])
    })
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.bulkDelete('role', null, {})
      ])
    })
  }
};
