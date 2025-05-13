<script setup>

definePageMeta({
  title: "Edit Public Holiday",
  
});

const form = ref({
  holidayName: "",
  startDate: "",
  endDate: "",
  state: "",
})

const statusDropdown = ref([
  { label: "Active", value: "ACTIVE" },
  { label: "Inactive", value: "INACTIVE" },
]);

const stateDropdown = ref([
  { label: "Selangor", value: "Selangor" },
  { label: "Terengganu", value: "Terengganu" },
  { label: "Pahang", value: "Pahang" },
  { label: "Kelantan", value: "Kelantan" },
  { label: "Melaka", value: "Melaka" },
  { label: "Negeri Sembilan", value: "Negeri Sembilan" },
  { label: "Johor", value: "Johor" },
  { label: "Kedah", value: "Kedah" },

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
              <h5 class="font-semibold">Edit Public Holiday</h5>
              <span class="text-sm text-gray-500">
                  Information about the public holiday
              </span>
              </div>
          </div>

          <FormKit v-model="form.holidayName" type="text" label="Holiday Name" validation="required|length:0,200"/> 
          <FormKit v-model="form.startDate" type="date" label="Start Date" validation="required|length:0,200" /> 
          <FormKit v-model="form.endDate" type="date" label="End Date" validation="required|length:0,200"/>            
          <FormKit v-model="form.state" type="select" :options="stateDropdown" label="State" validation="required"/>      

        </rs-card>

      </section>
      <!--<rs-button btn-type="submit" class="w-full" :disabled="processing">
        {{ processing ? "Saving..." : "Save" }}
      </rs-button>-->

      <nuxt-link :to="`/settings/public-holiday`">
        <rs-button class="w-64" style="margin-left: 59%;">Cancel</rs-button>
      </nuxt-link>
      &nbsp;&nbsp;&nbsp;
      <rs-button variant="warning" class="w-64" style="margin-top: -4.5%;margin-left: 80%;">Update</rs-button>

    </FormKit>
  </div>
</template>
