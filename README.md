# Lasagne [![Build Status](https://travis-ci.org/lamartire/lasagne.svg?branch=master)](https://travis-ci.org/lamartire/lasagne)

> Easy way to mock api locally

## Core concept

Lasagne was created for make work without api more standartized and allow to make easy switch
between remote api and local api layers.

```js
import { lasagne, registerLayer } from 'lasagne'

const root = {
  '/': () => ({ foo: 'bar' }),
  '/item': ({ id }) => {
    return localStorage.getItem(`test-storage-${id}`)
  }
}

registerLayer('root', root)

;(async () => {
  const res = await lasagne('/') // { foo: bar }
  const item = await lasagne('/item', { id: 1 }) // ...
})
```

Then we can replace `lasagne` with `fetch` or something else to work with remote api layer.

## Roadmap

- [ ] Make allow to mock `fetch` and other libs for more flexability
