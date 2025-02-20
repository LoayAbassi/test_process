const validateQuestion = (req, res, next) => {
    const { num_question, contenu_question, pole_question, type_category, type_facette } = req.body;

    if (!num_question || !contenu_question || !pole_question || !type_category || !type_facette) {
        return res.status(400).json({ message: "remplir tous les champs" });
    }

    if (!["croissant", "decroissant"].includes(pole_question)) {
        return res.status(400).json({ message: "pole de question invalide" });
    }

    next();
};

module.exports = { validateQuestion };
