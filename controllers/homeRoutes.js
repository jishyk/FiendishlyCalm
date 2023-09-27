const router = require('express').Router();
const { User, Category, Technique, History } = require('../models');
const withAuth = require('../utils/auth');
const getRandomInt = require('../utils/getRandonInt');

router.get('/', async (req, res) => {
  try {
    // Get all Category data
    const categoryData = await Category.findAll();

    // Serialize data so the template can read it
    const categories = categoryData.map((category) => category.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('homepage', { 
      categories, 
      logged_in: req.session.logged_in 
    });
    console.log(categories);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const techniqueData = await Category.findByPk(req.params.id, {
      include: [
        {
          model: Technique,
          attributes: ['technique_name', 'description'],
        },
      ],
    });

    // Assign the queried data to a plain JavaScript object that does not contain the sequelize properties
    const technique = techniqueData.get({ plain: true });
    console.log(technique);

    // Assign the 'techniques' key (which is an array) to a variable
    const mydata = technique.techniques;
    console.log(mydata);
    
    // Assign a random item from the array to a variable
    const chosenData = mydata[(getRandomInt(0, mydata.length))];
    
    // Console.log the object keys that should be displayed in the HTML 
    console.log(chosenData.technique_name);
    console.log(chosenData.description);

    // Render the chosenData object to be used in the 'technique.handlebars' template. Include the session flag.
    res.render('technique', {
      ...chosenData,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// ***TODO***
// Rick is still adding more routes here...



// Use withAuth middleware to prevent access to route
router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Project }],
    });

    const user = userData.get({ plain: true });

    res.render('profile', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

module.exports = router;
