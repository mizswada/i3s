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

const schoolDropdown = ref([  
  { label: "Select School", value: "" },
  { label: "SMK Seksyen 18 Shah Alam", value: "SMK Seksyen 18 Shah Alam" },
  { label: "MRSM Lenggong", value: "MRSM Lenggong" },
  { label: "Smk Taman Tun Dr Ismail", value: "Smk Taman Tun Dr Ismail" },
]);

const form = ref({  
    username:""    
})

const data = [
{   
    "#":"0001",
    "ID/Username": "880627002211", 
    "Fullname": "Maisarah", 
    "Role Type": "Student",
    "Card Number": "202100025251",
   
  }, 
  {   
    "#":"0002",
    "ID/Username": "890628115555", 
    "Fullname": "Tun Aminah", 
    "Role Type": "Student",
    "Card Number": "202100025001",
  }, 
  {   
    "#":"0003",
    "ID/Username": "701202114444", 
    "Fullname": "Tun Aminah", 
    "Role Type": "Parent",
    "Card Number": "",
  },       
]

</script>
<template>
<div>
    <div>
      <div class="flex justify-between">
        <h4 class="mb-4 uppercase">User Registration Details</h4>
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
                  
           <FormKit v-model="form.username" type="text" label="Username" validation="required|length:0,50" />
            
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