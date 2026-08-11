<template>
    <div>
        <v-carousel :show-arrows="false" autoplay cycle hide-delimiters height="500">
            <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src" cover></v-carousel-item>
        </v-carousel>
        <v-row class="mt-4">
            <v-col cols="2">
                <v-btn>Category</v-btn>
            </v-col>
        </v-row>
        <v-row class="mt-4">
            <v-col v-for="i in 12" :key="i" cols="12" md="3" lg="3">
                <v-card>
                    <v-img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2tWPHKDHlokD9NvwKyJJ-W-bVYnvpjSWn5aapFZK9N8acNFjH-foSNVgT&s=10"></v-img>
                    <v-card-title>Header</v-card-title>
                    <v-card-text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</v-card-text>
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