<template>
  <v-app>
    <!-- Navigation Bar -->
    <v-app-bar flat border class="px-md-8 px-2" color="surface" height="68">
      <!-- Brand Logo -->
      <v-btn variant="text" to="/" class="px-2 text-none font-weight-bold text-h6 text-primary d-flex align-center">
        <v-avatar color="primary" variant="tonal" size="40" class="mr-3">
          <v-icon size="24" color="primary">mdi-cellphone-link</v-icon>
        </v-avatar>
        <span class="font-weight-bold text-h5 text-grey-darken-4">olaa<span class="text-primary">.la</span></span>
      </v-btn>

      <v-spacer />

      <!-- Desktop Navigation Links -->
      <div class="d-none d-md-flex align-center ga-2">
        <v-btn 
          v-for="item in navItems" 
          :key="item.title" 
          :to="item.to" 
          variant="text" 
          class="text-none font-weight-medium px-4"
          active-color="primary"
          :prepend-icon="item.icon"
        >
          {{ item.title }}
        </v-btn>
      </div>

      <v-spacer />

      <!-- Right Action Items -->
      <div class="d-none d-md-flex align-center ga-3">
        <v-btn
          to="/login"
          color="primary"
          variant="flat"
          class="text-none px-6 font-weight-bold"
          prepend-icon="mdi-account-circle-outline"
        >
          ເຂົ້າສູ່ລະບົບ
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
            <v-icon size="20" color="primary">mdi-cellphone-link</v-icon>
          </v-avatar>
        </template>
        <v-list-item-title class="font-weight-bold text-h6">olaa.la</v-list-item-title>
      </v-list-item>
      
      <v-divider />

      <v-list nav class="pa-4">
        <v-list-item
          v-for="item in navItems"
          :key="item.title"
          :to="item.to"
          :title="item.title"
          :prepend-icon="item.icon"
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
          prepend-icon="mdi-account-circle-outline"
          class="text-none font-weight-bold"
          @click="drawer = false"
        >
          ເຂົ້າສູ່ລະບົບ
        </v-btn>
      </v-list>
    </v-navigation-drawer>

    <!-- Main Content -->
    <v-main class="bg-grey-lighten-5">
      <v-container class="py-6 px-4" fluid style="max-width: 1320px;">
        <slot />
      </v-container>
    </v-main>

    <!-- Footer -->
    <v-footer class="bg-teal-darken-4 text-grey-lighten-1 flex-column pa-0">
      <v-container class="py-12 px-6 px-md-12" fluid max-width="1280">
        <v-row>
          <!-- Column 1: Brand & Bio -->
          <v-col cols="12" md="4" class="pr-md-8 mb-6 mb-md-0">
            <div class="d-flex align-center mb-4">
              <v-avatar color="primary" size="40" class="mr-3">
                <v-icon size="24" color="white">mdi-cellphone-link</v-icon>
              </v-avatar>
              <span class="text-h5 font-weight-bold text-white">olaa<span class="text-primary">.la</span></span>
            </div>
            <p class="text-body-2 text-grey-lighten-1 mb-6">
              olaa.la - ສູນຈຳໜ່າຍໂທລະສັບມືຖື, ແທັບເລັດ ແລະ ອຸປະກອນໄອທີຄຸນນະພາບສູງ ຂອງແທ້ 100% ພ້ອມໃບຮັບປະກັນສູນຢ່າງເປັນທາງການ.
            </p>
            <div class="d-flex ga-2">
              <v-btn
                v-for="social in socialLinks"
                :key="social.icon"
                :icon="social.icon"
                variant="tonal"
                color="white"
                size="small"
                density="comfortable"
                :aria-label="social.name"
              />
            </div>
          </v-col>

          <!-- Column 2: Quick Links -->
          <v-col cols="6" sm="4" md="2" class="mb-6 mb-md-0">
            <h4 class="text-subtitle-1 font-weight-bold text-white mb-4">ເມນູຫຼັກ</h4>
            <div class="d-flex flex-column ga-2">
              <v-btn
                v-for="item in navItems"
                :key="item.title"
                :to="item.to"
                variant="plain"
                density="compact"
                color="grey-lighten-1"
                class="justify-start px-0 text-capitalize text-body-2"
              >
                {{ item.title }}
              </v-btn>
            </div>
          </v-col>

          <!-- Column 3: Categories -->
          <v-col cols="6" sm="4" md="3" class="mb-6 mb-md-0">
            <h4 class="text-subtitle-1 font-weight-bold text-white mb-4">ໝວດໝູ່ສິນຄ້າ</h4>
            <div class="d-flex flex-column ga-2">
              <v-btn
                v-for="category in categories"
                :key="category"
                variant="plain"
                density="compact"
                color="grey-lighten-1"
                class="justify-start px-0 text-capitalize text-body-2"
              >
                {{ category }}
              </v-btn>
            </div>
          </v-col>

          <!-- Column 4: Contact & Newsletter -->
          <v-col cols="12" sm="4" md="3">
            <h4 class="text-subtitle-1 font-weight-bold text-white mb-4">ຮັບຂໍ້ມູນຂ່າວສານ</h4>
            <p class="text-caption text-grey-lighten-1 mb-4">
              ລົງທະບຽນເພື່ອຮັບຂໍ້ມູນໂປຣໂມຊັນ ແລະ ສິນຄ້າໃໝ່ກ່ອນໃຜ.
            </p>
            <v-text-field
              density="compact"
              variant="solo-filled"
              placeholder="ປ້ອນອີເມວຂອງທ່ານ"
              hide-details
              bg-color="teal-darken-3"
              class="mb-2"
            >
              <template v-slot:append-inner>
                <v-btn color="primary" variant="flat" size="small" icon="mdi-send" />
              </template>
            </v-text-field>
          </v-col>
        </v-row>

        <v-divider class="my-8 border-opacity-25" color="grey-lighten-1" />

        <!-- Sub-footer copyright -->
        <div class="d-flex flex-column flex-sm-row justify-space-between align-center text-caption text-grey-lighten-2 ga-2">
          <span>&copy; {{ currentYear }} olaa.la Online Store. All rights reserved.</span>
          <div class="d-flex ga-4 mt-2 mt-sm-0">
            <v-btn variant="plain" density="compact" color="grey-lighten-2" class="px-0 text-none text-caption">ນະໂຍບາຍຄວາມເປັນສ່ວນຕົວ</v-btn>
            <v-btn variant="plain" density="compact" color="grey-lighten-2" class="px-0 text-none text-caption">ເງື່ອນໄຂການໃຊ້ງານ</v-btn>
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
  { title: 'ໜ້າຫຼັກ', to: '/', icon: 'mdi-home-outline' },
  { title: 'ກ່ຽວກັບເຮົາ', to: '/about', icon: 'mdi-information-outline' },
  { title: 'ບໍລິການ', to: '/services', icon: 'mdi-briefcase-outline' },
  { title: 'ຕິດຕໍ່ເຮົາ', to: '/contact', icon: 'mdi-email-outline' },
]

const categories = [
  'ໂທລະສັບມືຖື (Smartphones)',
  'ແທັບເລັດ (Tablets)',
  'ອຸປະກອນເສີມ (Accessories)',
  'ກ້ອງ & ວິດີໂອ (Cameras)',
  'ອຸປະກອນອັດສະລິຍະ (Smart Devices)'
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