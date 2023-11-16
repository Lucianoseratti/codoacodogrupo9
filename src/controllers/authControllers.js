module.exports = {
    viewLogin: (req, res) => {
        res.send("devuelve vista login");
    },
    login: (req, res) => {
        res.send("devuelve post vista login");
    },
    register: (req, res) => {
        res.send("devuelve post vista register");
    },
    viewRegister: (req, res) => {
        res.send("devuelve vista register");
    },

    logout: (req, res) => {
        res.send("devuelve post  vista logout");
    }
}
