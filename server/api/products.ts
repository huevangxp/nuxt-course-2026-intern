export default defineEventHandler(async (event) => {
  try {
    const query = getQuery(event)
    const kw = query.kw ?? ''
    const catId = query.catId ?? 0
    const flagId = query.flagId ?? 0
    const brandId = query.brandId ?? 0
    const price = query.price ?? 0
    const skip = query.skip ?? 0
    const count = query.count ?? 24

    const url = `https://api.olaa.la/api/store/products?kw=${encodeURIComponent(kw)}&catId=${catId}&flagId=${flagId}&brandId=${brandId}&price=${price}&skip=${skip}&count=${count}`
    const data = await $fetch(url)
    return data
  } catch (error) {
    console.error('Server proxy error fetching products:', error)
    return []
  }
})
