const router = require('express').Router();
const { User, Category, Technique, History } = require('../../models');
const withAuth = require('../../utils/auth');

// ***GET a random Technique from the Category derived from the Guide Quiz***
// This route is used to return a random meditation technique from the Category derived from the quiz results.
router.get('/:id', async (req, res) => {
    console.log("made it here!");
    try {
      const techniqueData = await Category.findByPk(req.params.id, {
        include: [
          {
            model: Technique,
            attributes: ['id', 'technique_name', 'description'],
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
      
      // Console.log the object keys that should be displayed in the HTML (for developer use) 
      console.log(chosenData.technique_name);
      console.log(chosenData.description);
      console.log(chosenData.id);
      console.log(req.session.logged_in);
  
      // Render the chosenData object to be used in the 'technique.handlebars' template. Include the session flag.
      res.render('technique', {
        ...chosenData,
        logged_in: req.session.logged_in
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });