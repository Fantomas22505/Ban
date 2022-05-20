const express = require('express');
const router = express.Router();
const {Team}=require('../models');

/* GET home page. */
router.get('/', async function(req, res, next) {
  const teams = await Team.findAll();
  console.log(teams);
  res.render('index', { title: 'Team:pan', teams });
});

router.get('/players/:idTeam', async function(req, res, next) {
  const idTeam = req.params.idTeam;
  const team = await Team.findByPk(idTeam);
  const players = await Player.findAll({teamId:idTeam})

  console.log(players);
  res.render('players', { title: 'Team:pan', team, players });
});


module.exports = router;
