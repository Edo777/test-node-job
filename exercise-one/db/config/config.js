module.exports = {
    "development": {
        "username": "",
        "password": "",
        "database": "shortservice", // dont change
        "host": "127.0.0.1", // dont change
        "dialect": "mysql" // dont change it
    },
    "test": {
        "username": "",
        "password": "",
        "database": "database_test",
        "host": "127.0.0.1",
        "dialect": "mysql",
        "operatorsAliases": false
    },
    "production": {
        "username": "root",
        "password": null,
        "database": "database_production",
        "host": "127.0.0.1",
        "dialect": "mysql",
        "operatorsAliases": false
    }
};