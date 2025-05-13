<script setup>

definePageMeta({
  title: "Add New Card",
   // middleware: ["auth"],
   // requiresAuth: true,
});

const form = ref({
 CardNumber : "",
 HexID : "",
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
              <h5 class="font-semibold">Add New Card</h5>
              <span class="text-sm text-gray-500">
                  
              </span>
              </div>
          </div>

          <div class="flex flex-row justify-between"> 
            <div class="basis-1/3 mr-5">
              <FormKit v-model="form.CardNumber" type="number" label="Card Number" placeholder="Enter card number" validation="required|length:0,20" />
            </div>
            
            <div class="basis-1/3 mr-5">
              <FormKit v-model="form.HexID" type="text" label="HexID" placeholder="Enter HexID" validation="required|length:0,10"/>
            </div>

            <div class="basis-1/3 mr-5">
              <FormKit v-model="form.status" type="select" :options="statusDropdown" label="Status" validation="required" />
            </div>
          </div>
      </rs-card>
</section>
     <!--<rs-button btn-type="submit" class="w-full" :disabled="processing">
      {{ processing ? "Saving..." : "Save" }}
    </rs-button>-->

    <nuxt-link :to="`/inventory/card`">
      <rs-button variant="primary" class="w-64" style="margin-left: 59%;">Close</rs-button>
    </nuxt-link>
    &nbsp;&nbsp;&nbsp;
    <rs-button variant="warning" class="w-64" style="margin-top: -4.5%;margin-left: 80%;">Save</rs-button>

 </FormKit>
</template>