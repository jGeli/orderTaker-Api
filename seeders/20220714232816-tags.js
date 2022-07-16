'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.bulkInsert('tags',[
          {
            id: 1,
            name: 'Steels',
            slug: 'steels'
        },{
          id: 2,
          name: 'Plastics',
          slug: 'plastics'
      },{
        id: 3,
        name: 'Woods',
        slug: 'woods'
    },          
    
    // CUSTOMERS
    
    {
      id: 4,
      name: 'Paid in Full',
      slug: 'paid'
  },{
    id: 5,
    name: 'UnPaid',
    slug: 'UnPaid'
},{
  id: 6,
  name: 'Favorites',
  slug: 'favorites'
}
   
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
        queryInterface.bulkDelete('tags', null, {})
      ])
    })
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
