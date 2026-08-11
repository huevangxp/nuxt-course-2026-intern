<template>
  <v-app>
    <!-- Navigation Bar -->
    <v-app-bar flat border class="px-md-8 px-2" color="surface" height="68">
      <!-- Brand Logo -->
      <v-btn variant="text" to="/" class="px-2 text-none font-weight-bold text-h6 text-primary d-flex align-center">
        <v-avatar color="primary" variant="tonal" size="40" class="mr-3">
          <v-icon size="24" color="primary">mdi-school-outline</v-icon>
        </v-avatar>
        <span class="brand-title font-weight-bold">Edu<span class="text-primary">Course</span></span>
      </v-btn>

      <v-spacer />

      <!-- Desktop Navigation Links -->
      <div class="d-none d-md-flex align-center gap-2">
        <v-btn 
          v-for="item in navItems" 
          :key="item.title" 
          :to="item.to" 
          variant="text" 
          rounded="pill" 
          class="text-none font-weight-medium px-4"
          active-color="primary"
          :prepend-icon="item.icon"
        >
          {{ item.title }}
        </v-btn>
      </div>

      <v-spacer />

      <!-- Right Action Items -->
      <div class="d-none d-md-flex align-center gap-3">
        <v-btn
          to="/login"
          color="primary"
          variant="flat"
          rounded="pill"
          class="text-none px-6 font-weight-bold shadow-sm"
          prepend-icon="mdi-account-circle-outline"
        >
          Login
        </v-btn>
      </div>

      <!-- Mobile Menu Toggle -->
      <v-app-bar-nav-icon class="d-md-none" @click="drawer = !drawer" />
    </v-app-bar>

    <!-- Mobile Navigation Drawer -->
    <v-navigation-drawer v-model="drawer" temporary location="end" width="280">
      <v-list-item class="py-4">
        <template v-slot:prepend>
          <v-avatar color="primary" variant="tonal" size="36">
            <v-icon size="20" color="primary">mdi-school-outline</v-icon>
          </v-avatar>
        </template>
        <v-list-item-title class="font-weight-bold text-h6">EduCourse</v-list-item-title>
      </v-list-item>
      
      <v-divider />

      <v-list nav class="pa-4">
        <v-list-item
          v-for="item in navItems"
          :key="item.title"
          :to="item.to"
          :title="item.title"
          :prepend-icon="item.icon"
          rounded="lg"
          class="mb-2"
          active-color="primary"
          @click="drawer = false"
        />
        
        <v-divider class="my-4" />

        <v-btn
          to="/login"
          color="primary"
          block
          size="large"
          rounded="lg"
          prepend-icon="mdi-account-circle-outline"
          class="text-none font-weight-bold"
          @click="drawer = false"
        >
          Login
        </v-btn>
      </v-list>
    </v-navigation-drawer>

    <!-- Main Content -->
    <v-main class="bg-grey-lighten-5">
      <div class="main-content-wrapper">
        <slot />
      </div>
    </v-main>

    <!-- Footer -->
    <v-footer class="bg-grey-darken-4 text-grey-lighten-1 flex-column pa-0">
      <v-container class="py-12 px-6 px-md-12" fluid max-width="1280">
        <v-row>
          <!-- Column 1: Brand & Bio -->
          <v-col cols="12" md="4" class="pr-md-8 mb-6 mb-md-0">
            <div class="d-flex align-center mb-4">
              <v-avatar color="primary" size="40" class="mr-3">
                <v-icon size="24" color="white">mdi-school-outline</v-icon>
              </v-avatar>
              <span class="text-h5 font-weight-bold text-white">Edu<span class="text-primary">Course</span></span>
            </div>
            <p class="text-body-2 text-grey-lighten-1 mb-6 line-height-relaxed">
              Empowering learners worldwide with cutting-edge online courses, hands-on tutorials, and expert-led tech programs.
            </p>
            <div class="d-flex gap-2">
              <v-btn
                v-for="social in socialLinks"
                :key="social.icon"
                :icon="social.icon"
                variant="tonal"
                color="white"
                size="small"
                density="comfortable"
                class="social-icon-btn"
                :aria-label="social.name"
              />
            </div>
          </v-col>

          <!-- Column 2: Quick Links -->
          <v-col cols="6" sm="4" md="2" class="mb-6 mb-md-0">
            <h4 class="text-subtitle-1 font-weight-bold text-white mb-4">Quick Links</h4>
            <ul class="footer-links list-unstyled">
              <li v-for="item in navItems" :key="item.title" class="mb-2">
                <NuxtLink :to="item.to" class="footer-link text-grey-lighten-1 text-decoration-none text-body-2">
                  {{ item.title }}
                </NuxtLink>
              </li>
            </ul>
          </v-col>

          <!-- Column 3: Categories -->
          <v-col cols="6" sm="4" md="3" class="mb-6 mb-md-0">
            <h4 class="text-subtitle-1 font-weight-bold text-white mb-4">Categories</h4>
            <ul class="footer-links list-unstyled">
              <li v-for="category in categories" :key="category" class="mb-2">
                <a href="#" class="footer-link text-grey-lighten-1 text-decoration-none text-body-2">
                  {{ category }}
                </a>
              </li>
            </ul>
          </v-col>

          <!-- Column 4: Contact & Newsletter -->
          <v-col cols="12" sm="4" md="3">
            <h4 class="text-subtitle-1 font-weight-bold text-white mb-4">Stay Updated</h4>
            <p class="text-caption text-grey-lighten-1 mb-4">
              Subscribe to get latest course releases and technology news.
            </p>
            <v-text-field
              density="compact"
              variant="solo-filled"
              placeholder="Enter your email"
              hide-details
              bg-color="grey-darken-3"
              class="rounded-lg mb-2"
            >
              <template v-slot:append-inner>
                <v-btn color="primary" variant="flat" size="small" icon="mdi-send" />
              </template>
            </v-text-field>
          </v-col>
        </v-row>

        <v-divider class="my-8 border-opacity-25" color="grey-lighten-1" />

        <!-- Sub-footer copyright -->
        <div class="d-flex flex-column flex-sm-row justify-space-between align-center text-caption text-grey-lighten-2">
          <span>&copy; {{ currentYear }} EduCourse Inc. All rights reserved.</span>
          <div class="d-flex gap-4 mt-2 mt-sm-0">
            <a href="#" class="footer-link text-grey-lighten-2 text-decoration-none">Privacy Policy</a>
            <a href="#" class="footer-link text-grey-lighten-2 text-decoration-none">Terms of Service</a>
            <a href="#" class="footer-link text-grey-lighten-2 text-decoration-none">Cookie Settings</a>
          </div>
        </div>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const drawer = ref(false)

