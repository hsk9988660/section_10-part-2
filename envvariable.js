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


      // we use config package to store configeration settings of application in json files or in envirnoment variables


      // we take secretkey from auth.js and store in envirnoment variables
      // we will store keys in codes otherwise it will accessible to any one 


      // 1st we carete default configeration file , in this file we jsut create template


      


      
      // now jwtPrivateKey is a name of our application sitting 
      // it is secret now
      //the actaul secret in our variable


      // we use dotenv package to secure our jwtSecureKey

//       As early as possible in your application, require and configure dotenv.

// require('dotenv').config()
// Create a .env file in the root directory of your project. Add environment-specific variables on new lines in the form of NAME=VALUE. For example:

// DB_HOST=localhost
// DB_USER=root
// DB_PASS=s1mpl3

//SECRET=jwtKeyName  
// we can write secret key without any 

