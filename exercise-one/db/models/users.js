'use strict';
module.exports = (sequelize, DataTypes) => {
    const users = sequelize.define('users', {
        name : {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {});

    users.associate = function (models) {
        users.hasMany(models.urls, {
            foreignKey : 'userId',
        });
    };

    return users;
};