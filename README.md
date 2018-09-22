# Node + Typescript, Angular and Docker

This is a basic starter project that wraps Node with Typescript and a basic Angular project inside docker.

This uses docker for both development and production.

Building and running for production using the following command:

```
make
```

<br>

Run development mode using the following:
```
make dev
```

Live reload works for both Angular and Node

Node debugging (mapped) works inside vscode with Typescript 

<br>

Be sure to install make for windows if you don't have it

```
http://gnuwin32.sourceforge.net/packages/make.htm
```

On Ubuntu you may need to 

```
apt-get install make
```

You'll need `docker` and `docker-compose`
