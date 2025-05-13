<script setup>
definePageMeta({
  title: "Claims Report",
  
});

const statusDropdown = ref([
  { label: "Choose status", value: "" },
  { label: "Pending", value: "Pending" },
  { label: "Claim", value: "Claim" },  
]);

const form = ref({  
    Status:""    
})

const data = [
{   
    "#":"0001",     
    "Location": "SMK SEKSYEN 18",
    "Company Name": "KEMBARA DESA RESOURCES",  
    "Sales Amount": "RM 5000", 
    "Bank Type":"BANK ISLAM",
    "Bank Number":"12038010080000",
    "Status":"Claim", 
    "Action":"",   
  }, 
  {   
    "#":"0002",     
     "Location": "SK SAUJANA IMPIAN 2",
     "Company Name": "MAHAT HASHIM ENTERPRISE",  
     "Sales Amount": "RM 3500", 
     "Bank Type":"BANK ISLAM",
     "Bank Number":"04024000028395",
     "Status":"Pending",  
     "Action":"",  
  },       
]

</script>

<template>
<div>
    <div>
      <div class="flex justify-between">
        <h4 class="mb-4 uppercase">search claims</h4>
      </div>
    </div>
<!-- SEARCH FUNCTION -->
   <rs-card class="p-5">
       <FormKit type="form" :actions="false" :incomplete-message="true" @submit="submitForm">
        <section>                         
                  
          <!--<FormKit v-model="form.Equipment" type="select"          
            :options="equipmentDropdown"
            label="Equipment Type" 
            validation="required|length:0,50" />-->        
                  
          <FormKit v-model="form.Status" type="select"          
            :options="statusDropdown"
            label="Status Claims" 
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