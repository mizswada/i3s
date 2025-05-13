<script setup>
definePageMeta({
  title: "Claims Report",
  
});

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

const form = ref({  
    month:"",
    state:"",    
})

const data = [
{   
    "#":"0001",
    "School": "SMK Seksyen 18 Shah Alam", 
    "Email": "smks18@moe.edu.my", 
    "Contact Number": "037555555",
    "Principal Name": "HAFIZAH BINTI ABDUL SAMAD",
   
  }, 
  {   
    "#":"0002",
    "School": "SK Putrajaya Presint 18(2)", 
    "Email": "skpp18@moe.edu.my", 
    "Contact Number": "037555000",
    "Principal Name": "HAJAH ROHANA BT JUSOH",
  }, 
  {   
    "#":"0003",
    "School": "SMK Damansara Jaya", 
    "Email": "smkdj@moe.edu.my", 
    "Contact Number": "037556018",
    "Principal Name": "AHMAD EZZAT",
  },       
]

</script>
<template>
<div>
    <div>
      <div class="flex justify-between">
        <h4 class="mb-4 uppercase">School Registration Details</h4>
      </div>
    </div>
<!-- SEARCH FUNCTION -->
   <rs-card class="p-5">
       <FormKit type="form" :actions="false" :incomplete-message="true" @submit="submitForm">
        <section>                         
                  
            <!--<FormKit v-model="form.School" type="select"          
            :options="schoolDropdown"
            label="School" 
            validation="required|length:0,50" /> 

           <FormKit v-model="form.Transaction" type="select"          
            :options="TransactionTypeDropdown"
            label="Transaction Type" 
            validation="required|length:0,50" />-->
                  
           <FormKit v-model="form.month" type="month" label="Month" validation="required|length:0,50" />

           <FormKit v-model="form.state" type="select"          
            :options="stateDropdown"
            label="State" 
            validation="required|length:0,50" />
            
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
               class="mt-4" > 
               <!--<template v-slot:Action="data">
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
                </template>-->
             </rs-table>
        </section>
      </FormKit>
    </rs-card>
  </div>        
</template>