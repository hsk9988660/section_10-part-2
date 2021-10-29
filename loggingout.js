// technically we apply logging out on client side not  on server
// we don't store token on database this is bad practices

// because this token is like keys and we never give access to authenticate users 
//if we access to database we have access to all users in database


//never store tokens on database 
// storing  the token in database is like giving access to license

// whenever you send token from clients to server there we must use https

// due to https hackers cannot read token from clients to servers 

console.log(' loggingout');