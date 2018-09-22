# Node + Typescript, Angular and Docker

This is a basic web server and client starter project.<br>
It includes Node with Typescript and an Angular project generated from the CLI.<br>
The development and production environment is inside Docker.<br>

## Production

To build the production image, run the following command:

```
make
```

<br>

## Development

You can develop this from within docker.<br>
The supplied docker-compose scripts mount the source code as a volume within the container.<br>
This enables you to edit your source locally and have it recompile live within the container.

Dependencies are only pulled the first time you launch the development container,<br>
after which, you will only need to install dependencies when you add new ones.

To run the docker development image use the following:
```
make dev
```

<br>

## Debugging

VSCode can attach to the express server running within the container, all you have to do is hit `F5` or the debug button on the activity bar.

<br>

## Platform dependencies

This works on

- Windows
- MacOS
- Linux

And it depends on

- Docker
- Docker Compose
- Make

Be sure to install make for windows if you don't have it

```
http://gnuwin32.sourceforge.net/packages/make.htm
```

On Ubuntu you may need to 

```
apt-get install make
```

You'll need `docker` and `docker-compose`

<br>

## Got-yas

Due to how the Docker hypervisor mounts volumes on Windows, it has poor performance during the dependency installation, however performance-related issues are minimal once up and running.

If you wish to update or change a dependency, remove the corresponding node_modules folder in the source folder. This will trigger a re-installation the next time the container is launched.
