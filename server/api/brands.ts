export default defineEventHandler(async () => {
  try {
    const data = await $fetch('https://api.olaa.la/v1/api/purchasing/reference/brands/load-brand?skip=0&count=0&status=1')
    return data
  } catch (error) {
    console.error('Server proxy error fetching brands:', error)
    return []
  }
})
