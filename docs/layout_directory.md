# Pomodoro Timer Application - File Structure and Core Components

## Backend

- **server.js**: This is the main server file that creates the Express application and starts the server.

- **routes/timer.js**: This file defines the routes for timer operations (start, pause, reset).

- **controllers/timerController.js**: This file contains the main logic for timer operations (start, pause, reset).

- **models/timerModel.js**: This file defines the Timer model using SQLite.

## Frontend

- **index.html**: This is the main HTML file which loads the application.

- **css/style.css**: This file contains all the custom CSS styles used in the application.

- **js/timer.js**: This file contains the JavaScript code for managing the timer on the client side.

## Database

- **db/sqlite.js**: This file sets up the SQLite database connection and initializes the Timer model.

## Docker

- **Dockerfile**: This file contains the instructions to build a Docker image for the application.

- **docker-compose.yml**: This file is used to define and run the application's services using Docker Compose.
