<template>
    <div class="d-flex align-center justify-center" style="min-height: 100vh;">
        <v-card class="pa-5 w-100" max-width="400">
            <v-card-title class="text-center">Login</v-card-title>
            <v-card-text class="py-10">
                <v-row>
                    <v-col cols="12">
                        <v-text-field label="Username or Email"></v-text-field>
                    </v-col>
                    <v-col cols="12">
                        <v-text-field label="Password"></v-text-field>
                    </v-col>
                    <v-col cols="12">
                        <v-btn block color="primary" size="x-large">Login</v-btn>
                    </v-col>
                    <v-col cols="12">
                        <v-btn variant="text" block to="/"> <v-icon size="x-small">mdi-arrow-left</v-icon> Back</v-btn>
                    </v-col>
                </v-row>
            </v-card-text>
        </v-card>
    </div>
</template>

<script setup lang="ts">

definePageMeta({
    layout: false
})

</script>

<style scoped></style>