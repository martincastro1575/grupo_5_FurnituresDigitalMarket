const mainController = {
    'home': (req, res) => {
        return res.render('home', {
            title: 'Home FDMk'
        });
    },
};

module.exports = mainController;