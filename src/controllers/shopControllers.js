module.exports = {
    shopView: (req, res) => {
        res.send("devuelve vista shop");
    },
    itemView: (req, res) => {
        res.send("devuelve vista item");
    },
    cartView: (req, res) => {
        res.send("devuelve vista cart");
    },
    itemAdd: (req, res) => {
        res.send("devuelve vista itemAdd");
    },
    cartAdd: (req, res) => {
        res.send("devuelve vista cartAdd");
    }

}