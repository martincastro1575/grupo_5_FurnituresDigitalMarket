const mainController = {
    home: (req, res) => {
        //res.send('Hola');
        return res.render('home');
    },
};

module.exports = mainController;