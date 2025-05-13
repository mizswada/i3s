<script setup>
definePageMeta({
  title: "Report Merchant Claims ",
  
});

const schoolDropdown = ref([  
  { label: "Select School", value: "" },
  { label: "SMK Seksyen 18 Shah Alam", value: "SMK Seksyen 18 Shah Alam" },
  { label: "MRSM Lenggong", value: "MRSM Lenggong" },
  { label: "Smk Taman Tun Dr Ismail", value: "Smk Taman Tun Dr Ismail" },
]);

const statusDropdown = ref([
  { label: "Choose status", value: "" },
  { label: "Paid", value: "Paid" },
  { label: "Unpaid", value: "Unpaid" },
    
]);

const paymentMethodDropdown = ref([
  { label: "Choose payment method", value: "" },
  { label: "Online", value: "Online" },
  { label: "POS Terminal", value: "POS Terminal" },
  { label: "QR Code", value: "QR Code" }, 
  
])

const data = [
  {
      id: 1,
      "date transaction": "2025-04-29",
      "merchant name": "Paraliza",
      "total sales": "CR 100",
      status: "Claims",
      Action: "",
  }, 
  {   
      id: 2,
      "date transaction": "2025-04-29",
      "merchant name": "Mawarni",
      "total sales": "CR 100",
      status: "Claims",
      Action: "",
  },  
  {   
      id: 3,
       "date transaction": "2025-04-29",
      "merchant name": "Noryuslaihis",
      "total sales": "CR 100",
      status: "Unclaims",
      Action: "",
  },  
]

 const form = ref({
    paymentMethod: "",
    merchantName: "",
    dateFrom: "",
    dateTo: "",
    status: "",
    Action: "",
  });

</script>

<template>
<div>
    <div>
      <div class="flex justify-between">
        <h4 class="mb-4 uppercase">Search Merchant Claims</h4>
      </div>
    </div>

<!-- SEACRH FUNCTION -->
   <rs-card class="p-5">
    <div class="p-5">
       <FormKit type="form" :actions="false" :incomplete-message="true" @submit="submitForm">
        <div class="flex flex-row justify-between">             

            <div class="basis-1/2 mr-5">
                <FormKit v-model="form.merchantName" type="text" label = "Merchant Name" validation="required" ></FormKit>
            </div>

            <div class="basis-1/2 mr-5">                   
                <FormKit v-model="form.status" type="select"          
                :options="statusDropdown"
                label="Status" 
                validation="required">
                
                <template #label>
                <label class="formkit-label text-gray-700 dark:text-gray-200 block mb-2 font-semibold text-sm formkit-invalid:text-red-500">Status <span class="text-danger">*</span></label>
                </template>
                </FormKit>  
            </div>
        </div>
        <div class="flex flex-row justify-between">
              <div class="basis-1/2 mr-5">
                <FormKit v-model="form.dateFrom" type="date" label = "Date From" validation="required" ></FormKit>
            </div>
              <div class="basis-1/2 mr-5">
                <FormKit v-model="form.dateTo" type="date" label = "Date To" validation="required" ></FormKit>
            </div>           
        </div>
       </FormKit>
    
      
      <nuxt-link :to="`/myForm`">
        <rs-button variant="warning" class="w-64" style="margin-top: -0.5%;margin-left: 91%;width: 9%;">Search</rs-button>
      </nuxt-link>

      <nuxt-link :to="`/`">
        <rs-button variant="primary" class="w-64" style="margin-top: -2.8%;margin-left: 81%;width: 9%;">Clear</rs-button>
      </nuxt-link>
    </div>
   </rs-card>
    
    <rs-card class="p-5">
      <FormKit type="form" :actions="false" :incomplete-message="true" @submit="submitForm">
        <section>
            <rs-table
              :data="data"
              :options="{
               variant: 'default',
               striped: true,
               bordered: true,
               borderless: true,
               hover: true,
               fixed: false,
               }"
               advanced
               class="mt-4"
               >
               <template v-slot:Action="data">
                 <div class="flex flex-row gap-x-2">
                   <div class="flex items-center gap-x-2">
                      <nuxt-link :to="`/report/merchants/merchant-claims/viewmerchant-claims/`">
                        <rs-button variant="warning">
                        <Icon name="ion:eye-outline" /> 
                        </rs-button>
                      </nuxt-link>
                    </div>            
                  </div>
                </template>
             </rs-table>
        </section>
      </FormKit>
    </rs-card>
  </div>        
</template>