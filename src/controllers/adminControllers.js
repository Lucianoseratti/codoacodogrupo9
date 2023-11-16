module.exports = {
    adminView: (req, res) => {
        res.send("devuelve vista admin");
    },
    viewAdminCreate: (req, res) => {
        res.send("devuelve vista adminAdd");
    },
    adminCreate: (req, res) => {
        res.send("devuelve post vista adminCreate");
    },
    viewAdminEdit: (req, res) => {
        res.send("devuelve vista adminEdit");
    },
    adminEdit: (req, res) => {
        res.send("devuelve put vista adminEdit");
    },
    adminDelete: (req, res) => {
        res.send("devuelve vista adminDelete");
    }
}