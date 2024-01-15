const express = require('express');
const timerRouter = require('./routes/timer');
const sqlite = require('./db/sqlite');

const app = express();
const port = 3000;

app.use('/timer', timerRouter);

app.listen(port, () => {
  console.log(`Pomodoro timer app listening at http://localhost:${port}`);
});
