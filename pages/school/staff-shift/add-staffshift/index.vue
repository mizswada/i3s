<script setup>

definePageMeta({
  title: "Add Staff Shift",
  
});

const form = ref({
  staffShiftCode: "",
  startTime: "",
  endTime: ""
})

const statusDropdown = ref([
  { label: "Active", value: "ACTIVE" },
  { label: "Inactive", value: "INACTIVE" },
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
              <h5 class="font-semibold">Add Staff Shift</h5>
              <span class="text-sm text-gray-500">
                  Information about the staff shift
              </span>
              </div>
          </div>

          <FormKit
            v-model="form.staffShiftCode"
            type="text"
            label="Staff Shift Code"
            validation="required|length:0,200"          
          />

          <FormKit
            v-model="form.startTime"
            type="time"
            label="Start Time"
            rows="3"
            validation="required|length:0,200"            
          />

          <FormKit
            v-model="form.endTime"
            type="time"
            label="End Time"
            validation="required|length:0,200"        
          />      

          <!-- <FormKit
            v-model="form.status"
            type="select"
            :options="statusDropdown"
            label="Status"
            validation="required|length:0,200" 
          /> -->
        </rs-card>

      </section>
      <nuxt-link :to="`/school/staff-shift`">
          <rs-button variant="primary" class="w-64" style="margin-left: 59%;">Close</rs-button>
        </nuxt-link>
        &nbsp;&nbsp;&nbsp;
        <rs-button variant="warning" class="w-64" style="margin-top: -4.5%;margin-left: 80%;">Save</rs-button>
    </FormKit>
  </div>
</template>
