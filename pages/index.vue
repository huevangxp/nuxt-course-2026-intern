<template>
    <div>
        <!-- Modern Carousel -->
        <v-carousel :show-arrows="false" autoplay cycle hide-delimiters height="450" rounded="xl" elevation="2"
            class="overflow-hidden">
            <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src" cover />
        </v-carousel>

        <!-- Category Section -->
        <v-row class="my-6 align-center">
            <v-col cols="auto">
                <v-btn color="primary" variant="flat" rounded="pill" size="large" prepend-icon="mdi-shape-outline"
                    class="text-none font-weight-bold px-6">
                    ໝວດໝູ່
                </v-btn>
            </v-col>
        </v-row>

        <!-- Cards Grid -->
        <v-row>
            <v-col v-for="(phone, index) in phones" :key="index" cols="12" sm="6" md="3" lg="3">
                <v-card hover flat border rounded="lg" class="fill-height d-flex flex-column overflow-hidden">
                    <v-img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2tWPHKDHlokD9NvwKyJJ-W-bVYnvpjSWn5aapFZK9N8acNFjH-foSNVgT&s=10"
                        cover />
                    <v-card-title class="font-weight-bold text-subtitle-1 px-4 pt-3 pb-1">
                        {{ phone.name }}
                    </v-card-title>
                    <v-card-text class="text-caption text-medium-emphasis px-4 pb-2 flex-grow-1">
                        {{ phone.desc }}
                    </v-card-text>
                    <v-card-actions class="px-4 pb-4 pt-0 d-flex align-center justify-space-between">
                        <span class="text-subtitle-1 font-weight-bold text-primary">
                            {{ phone.price }}
                        </span>
                        <v-btn color="primary" variant="tonal" size="small" rounded="md"
                            class="text-none font-weight-bold">
                            ຊື້ດຽວນີ້
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script setup>
const items = [
    {
        src: './images/slice1.jpg',
    },
    {
        src: './images/slice2.jpg',
    },
]

const phones = [
    { name: 'iPhone 15 Pro Max', desc: '256GB, ສີຟ້າໄທເທນຽມ, ຊິບ A17 Pro, ກ້ອງ 48MP', price: '$1,199' },
    { name: 'Samsung Galaxy S24 Ultra', desc: '512GB, ສີເທົາໄທເທນຽມ, ຊິບ Snapdragon 8 Gen 3', price: '$1,299' },
    { name: 'Google Pixel 8 Pro', desc: '128GB, ສີດໍາ Obsidian, ຊິບ Tensor G3, ກ້ອງ AI', price: '$999' },
    { name: 'Xiaomi 14 Ultra', desc: '512GB, ສີດໍາ, ກ້ອງ Leica Quad, ຈໍ 120Hz AMOLED', price: '$1,099' },
    { name: 'OnePlus 12', desc: '256GB, ສີດໍາ Silky, RAM 16GB, ຊາດໄວ 100W', price: '$799' },
    { name: 'ASUS ROG Phone 8', desc: '512GB, ສີດໍາ Phantom, ຈໍເກມມິງ 165Hz', price: '$1,099' },
    { name: 'Sony Xperia 1 VI', desc: '256GB, ສີດໍາ, ຈໍ 4K HDR OLED, ເຊັນເຊີ Exmor T', price: '$1,399' },
    { name: 'Nothing Phone (2)', desc: '256GB, ສີເທົາດໍາ, ໄຟ Glyph Interface, Snapdragon 8+', price: '$699' },
    { name: 'Honor Magic 6 Pro', desc: '512GB, ສີຂຽວ Epi, ລະບົບກ້ອງ Falcon', price: '$1,049' },
    { name: 'Vivo X100 Pro', desc: '256GB, ສີດໍາ Asteroid, ເລນ ZEISS, Dimensity 9300', price: '$999' },
    { name: 'Motorola Edge 50 Ultra', desc: '512GB, ສີສົ້ມ Peach Fuzz, ຊາດໄວ 125W', price: '$899' },
    { name: 'Realme GT 5 Pro', desc: '256GB, ສີແດງ Red Rock, ຊິບ Snapdragon 8 Gen 3', price: '$649' }
]
</script>