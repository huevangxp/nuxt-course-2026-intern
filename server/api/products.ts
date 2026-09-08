export default defineEventHandler(async (event) => {
  try {
    const query = getQuery(event)
    const kw = String(query.kw ?? '')
    const catId = query.catId ?? 0
    const flagId = query.flagId ?? 0
    const brandId = query.brandId ?? 0
    const price = query.price ?? 0
    const skip = query.skip ?? 0
    const count = query.count ?? 24

    const url = `https://api.olaa.la/api/store/products?kw=${encodeURIComponent(kw)}&catId=${Number(catId)}&flagId=${Number(flagId)}&brandId=${Number(brandId)}&price=${Number(price)}&skip=${Number(skip)}&count=${Number(count)}`
    const data = await $fetch(url)
    return data
  } catch (error) {
    console.error('Server proxy error fetching products:', error)
    return []
  }
})

