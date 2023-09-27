const router = require('express').Router();
const { User, Category, Technique, History } = require('../../models');
const withAuth = require('../../utils/auth');

// ***GET History data***
// This route is used to return the last ten meditation techniques the user has saved, as well as the associated comments. This information will appear on the 'Remember' page.
router.get('/', async (req, res) => {
    try {
        // Get all History entries with associated techniques for the logged in user
        const historyData = await History.findAll({
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
        const history = historyData.map(item => item.get({ plain: true }));
        console.log(history);

        // Assign first ten items from the array to an array variable
        const chosenData = history.slice(0, 10);

        // Console.log for developer use. Using sample data (array item [2]) to confirm the desired items in the array can be accessed. 
        console.log(chosenData[2].comment);
        console.log(chosenData[2].technique.technique_name);
        console.log(chosenData[2].createdAt);

        // Render the chosenData object to be used in the 'history.handlebars' template. Include the session flag.
        res.render('history', {
            chosenData,
            logged_in: req.session.logged_in
        });

    } catch (err) {
        res.status(500).json(err);
    }
});

// ***GET the Technique associated with the historical entry***
// This route is used to return the technique from history item the user clicks on
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
        const historyData = await History.create(req.body);
        res.status(200).json(historyData);
    } catch (err) {
        res.status(400).json(err);
    }
});

// ***DELETE the historical entry***
// This route is used when the user clicks on the DELETE button for a historical item on the history page.
router.delete('/:id', async (req, res) => {
    try {
        const historyData = await History.destroy({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json(historyData);
    } catch (err) {
        res.status(500).json(err);
    }
})


module.exports = router;