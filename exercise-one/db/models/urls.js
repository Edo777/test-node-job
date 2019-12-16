'use strict';
module.exports = (sequelize, DataTypes) => {
    const urls = sequelize.define('urls', {
        userId : {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        shortUrl : {
            type: DataTypes.STRING,
            primaryKey: true,
            autoIncrement: false
        },
        longUrl : {
            type: DataTypes.STRING,
            allowNull: false
        },
        visitsCount : {
            type: DataTypes.INTEGER,
            defaultValue : 0
        },
    }, {});

    urls.associate = function (models) {
        urls.belongsTo(models.users, {});
    };

    return urls;
};