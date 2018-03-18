export const layer = {
  '/': () => ({
    foo: 'bar'
  }),
  '/foo': (params: any) => {
    if (params) {
      return {
        bar: 'baz'
      }
    }

    return null
  }
}
