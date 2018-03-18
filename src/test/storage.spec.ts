import { Storage } from '../storage'
import { layer } from './mocks/layer'

describe('Storage functional', () => {
  const storage = new Storage()

  test('storage: add layers', () => {
    storage.addLayer('root', layer)

    expect(storage.endpoints).toMatchObject({
      root: ['/', '/foo']
    })
    expect(Object.keys(storage.routes)).toEqual(['/', '/foo'])
  })

  test('storage: remove layers', () => {
    storage.removeLayer('root')

    expect(storage.endpoints).toMatchObject({})
    expect(storage.routes).toMatchObject({})
  })
})
