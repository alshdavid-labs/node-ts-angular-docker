default: build up

build:
	cd .build && docker-compose -f prod.docker-compose.yml build

up:
	cd .build && docker-compose -f prod.docker-compose.yml up

clean:
	cd .build && docker-compose -f prod.docker-compose.yml down --rmi all
	cd .build && docker-compose -f dev.docker-compose.yml down --rmi all
	cd server && rm -rf node_modules
	cd client && rm -rf node_modules

dev: dev-build dev-up

dev-build:
	cd .build && docker-compose -f dev.docker-compose.yml build

dev-up:
	cd .build && docker-compose -f dev.docker-compose.yml up
