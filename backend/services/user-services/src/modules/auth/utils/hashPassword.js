const bcrypt = require("bcrypt");

const hashPassword = async (password)=>{
    try{
        const salt = 10; 
        const hashed = await bcrypt.hash(password, salt);        
        return hashed;
    }
    catch(err){
        console.log("error hashing");
        
        throw new Error("something went wrong ")
    }
}
module.exports = hashPassword;