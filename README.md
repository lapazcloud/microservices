# Microservices App

Build all containers:

    $ docker-compose build

## Database startup
Launch postgres:

    $ docker-compose up -d db

Generate and make DB migrations

    $ docker-compose run --rm api python manage.py makemigrations
    $ docker-compose run --rm api python manage.py migrate

## API
Run the API:

    $ docker-compose up -d api

Go to http://localhost:5000/admin and login with the super user create on a previous step.

Find the Members section and add a couple of people to save information to the database.

## UI
Run the UI:

    $ docker-compose up -d ui

Open http://localhost:8000/ to start browsing through the Angular App.

## Logs
Open logs:

    $ docker-compose logs -f

## That's it
And now you are ready to do some development.
