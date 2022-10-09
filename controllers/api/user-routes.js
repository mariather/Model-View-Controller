const router = require('express').Router();
const { User } = require('../../models');

// creates the new user
router.post('/', async (req, res) => {
  try {
    const dbUserData = await User.create({
      username: req.body.username,
      password: req.body.password,
    });
    const user = dbUserData.get({ plain: true })

    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.user_id = user.id;
      res.status(200).json(user);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// add Login
// add Logout