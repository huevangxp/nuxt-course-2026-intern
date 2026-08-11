<template>
    <div>
        <!-- Modern Carousel -->
        <v-carousel :show-arrows="false" autoplay cycle hide-delimiters height="380" elevation="2"
            class="overflow-hidden mb-6">
            <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src" cover />
        </v-carousel>

        <!-- Store Feature Highlights Bar (olaa.la style) -->
        <v-row class="mb-6">
            <v-col v-for="(highlight, hIdx) in highlights" :key="hIdx" cols="6" sm="3">
                <v-card flat border class="pa-4 text-center fill-height d-flex flex-column align-center justify-center">
                    <v-avatar :color="highlight.color" variant="tonal" size="44" class="mb-2">
                        <v-icon size="24">{{ highlight.icon }}</v-icon>
                    </v-avatar>
                    <div class="text-subtitle-2 font-weight-bold">{{ highlight.title }}</div>
                    <div class="text-caption text-medium-emphasis">{{ highlight.subtitle }}</div>
                </v-card>
            </v-col>
        </v-row>

        <!-- Main Content: Left Filter + Right Product Grid -->
        <v-row>
            <!-- Left Sidebar: Categories & Brands Filter -->
            <v-col cols="12" md="3">
                <!-- Filter Card -->
                <v-card flat border class="overflow-hidden mb-6">
                    <v-card-item class="bg-primary text-white py-3 px-4">
                        <template v-slot:prepend>
                            <v-icon size="24">mdi-filter-variant</v-icon>
                        </template>
                        <v-card-title class="text-subtitle-1 font-weight-bold">
                            ຕົວຕອງສິນຄ້າ (Filters)
                        </v-card-title>
                    </v-card-item>

                    <!-- Category Selection List -->
                    <div class="pa-3 font-weight-bold text-caption text-uppercase text-medium-emphasis">
                        <v-icon size="16" class="mr-1">mdi-shape-outline</v-icon> ໝວດໝູ່ສິນຄ້າ (Categories)
                    </div>

                    <v-list density="compact" nav class="px-2 pt-0 pb-2">
                        <v-list-item
                            v-for="cat in categories"
                            :key="cat.id"
                            :active="selectedCatId === cat.id"
                            color="primary"
                            variant="flat"
                            class="mb-1"
                            @click="selectCategory(cat.id, cat.name)"
                        >
                            <template v-slot:prepend>
                                <v-icon size="18" class="mr-2">{{ cat.icon }}</v-icon>
                            </template>
                            <v-list-item-title class="font-weight-medium text-body-2">
                                {{ cat.name }}
                            </v-list-item-title>
                        </v-list-item>
                    </v-list>

                    <v-divider />

                    <!-- Brand Selection Section -->
                    <div class="pa-3 font-weight-bold text-caption text-uppercase text-medium-emphasis">
                        <v-icon size="16" class="mr-1">mdi-tag-outline</v-icon> ແບຣນສິນຄ້າ (Brands)
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
                        />
                    </div>

                    <!-- Loading Brands -->
                    <div v-if="loadingBrands" class="text-center py-6">
                        <v-progress-circular indeterminate color="primary" size="32" />
                    </div>

                    <!-- Brand List -->
                    <v-list v-else density="comfortable" nav class="pa-2 overflow-y-auto" style="max-height: 400px;">
                        <!-- All Brands Option -->
                        <v-list-item
                            :active="selectedBrandId === 0"
                            color="primary"
                            variant="flat"
                            class="mb-1"
                            @click="selectBrand(0, 'ທັງໝົດ (All Brands)')"
                        >
                            <template v-slot:prepend>
                                <v-avatar color="primary" variant="tonal" size="28" class="mr-2">
                                    <v-icon size="16">mdi-apps</v-icon>
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
                            class="mb-1"
                            @click="selectBrand(brand.refBrandId, brand.name)"
                        >
                            <template v-slot:prepend>
                                <v-avatar color="grey-lighten-3" size="28" class="mr-2">
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
                <v-card flat border class="pa-4 mb-6">
                    <v-row align="center" justify="space-between" no-gutters class="ga-3">
                        <v-col cols="12" sm="auto">
                            <div class="d-flex align-center ga-2">
                                <v-icon color="primary" size="28">mdi-cellphone</v-icon>
                                <div>
                                    <h2 class="text-h6 font-weight-bold mb-0">
                                        ສິນຄ້າ: {{ selectedCatName }} / {{ selectedBrandName }}
                                    </h2>
                                    <div class="text-caption text-medium-emphasis">
                                        ພົບສິນຄ້າທັງໝົດ {{ products.length }} ລາຍການ
                                    </div>
                                </div>
                            </div>
                        </v-col>

                        <!-- Product Search Input -->
                        <v-col cols="12" sm="5" md="4">
                            <v-text-field
                                v-model="productSearch"
                                placeholder="ຄົ້ນຫາຊື່ສິນຄ້າ..."
                                density="compact"
                                variant="outlined"
                                prepend-inner-icon="mdi-magnify"
                                hide-details
                                clearable
                                @update:model-value="onSearchProduct"
                            />
                        </v-col>
                    </v-row>
                </v-card>

                <!-- Loading Products State -->
                <div v-if="loadingProducts && products.length === 0" class="text-center py-12">
                    <v-progress-circular indeterminate color="primary" size="64" width="6" />
                    <div class="mt-4 text-subtitle-1 font-weight-bold text-medium-emphasis">
                        ກຳລັງໂຫຼດຂໍ້ມູນສິນຄ້າ...
                    </div>
                </div>

                <!-- No Products Found -->
                <v-card v-else-if="products.length === 0" flat border class="pa-12 text-center">
                    <v-icon size="64" color="grey-lighten-1">mdi-package-variant-remove</v-icon>
                    <h3 class="text-h6 font-weight-bold mt-4">ບໍ່ພົບສິນຄ້າທີ່ກົງກັບເງື່ອນໄຂ</h3>
                    <p class="text-body-2 text-medium-emphasis mb-4">ກະລຸນາລອງເລືອກໝວດໝູ່ ຫຼື ແບຣນອື່ນ</p>
                    <v-btn color="primary" variant="flat" class="text-none font-weight-bold" @click="resetFilters">
                        ລ້າງຕົວຕອງທັງໝົດ
                    </v-btn>
                </v-card>

                <!-- Products Grid -->
                <div v-else>
                    <v-row>
                        <v-col
                            v-for="product in products"
                            :key="product.productId"
                            cols="12"
                            sm="6"
                            md="4"
                        >
                            <v-card hover flat border class="fill-height d-flex flex-column overflow-hidden">
                                <v-img
                                    v-if="product.productImageUrl"
                                    :src="'https://api.olaa.la/files/' + product.productImageUrl"
                                    height="220"
                                    cover
                                    class="bg-grey-lighten-4 align-start"
                                >
                                    <v-chip
                                        v-if="product.dealsFlag"
                                        color="warning"
                                        size="x-small"
                                        class="ma-3 font-weight-bold"
                                    >
                                        {{ product.dealsFlag }}
                                    </v-chip>
                                </v-img>
                                <div v-else class="bg-grey-lighten-4 d-flex align-center justify-center position-relative" style="height: 220px;">
                                    <v-chip
                                        v-if="product.dealsFlag"
                                        color="warning"
                                        size="x-small"
                                        class="position-absolute font-weight-bold"
                                        style="top: 12px; left: 12px;"
                                    >
                                        {{ product.dealsFlag }}
                                    </v-chip>
                                    <v-icon size="64" color="grey-lighten-1">mdi-cellphone-off</v-icon>
                                </div>

                                <v-card-title class="font-weight-bold px-4 pt-3 pb-1 text-truncate" style="font-size: 16px;">
                                    {{ product.productTitle }}
                                </v-card-title>

                                <v-card-text class="px-4 pb-2 flex-grow-1" style="font-size: 12px;">
                                    <div class="d-flex align-center ga-1 text-medium-emphasis" style="font-size: 12px;">
                                        <v-icon size="14" color="success">mdi-check-circle-outline</v-icon>
                                        <span>{{ product.hasStock ? 'ມີສິນຄ້າ' : 'ສິນຄ້າໝົດ' }}</span>
                                    </div>
                                </v-card-text>

                                <v-card-actions class="px-4 pb-4 pt-0 d-flex align-center justify-space-between">
                                    <div>
                                        <span class="text-subtitle-1 font-weight-bold text-primary">
                                            ₭{{ product.price ? product.price.toLocaleString() : '0' }}
                                        </span>
                                    </div>
                                    <v-btn color="primary" variant="flat" size="small" class="text-none font-weight-bold">
                                        ຊື້ດຽວນີ້
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-col>
                    </v-row>

                    <!-- Load More / Pagination Button -->
                    <div class="text-center mt-8">
                        <v-btn
                            v-if="hasMoreProducts"
                            color="primary"
                            variant="outlined"
                            size="large"
                            :loading="loadingMore"
                            prepend-icon="mdi-plus"
                            class="text-none font-weight-bold px-8"
                            @click="loadMoreProducts"
                        >
                            ໂຫຼດສິນຄ້າເພີ່ມເຕີມ
                        </v-btn>
                    </div>
                </div>
            </v-col>
        </v-row>
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

