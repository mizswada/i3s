<script setup>
  definePageMeta({
    title: "Edit Card",
     // middleware: ["auth"],
     // requiresAuth: true,
  });

const card_no = ref([
  { label: "Choose Card Number", value: null},
  { label: "202000005501", value: "202000005501"},
  { label: "202000005502", value: "202000005502"}
])

 const form = ref ({
    CardNumber : "202000005501",
    HexID:"",
    Status:""
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
    <h4 class="mb-4">Edit Card</h4>
    </div>
</div>

<FormKit type="form" :actions="false" :incomplete-message="true" @submit="submitForm" id="myForm">
<section>
      <rs-card class="p-5">

          <div class="flex flex-row justify-between"> 
            <div class="basis-1/3 mr-5">
              <FormKit v-model="form.CardNumber" type="number" label="Card Number" disabled=disabled />
            </div>
            
            <div class="basis-1/3 mr-5">
              <FormKit v-model="form.HexID" type="text" label="HexID" validation="required|length:0,10"/>
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
    <rs-button variant="warning" class="w-64" style="margin-top: -4.5%;margin-left: 80%;">Update</rs-button>

 </FormKit>
 </template>