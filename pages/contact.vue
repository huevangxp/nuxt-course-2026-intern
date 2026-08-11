<template>
  <div class="d-flex flex-column ga-6">
    <!-- Header Title -->
    <div>
      <h1 class="text-h4 font-weight-bold">ຕິດຕໍ່ເຮົາ (Contact Us)</h1>
      <p class="text-body-2 text-medium-emphasis">ຫາກທ່ານມີຂໍ້ສົງໄສ ຫຼື ຕ້ອງການສອບຖາມຂໍ້ມູນ ກະລຸນາຕື່ມຟອມລຸ່ມນີ້</p>
    </div>

    <!-- Contact Form & Store Info Grid -->
    <v-row>
      <!-- Contact Form Column -->
      <v-col cols="12" md="7">
        <v-card flat border rounded="xl" class="pa-6 pa-md-8">
          <h2 class="text-h5 font-weight-bold mb-4">ຟອມຕິດຕໍ່</h2>
          <v-form @submit.prevent="submitForm">
            <v-row>
              <v-col cols="12" sm="6">
                <v-text-field
                  v-model="form.name"
                  label="ຊື່ ແລະ ນາມສະກຸນ"
                  variant="outlined"
                  density="comfortable"
                  prepend-inner-icon="mdi-account-outline"
                  hide-details="auto"
                  required
                />
              </v-col>

              <v-col cols="12" sm="6">
                <v-text-field
                  v-model="form.phone"
                  label="ເບີໂທລະສັບ"
                  variant="outlined"
                  density="comfortable"
                  prepend-inner-icon="mdi-phone-outline"
                  hide-details="auto"
                  required
                />
              </v-col>

              <v-col cols="12">
                <v-text-field
                  v-model="form.email"
                  label="ອີເມວ"
                  type="email"
                  variant="outlined"
                  density="comfortable"
                  prepend-inner-icon="mdi-email-outline"
                  hide-details="auto"
                />
              </v-col>

              <v-col cols="12">
                <v-select
                  v-model="form.subject"
                  :items="['ສອບຖາມຂໍ້ມູນສິນຄ້າ', 'ບໍລິການສ້ອມແປງ', 'ເທຣດອິນເຄື່ອງ', 'ອື່ນໆ']"
                  label="ຫົວຂໍ້ຕິດຕໍ່"
                  variant="outlined"
                  density="comfortable"
                  prepend-inner-icon="mdi-help-circle-outline"
                  hide-details="auto"
                />
              </v-col>

              <v-col cols="12">
                <v-textarea
                  v-model="form.message"
                  label="ຂໍ້ຄວາມຂອງທ່ານ"
                  variant="outlined"
                  density="comfortable"
                  rows="4"
                  prepend-inner-icon="mdi-message-text-outline"
                  hide-details="auto"
                  required
                />
              </v-col>

              <v-col cols="12">
                <v-btn
                  type="submit"
                  color="primary"
                  size="large"
                  rounded="pill"
                  block
                  prepend-icon="mdi-send"
                  class="text-none font-weight-bold"
                >
                  ສົ່ງຂໍ້ຄວາມ
                </v-btn>
              </v-col>
            </v-row>
          </v-form>
        </v-card>
      </v-col>

      <!-- Store Info Column -->
      <v-col cols="12" md="5">
        <v-card flat border rounded="xl" class="pa-6 pa-md-8 fill-height d-flex flex-column justify-space-between bg-grey-lighten-4">
          <div>
            <h2 class="text-h5 font-weight-bold mb-4 text-primary">ຂໍ້ມູນຕິດຕໍ່ຮ້ານ</h2>
            <div class="d-flex flex-column ga-4">
              <div class="d-flex align-start ga-3">
                <v-avatar color="primary" variant="tonal" size="40">
                  <v-icon size="20">mdi-map-marker</v-icon>
                </v-avatar>
                <div>
                  <div class="font-weight-bold text-subtitle-2">ທີ່ຢູ່ຮ້ານ</div>
                  <div class="text-body-2 text-medium-emphasis">ຖະໜົນລ້ານຊ້າງ, ນະຄອນຫຼວງວຽງຈັນ, ປະເທດລາວ</div>
                </div>
              </div>

              <div class="d-flex align-start ga-3">
                <v-avatar color="success" variant="tonal" size="40">
                  <v-icon size="20">mdi-phone</v-icon>
                </v-avatar>
                <div>
                  <div class="font-weight-bold text-subtitle-2">ເບີໂທລະສັບ</div>
                  <div class="text-body-2 text-medium-emphasis">+856 20 5555 9999</div>
                </div>
              </div>

              <div class="d-flex align-start ga-3">
                <v-avatar color="warning" variant="tonal" size="40">
                  <v-icon size="20">mdi-email</v-icon>
                </v-avatar>
                <div>
                  <div class="font-weight-bold text-subtitle-2">ອີເມວ</div>
                  <div class="text-body-2 text-medium-emphasis">contact@phonestore.la</div>
                </div>
              </div>

              <div class="d-flex align-start ga-3">
                <v-avatar color="info" variant="tonal" size="40">
                  <v-icon size="20">mdi-clock-outline</v-icon>
                </v-avatar>
                <div>
                  <div class="font-weight-bold text-subtitle-2">ເວລາເປີດບໍລິການ</div>
                  <div class="text-body-2 text-medium-emphasis">ເປີດບໍລິການທຸກມື້: 08:00 - 20:00</div>
                </div>
              </div>
            </div>
          </div>

          <v-divider class="my-6" />

          <div>
            <div class="font-weight-bold text-subtitle-2 mb-2">ຕິດຕາມເຮົາໄດ້ທີ່</div>
            <div class="d-flex ga-2">
              <v-btn icon="mdi-facebook" variant="tonal" color="primary" size="small" />
              <v-btn icon="mdi-whatsapp" variant="tonal" color="success" size="small" />
              <v-btn icon="mdi-instagram" variant="tonal" color="purple" size="small" />
            </div>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  name: '',
  phone: '',
  email: '',
  subject: 'ສອບຖາມຂໍ້ມູນສິນຄ້າ',
  message: ''
})

const submitForm = () => {
  alert('ຂອບໃຈສໍາລັບການຕິດຕໍ່! ທີມງານເຮົາຈະຕິດຕໍ່ກັບໂດຍໄວ.')
  form.value = {
    name: '',
    phone: '',
    email: '',
    subject: 'ສອບຖາມຂໍ້ມູນສິນຄ້າ',
    message: ''
  }
}
</script>