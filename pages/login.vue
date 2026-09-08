<template>
  <div class="d-flex align-center justify-center bg-background pa-4" style="min-height: 100vh;">
    <v-card flat border class="pa-6 pa-md-8 w-100 rounded-2xl bg-surface elevation-16" max-width="440" style="border-color: rgba(255, 42, 133, 0.3) !important;">
      <!-- Store Header & Logo -->
      <div class="text-center mb-6">
        <div class="brand-avatar mx-auto mb-3 d-flex align-center justify-center" style="width: 56px; height: 56px;">
          <v-icon size="30" color="white">mdi-lightning-bolt</v-icon>
        </div>
        <h1 class="text-h4 font-weight-black text-white mb-1">
          Hue<span class="text-gradient">Dev</span>
        </h1>
        <p class="text-body-2 text-grey-lighten-1">ຍິນດີຕ້ອນຮັບເຂົ້າສູ່ລະບົບ (Black &amp; Pink Edition)</p>
      </div>

      <!-- Login Form -->
      <v-form @submit.prevent="handleLogin">
        <v-row>
          <v-col cols="12">
            <v-text-field
              v-model="username"
              label="ຊື່ຜູ້ໃຊ້ ຫຼື ອີເມວ"
              variant="outlined"
              density="comfortable"
              prepend-inner-icon="mdi-account-outline"
              hide-details="auto"
              class="rounded-xl"
              required
            />
          </v-col>

          <v-col cols="12">
            <v-text-field
              v-model="password"
              :type="showPassword ? 'text' : 'password'"
              label="ລະຫັດຜ່ານ"
              variant="outlined"
              density="comfortable"
              prepend-inner-icon="mdi-lock-outline"
              :append-inner-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
              @click:append-inner="showPassword = !showPassword"
              hide-details="auto"
              class="rounded-xl"
              required
            />
          </v-col>

          <v-col cols="12" class="d-flex align-center justify-space-between py-0">
            <v-checkbox
              v-model="rememberMe"
              label="ຈື່ຂ້ອຍໄວ້"
              color="primary"
              density="compact"
              hide-details
            />
            <a href="#" class="text-caption text-primary text-decoration-none font-weight-bold">
              ລືມລະຫັດຜ່ານ?
            </a>
          </v-col>

          <v-col cols="12">
            <v-btn
              type="submit"
              size="large"
              block
              prepend-icon="mdi-login"
              class="text-none font-weight-bold mb-3 rounded-pill btn-gradient"
            >
              ເຂົ້າສູ່ລະບົບ
            </v-btn>

            <v-btn
              to="/"
              variant="outlined"
              size="large"
              block
              prepend-icon="mdi-arrow-left"
              class="text-none font-weight-bold rounded-pill btn-pink-outline"
            >
              ກັບຄືນໜ້າຫຼັກ
            </v-btn>
          </v-col>
        </v-row>
      </v-form>
    </v-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

definePageMeta({
  layout: false
})

const username = ref('')
const password = ref('')
const showPassword = ref(false)
const rememberMe = ref(false)

const handleLogin = () => {
  if (username.value && password.value) {
    alert('ເຂົ້າສູ່ລະບົບສໍາເລັດ!')
  }
}
</script>

<style scoped>
.brand-avatar {
  border-radius: 14px;
  background: linear-gradient(135deg, #FF2A85 0%, #FF52A2 100%);
  box-shadow: 0 4px 18px rgba(255, 42, 133, 0.45);
}
</style>