.PHONY: all install build start dev test test-coverage lint clean

all: install build

install:
	npm install

build:
	npm run build

start:
	npm start

dev:
	npm run dev

test:
	npm test

test-coverage:
	npm run test:coverage

lint:
	npm run lint

clean:
	rimraf dist backend/dist frontend/chess-client/dist coverage
