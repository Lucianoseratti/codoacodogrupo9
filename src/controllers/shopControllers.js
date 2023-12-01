const fs = require ("fs")
const path = require ("path")
const productosJSON = JSON.parse (fs.readFileSync("./src/data/productos.json","utf-8"))


module.exports = {
    
    shopView: (req, res) => {
        res.render("shop/shop",{
           title: "Shop",
           productos: productosJSON
        })
    },
    itemView: (req, res) => {
        let id_producto = req.params.id;
        let producto = [];
        

        productosJSON.forEach((item) => {
            if (id_producto == item.product_id) {
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
                    "img_back": item.img_back
                });
            }
        });
        console.log (producto);
        if (producto.length > 0) {
            // Renderizar la vista solo si se encuentra el producto
            res.render("./shop/item", { id_producto, producto: producto[0], title: `${producto[0].product_name}`, productos: productosJSON });
        } else {
            // Manejar el caso en el que no se encuentra el producto
            res.status(404).send("Producto no encontrado");
        }
    },

    cartView: (req, res) => {
        res.render("shop/cart",{
            title: "Carrito"
            
         })
    },
    itemAdd: (req, res) => {
        res.send("devuelve vista itemAdd");
    },
    cartAdd: (req, res) => {
        res.send("devuelve vista cartAdd");
    }

}