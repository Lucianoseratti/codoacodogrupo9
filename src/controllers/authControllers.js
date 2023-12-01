const fs = require ("fs")
const path = require ("path")
const productosJSON = JSON.parse (fs.readFileSync("./src/data/productos.json","utf-8"))




module.exports = {
    viewLogin: (req, res) => {
        res.render("auth/login",{
           title: "Login",
           productos: productosJSON
        })
    },
    login: (req, res) => {
        res.send("devuelve post vista login");
    },
    register: (req, res) => {
        res.send("devuelve post vista register");
    },
    viewRegister:  (req, res) => {
        res.render("auth/register",{
           title: "Register"
           
        })
    },

    logout: (req, res) => {
        res.send("devuelve get vista logout deslogeo");
    }
}