const navItems = [
  { title: 'Home', to: '/', icon: 'mdi-home-outline' },
  { title: 'About', to: '/about', icon: 'mdi-information-outline' },
  { title: 'Services', to: '/services', icon: 'mdi-briefcase-outline' },
  { title: 'Contact', to: '/contact', icon: 'mdi-email-outline' },
]

const categories = [
  'Web Development',
  'Mobile App Dev',
  'UI/UX Design',
  'Data Science & AI',
  'Cloud Architecture'
]

const socialLinks = [
  { name: 'Facebook', icon: 'mdi-facebook' },
  { name: 'Twitter', icon: 'mdi-twitter' },
  { name: 'LinkedIn', icon: 'mdi-linkedin' },
  { name: 'GitHub', icon: 'mdi-github' },
  { name: 'Instagram', icon: 'mdi-instagram' }
]

const currentYear = computed(() => new Date().getFullYear())
</script>

<style scoped>
.brand-title {
  letter-spacing: -0.5px;
}

.main-content-wrapper {
  min-height: calc(100vh - 68px - 320px);
}

.list-unstyled {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-link {
  transition: color 0.2s ease;
}

.footer-link:hover {
  color: #ffffff !important;
}

.social-icon-btn {
  transition: transform 0.2s ease, background-color 0.2s ease;
}

.social-icon-btn:hover {
  transform: translateY(-2px);
}

.gap-2 {
  gap: 8px;
}

.gap-3 {
  gap: 12px;
}

.gap-4 {
  gap: 16px;
}
</style>