const items = [
    { src: './images/slice1.jpg' },
    { src: './images/slice2.jpg' }
]

const highlights = [
    { icon: 'mdi-truck-fast-outline', title: 'ຈັດສົ່ງໄວທົ່ວປະເທດ', subtitle: 'ສົ່ງເຖິງທີ່ຢ່າງປອດໄພ', color: 'primary' },
    { icon: 'mdi-shield-check-outline', title: 'ຂອງແທ້ 100%', subtitle: 'ປະກັນສູນຢ່າງເປັນທາງການ', color: 'success' },
    { icon: 'mdi-credit-card-outline', title: 'ບໍລິການຜ່ອນ 0%', subtitle: 'ເງື່ອນໄຂງ່າຍ ອະນຸມັດໄວ', color: 'warning' },
    { icon: 'mdi-headset', title: 'ບໍລິການ 24/7', subtitle: 'ທີມງານຄອຍໃຫ້ຄຳປຶກສາ', color: 'info' }
]

const categories = [
    { id: 0, name: 'ໝວດໝູ່ທັງໝົດ (All)', icon: 'mdi-apps' },
    { id: 1, name: 'ໂທລະສັບມືຖື (Smartphones)', icon: 'mdi-cellphone' },
    { id: 2, name: 'ອຸປະກອນເສີມ (Accessories)', icon: 'mdi-headphones' },
    { id: 3, name: 'ກ້ອງ & ວິດີໂອ (Cameras)', icon: 'mdi-camera' },
    { id: 4, name: 'ອຸປະກອນອັດສະລິຍະ (Smart Devices)', icon: 'mdi-watch' }
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
    loadProducts()
}

onMounted(() => {
    loadBrands()
    loadProducts()
})
</script>