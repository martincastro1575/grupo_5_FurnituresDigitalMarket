const mainController = {
    'home': (req, res) => {
        return res.render('home', {
            title: 'Home FDMk'
        });
    },

    'list': (req, res) =>{

        let users = [
            'Martin',
            'Maria',
            'Pedro',
            'Juan',
            'Karla',
            'Marlene'
        ]

        return res.render('userList', {
            'listUsers' : users,
        });

    }
};

module.exports = mainController;