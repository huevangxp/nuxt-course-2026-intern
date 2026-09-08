<template>
    <div>
        <!-- Hero Carousel in Modern White & Pink -->
        <v-card flat class="rounded-2xl overflow-hidden elevation-3 mb-8 position-relative border" style="border-color: rgba(255, 42, 133, 0.2) !important;">
            <v-carousel
                :show-arrows="false"
                autoplay
                cycle
                hide-delimiters
                height="380"
                class="overflow-hidden"
            >
                <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src" cover>
                    <!-- Gradient Overlay for Image Contrast -->
                    <div
                        class="fill-height d-flex align-end pa-8"
                        style="background: linear-gradient(180deg, rgba(15, 23, 42, 0) 35%, rgba(15, 23, 42, 0.82) 100%);"
                    >
                        <div class="text-white">
                            <v-chip color="primary" variant="flat" size="small" class="mb-3 font-weight-bold btn-gradient">
                                <v-icon size="14" class="mr-1">mdi-fire</v-icon> ໂປຣໂມຊັນພິເສດ
                            </v-chip>
                            <h3 class="text-h5 text-md-h4 font-weight-black text-white">
                                ສິນຄ້າເທັກໂນໂລຢີ &amp; ແກັບເຈັດສຸດພຣີມຽມທີ່ <span class="text-gradient">HueDev</span>
                            </h3>
                        </div>
                    </div>
                </v-carousel-item>
            </v-carousel>
        </v-card>

        <!-- Store Feature Highlights Bar -->
        <v-row class="mb-8">
            <v-col v-for="(highlight, hIdx) in highlights" :key="hIdx" cols="6" sm="3">
                <v-card flat border class="pa-5 text-center fill-height d-flex flex-column align-center justify-center rounded-2xl hover-lift bg-surface">
                    <v-avatar color="primary" variant="tonal" size="52" class="mb-3 rounded-xl" style="background: rgba(255, 42, 133, 0.1) !important;">
                        <v-icon size="26" color="primary">{{ highlight.icon }}</v-icon>
                    </v-avatar>
                    <div class="text-subtitle-2 font-weight-bold text-grey-darken-4">{{ highlight.title }}</div>
                    <div class="text-caption text-medium-emphasis mt-1">{{ highlight.subtitle }}</div>
                </v-card>
            </v-col>
        </v-row>

        <!-- Main Content: Left Filter + Right Product Grid -->
        <v-row>
            <!-- Left Sidebar: Categories & Brands Filter -->
            <v-col cols="12" md="3">
                <!-- Filter Card -->
                <v-card flat border class="overflow-hidden mb-6 rounded-2xl bg-surface">
                    <v-card-item class="btn-gradient text-white py-4 px-5">
                        <template v-slot:prepend>
                            <v-icon size="24" class="mr-2">mdi-filter-variant</v-icon>
                        </template>
                        <v-card-title class="text-subtitle-1 font-weight-bold text-white">
                            ຕົວຕອງສິນຄ້າ (Filters)
                        </v-card-title>
                    </v-card-item>

                    <!-- Category Selection List -->
                    <div class="pa-4 pb-2 font-weight-bold text-caption text-uppercase text-medium-emphasis d-flex align-center">
                        <v-icon size="16" class="mr-1 text-primary">mdi-shape-outline</v-icon> ໝວດໝູ່ສິນຄ້າ (Categories)
                    </div>

                    <v-list density="compact" nav class="px-3 pt-0 pb-2 bg-surface">
                        <v-list-item
                            v-for="cat in categories"
                            :key="cat.id"
                            :active="selectedCatId === cat.id"
                            color="primary"
                            variant="flat"
                            class="mb-1 rounded-xl font-weight-medium"
                            @click="selectCategory(cat.id, cat.name)"
                        >
                            <template v-slot:prepend>
                                <v-icon size="18" class="mr-2" :color="selectedCatId === cat.id ? 'primary' : 'grey-darken-1'">
                                    {{ cat.icon }}
                                </v-icon>
                            </template>
                            <v-list-item-title class="font-weight-medium text-body-2">
                                {{ cat.name }}
                            </v-list-item-title>
                        </v-list-item>
                    </v-list>

                    <v-divider class="my-2 border-opacity-50" />

                    <!-- Brand Selection Section -->
                    <div class="pa-4 pb-2 font-weight-bold text-caption text-uppercase text-medium-emphasis d-flex align-center">
                        <v-icon size="16" class="mr-1 text-primary">mdi-tag-outline</v-icon> ແບຣນສິນຄ້າ (Brands)
                    </div>

                    <!-- Search Brand Input -->
                    <div class="px-3 pb-2">
                        <v-text-field
                            v-model="brandSearch"
                            placeholder="ຄົ້ນຫາແບຣນ..."
                            density="compact"
                            variant="outlined"
                            prepend-inner-icon="mdi-magnify"
                            hide-details
                            clearable
                            class="rounded-xl"
                            bg-color="surface"
                        />
                    </div>

                    <!-- Loading Brands -->
                    <div v-if="loadingBrands" class="text-center py-6">
                        <v-progress-circular indeterminate color="primary" size="32" />
                    </div>

                    <!-- Brand List -->
                    <v-list v-else density="comfortable" nav class="px-3 pb-3 overflow-y-auto bg-surface" style="max-height: 380px;">
                        <!-- All Brands Option -->
                        <v-list-item
                            :active="selectedBrandId === 0"
                            color="primary"
                            variant="flat"
                            class="mb-1 rounded-xl font-weight-bold"
                            @click="selectBrand(0, 'ທັງໝົດ (All Brands)')"
                        >
                            <template v-slot:prepend>
                                <v-avatar color="primary" variant="tonal" size="28" class="mr-2 rounded-lg">
                                    <v-icon size="16" color="primary">mdi-apps</v-icon>
                                </v-avatar>
                            </template>
                            <v-list-item-title class="font-weight-bold text-body-2">
                                ແບຣນທັງໝົດ
                            </v-list-item-title>
                        </v-list-item>

                        <!-- Dynamic Brand Items -->
                        <v-list-item
                            v-for="brand in filteredBrands"
                            :key="brand.refBrandId"
                            :active="selectedBrandId === brand.refBrandId"
                            color="primary"
                            variant="flat"
                            class="mb-1 rounded-xl text-grey-darken-3"
                            @click="selectBrand(brand.refBrandId, brand.name)"
                        >
                            <template v-slot:prepend>
                                <v-avatar color="grey-lighten-4" size="28" class="mr-2 rounded-lg border">
                                    <v-img
                                        v-if="brand.logoUrl"
                                        :src="'https://api.olaa.la/files/' + brand.logoUrl"
                                        contain
                                    />
                                    <v-icon v-else size="16" color="primary">mdi-tag-outline</v-icon>
                                </v-avatar>
                            </template>
                            <v-list-item-title class="font-weight-medium text-body-2">
                                {{ brand.name }}
                            </v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-card>
            </v-col>

            <!-- Right Main: Products Grid -->
            <v-col cols="12" md="9">
                <!-- Top Toolbar & Product Search -->
                <v-card flat border class="pa-4 mb-6 rounded-2xl bg-surface">
                    <v-row align="center" justify="space-between" class="ga-2">
                        <v-col cols="12" sm="auto">
                            <div class="d-flex align-center ga-3">
                                <div class="brand-avatar d-flex align-center justify-center" style="width: 44px; height: 44px;">
                                    <v-icon size="22" color="white">mdi-shopping-outline</v-icon>
                                </div>
                                <div>
                                    <h2 class="text-subtitle-1 font-weight-bold text-grey-darken-4 mb-0">
                                        {{ selectedCatName }}
                                    </h2>
                                    <div class="d-flex align-center ga-2 mt-1">
                                        <v-chip size="x-small" color="primary" variant="tonal" class="font-weight-bold">
                                            {{ selectedBrandName }}
                                        </v-chip>
                                        <span class="text-caption text-medium-emphasis">
                                            ພົບ {{ displayedProducts.length }} ລາຍການ
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </v-col>

                        <!-- Image Filter Toggle & Search Input -->
                        <v-col cols="12" sm="auto" class="d-flex align-center flex-wrap ga-3">
                            <v-switch
                                v-model="onlyWithImages"
                                color="primary"
                                hide-details
                                density="compact"
                                label="ສະແດງສະເພາະທີ່ມີຮູບ"
                                class="font-weight-semibold text-body-2 text-grey-darken-3"
                            />

                            <v-text-field
                                v-model="productSearch"
                                placeholder="ຄົ້ນຫາສິນຄ້າ..."
                                density="compact"
                                variant="outlined"
                                prepend-inner-icon="mdi-magnify"
                                hide-details
                                clearable
                                style="min-width: 230px;"
                                class="rounded-pill"
                                bg-color="surface"
                                @update:model-value="onSearchProduct"
                            />
                        </v-col>
                    </v-row>
                </v-card>

                <!-- Loading Products State -->
                <div v-if="loadingProducts && products.length === 0" class="text-center py-16">
                    <v-progress-circular indeterminate color="primary" size="64" width="6" />
                    <div class="mt-4 text-subtitle-1 font-weight-bold text-medium-emphasis">
                        ກຳລັງໂຫຼດຂໍ້ມູນສິນຄ້າ...
                    </div>
                </div>

                <!-- No Products Found -->
                <v-card v-else-if="displayedProducts.length === 0" flat border class="pa-16 text-center rounded-2xl bg-surface">
                    <v-avatar color="primary" variant="tonal" size="80" class="mb-4">
                        <v-icon size="42" color="primary">mdi-package-variant-remove</v-icon>
                    </v-avatar>
                    <h3 class="text-h6 font-weight-bold text-grey-darken-4">ບໍ່ພົບສິນຄ້າທີ່ກົງກັບເງື່ອນໄຂ</h3>
                    <p class="text-body-2 text-medium-emphasis mb-6">ກະລຸນາລອງເລືອກໝວດໝູ່ ຫຼື ແບຣນອື່ນ</p>
                    <v-btn variant="flat" class="text-none font-weight-bold btn-gradient rounded-pill px-8" @click="resetFilters">
                        ລ້າງຕົວຕອງທັງໝົດ
                    </v-btn>
                </v-card>

                <!-- Products Grid -->
                <div v-else>
                    <v-row>
                        <v-col
                            v-for="product in displayedProducts"
                            :key="product.productId"
                            cols="12"
                            sm="6"
                            md="4"
                        >
                            <v-card flat border class="fill-height d-flex flex-column overflow-hidden rounded-2xl hover-lift bg-surface">
                                <!-- Product Image Area with Zoom & Click Preview -->
                                <div class="position-relative overflow-hidden cursor-pointer img-zoom-wrapper" @click="openImageModal(product)">
                                    <v-img
                                        :src="getProductImageUrl(product)"
                                        height="230"
                                        cover
                                        class="bg-grey-lighten-4 align-start"
                                        @error="onImageError(product.productId)"
                                    >
                                        <!-- Loading Placeholder -->
                                        <template v-slot:placeholder>
                                            <div class="d-flex align-center justify-center fill-height">
                                                <v-progress-circular indeterminate color="primary" size="28" />
                                            </div>
                                        </template>

                                        <!-- Error Fallback -->
                                        <template v-slot:error>
                                            <div class="d-flex flex-column align-center justify-center fill-height bg-grey-lighten-4">
                                                <v-img src="/images/placeholder-product.svg" height="230" contain />
                                            </div>
                                        </template>

                                        <!-- Deals / New Chip -->
                                        <v-chip
                                            v-if="product.dealsFlag"
                                            color="primary"
                                            size="x-small"
                                            class="ma-3 font-weight-bold btn-gradient elevation-2"
                                        >
                                            {{ product.dealsFlag }}
                                        </v-chip>

                                        <!-- Quick Preview Magnifier Button -->
                                        <div class="position-absolute" style="bottom: 10px; right: 10px;">
                                            <v-avatar size="32" color="surface" class="elevation-2 border">
                                                <v-icon size="18" color="primary">mdi-magnify-plus-outline</v-icon>
                                            </v-avatar>
                                        </div>
                                    </v-img>
                                </div>

                                <v-card-title class="font-weight-bold px-4 pt-3 pb-1 text-truncate text-grey-darken-4" style="font-size: 15px;">
                                    {{ product.productTitle }}
                                </v-card-title>

                                <v-card-text class="px-4 pb-2 flex-grow-1" style="font-size: 12px;">
                                    <div class="d-flex align-center ga-1">
                                        <v-icon size="14" :color="product.hasStock ? 'success' : 'grey'">
                                            {{ product.hasStock ? 'mdi-check-circle' : 'mdi-alert-circle' }}
                                        </v-icon>
                                        <span :class="product.hasStock ? 'text-success font-weight-medium' : 'text-medium-emphasis'">
                                            {{ product.hasStock ? 'ມີສິນຄ້າພ້ອມສົ່ງ' : 'ສິນຄ້າໝົດຊົ່ວຄາວ' }}
                                        </span>
                                    </div>
                                </v-card-text>

                                <v-card-actions class="px-4 pb-4 pt-1 d-flex align-center justify-space-between">
                                    <div>
                                        <div class="text-caption text-medium-emphasis" style="font-size: 10px;">ລາຄາ</div>
                                        <span class="text-h6 font-weight-black text-primary" style="letter-spacing: -0.5px;">
                                            ₭{{ product.price ? product.price.toLocaleString() : '0' }}
                                        </span>
                                    </div>
                                    <v-btn
                                        variant="flat"
                                        size="small"
                                        class="text-none font-weight-bold rounded-pill btn-gradient px-4"
                                        @click.stop="openImageModal(product)"
                                    >
                                        ສັ່ງຊື້ / ເບິ່ງຮູບ
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-col>
                    </v-row>

                    <!-- Load More Button -->
                    <div class="text-center mt-10 mb-4">
                        <v-btn
                            v-if="hasMoreProducts"
                            variant="outlined"
                            size="large"
                            :loading="loadingMore"
                            prepend-icon="mdi-plus"
                            class="text-none font-weight-bold px-8 rounded-pill btn-pink-outline"
                            @click="loadMoreProducts"
                        >
                            ໂຫຼດສິນຄ້າເພີ່ມເຕີມ
                        </v-btn>
                    </div>
                </div>
            </v-col>
        </v-row>

        <!-- Product Image & Detail Preview Modal -->
        <v-dialog v-model="previewDialog" max-width="560">
            <v-card v-if="selectedProduct" class="rounded-2xl overflow-hidden elevation-16 bg-surface">
                <v-card-title class="d-flex justify-space-between align-center pa-4 bg-grey-lighten-5 border-b">
                    <div class="text-subtitle-1 font-weight-bold text-truncate text-grey-darken-4" style="max-width: 85%;">
                        {{ selectedProduct.productTitle }}
                    </div>
                    <v-btn icon="mdi-close" variant="text" size="small" @click="previewDialog = false" />
                </v-card-title>

                <div class="pa-5 bg-surface text-center">
                    <v-img
                        :src="getProductImageUrl(selectedProduct)"
                        height="360"
                        contain
                        class="rounded-xl bg-grey-lighten-5 border"
                    >
                        <template v-slot:placeholder>
                            <div class="d-flex align-center justify-center fill-height">
                                <v-progress-circular indeterminate color="primary" size="40" />
                            </div>
                        </template>
                    </v-img>

                    <div class="mt-5 d-flex justify-space-between align-center">
                        <div class="text-left">
                            <div class="text-caption text-medium-emphasis">ລາຄາສິນຄ້າ</div>
                            <div class="text-h5 font-weight-black text-primary">
                                ₭{{ selectedProduct.price ? selectedProduct.price.toLocaleString() : '0' }}
                            </div>
                            <div class="text-caption" :class="selectedProduct.hasStock ? 'text-success font-weight-bold' : 'text-grey'">
                                {{ selectedProduct.hasStock ? '✓ ມີສິນຄ້າໃນສະຕ໊ອກ' : '✗ ສິນຄ້າໝົດຊົ່ວຄາວ' }}
                            </div>
                        </div>
                        <v-btn variant="flat" size="large" prepend-icon="mdi-cart" class="font-weight-bold text-none rounded-pill btn-gradient px-6">
                            ຊື້ດຽວນີ້
                        </v-btn>
                    </div>
                </div>
            </v-card>
        </v-dialog>
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

