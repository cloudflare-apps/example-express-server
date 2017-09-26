# simple-json-fetch

> whatwg fetch(), wrapped and enhanced for JSON response.

## Install

**This module has no dependencies, so be sure to get your own fetch() polyfill if needed**
(eg: [whatwg-fetch](https://www.npmjs.com/package/whatwg-fetch)).

```console
$ npm i -S simple-json-fetch [whatwg-fetch]
```

## Usage

Use this module exactly like [fetch()](https://www.npmjs.com/package/whatwg-fetch),
with this in mind:

- promise will be resolved only if http code is between 200~300 AND response
  is valid json
- otherwise promise is rejected
  - http code >= 300
  - json is invalid

```js
import "whatwg-fetch"
import jsonFetch from "simple-json-fetch"

jsonFetch(url, { /* ... */})
.then(
  // in both "resolve" or "reject" callback, you will get the original
  // response (with fields like .status, .statusText...)

  // json is correct and http code is in the 2xx range
  // resolved response got a json property which is the js object
  (response) => {
    response.json
    // json property is an object here, not a method that return
    // a promise that resolve with an object (that the point of this module)
  },
  // json is malformed or http code is NOT in the 2xx range
  // rejected response got an error property, which is the error thrown if any
  (response) => {
    response.error
    // the error thrown (eg: during parsing of the json)
  }
)
```

## Warning

No automated tests because I am pushing this snippet I am using for one or two
years at midnight.
Feel free to add some :)

---

## CONTRIBUTING

* ⇄ Pull requests and ★ Stars are always welcome.
* For bugs and feature requests, please create an issue.
* Pull requests must be accompanied by passing automated tests (`$ npm test`).

## [CHANGELOG](CHANGELOG.md)

## [LICENSE](LICENSE)
