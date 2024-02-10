const  {expressjwt} = require("express-jwt")
const claveSecreta = process.env.SECRET_JWT

const getToken = (req, res) => {
   // const authorization = req.headers.authorization
    const {authorization} = req.headers
    if (!authorization){
        res.status(403).json({ 
            mensaje: "Debe enviar token de autorización"
        })
    }
    let [type, token] = authorization.split(" ")
    // const arregloAuthorization = authorization.split(" ")
    // const type = arregloAuthorization[0]
    // const token = arregloAuthorization[1]

    

    return (type==="Token") ? token : null
    // if (type==="Token"){
    //     return token
    // }
    // else {
    //     return null
    // }
}

    const auth = expressjwt({
        secret: claveSecreta,
        algorithms: ["HS256"],
        getToken
    })

    module.exports={auth}