const items = [
    { src: './images/slice1.jpg' },
    { src: './images/slice2.jpg' }
]

const highlights = [
    { icon: 'mdi-truck-fast-outline', title: 'ຈັດສົ່ງໄວທົ່ວປະເທດ', subtitle: 'ສົ່ງເຖິງທີ່ຢ່າງປອດໄພ' },
    { icon: 'mdi-shield-check-outline', title: 'ຂອງແທ້ 100%', subtitle: 'ປະກັນສູນຢ່າງເປັນທາງການ' },
    { icon: 'mdi-credit-card-outline', title: 'ບໍລິການຜ່ອນ 0%', subtitle: 'ເງື່ອນໄຂງ່າຍ ອະນຸມັດໄວ' },
    { icon: 'mdi-headset', title: 'ບໍລິການ 24/7', subtitle: 'ທີມງານຄອຍໃຫ້ຄຳປຶກສາ' }
]

// Accurate categories matching database
const categories = [
    { id: 0, name: 'ໝວດໝູ່ທັງໝົດ (All)', icon: 'mdi-apps' },
    { id: 10, name: 'ພາຫະນະໄຟຟ້າ & ລົດ (EV & Motors)', icon: 'mdi-motorbike' },
    { id: 8, name: 'ອຸປະກອນອີເລັກໂທຣນິກ (Electronics)', icon: 'mdi-cellphone' },
    { id: 3, name: 'ເຄື່ອງໃຊ້ໄຟຟ້າ (Appliances)', icon: 'mdi-washing-machine' },
    { id: 6, name: 'ຄອມພິວເຕີ (Hardware & Mining)', icon: 'mdi-laptop' },
    { id: 14, name: 'ເຄື່ອງແຕ່ງກາຍ & ກະເປົ໋າ (Bags)', icon: 'mdi-bag-personal' }
]

