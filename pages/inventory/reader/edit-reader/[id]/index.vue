<script setup>
  definePageMeta({
    title: "Edit Reader",
     // middleware: ["auth"],
     // requiresAuth: true,
  });

 const form = ref ({
    Model:"RFID7003",
    SerialNumber:"SKPP18(2)/2021/CR/20.10",
    Tagnumber:"	SKPP18(2)/2021/CR/20.10",
    SchoolName:"",
    Status:""
  })

const SchoolName = ref([
    { label: "SK PRESINT 18(2)", value:"SK PRESINT 18(2)" },
    { label: "SMK SEKSYEN 18", value:"SMK SEKSYEN 18" },
])

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
    <h4 class="mb-4">Edit Reader</h4>
    </div>
</div>
<FormKit type="form" :actions="false" :incomplete-message="true" @submit="submitForm" id="myForm">
<section>
     <rs-card class="p-5">
        <div class="flex flex-row justify-between"> 
            <div class="basis-1/3 mr-5">
              <FormKit v-model="form.Model" type="text" label="Model" disabled=disabled validation="required|length:0,50" />
            </div>
            <div class="basis-1/3 mr-5">
              <FormKit v-model="form.SerialNumber" type="text" label="Serial number" disabled=disabled validation="required|length:0,100" />  
            </div>
            <div class="basis-1/3 mr-5">
              <FormKit v-model="form.SchoolName" type="select" label="School Name" :options="SchoolName" validation="required"/>
            </div>
          </div>

        <div class="flex flex-row justify-between">
          <div class="basis-1/3">
            <FormKit v-model="form.Status" type="select" :options="statusDropdown" label="Status" validation="required" />
          </div>
        </div>          

     </rs-card>
</section>
 <!--<rs-button btn-type="submit" class="w-full" :disabled="processing">
      {{ processing ? "Saving..." : "Save" }}
    </rs-button>-->

    <nuxt-link :to="`/inventory/reader`">
      <rs-button variant="primary" class="w-64" style="margin-left: 59%;">Close</rs-button>
    </nuxt-link>
    &nbsp;&nbsp;&nbsp;
    <rs-button variant="warning" class="w-64" style="margin-top: -4.5%;margin-left: 80%;">Update</rs-button>
</FormKit>
</template>