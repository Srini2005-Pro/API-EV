'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('deviceUpdates', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      timestamp: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      responseId: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      deviceId: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      errorCode: {
        type: Sequelize.ENUM('0', '1'),
        allowNull: false,
      },
      userId: {
        type: Sequelize.INTEGER,
        
        references: {
          model: 'user', // Name of the target table
          key: 'id', // Key in the target table
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      createdBy: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
            model: 'user',
            key: 'id',
        },
    },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      deletedAt: {
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('deviceUpdates');
  },
};