const fs = require ("fs")
const path = require ("path")
const productosJSON = JSON.parse (fs.readFileSync("./src/data/productos.json","utf-8"))


module.exports = {
    homeView: (req, res) => {
     res.render("home",{
        title: "Home | Funkoshop",
        productos: productosJSON
     })
       
    },
    contactView: (req, res) => {
        res.render("contact",{
           title: "Contacto",
           
        })
    },
    aboutView: (req, res) => {
        res.send("devuelve vista about");
    },
    faqsView: (req, res) => {
        res.send("devuelve vista faqs");
    }
}