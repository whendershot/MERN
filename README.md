Need to copy the source files into a docker volume manually.

Example from https://stackoverflow.com/questions/37468788/what-is-the-right-way-to-add-data-to-an-existing-named-volume-in-docker

```
docker run -v my-jenkins-volume:/data --name helper busybox true \n
docker cp . helper:/data
docker rm helper
```

Use these commands in the downloaded root directory to setup the docker volume for the this project.

```
docker run -v mern_code:/data --name helper busybox true
docker cp . helper:/data
docker rm helper
```

Then run command docker-compose.

```
docker-compose up -d
```