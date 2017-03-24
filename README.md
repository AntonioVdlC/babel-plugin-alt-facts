# babel-plugin-alt-facts

Just a babel plugin built for fun!

## Example

**In**

```js
// input code
```

**Out**

```js
"use strict";

// output code
```

## Installation

```sh
$ npm install babel-plugin-alt-facts
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "plugins": ["alt-facts"]
}
```

### Via CLI

```sh
$ babel --plugins alt-facts script.js
```

### Via Node API

```javascript
require("babel-core").transform("code", {
  plugins: ["alt-facts"]
});
```
