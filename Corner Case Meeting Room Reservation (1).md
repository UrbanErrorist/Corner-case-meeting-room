# Corner Case Meeting Room Reservation App
# (Marzipan)


Marzipan, a meeting room reservation app, created for corner case technologies. This app is developed with Django and Python3, Django Rest Framework, and React.js.


## Installation


```sh
git clone https://github.com/UrbanErrorist/Corner-case-meeting-room.git
cd Corner-case-meeting-room
sudo pip3 install virtualenv
virtualenv venvname
source venvname/bin/activate
cd src
pip3 install -r requirements.txt
```

I have included several tests. To test or run server use following command...

```sh
python manage.py test
python manage.py runserver
```

## Plugins

Dillinger is currently extended with the following plugins.
Instructions on how to use them in your own application are linked below.



## Features

- Several automated tests are included for the Django project.
- PEP8 rules are followed
- React.js was used for the frontend
- API Endpoints are created for user login/signup, manage rooms, timeslots, bookings
- Swagger UI was used for the API Documentation



## Docker

Marzipan can be easily to install and deploy in a Docker container.

By default, the Docker will expose port 8080, so change this within the
Dockerfile if necessary. Dockerfile can be used to build the image.

```sh
cd dillinger
docker build -t <youruser>/dillinger:${package.json.version} .
```

This will create the dillinger image and pull in the necessary dependencies.
Be sure to swap out `${package.json.version}` with the actual
version of Dillinger.

Once done, run the Docker image and map the port to whatever you wish on
your host. In this example, we simply map port 8000 of the host to
port 8080 of the Docker (or whatever port was exposed in the Dockerfile):

```sh
docker run -d -p 8000:8080 --restart=always --cap-add=SYS_ADMIN --name=dillinger <youruser>/dillinger:${package.json.version}
```

> Note: `--capt-add=SYS-ADMIN` is required for PDF rendering.

Verify the deployment by navigating to your server address in
your preferred browser.

```sh
127.0.0.1:8000
```
