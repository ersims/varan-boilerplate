# Varan boilerplate

A fully fledged offline-first PWA boilerplate for React and TypeScript with server side rendering using [varan](https://github.com/ersims/varan).

Note that these badges are set up for the [source boilerplate master branch](https://github.com/ersims/varan-boilerplate/tree/master) and will not be correct in your own fork of the boilerplate.

[![CircleCI][circleci-image]][circleci-url]
[![Codecov branch][codecov-image]][codecov-url]
[![David][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![renovate-app badge][renovate-image]][renovate-url]
[![Conventional Commits][conventional-commits-image]][conventional-commits-url]
[![license][license-image]][license-url]

## Usage

### Development

Start a development server with hot reloading

```bash
npm run start:watch
```

### Production

Build a production build

```bash
npm run build
```

Start the production server

```bash
npm start
```

## How to deploy

### Heroku

Add the following npm script in your `package.json` and push code to heroku as normal using git.

```
"heroku-postbuild": "npm install --only=dev && npm run build && npm prune --production"
```

## Customize build

### Browser support

This project uses [browserslist](https://github.com/browserslist/browserslist). By default the browser support list is defined in the `package.json` file, but you can use a `.browserlistrc` file if you prefer.

### Webpack

You can create or bring your own webpack configuration files, though it is recommended to extend the default `varan` webpack configurations to take advantage of useful defaults and optimizations. See [varan documentation](https://github.com/ersims/varan) for more information.

### License

[MIT](LICENSE.md)

[circleci-url]: https://circleci.com/gh/ersims/varan-boilerplate/tree/master
[circleci-image]: https://img.shields.io/circleci/project/github/ersims/varan-boilerplate/master.svg
[codecov-url]: https://codecov.io/gh/ersims/varan-boilerplate/tree/master
[codecov-image]: https://img.shields.io/codecov/c/github/ersims/varan-boilerplate/master.svg
[david-url]: https://david-dm.org/ersims/varan-boilerplate/master
[david-image]: https://img.shields.io/david/ersims/varan-boilerplate.svg
[snyk-url]: https://snyk.io/test/github/ersims/varan-boilerplate/master
[snyk-image]: https://snyk.io/test/github/ersims/varan-boilerplate/master/badge.svg
[renovate-url]: https://renovateapp.com/
[renovate-image]: https://img.shields.io/badge/renovate-app-blue.svg
[conventional-commits-image]: https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg
[conventional-commits-url]: https://conventionalcommits.org/
[license-url]: https://github.com/ersims/varan-boilerplate/blob/master/LICENSE.md
[license-image]: https://img.shields.io/github/license/ersims/varan-boilerplate.svg
