<script setup>

definePageMeta({
  title: "Add New Access Point",
   // middleware: ["auth"],
   // requiresAuth: true,
});

const form = ref({
Model : "",
SerialNumber : "",
TagNumber : "",
Description : "",
Status : "",
})

const statusDropdown = ref([
  { label: "Active", value: "Active" },
  { label: "Repair", value: "Repair" },
  { label: "In stock", value: "In Stock" },
  { label: "Faulty", value: "Faulty" },
  { label: "Missing", value: "Missing" },
]);

</script>

<template>
 <div>
    <div class="flex justify-between">
    <h4 class="mb-4 uppercase"></h4>
    </div>
</div>

<FormKit type="form" :actions="false" :incomplete-message="true" @submit="submitForm">
<section>
      <rs-card class="p-5">
          <div class="flex justify-between items-center mb-5">
              <div>
              <h5 class="font-semibold">New Access Point</h5>
              <span class="text-sm text-gray-500">
                  
              </span>
              </div>
          </div>

          <div class="flex flex-row justify-between"> 
            <div class="basis-1/3 mr-5">
              <FormKit v-model="form.model" type="number" label="Model" placeholder="Enter AP model" validation="required|length:0,50" />
            </div>
            <div class="basis-1/3 mr-5">
              <FormKit v-model="form.SerialNumber" type="text" label="Serial number" placeholder="Enter serial number" validation="required|length:0,100" />  
            </div>
            <div class="basis-1/3 mr-5">
              <FormKit v-model="form.TagNumber" type="text" label="Tag number" placeholder="Enter tag number" validation="required|length:0,100"/>
            </div>
          </div>

          <div class="flex flex-row justify-between"> 
              <div class="basis-1/2 mr-5">
                <!--<FormKit v-model="form.Description" type="textarea" placeholder="This is a placeholder" rows="8" label="Description"/>-->
                <FormKit v-model="form.Description" type="text" placeholder="Enter description" label="Description"/>
              </div>
              <div class="basis-1/2">
                <FormKit v-model="form.status" type="select" :options="statusDropdown" label="Status" validation="required" />
              </div>              
           </div>

      </rs-card>
</section>

<!--<rs-button btn-type="submit" class="w-full" :disabled="processing">
      {{ processing ? "Saving..." : "Save" }}
    </rs-button>-->

    <nuxt-link :to="`/inventory/access-point`">
      <rs-button variant="primary" class="w-64" style="margin-left: 59%;">Close</rs-button>
    </nuxt-link>
    &nbsp;&nbsp;&nbsp;
    <rs-button variant="warning" class="w-64" style="margin-top: -4.5%;margin-left: 80%;">Save</rs-button>

 </FormKit>
</template>