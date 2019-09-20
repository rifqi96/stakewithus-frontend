# StakeWithUs
> StakeWith.Us Block Explorer - Frontend

### Getting Started
- Please install docker and docker-compose first if they're not installed on your machine. [Click here](https://www.docker.com/get-started) !
- The main app source files are under *src/* folder.

### To Build
```bash
$ ./start.sh build
```
*It is recommended to build on first time. It will build all the containers, and create an environment file if it doesn't exist.*

### To Run
```bash
$ ./start.sh
```

### Shut Down
```bash
$ ./stop.sh
```

### How-To`s
- Access the app from http://localhost
- It opens port 80 once it is run. Hence, please make sure you don't have anything runs on those ports. However, you can change the exposed ports from *docker-compose.yml*.

Thank you!

*(P.S. Please check out [Docker documentation](https://www.docker.com/get-started) to figure out more how it works)*