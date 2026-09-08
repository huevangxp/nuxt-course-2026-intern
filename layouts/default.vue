<template>
  <v-app>
    <!-- Modern White Glassmorphic Navigation Bar -->
    <v-app-bar flat class="px-md-8 px-2 glass-header" height="74">
      <!-- Brand Logo -->
      <v-btn variant="text" to="/" class="px-2 text-none d-flex align-center rounded-xl">
        <div class="brand-avatar mr-3 d-flex align-center justify-center">
          <v-icon size="22" color="white">mdi-lightning-bolt</v-icon>
        </div>
        <span class="font-weight-black text-h5 tracking-tight text-grey-darken-4">
          Hue<span class="text-gradient">Dev</span>
        </span>
      </v-btn>

      <v-spacer />

      <!-- Desktop Navigation Links -->
      <div class="d-none d-md-flex align-center ga-1">
        <v-btn 
          v-for="item in navItems" 
          :key="item.title" 
          :to="item.to" 
          variant="text" 
          class="text-none font-weight-semibold px-4 rounded-pill text-grey-darken-3 nav-link-btn"
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
          variant="flat"
          class="text-none px-6 font-weight-bold rounded-pill btn-gradient"
          prepend-icon="mdi-account-circle-outline"
        >
          ເຂົ້າສູ່ລະບົບ
        </v-btn>
      </div>

      <!-- Mobile Menu Toggle -->
      <v-app-bar-nav-icon color="primary" class="d-md-none" @click="drawer = !drawer" />
    </v-app-bar>

    <!-- Mobile Navigation Drawer -->
    <v-navigation-drawer v-model="drawer" temporary location="end" width="300" class="rounded-s-xl bg-surface">
      <v-list-item class="py-5 px-6">
        <template v-slot:prepend>
          <div class="brand-avatar mr-3 d-flex align-center justify-center" style="width: 38px; height: 38px;">
            <v-icon size="20" color="white">mdi-lightning-bolt</v-icon>
          </div>
        </template>
        <v-list-item-title class="font-weight-black text-h6 text-grey-darken-4">
          Hue<span class="text-gradient">Dev</span>
        </v-list-item-title>
      </v-list-item>
      
      <v-divider class="border-opacity-25" color="pink" />

      <v-list nav class="pa-4">
        <v-list-item
          v-for="item in navItems"
          :key="item.title"
          :to="item.to"
          :title="item.title"
          :prepend-icon="item.icon"
          class="mb-2 rounded-xl font-weight-semibold text-grey-darken-3"
          active-color="primary"
          @click="drawer = false"
        />
        
        <v-divider class="my-4 border-opacity-25" color="pink" />

        <v-btn
          to="/login"
          block
          size="large"
          prepend-icon="mdi-account-circle-outline"
          class="text-none font-weight-bold rounded-pill btn-gradient"
          @click="drawer = false"
        >
          ເຂົ້າສູ່ລະບົບ
        </v-btn>
      </v-list>
    </v-navigation-drawer>

    <!-- Main Content Area with White Background -->
    <v-main class="bg-background">
      <v-container class="py-8 px-4" fluid style="max-width: 1340px;">
        <slot />
      </v-container>
    </v-main>

    <!-- Luxury Dark Contrast Footer -->
    <v-footer class="text-grey-lighten-1 flex-column pa-0 position-relative overflow-hidden" style="background-color: #0A0A0E;">
      <!-- Glowing Pink Top Accent Line -->
      <div class="w-100" style="height: 3px; background: linear-gradient(90deg, #FF2A85 0%, #FF52A2 50%, #D946EF 100%); box-shadow: 0 0 16px rgba(255, 42, 133, 0.6);"></div>

      <v-container class="pt-14 pb-8 px-6 px-md-12" fluid max-width="1300">
        <v-row>
          <!-- Column 1: Brand & Bio -->
          <v-col cols="12" md="4" class="pr-md-8 mb-6 mb-md-0">
            <div class="d-flex align-center mb-4">
              <div class="brand-avatar mr-3 d-flex align-center justify-center">
                <v-icon size="22" color="white">mdi-lightning-bolt</v-icon>
              </div>
              <span class="text-h5 font-weight-black text-white tracking-tight">
                Hue<span class="text-gradient">Dev</span>
              </span>
            </div>
            <p class="text-body-2 text-grey-lighten-1 mb-6" style="line-height: 1.8;">
              HueDev - ສູນລວມເທັກໂນໂລຢີ, ໂທລະສັບ, ຄອມພິວເຕີ ແລະ ອຸປະກອນໄອທີທີ່ທັນສະໄໝທີ່ສຸດ ຂອງແທ້ 100% ພ້ອມການບໍລິການ ແລະ ຮັບປະກັນຄຸນນະພາບລະດັບພຣີມຽມ.
            </p>
            <div class="d-flex ga-2">
              <v-btn
                v-for="social in socialLinks"
                :key="social.name"
                :icon="social.icon"
                variant="tonal"
                color="primary"
                size="small"
                density="comfortable"
                class="rounded-lg"
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
                color="grey-lighten-2"
                class="justify-start px-0 text-capitalize text-body-2 footer-link"
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
                color="grey-lighten-2"
                class="justify-start px-0 text-capitalize text-body-2 footer-link"
              >
                {{ category }}
              </v-btn>
            </div>
          </v-col>

          <!-- Column 4: Contact & Newsletter -->
          <v-col cols="12" sm="4" md="3">
            <h4 class="text-subtitle-1 font-weight-bold text-white mb-4">ຮັບຂໍ້ມູນຂ່າວສານ</h4>
            <p class="text-caption text-grey-lighten-1 mb-4" style="line-height: 1.6;">
              ລົງທະບຽນເພື່ອຮັບຂໍ້ມູນໂປຣໂມຊັນ ແລະ ສິນຄ້າເທັກໂນໂລຢີໃໝ່ໆກ່ອນໃຜ.
            </p>
            <v-text-field
              density="compact"
              variant="outlined"
              placeholder="ປ້ອນອີເມວຂອງທ່ານ..."
              hide-details
              bg-color="grey-darken-4"
              class="rounded-xl"
            >
              <template v-slot:append-inner>
                <v-btn color="primary" variant="flat" size="small" icon="mdi-send" class="btn-gradient" />
              </template>
            </v-text-field>
          </v-col>
        </v-row>

        <v-divider class="my-8 border-opacity-15" color="pink" />

        <!-- Sub-footer copyright -->
        <div class="d-flex flex-column flex-sm-row justify-space-between align-center text-caption text-grey-lighten-2 ga-2">
          <span>&copy; {{ currentYear }} <strong class="text-gradient">HueDev Store</strong>. All rights reserved.</span>
          <div class="d-flex ga-4 mt-2 mt-sm-0">
            <v-btn variant="plain" density="compact" color="grey-lighten-2" class="px-0 text-none text-caption footer-link">ນະໂຍບາຍຄວາມເປັນສ່ວນຕົວ</v-btn>
            <v-btn variant="plain" density="compact" color="grey-lighten-2" class="px-0 text-none text-caption footer-link">ເງື່ອນໄຂການໃຊ້ງານ</v-btn>
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
  'ພາຫະນະໄຟຟ້າ (EV & Motors)',
  'ອຸປະກອນອີເລັກໂທຣນິກ (Electronics)',
  'ເຄື່ອງໃຊ້ໄຟຟ້າ (Appliances)',
  'ຄອມພິວເຕີ (Computer Hardware)',
  'ເຄື່ອງແຕ່ງກາຍ & ກະເປົ໋າ (Bags)'
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
.brand-avatar {
  width: 40px;
  height: 40px;
  border-radius: 12px;
  background: linear-gradient(135deg, #FF2A85 0%, #FF52A2 100%);
  box-shadow: 0 4px 16px rgba(255, 42, 133, 0.4);
}

.nav-link-btn:hover {
  color: #FF2A85 !important;
}

.footer-link:hover {
  color: #FF2A85 !important;
}
</style>