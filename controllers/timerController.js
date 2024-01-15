const Timer = require('../models/timerModel');

exports.start = (req, res) => {
  Timer.start();
  res.status(200).send('Timer started');
};

exports.pause = (req, res) => {
  Timer.pause();
  res.status(200).send('Timer paused');
};

exports.reset = (req, res) => {
  Timer.reset();
  res.status(200).send('Timer reset');
};
