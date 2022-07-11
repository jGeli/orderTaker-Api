'use strict';
    module.exports = {
      async up(queryInterface, Sequelize) {
        await queryInterface.createTable('roles', {
          id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
          },
          role_name: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true
          },
          // role_id: {
          //   type: Sequelize.INTEGER,
          //   allowNull: true
          // },
          role_description: {
            type: Sequelize.STRING,
            allowNull: true
          },
          createdAt: {
            allowNull: false,
            type: Sequelize.DATE,
            // defaultValue: new Date()
          },
          deletedAt: {
            allowNull: false,
            type: Sequelize.DATE
          }
        });
      },
      async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('roles');
      }
    };