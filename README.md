# test-node-job


## Start
##### npm install

# Start Exercise 1.
##### 1. In db/config/config.js [development] set your username and password
##### 2. execute the query from ORM (workbrench, phpMyAdmin and etc...)
#####    CREATE DATABASE IF NOT EXISTS shortservice;
##### 3. cd exercise-one
##### 4. node bin/www 
##### 5. automatically created the 3 users with id 1, 2 , 3: You can use those ids
#####    to test the link-short logic
##### 6. Send POST request to http://localhost:3000/short-url/1
#####    the [1] in url is userId, and long Url you will send from body with key 
#####    [longUrl]. You can see userIds in the table users.
##### 7. After response take the shortUrl and send request to
#####    http://localhost:3000/your-short-code

## Start Exercise 2.
##### 1. cd exercise-two
##### 2. node . 1 8 8 4 16 32 (node index [numbers])