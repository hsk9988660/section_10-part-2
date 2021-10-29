//when a user login in website in response we send json web tokens that store in client chrome cookies
//when next time same userc login we don't need again login into website 

// whatever user perform it strore in cookies 
//json web token is a string that identify user
//it like driver license 

//  server genrates web token 

// next time he need to sure password and email

// clients send this token bacjk to server  for future api's call
// for react we can use  localstorage every browser has this



// json has algorithem HS256

//THIS ALG IS USE FOR ENCODING  JWT


//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c

//HEADER HAS 

//HEADER:ALGORITHM & TOKEN TYPE



// payloads has  name and userid,  

//{
    // "sub": "1234567890",
//     "name": "John Doe",
//     "iat": 1516239022
//   }

//payload has everything

// we don't send extra  quary to  database we just get userid 

//if the user is an admin user or not  it send true


//3rd part is a digital signature is created based on content of json web tokrns

// it also based on long and secret key 

// secret key only awailable on server

// if millicious user change admin , the digital signature will be invalid

// the hacker cannot generate digital key because it inly available on server


// hacker can only genrate key if it access to server

//when he send json web token server will decline that token 
console.log(' json token');

// there  are token for different plateform

const jwt = jWt.sign({_id:user._id},'jwtprivatekey')

//secretkey can be any string it 


// we can give any name to this secretkey

//donot save secretkey in source code we store it in envirnoment variable 

//sign method has two arg 1st has payload, 2nd is secretkey
//scretkey is use to generate digital signature 
res.send(jwt)


      //we return jwt token to clients
      // instead returning simple true we return json web tokens
      //eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTdhZDhlMmJkYjI2YzUxOGZmODgyZTYiLCJpYXQiOjE2MzU0NDU0MDd9.4APXIIHy0iet_b4fMri9_iOipirzWup0ncyKALjqKcI

      // token like this will send to clients which store on client browser


      // we have to store secrete keys in a seperate variable 

      // due to to this storing no one can access