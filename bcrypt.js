const bcrypt=require("bcrypt");
const { runInContext } = require("lodash");
// 1234=> knhijkgh
// 
// we  use gensalt method that convert into hash each time password has been change
// we should use async so we can run non-blocking
async function run(){

    const salt=await  bcrypt.genSalt(10)
    //this method has two arguments 

    //ist number of rounds and 2nd is callback
    const hash=await bcrypt.hash('12344',salt)
      //this method has two arguments 
      // we can directly pass 10 on salt place
    console.log(hash);



}
run()
// there are also number in hashing password
// every we pass differnt round we get diff results

// first it has number of round genrate this salt higher will convert password into chain

//this method have overload that return promise