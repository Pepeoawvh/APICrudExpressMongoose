const bcrypt = require("bcryptjs")

const encrypt = async (data) => {
    const salt = await bcrypt.genSalt(10)
    const encryptedData = await bcrypt.hash(data, salt)
    return encryptedData
}

const compareEncryptedData = async (data1, data2) =>{
    console.log(data1,data2)
    const validated = await bcrypt.compare(data1, data2)
    return validated
}

module.exports={encrypt, compareEncryptedData}