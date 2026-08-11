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
                    Category
                </v-btn>
            </v-col>
        </v-row>

        <!-- Cards Grid -->
        <v-row>
            <v-col v-for="i in 12" :key="i" cols="12" sm="6" md="3" lg="3">
                <v-card hover flat border rounded="lg" class="fill-height d-flex flex-column overflow-hidden">
                    <v-img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2tWPHKDHlokD9NvwKyJJ-W-bVYnvpjSWn5aapFZK9N8acNFjH-foSNVgT&s=10"
                        cover />
                    <v-card-title class="font-weight-bold text-h6 px-4 pt-4 pb-1">
                        Header {{ i }}
                    </v-card-title>
                    <v-card-text class="text-body-2 text-medium-emphasis px-4 pb-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
                    </v-card-text>
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
</script>