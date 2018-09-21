default: build up

build:
	cd .build && docker-compose -f docker-compose.prod.yml build

up:
	cd .build && docker-compose -f docker-compose.prod.yml up

clean:
	cd .build && docker-compose -f docker-compose.prod.yml down --rmi all

dev: dev-build dev-up

dev-build:
	cd .build && docker-compose -f docker-compose.dev.yml build

dev-up:
	cd .build && docker-compose -f docker-compose.dev.yml up
