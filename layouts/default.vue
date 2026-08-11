<template>
    <div>
        <v-app>
            <v-app-bar class="px-6">
                <v-btn variant="text" to="/">
                    <v-icon size="x-large" color="secondary">mdi-atlassian</v-icon>
                </v-btn>
                <v-spacer />
                <v-btn to="/">Home</v-btn>
                <v-btn to="/about">About</v-btn>
                <v-btn to="/services">Services</v-btn>
                <v-btn to="/contact">Contact</v-btn>
                <v-spacer />
                <v-btn variant="text" to="/login">
                    <v-icon size="x-large" color="secondary">mdi-account</v-icon>
                </v-btn>
            </v-app-bar>
            <v-main>
                <div class="pa-4">
                    <slot />
                </div>
            </v-main>
            <v-footer class="bg-indigo text-center d-flex flex-column mt-6">
                <div>
                    {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
                </div>
            </v-footer>
        </v-app>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped></style>