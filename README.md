<h1>Remixml embedded script tag loader</h1>

[![NPM version](http://img.shields.io/npm/v/remixml-embed.svg?style=flat)](https://npmjs.org/package/remixml-embed)
[![Downloads](https://img.shields.io/npm/dm/remixml-embed.svg?style=flat)](https://npmjs.org/package/remixml-embed)
[![Rate on Openbase](https://badges.openbase.io/js/rating/remixml-embed.svg)](https://openbase.io/js/remixml-embed?utm_source=embedded&utm_medium=badge&utm_campaign=rate-badge)

Remixml component that loads all embedded `<script type="text/remixml">`
tags present in the DOM.

## Basic usage

```js
  var wholedocument = document.head.parentNode;
  var vrs = {};
  Remixmlembed.loadscripts(wholedocument, vrs);
```

## Requirements

It runs inside any webbrowser.

## Reference documentation

- `Remixmlembed.loadscripts(node, args)`<br />

- `Remixmlembed.loadscript(node, args)`<br />

- `Remixmlembed.fetchfile(url)`<br />

## References

- Postprocessor for the high performance Javascript templating engine
  [Remixml](http://remixml.org/).
- Compatible with the
  fastest [lockandload AMD-loader](https://www.npmjs.com/package/lockandload).

Card-carrying member of the `zerodeps` movement.
