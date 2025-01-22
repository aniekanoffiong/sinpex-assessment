# Sinpex Assessment (Mono-repo)

This is a mono-repo containing the implementation for the Sinpex assessment. The `frontend` folder contains the frontend implementation using Vue.js and the backend implementation is contained in `api` folder, utilizing Nest.js.

## To run the project
- cd into both the api and frontend folders and run the install command `cd api`; `npm install or yarn`; `cd ../frontend`; `npm install or yarn`
- Run docker compose to install database (required docker to be installed on PC) - `docker-compose up -d`
- Copy .env.example in api folder into .env - `cd api`; `cp .env.example .env`
- Run the project from the root directory - `yarn dev`. It uses the concurrently package to run both the frontend and backend together
