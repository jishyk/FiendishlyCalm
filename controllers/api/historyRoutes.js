const router = require('express').Router();
const { User, Category, Technique, History } = require('../../models');
const withAuth = require('../../utils/auth');

// ***GET History data***
// This route is used to return the saved meditation techniques, as well as the associated comments. This information will appear on the 'Remember' page.
router.get('/', async (req, res) => {
    
    try {
        // Get all History entries with associated techniques for the logged in user
        const historyData = await History.findAll({
            where: {
                user_id: req.session.user_id,
            },
            include: [
                {
                    model: Technique,
                    attributes: ['technique_name'],
                }
            ]
        });

        // Assign the queried data to a plain JavaScript object that does not contain the sequelize properties
        const histories = historyData.map(item => item.get({ plain: true }));
        console.log(histories);

        // Render the history object to be used in the 'history.handlebars' template. Include the session flag.
        res.render('history', {
            histories,
            logged_in: req.session.logged_in
        });

    } catch (err) {
        res.status(500).json(err.message);
    }
});

// ***GET the Technique associated with the historical entry***
// This route is used to return the technique associated with the history item the user clicks on
router.get('/:id', async (req, res) => {
    try {
        const techniqueData = await Technique.findByPk(req.params.id);

        // Assign the queried data to a plain JavaScript object that does not contain the sequelize properties
        const technique = techniqueData.get({ plain: true });
        console.log(technique);

        // Console.log the object keys that should be displayed in the HTML (for developer use) 
        console.log(technique.technique_name);
        console.log(technique.description);

        // Render the technique object to be used in the 'technique.handlebars' template. Include the session flag.
        res.render('technique', {
            ...technique,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

// ***POST the Technique with comment as a historical entry***
// This route is used when the user clicks on the OK button after entering a comment on the technique page.
router.post('/', async (req, res) => {
    try {
        const { user_id } = req.session;
        const technique_id = req.body.technique_id;
        const comment = req.body.comment;

        const payload = {
            user_id,
            comment,
            technique_id
        };
        
        const historyData = await History.create(payload);
        res.status(200).json(historyData);
    } catch (err) {
        res.status(400).json(err);
    }
});

// ***DELETE the historical entry***
// This route is used when the user clicks on the DELETE button for a historical item on the history page.
router.delete('/', async (req, res) => {
    try {
        const historyData = await History.destroy({
            where: {
                id: req.body.id
            }
        });

        // Find all History entries for the logged in user
        const newHistoryData = await History.findAll({
            // // ***TODO*** uncomment this code when the user login function has been added
            // where: {
            //     user_id: req.session.userId,
            // },
            include: [
                {
                    model: Technique,
                    attributes: ['technique_name'],
                }
            ]
        });

        // Assign the queried data to a plain JavaScript object that does not contain the sequelize properties
        const newHistories = newHistoryData.map(item => item.get({ plain: true }));
        console.log(newHistories);

        // Render the history object to be used to refresh the display. Include the session flag.
        res.render('history', {
            newHistories,
            // logged_in: req.session.logged_in
        });

    } catch (err) {
        res.status(500).json(err);
    }
});



module.exports = router;


