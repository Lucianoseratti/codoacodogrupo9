module.exports = {
    homeView: (req, res) => {
        res.send("devuelve vista home");
    },
    contactView: (req, res) => {
        res.send("devuelve vista contact");
    },
    aboutView: (req, res) => {
        res.send("devuelve vista about");
    },
    faqsView: (req, res) => {
        res.send("devuelve vista faqs");
    }
}