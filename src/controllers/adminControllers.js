
const { log, Console } = require("console")
const fs = require ("fs")
const path = require ("path")
const productosJSON = JSON.parse (fs.readFileSync("./src/data/productos.json","utf-8"))

module.exports = {
    adminView: (req, res) => {
        res.render("admin/admin",{
           title: "Administrador",
           productos: productosJSON
        })
    },
    viewAdminCreate: (req, res) => {
        res.render("admin/create",{
           title: "Crear Producto",
           productos: productosJSON
        })
    },
    adminCreate: (req, res) => {
        res.send("devuelve post vista adminCreate");
    },
    viewAdminEdit: (req, res) => {
        let id_producto = req.params.id;
        let producto = [];
        const uniqueLicences = new Set();
        const uniqueCategory = new Set();
       
        productosJSON.forEach((item) => {
            if (id_producto == item.product_id) {
                uniqueLicences.add(item.licence_name);
                uniqueCategory.add(item.category_name);
                producto.push({
                    "product_id": item.product_id,
                    "licence_name": item.licence_name,
                    "category_name": item.category_name,
                    "product_name": item.product_name,
                    "product_description": item.product_description,
                    "product_price": item.product_price,
                    "dues": item.dues,
                    "stock": item.stock,
                    "product_sku": item.product_sku,
                    "img_front": item.img_front,
                    "img_back": item.img_back,
                    "cuota" :item.cuota
                });
            }
        });
        productosJSON.forEach(product => {
            uniqueLicences.add(product.licence_name);
        });
        productosJSON.forEach(product => {
            uniqueCategory.add(product.category_name);
        });
        console.log (producto);
        if (producto.length > 0) {
            // Renderizar la vista solo si se encuentra el producto
            res.render("./admin/edit", { id_producto, producto: producto[0], title: `${producto[0].product_name}`, productos: productosJSON, uniqueLicences, uniqueCategory });
        } else {
            // Manejar el caso en el que no se encuentra el producto
            res.status(404).send("Producto no encontrado");
        }
    },
    adminEdit: function (req, res, next) {
        const productId = req.params.id;
    const updatedData = req.body;
    const files = req.files;
    const imagenFront = files['imagenFront'] ? files['imagenFront'][0] : null;
const imagenBack = files['imagenBack'] ? files['imagenBack'][0] : null;

    console.log ( "id ", productId)
     console.log ( "data que trae de el ultimo ", updatedData)

    // Encuentra el producto correspondiente en la base de datos
    const productoToUpdate = productosJSON.find(item => item.product_id == productId);

    // Verifica si se encontró el producto
    if (productoToUpdate) {
        // Actualiza los campos con los nuevos datos del formulario
        productoToUpdate.product_name = updatedData.product_name;
        productoToUpdate.category_name = updatedData.category_name;
        productoToUpdate.licence_name = updatedData.licence_name;
        if (productoToUpdate.product_description !== updatedData.cuota ) {
            productoToUpdate.product_description = updatedData.product_description;
        }
        
        productoToUpdate.product_sku = updatedData.product_sku;
        productoToUpdate.product_price = updatedData.product_price;
        productoToUpdate.stock = updatedData.stock;
        productoToUpdate.dues = updatedData.dues;
        if (productoToUpdate.cuota !== updatedData.cuota ) {
            productoToUpdate.cuota = updatedData.cuota;
        }
       
        if (imagenFront) {
            productoToUpdate.img_front = path.join('/img', imagenFront.filename);
        }
        if (imagenBack) {
            productoToUpdate.img_back = path.join('/img', imagenBack.filename);
        }
           
        
        // Puedes hacer lo mismo para otros campos según sea necesario

        // Guarda los cambios en la base de datos (en este caso, el archivo JSON)
        console.log ("producto update" ,productoToUpdate)
        fs.writeFileSync("./src/data/productos.json", JSON.stringify(productosJSON, null, 2));

        // Redirige a la vista de administrador o envía una respuesta según sea necesario
        res.redirect('/admin');
    } else {
        // Maneja el caso en el que no se encuentra el producto
        res.status(404).send("Producto no encontrado");
    }
},
    
    adminDelete: (req, res) => {
        res.send("devuelve vista adminDelete");
    }
}