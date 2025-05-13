<script setup>
definePageMeta({
  title: "Add New Network Switch",
   // middleware: ["auth"],
   // requiresAuth: true,
});

const form = ref({
    Id:"",
    model: "",
    type : "",
    serialNumber: "",
    description: "",       
    status: "",
    Action: "",
    nombor:""
})

const statusDropdown = ref([
  { label: "Choose status", value: "" },
  { label: "Active", value: "Active" },
  { label: "Missing", value: "Missing" },
  { label: "In stock", value: "In Stock" },
  { label: "Faulty", value: "Faulty" },
  { label: "Repair", value: "Repair" },
]);

const typeDropdown = ref([
  { label: "Choose type", value: "" },
  { label: "Simcard", value: "Simcard" },
  { label: "Switch", value: "Switch" }, 
]);


</script>
<template>
  <div>
    <div>
      <div class="flex justify-between">
        <h4 class="mb-4 uppercase">Inventory Network Switch</h4>
      </div>
    </div>

    <FormKit type="form" :actions="false" :incomplete-message="true" @submit="submitForm">
        <rs-card class="p-5">
          <div class="flex justify-between items-center mb-5">
              <div>
              <h5 class="font-semibold">New Network</h5>
              <span class="text-sm text-gray-500">                  
              </span>
              </div>
          </div>
          <div class="flex flex-row justify-between"> 
            <div class="basis-1/3 mr-5">
              <FormKit v-model="form.model" type="text" label="Model" placeholder="Enter model" validation="required|length:0,50" />
            </div>
            
            <div class="basis-1/3 mr-5">
              <FormKit v-model="form.type" type="select" :options="typeDropdown" label="Type of Network" validation="required|length:0,20" />
            </div>

            <div class="basis-1/3 mr-5">
              <FormKit v-model="form.serialNumber" type="text" placeholder="Enter Serial number/PUK Code" label="Serial number/PUK Code" validation="required|length:0,100"/>
            </div>
          </div>

          <div class="flex flex-row justify-between"> 
            <div class="basis-1/2 mr-5">
              <FormKit v-model="form.description" type="text" placeholder="Enter description" label="Description"/>
            </div>
            <div class="basis-1/2">
              <FormKit v-model="form.status" type="select" :options="statusDropdown" label="Status" validation="required|length:0,20" />
            </div>
          </div>
      </rs-card>
      
      <nuxt-link :to="`/inventory/network-switch`">
      <rs-button variant="primary" class="w-64" style="margin-left: 59%;">Close</rs-button>
      </nuxt-link>
      &nbsp;&nbsp;&nbsp;
      <rs-button variant="warning" class="w-64" style="margin-top: -4.5%;margin-left: 80%;">Save</rs-button>

    </FormKit>
  </div>
</template>