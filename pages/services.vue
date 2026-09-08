<template>
  <div class="d-flex flex-column ga-6">
    <!-- Header Title -->
    <div class="d-flex align-center justify-space-between">
      <div>
        <h1 class="text-h4 font-weight-bold">ບໍລິການຂອງເຮົາ (Services)</h1>
        <p class="text-body-2 text-medium-emphasis">ບໍລິການສ້ອມແປງ, ເທຣດອິນ ແລະ ດູແລໂທລະສັບມືຖືຄົບວົງຈອນ</p>
      </div>
    </div>

    <!-- Services Grid -->
    <v-row>
      <v-col
        v-for="(service, index) in services"
        :key="index"
        cols="12"
        sm="6"
        md="3"
      >
        <v-card
          hover
          flat
          border
          class="fill-height d-flex flex-column pa-5"
        >
          <v-avatar :color="service.color" variant="tonal" size="56" class="mb-4">
            <v-icon size="28">{{ service.icon }}</v-icon>
          </v-avatar>

          <h3 class="text-subtitle-1 font-weight-bold mb-2">
            {{ service.title }}
          </h3>

          <p class="text-caption text-medium-emphasis mb-4 flex-grow-1">
            {{ service.desc }}
          </p>

          <v-btn
            color="primary"
            variant="tonal"
            size="small"
            block
            class="text-none font-weight-bold"
          >
            ໃຊ້ບໍລິການ
          </v-btn>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
const services = [
  {
    icon: 'mdi-cellphone-cog',
    title: 'ແປງໂທລະສັບ & ປ່ຽນອາໄຫຼ່',
    desc: 'ບໍລິການສ້ອມແປງໂທລະສັບມືຖື, ປ່ຽນໜ້າຈໍ, ປ່ຽນແບັດເຕີຣີ ດ້ວຍອາໄຫຼ່ແທ້.',
    color: 'primary'
  },
  {
    icon: 'mdi-shield-cellphone',
    title: 'ຕິດຟີມ & ປະກັນໜ້າຈໍ',
    desc: 'ບໍລິການຕິດຟີມກັນຮອຍ, ຟີມກະຈົກ ພ້ອມປະກັນໜ້າຈໍແຕກ 6 ເດືອນ.',
    color: 'success'
  },
  {
    icon: 'mdi-swap-horizontal-bold',
    title: 'ເທຣດອິນ ເຄື່ອງເກົ່າແລກໃໝ່',
    desc: 'ຮັບຊື້ ແລະ ເທຣດອິນ ເຄື່ອງເກົ່າແລກເຄື່ອງໃໝ່ ໃຫ້ລາຄາສູງ ແລະ ປະເມີນໄວ.',
    color: 'warning'
  },
  {
    icon: 'mdi-credit-card-chip-outline',
    title: 'ບໍລິການຜ່ອນ 0%',
    desc: 'ບໍລິການຜ່ອນໂທລະສັບດອກບ້ຽຸ 0% ສູງສຸດ 12 ເດືອນ ເງື່ອນໄຂອະນຸມັດງ່າຍ.',
    color: 'info'
  }
]
</script>