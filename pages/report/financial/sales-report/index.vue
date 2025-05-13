<script setup>
definePageMeta({
  title: "Claims Report",
  
});

const TransactionTypeDropdown = ref([
  { label: "Choose status", value: "" },
  { label: "Online", value: "Online" },
  { label: "Payment", value: "Payment" },
  { label: "Reload", value: "Reload" },  
  { label: "Transfer to Others", value: "Transfer to Others" },    
]);


const stateDropdown = ref([
  { label: "Choose state", value: "" },
  { label: "Selangor", value: "Selangor" },
  { label: "Kuala Lumpur", value: "Kuala Lumpur" },
  { label: "Putrajaya", value: "Putrajaya" },  
  { label: "Perak", value: "Perak" },
  { label: "Perlis", value: "Perlis" },
  { label: "Pulau Pinang", value: "Pulau Pinang" },    
]);

const schoolDropdown = ref([  
  { label: "Select School", value: "" },
  { label: "SMK Seksyen 18 Shah Alam", value: "SMK Seksyen 18 Shah Alam" },
  { label: "MRSM Lenggong", value: "MRSM Lenggong" },
  { label: "Smk Taman Tun Dr Ismail", value: "Smk Taman Tun Dr Ismail" },
]);

const districtDropdown = ref([
  { label: "Choose district", value: "" },
  { label: "Gombak", value: "Gombak" },
  { label: "Hulu Langat", value: "Hulu Langat" },
  { label: "Hulu Selangor", value: "Hulu Selangor" },  
  { label: "Klang", value: "Klang" },
  { label: "Kuala Selangor", value: "Kuala Selangor" },
  { label: "Petaling", value: "Petaling" },    
])

const form = ref({  
    Status:""    
})

const data = [
{   
    "#":"0001",
    "Company Name": "KEMBARA DESA RESOURCES", 
    "Date Transation": "2025-04-01", 
    "Serial Number": "202306170100029",
    "Sales Amount": "CR 5000",
  }, 
  {   
    "#":"0002",
     "Company Name": "MAHAT HASHIM ENTERPRISE", 
     "Date Transation": "2025-04-30", 
     "Serial Number": "202306170100043", 
     "Sales Amount": "CR 3500",
  },       
]

</script>

<template>
<div>
    <div>
      <div class="flex justify-between">
        <h4 class="mb-4 uppercase">Search Sales Report</h4>
      </div>
    </div>
<!-- SEARCH FUNCTION -->
   <rs-card class="p-5">
       <FormKit type="form" :actions="false" :incomplete-message="true" @submit="submitForm">
        <section>                         
          <div class="flex flex-row justify-between"> 
            <div class="basis-1/3 mr-5">
              <FormKit v-model="form.School" type="select"          
              :options="schoolDropdown"
              label="School" 
              validation="required|length:0,50" /> 
            </div>
            <div class="basis-1/3 mr-5">
              <FormKit v-model="form.State" type="select"          
              :options="stateDropdown"
              label="State" 
              validation="required|length:0,50" />
            </div>
            <div class="basis-1/3 mr-5">
                <FormKit v-model="form.District" type="select"          
                :options="districtDropdown"
                label="District" 
                validation="required|length:0,50" />
            </div>
          </div>
          <div class="flex flex-row justify-between"> 
            <div class="basis-1/3 mr-5">
              <FormKit v-model="form.StartDate" type="date" label="Date From" validation="required|length:0,50" /> 
            </div>
            <div class="basis-1/3 mr-5">
              <FormKit v-model="form.Enddate" type="date" label="Date To" validation="required|length:0,50" />  
            </div>
              <div class="basis-1/3 mr-5">
              </div>
          </div>
        </section>
       </FormKit>
     <div>
      
      <nuxt-link :to="`/myForm`">
        <rs-button variant="warning" class="w-64" style="margin-top: -0.5%;margin-left: 91%;width: 9%;">Search</rs-button>
      </nuxt-link>  
      <nuxt-link :to="`/myForm`">
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
                      <nuxt-link :to="`/report/financial/claims-report/edit-claims/[id]`">
                        <rs-button
                        variant="warning"
                        >
                        <Icon name="material-symbols:edit-outline" /> 
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