const brands = ref([])
const products = ref([])
const loadingBrands = ref(true)
const loadingProducts = ref(true)
const loadingMore = ref(false)
const hasMoreProducts = ref(true)

const brandSearch = ref('')
const productSearch = ref('')
const selectedCatId = ref(0)
const selectedCatName = ref('ທັງໝົດ')
const selectedBrandId = ref(0)
const selectedBrandName = ref('ທັງໝົດ')
const skipCount = ref(0)
const pageSize = 24

// Image handling states
const failedImages = ref(new Set())
const onlyWithImages = ref(false)
const previewDialog = ref(false)
const selectedProduct = ref(null)

const getProductImageUrl = (product) => {
    if (!product) return '/images/placeholder-product.svg'
    if (failedImages.value.has(product.productId)) {
        return '/images/placeholder-product.svg'
    }
    if (!product.productImageUrl || !product.productImageUrl.trim()) {
        return '/images/placeholder-product.svg'
    }
    return `https://api.olaa.la/files/${encodeURI(product.productImageUrl.trim())}`
}

const onImageError = (productId) => {
    failedImages.value.add(productId)
}

const openImageModal = (product) => {
    selectedProduct.value = product
    previewDialog.value = true
}

const displayedProducts = computed(() => {
    if (onlyWithImages.value) {
        return products.value.filter(p => p.productImageUrl && p.productImageUrl.trim() !== '' && !failedImages.value.has(p.productId))
    }
    return products.value
})

