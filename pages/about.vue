<template>
  <div class="d-flex flex-column ga-8">
    <!-- Store Banner & Introduction -->
    <v-card flat border rounded="xl" class="overflow-hidden">
      <v-row no-gutters align="center">
        <v-col cols="12" md="6" class="pa-8 pa-md-12">
          <v-chip color="primary" variant="tonal" size="small" class="mb-4 font-weight-bold">
            ກ່ຽວກັບຮ້ານເຮົາ (About Our Store)
          </v-chip>
          <h1 class="text-h3 font-weight-bold mb-4 text-primary">
            ສູນຈໍາຫນ່າຍໂທລະສັບ & ອຸປະກອນໄອທີ
          </h1>
          <p class="text-body-1 text-medium-emphasis mb-6">
            ຮ້ານເຮົາເປັນສູນຈຳໜ່າຍໂທລະສັບມືຖື ແລະ ອຸປະກອນໄອທີຄຸນນະພາບສູງ ຂອງແທ້ 100% ພ້ອມໃບຮັບປະກັນສູນຢ່າງເປັນທາງການ. ເຮົາມຸ່ງໝັ້ນທີ່ຈະມອບສິນຄ້າທີ່ດີທີ່ສຸດ ແລະ ບໍລິການທີ່ປະທັບໃຈໃຫ້ກັບລູກຄ້າທຸກທ່ານ.
          </p>
          <div class="d-flex ga-4">
            <v-btn
              color="primary"
              size="large"
              rounded="pill"
              elevation="2"
              to="/"
              prepend-icon="mdi-cellphone-link"
              class="text-none font-weight-bold px-6"
            >
              ເລືອກຊື້ສິນຄ້າ
            </v-btn>
            <v-btn
              to="/contact"
              variant="outlined"
              color="primary"
              size="large"
              rounded="pill"
              prepend-icon="mdi-phone"
              class="text-none font-weight-bold px-6"
            >
              ຕິດຕໍ່ເຮົາ
            </v-btn>
          </div>
        </v-col>
        <v-col cols="12" md="6">
          <v-img
            src="https://images.unsplash.com/photo-1556742049-0a674648c668?auto=format&fit=crop&w=800&q=80"
            height="400"
            cover
          />
        </v-col>
      </v-row>
    </v-card>

    <!-- Key Statistics -->
    <v-row>
      <v-col v-for="(stat, i) in stats" :key="i" cols="12" sm="6" md="3">
        <v-card flat border rounded="lg" class="pa-5 text-center">
          <v-avatar :color="stat.color" variant="tonal" size="56" class="mb-3">
            <v-icon size="28">{{ stat.icon }}</v-icon>
          </v-avatar>
          <div class="text-h4 font-weight-bold text-primary">{{ stat.count }}</div>
          <div class="text-subtitle-2 font-weight-medium text-medium-emphasis mt-1">{{ stat.label }}</div>
        </v-card>
      </v-col>
    </v-row>

    <!-- Why Choose Us Features -->
    <div>
      <div class="text-center mb-8">
        <h2 class="text-h4 font-weight-bold">ເຫດຜົນທີ່ຄວນເລືອກຮ້ານເຮົາ</h2>
        <p class="text-body-2 text-medium-emphasis">ມາດຕະຖານການບໍລິການ ແລະ ສິນຄ້າຄຸນນະພາບທີ່ທ່ານໄວ້ວາງໃຈໄດ້</p>
      </div>

      <v-row>
        <v-col v-for="(feature, i) in features" :key="i" cols="12" sm="6" md="3">
          <v-card hover flat border rounded="lg" class="pa-6 fill-height d-flex flex-column text-center">
            <v-avatar :color="feature.color" size="64" class="mx-auto mb-4">
              <v-icon size="32" color="white">{{ feature.icon }}</v-icon>
            </v-avatar>
            <h3 class="text-h6 font-weight-bold mb-2">{{ feature.title }}</h3>
            <p class="text-body-2 text-medium-emphasis">{{ feature.desc }}</p>
          </v-card>
        </v-col>
      </v-row>
    </div>

    <!-- Store Contact & Info Card -->
    <v-card color="grey-lighten-4" flat border rounded="xl" class="pa-8 pa-md-10">
      <v-row align="center">
        <v-col cols="12" md="8">
          <h3 class="text-h5 font-weight-bold mb-2 text-primary">
            ຂໍ້ມູນຕິດຕໍ່ & ທີ່ຕັ້ງຮ້ານ
          </h3>
          <div class="d-flex flex-column ga-2 text-body-1 text-medium-emphasis">
            <div class="d-flex align-center ga-2">
              <v-icon color="primary">mdi-map-marker</v-icon>
              <span>ທີ່ຢູ່: ຖະໜົນລ້ານຊ້າງ, ນະຄອນຫຼວງວຽງຈັນ, ປະເທດລາວ</span>
            </div>
            <div class="d-flex align-center ga-2">
              <v-icon color="primary">mdi-phone</v-icon>
              <span>ໂທລະສັບ: +856 20 5555 9999</span>
            </div>
            <div class="d-flex align-center ga-2">
              <v-icon color="primary">mdi-clock-outline</v-icon>
              <span>ເວລາເປີດບໍລິການ: ເປີດບໍລິການທຸກມື້ 08:00 - 20:00</span>
            </div>
          </div>
        </v-col>
        <v-col cols="12" md="4" class="text-md-end">
          <v-btn
            color="primary"
            size="large"
            rounded="pill"
            to="/contact"
            prepend-icon="mdi-email-outline"
            class="text-none font-weight-bold px-8"
          >
            ສົ່ງຂໍ້ຄວາມຫາເຮົາ
          </v-btn>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script setup>
const stats = [
  { icon: 'mdi-account-group', count: '10,000+', label: 'ລູກຄ້າທີ່ໄວ້ວາງໃຈ', color: 'primary' },
  { icon: 'mdi-cellphone', count: '50+', label: 'ແບຣນໂທລະສັບຊັ້ນນໍາ', color: 'success' },
  { icon: 'mdi-storefront', count: '5+', label: 'ສາຂາທົ່ວປະເທດ', color: 'warning' },
  { icon: 'mdi-shield-check', count: '100%', label: 'ປະກັນສູນແທ້', color: 'info' }
]

const features = [
  {
    icon: 'mdi-check-decagram',
    title: 'ຂອງແທ້ 100%',
    desc: 'ສິນຄ້າແທ້ຈາກແບຣນດັງ ພ້ອມໃບຮັບປະກັນສູນຢ່າງເປັນທາງການ.',
    color: 'primary'
  },
  {
    icon: 'mdi-truck-fast',
    title: 'ຈັດສົ່ງໄວທົ່ວປະເທດ',
    desc: 'ບໍລິການຈັດສົ່ງເຖິງທີ່ຢ່າງປອດໄພ ແລະ ວ່ອງໄວທົ່ວປະເທດລາວ.',
    color: 'success'
  },
  {
    icon: 'mdi-credit-card-outline',
    title: 'ຜ່ອນ 0% ເງື່ອນໄຂງ່າຍ',
    desc: 'ບໍລິການຜ່ອນຊຳລະສະດວກ ສະບາຍ ດ້ວຍອັດຕາດອກບ້ຽຸເສດ.',
    color: 'warning'
  },
  {
    icon: 'mdi-headset',
    title: 'ບໍລິການຫຼັງການຂາຍ',
    desc: 'ທີມງານຊ່ຽວຊານຄອຍດູແລ ແລະ ໃຫ້ຄຳປຶກສາຕະຫຼອດເວລາ.',
    color: 'info'
  }
]
</script>