import { Storage } from './storage'
import { IParams } from './interfaces'

/**
 * Internal storage
 * That uses for all api requests
 */
export const storage = new Storage()

/**
 * Call storage method with given parameters like remote api
 * @param path - Path
 * @param params - Params
 */
export function lasagne(path: string, params?: IParams): Promise<any> {
  return new Promise((resolve, reject) => {
    try {
      return resolve(storage.routes[path](params))
    } catch (err) {
      return reject(err)
    }
  })
}

/**
 * Register layer in internal storage
 * @param key - Layer key
 * @param routes - Routes list
 */
export function registerLayer(key: string, routes: any) {
  storage.addLayer(key, routes)
}

/**
 * Remove layer from internal storage
 * @param key - Layer key
 */
export function deleteLayer(key: string) {
  storage.removeLayer(key)
}
