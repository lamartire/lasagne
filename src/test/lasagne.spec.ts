import { lasagne, registerLayer, deleteLayer, storage } from '../lasagne'
import { Storage } from '../storage'
import { layer } from './mocks/layer'

describe('Lasagne basic functional', () => {
  test('lasagne: internal storage has instance of Storage', () => {
    expect(storage).toBeInstanceOf(Storage)
  })

  test('lasagne: can add layers from internal storage', () => {
    registerLayer('root', layer)

    expect(Object.keys(storage.routes)).toEqual(['/', '/foo'])
    expect(storage.endpoints).toMatchObject({
      root: ['/', '/foo']
    })
  })

  test('lasagne: call exist route', async () => {
    const res = await lasagne('/')

    expect(res).toMatchObject({
      foo: 'bar'
    })
  })

  test('lasagne: call not exist route', async done => {
    try {
      await lasagne('/404')
    } catch (err) {
      done()
    }
  })

  test('lasagne: call with parameters', async () => {
    const res = await lasagne('/foo', {
      foo: 'bar'
    })

    expect(res).toMatchObject({
      bar: 'baz'
    })
  })

  test('lasagne: call without parameters', async () => {
    const res = await lasagne('/foo')

    expect(res).toBeNull()
  })

  test('lasagne: can remove layers from internal storage', () => {
    deleteLayer('root')

    expect(storage.routes).toMatchObject({})
    expect(storage.endpoints).toMatchObject({})
  })
})
