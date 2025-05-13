<script setup>

definePageMeta({
  title: "Add School Holiday",
  
});

const form = ref({
  holidayName: "",
  startDate: "",
  endDate: "",
  school: "",
})

const statusDropdown = ref([
  { label: "Active", value: "ACTIVE" },
  { label: "Inactive", value: "INACTIVE" },
]);

const schoolDropdown = ref([
  { label: "SMK Shah Alam", value: "Selangor" },
  { label: "SK Pandan", value: "Terengganu" },
  { label: "SK Saujana Impian 2", value: "SK Saujana Impian 2" },
  { label: "SMK Seksyen 18 Shah Alam", value: "SMK Seksyen 18 Shah Alam" },
  { label: "MRSM Lenggong", value: "MRSM Lenggong" },
  { label: "Smk Taman Tun Dr Ismail", value: "Smk Taman Tun Dr Ismail" },
  { label: "Greenview International School", value: "Greenview International School" },

]);

</script>

<template>
  <div>
    <div class="flex justify-between">
    <h4 class="mb-4 uppercase"></h4>
    </div>

    <FormKit type="form" :actions="false" :incomplete-message="true" @submit="submitForm">
      <section>
        <rs-card class="p-5">
          <div class="flex justify-between items-center mb-5">
              <div>
              <h5 class="font-semibold">Add School Holiday</h5>
              <span class="text-sm text-gray-500">
                  Information about the school holiday
              </span>
              </div>
          </div>

          <FormKit v-model="form.holidayName" type="text" label="Holiday Name" validation="required|length:0,200"/> 
          <FormKit v-model="form.startDate" type="date" label="Start Date" validation="required|length:0,200" /> 
          <FormKit v-model="form.endDate" type="date" label="End Date" validation="required|length:0,200"/>   
          <FormKit v-model="form.school" type="select" :options="schoolDropdown" label="School" validation="required"/>

                   
        </rs-card>

      </section>
      <nuxt-link :to="`/settings/school-holiday`">
        <rs-button class="w-64" style="margin-left: 59%;">Cancel</rs-button>
      </nuxt-link>
      &nbsp;&nbsp;&nbsp;
      <rs-button variant="warning" class="w-64" style="margin-top: -4.5%;margin-left: 80%;">Save</rs-button>
    </FormKit>
  </div>
</template>
