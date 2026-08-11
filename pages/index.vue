<template>
    <div>
        <!-- Modern Carousel -->
        <v-carousel :show-arrows="false" autoplay cycle hide-delimiters height="450" elevation="2"
            class="overflow-hidden">
            <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src" cover />
        </v-carousel>

        <!-- Category / Brands Header Section -->
        <v-row class="my-6 align-center justify-space-between">
            <v-col cols="auto">
                <v-btn color="primary" variant="flat" size="large" prepend-icon="mdi-shape-outline"
                    class="text-none font-weight-bold px-6">
                    ແບຣນສິນຄ້າທັງໝົດ ({{ brands.length }})
                </v-btn>
            </v-col>
        </v-row>

        <!-- Loading State -->
        <div v-if="loading" class="text-center py-12">
            <v-progress-circular indeterminate color="primary" size="64" width="6" />
            <div class="mt-4 text-subtitle-1 font-weight-bold text-medium-emphasis">ກຳລັງໂຫຼດຂໍ້ມູນແບຣນ...</div>
        </div>

        <!-- Brands Grid -->
        <v-row v-else>
            <v-col v-for="brand in brands" :key="brand.refBrandId" cols="12" sm="6" md="3" lg="3">
                <v-card hover flat border class="fill-height d-flex flex-column overflow-hidden">
                    <div class="bg-grey-lighten-4 pa-6 text-center d-flex align-center justify-center"
                        style="height: 140px;">
                        <v-img :src="brand.logoUrl"></v-img>
                    </div>
                    <v-card-title class="font-weight-bold text-subtitle-1 px-4 pt-3 pb-1">
                        {{ brand.name }}
                    </v-card-title>
                    <v-card-text class="text-caption text-medium-emphasis px-4 pb-2 flex-grow-1">
                        ລະຫັດແບຣນ: #{{ brand.refBrandId }} | ດຳເນີນການຢູ່
                    </v-card-text>
                    <v-card-actions class="px-4 pb-4 pt-0 d-flex align-center justify-space-between">
                        <span class="text-caption font-weight-bold text-success">
                            ✓ ເປີດໃຊ້ງານ
                        </span>
                        <v-btn color="primary" variant="tonal" size="small" class="text-none font-weight-bold">
                            ເບິ່ງສິນຄ້າ
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script setup>
import axios from 'axios'
import { ref, onMounted } from 'vue'

const items = [
    {
        src: './images/slice1.jpg',
    },
    {
        src: './images/slice2.jpg',
    },
]

const brands = ref([])
const loading = ref(true)

const loadBrands = async () => {
    try {
        loading.value = true
        const response = await $fetch('/api/brands')
        brands.value = response
    } catch (error) {
        console.error('Error fetching brands:', error)
    } finally {
        loading.value = false
    }
}

onMounted(() => {
    loadBrands()
})
</script>