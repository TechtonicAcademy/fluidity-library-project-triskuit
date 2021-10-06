module.exports = (sequelize, DataTypes) => {
  const Author = sequelize.define(
    'Author',
    {
      // first_name (VARCHAR, NOT NULL, between 1-200 characters)
      first_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 255],
        },
      },
      // last_name (VARCHAR, NOT NULL, between 1-200 characters)
      last_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 255],
        },
      },
    },
    // settings
    {
      paranoid: true,
      timestamps: true,
    }
  );

  Author.associate = ({ Book }) => {
    Author.hasMany(Book);
  };

  return Author;
}
