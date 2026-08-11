<template>
    <div>
        <v-card hover flat border class="overflow-hidden">
            <v-row no-gutters align="center">
                <v-col cols="12" md="6" class="pa-8 pa-md-12">
                    <v-chip color="primary" variant="tonal" size="small" class="mb-4 font-weight-bold">
                        ກ່ຽວກັບເຮົາ
                    </v-chip>
                    <h1 class="text-h4 font-weight-bold mb-4">
                        ສູນຈໍາຫນ່າຍໂທລະສັບມືຖື & ອຸປະກອນໄອທີ
                    </h1>
                    <p class="text-body-2 text-medium-emphasis mb-6">
                        ຮ້ານເຮົາເປັນສູນຈຳໜ່າຍໂທລະສັບມືຖື ແລະ ອຸປະກອນໄອທີຄຸນນະພາບສູງ ຂອງແທ້ 100% ພ້ອມໃບຮັບປະກັນສູນຢ່າງເປັນທາງການ.
                    </p>
                    <div class="d-flex ga-3">
                        <v-btn color="primary" variant="flat" size="large" to="/"
                            prepend-icon="mdi-cellphone" class="text-none font-weight-bold px-6">
                            ເລືອກຊື້ສິນຄ້າ
                        </v-btn>
                        <v-btn to="/contact" variant="outlined" color="primary" size="large"
                            prepend-icon="mdi-phone" class="text-none font-weight-bold px-6">
                            ຕິດຕໍ່ເຮົາ
                        </v-btn>
                    </div>
                </v-col>
                <v-col cols="12" md="6">
                    <v-img src="https://images.unsplash.com/photo-1556742049-0a674648c668?auto=format&fit=crop&w=800&q=80"
                        height="380" cover />
                </v-col>
            </v-row>
        </v-card>
    </div>
</template>

<script setup>

</script>