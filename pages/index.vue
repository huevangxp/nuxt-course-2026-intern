<template>
    <div>
        <!-- Modern Carousel -->
        <v-carousel :show-arrows="false" autoplay cycle hide-delimiters height="400" elevation="2"
            class="overflow-hidden mb-6">
            <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src" cover />
        </v-carousel>

        <!-- Main Content: Left Filter + Right Product Grid -->
        <v-row>
            <!-- Left Sidebar: Brand Filter -->
            <v-col cols="12" md="3">
                <v-card flat border class="overflow-hidden">
                    <v-card-item class="bg-primary text-white py-3 px-4">
                        <template v-slot:prepend>
                            <v-icon size="24">mdi-shape-outline</v-icon>
                        </template>
                        <v-card-title class="text-subtitle-1 font-weight-bold">
                            ເລືອກແບຣນສິນຄ້າ (Brands)
                        </v-card-title>
                    </v-card-item>

                    <!-- Search Brand Input -->
                    <div class="pa-3">
                        <v-text-field v-model="brandSearch" placeholder="ຄົ້ນຫາແບຣນ..." density="compact"
                            variant="outlined" prepend-inner-icon="mdi-magnify" hide-details clearable />
                    </div>

                    <v-divider />

                    <!-- Loading Brands -->
                    <div v-if="loadingBrands" class="text-center py-6">
                        <v-progress-circular indeterminate color="primary" size="32" />
                    </div>

                    <!-- Brand List -->
                    <v-list v-else density="comfortable" nav class="pa-2 overflow-y-auto" style="max-height: 550px;">
                        <!-- All Brands Option -->
                        <v-list-item :active="selectedBrandId === 0" color="primary" variant="flat" class="mb-1"
                            @click="selectBrand(0, 'ທັງໝົດ (All)')">
                            <template v-slot:prepend>
                                <v-avatar color="primary" variant="tonal" size="32" class="mr-3">
                                    <v-icon size="18">mdi-apps</v-icon>
                                </v-avatar>
                            </template>
                            <v-list-item-title class="font-weight-bold text-body-2">
                                ແບຣນທັງໝົດ
                            </v-list-item-title>
                        </v-list-item>

                        <!-- Dynamic Brand Items -->
                        <v-list-item v-for="brand in filteredBrands" :key="brand.refBrandId"
                            :active="selectedBrandId === brand.refBrandId" color="primary" variant="flat" class="mb-1"
                            @click="selectBrand(brand.refBrandId, brand.name)">
                            <template v-slot:prepend>
                                <v-avatar color="grey-lighten-3" size="32" class="mr-3">
                                    <v-img v-if="brand.logoUrl" :src="'https://api.olaa.la/files/' + brand.logoUrl"
                                        contain />
                                    <v-icon v-else size="18" color="primary">mdi-tag-outline</v-icon>
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
                <!-- Section Title Header -->
                <v-card flat border class="pa-4 mb-6 d-flex align-center justify-space-between flex-wrap ga-3">
                    <div class="d-flex align-center ga-2">
                        <v-icon color="primary" size="28">mdi-cellphone</v-icon>
                        <h2 class="text-h6 font-weight-bold mb-0">
                            ສິນຄ້າ: {{ selectedBrandName }}
                        </h2>
                        <v-chip color="primary" variant="tonal" size="small" class="font-weight-bold ml-2">
                            {{ products.length }} ລາຍການ
                        </v-chip>
                    </div>

                    <!-- Refresh Button -->
                    <v-btn color="primary" variant="tonal" size="small" prepend-icon="mdi-refresh"
                        class="text-none font-weight-bold" @click="loadProducts">
                        ໂຫຼດໃໝ່
                    </v-btn>
                </v-card>

                <!-- Loading Products State -->
                <div v-if="loadingProducts" class="text-center py-12">
                    <v-progress-circular indeterminate color="primary" size="64" width="6" />
                    <div class="mt-4 text-subtitle-1 font-weight-bold text-medium-emphasis">
                        ກຳລັງໂຫຼດຂໍ້ມູນສິນຄ້າ...
                    </div>
                </div>

                <!-- No Products Found -->
                <v-card v-else-if="products.length === 0" flat border class="pa-12 text-center">
                    <v-icon size="64" color="grey-lighten-1">mdi-package-variant-remove</v-icon>
                    <h3 class="text-h6 font-weight-bold mt-4">ບໍ່ພົບສິນຄ້າໃນແບຣນນີ້</h3>
                    <p class="text-body-2 text-medium-emphasis mb-4">ກະລຸນາເລືອກແບຣນອື່ນ ຫຼື ກັບຄືນໄປແບຣນທັງໝົດ</p>
                    <v-btn color="primary" variant="flat" class="text-none font-weight-bold"
                        @click="selectBrand(0, 'ທັງໝົດ (All)')">
                        ເບິ່ງແບຣນທັງໝົດ
                    </v-btn>
                </v-card>

                <!-- Products Grid -->
                <v-row v-else>
                    <v-col v-for="product in products" :key="product.productId" cols="12" sm="6" md="4">
                        <v-card hover flat border class="fill-height d-flex flex-column overflow-hidden">
                            <div class="bg-grey-lighten-4 pa-4 text-center d-flex align-center justify-center position-relative"
                                style="height: 180px;">
                                <v-chip v-if="product.dealsFlag" color="warning" size="x-small"
                                    class="position-absolute font-weight-bold" style="top: 8px; left: 8px;">
                                    {{ product.dealsFlag }}
                                </v-chip>

                                <v-img v-if="product.productImageUrl"
                                    :src="'https://api.olaa.la/files/' + product.productImageUrl" aspect-ratio="1"
                                    contain max-height="150" />
                                <v-icon v-else size="64" color="grey-lighten-1">mdi-cellphone-off</v-icon>
                            </div>

                            <v-card-title class="font-weight-bold text-subtitle-2 px-4 pt-3 pb-1 text-truncate">
                                {{ product.productTitle }}
                            </v-card-title>

                            <v-card-text class="px-4 pb-2 flex-grow-1">
                                <div class="d-flex align-center ga-1 text-caption text-medium-emphasis">
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

const brands = ref([])
const products = ref([])
const loadingBrands = ref(true)
const loadingProducts = ref(true)
const brandSearch = ref('')
const selectedBrandId = ref(0)
const selectedBrandName = ref('ທັງໝົດ (All)')

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

const loadProducts = async () => {
    try {
        loadingProducts.value = true
        const response = await $fetch('/api/products', {
            params: {
                kw: '',
                catId: 0,
                flagId: 1,
                brandId: selectedBrandId.value,
                price: 0,
                skip: 0,
                count: 18
            }
        })
        products.value = response
    } catch (error) {
        console.error('Error loading products:', error)
    } finally {
        loadingProducts.value = false
    }
}

const selectBrand = (brandId, brandName) => {
    selectedBrandId.value = brandId
    selectedBrandName.value = brandName
    loadProducts()
}

onMounted(() => {
    loadBrands()
    loadProducts()
})
</script>