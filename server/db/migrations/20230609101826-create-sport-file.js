/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('SportFiles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      sports_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Sports',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      files_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Files',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('SportFiles');
  },
};
