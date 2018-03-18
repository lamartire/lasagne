import { IEndpoints, ILayer } from './interfaces'

export class Storage {
  endpoints: IEndpoints = {}
  routes: ILayer = {}

  /**
   * Add layer to storage
   * @param key - Layer key
   * @param routes - Layer routes
   */
  addLayer(key: string, routes: ILayer) {
    this.endpoints[key] = Object.keys(routes)
    this.routes = { ...routes }
  }

  /**
   * Remove layer from storage
   * @param key - Layer key
   */
  removeLayer(key: string) {
    const routes = this.endpoints[key]

    routes.forEach((route: string) => {
      delete this.routes[route]
    })

    delete this.endpoints[key]
  }
}
