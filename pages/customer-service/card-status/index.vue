<script setup>
definePageMeta({
  title: "Search Card Status",
  
});


const form = ref({  
    Fullname:"",
    CardNumber:""    
})

const data = [
{   
    "#":"0001",
    "Student Name": "Abu Bakar As-Siddiq", 
    "Card Number": "202100120012",
    "Status": "Blacklist",
    "Action": "",
  }, 
  {   
    "#":"0002",
    "Student Name": "Ali", 
    "Card Number": "202100005562",
    "Status": "Active",
    "Action": "",
  },  
  {   
    "#":"0003",
    "Student Name": "Aminah", 
    "Card Number": "202100253365",
    "Status": "Lost",
    "Action": "",
  },     
]

</script>
<template>
<div>
    <div>
      <div class="flex justify-between">
        <h4 class="mb-4 uppercase">Search Card Status</h4>
      </div>
    </div>

<!-- SEARCH FUNCTION -->
   <rs-card class="p-5">
        <FormKit type="form" :actions="false" :incomplete-message="true" @submit="submitForm">
        <section> 

           <FormKit v-model="form.Fullname" type="text" label="Student Name" /> 
           <FormKit v-model="form.CardNumber" type="text" label="Card Number" /> 
          
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
                      <nuxt-link :to="`/customer-service/card-status/edit-card-status/[id]`">
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