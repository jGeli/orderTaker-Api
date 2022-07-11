'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.bulkInsert('businesses',[
          {
            id: 1,
            name: 'Hammer',
            description: 'Steel head hammer with wooden handle',
            inStock: 500,
            price: 495,
            sale_price: 399,
            featured_image: "",
            code: ""
        },
        {
            id: 2,
            name: 'Saw',
            description: 'Mini Hack Saw',
            inStock: "150",
            price: "350",
            sale_price: "299",
            featured_image: "",
            code: ""
        },
        {
          id: 3,
          name: 'Wrench Set',
          description: 'Complete set of plumbing and Auto tools',
          inStock: 100,
          price: 1799,
          sale_price: 1499,
          featured_image: "",
          code: ""
        },
        {
          id: 4,
          name: 'Plires',
          description: 'Long nose Plires',
          inStock: 80,
          price: 250,
          sale_price: 199,
          featured_image: "",
          code: ""
        },
        {
          id: 5,
          name: 'Screw Set',
          description: 'complete set of screws and sizes',
          inStock: 120,
          price: 1200,
          sale_price: 999,
          featured_image: "",
          code: ""
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
        queryInterface.bulkDelete('businesses', null, {})
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