const filteredBrands = computed(() => {
    if (!brandSearch.value) return brands.value
    return brands.value.filter(b =>
        b.name.toLowerCase().includes(brandSearch.value.toLowerCase())
    )
})

const loadBrands = async () => {
    try {
        loadingBrands.value = true
        const response = await $fetch('/api/brands')
        brands.value = response
    } catch (error) {
        console.error('Error loading brands:', error)
    } finally {
        loadingBrands.value = false
    }
}

const loadProducts = async (isAppend = false) => {
    try {
        if (isAppend) {
            loadingMore.value = true
        } else {
            loadingProducts.value = true
            skipCount.value = 0
        }

        const response = await $fetch('/api/products', {
            params: {
                kw: productSearch.value || '',
                catId: selectedCatId.value,
                flagId: 0,
                brandId: selectedBrandId.value,
                price: 0,
                skip: skipCount.value,
                count: pageSize
            }
        })

        if (isAppend) {
            products.value = [...products.value, ...response]
        } else {
            products.value = response
        }

        if (!response || response.length < pageSize) {
            hasMoreProducts.value = false
        } else {
            hasMoreProducts.value = true
        }
    } catch (error) {
        console.error('Error loading products:', error)
    } finally {
        loadingProducts.value = false
        loadingMore.value = false
    }
}

const selectCategory = (catId, catName) => {
    selectedCatId.value = catId
    selectedCatName.value = catName
    loadProducts()
}

const selectBrand = (brandId, brandName) => {
    selectedBrandId.value = brandId
    selectedBrandName.value = brandName
    loadProducts()
}

const onSearchProduct = () => {
    loadProducts()
}

const loadMoreProducts = () => {
    skipCount.value += pageSize
    loadProducts(true)
}

const resetFilters = () => {
    selectedCatId.value = 0
    selectedCatName.value = 'ທັງໝົດ'
    selectedBrandId.value = 0
    selectedBrandName.value = 'ທັງໝົດ'
    productSearch.value = ''
    brandSearch.value = ''
    onlyWithImages.value = false
    loadProducts()
}

onMounted(() => {
    loadBrands()
    loadProducts()
})
</script>

<style scoped>
.brand-avatar {
  border-radius: 12px;
  background: linear-gradient(135deg, #FF2A85 0%, #FF52A2 100%);
  box-shadow: 0 4px 16px rgba(255, 42, 133, 0.4);
}
</style>