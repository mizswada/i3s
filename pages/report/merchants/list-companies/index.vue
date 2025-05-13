<script setup>
definePageMeta({
  title: "List of companies",
  
});

const form = ref({   
    MerchantType: "",       
    Status:""    
})

const schoolDropdown = ref([  
  { label: "Select School", value: "" },
  { label: "SMK Seksyen 18 Shah Alam", value: "SMK Seksyen 18 Shah Alam" },
  { label: "MRSM Lenggong", value: "MRSM Lenggong" },
  { label: "Smk Taman Tun Dr Ismail", value: "Smk Taman Tun Dr Ismail" },
]);

const statusDropdown = ref([
  { label: "Choose status", value: "" },
  { label: "Active", value: "Active" },
  { label: "Faulty", value: "Faulty" },
  { label: "Repair", value: "Repair" },  
]);

const merchantTypeDropdown = ref([
  { label: "Choose merchant type", value: "" },
  { label: "Canteen", value: "Canteen" },
  { label: "Cooperative", value: "Cooperative" },
  { label: "Book Store", value: "Book Store" },   
])

const data = [
{   
    "#":"0001",     
    "Location": "SMK SEKSYEN 18",
    "Company Name": "KEMBARA DESA RESOURCES",
    "Reg Number":"SA0095789P",
    "Contact Number":"0123949400",
    "Bank Type":"BANK ISLAM",
    "Bank Number":"12038010080000",
    "Status":"Active", 
    "Action":"",   
  }, 
  {   
    "#":"0002",     
     "Location": "SK SAUJANA IMPIAN 2",
     "Company Name": "MAHAT HASHIM ENTERPRISE",
     "Reg Number":"001106686P",
     "Contact Number":"0123933801",
     "Bank Type":"BANK ISLAM",
     "Bank Number":"04024000028395",
     "Status":"Pending",  
     "Action":"",  
  },  
  {   
    "#":"0003",     
     "Location": "DAMANSARA",
     "Company Name": "SHOP I3S",
     "Reg Number":"404477T",
     "Contact Number":"0199305000",
     "Bank Type":"CIMB",
     "Bank Number":"707235300",
     "Status":"Active",  
     "Action":"",   
  },   
]

</script>


<template>
<div>
    <div>
      <div class="flex justify-between">
        <h4 class="mb-4 uppercase">search merchant</h4>
      </div>
    </div>
<!-- SEACRH FUNCTION -->
   <rs-card class="p-5">
       <FormKit type="form" :actions="false" :incomplete-message="true" @submit="submitForm">
        <section>
          <FormKit v-model="form.MerchantType" type="select"          
            :options="merchantTypeDropdown"
            label="Merchant Type" 
            validation="required|length:0,50" />        
                  
          <FormKit v-model="form.Status" type="select"          
            :options="statusDropdown"
            label="Status" 
            validation="required|length:0,50" />
        </section>
       </FormKit>
     <div>
      
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
                      <nuxt-link :to="`/report/merchants/list-companies/view-details/[id]`">
                        <rs-button
                        variant="warning"
                        >
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