<template>
  <div class="d-flex align-center justify-center bg-grey-lighten-4 pa-4" style="min-height: 100vh;">
    <v-card flat border class="pa-6 pa-md-8 w-100" max-width="440">
      <!-- Store Header & Logo -->
      <div class="text-center mb-6">
        <v-avatar color="primary" variant="tonal" size="64" class="mb-3">
          <v-icon size="36" color="primary">mdi-cellphone-link</v-icon>
        </v-avatar>
        <h1 class="text-h4 font-weight-bold text-primary mb-1">ເຂົ້າສູ່ລະບົບ</h1>
        <p class="text-body-2 text-medium-emphasis">ຍິນດີຕ້ອນຮັບເຂົ້າສູ່ ຮ້ານໂທລະສັບມືຖື</p>
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
              color="primary"
              size="large"
              block
              prepend-icon="mdi-login"
              class="text-none font-weight-bold mb-3"
            >
              ເຂົ້າສູ່ລະບົບ
            </v-btn>

            <v-btn
              to="/"
              variant="outlined"
              color="grey-darken-1"
              size="large"
              block
              prepend-icon="mdi-arrow-left"
              class="text-none font-weight-bold"
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