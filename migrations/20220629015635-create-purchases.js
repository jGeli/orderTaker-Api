'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('purchases', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      inventoryId: {
        type: Sequelize.INTEGER
      },
      productId: {
        type: Sequelize.INTEGER
      },
      quantity: {
        type: Sequelize.INTEGER
      },
      price: {
        type: Sequelize.INTEGER
      },
      total: {
        type: Sequelize.STRING
      },
      type: {
        type: Sequelize.STRING
      },
      purchasedBy: {
        type: Sequelize.STRING
      },
      notes: {
        type: Sequelize.STRING
      },
      deleted_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      },
      businessId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'businesses'
        }
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('purchases');
  }
};