<script setup>
definePageMeta({
  title: "Purchase Card i3s",
  
});


const form = ref({ 
    Transaction : "",
    Fullname: "",
})

const TransactionTypeDropdown = ref([
  { label: "Choose status", value: "" },
  { label: "Online", value: "Online" },
  { label: "Customer Service", value: "Customer Service" },      
]);

const data = [
{   
    "#":"0001",
    "Receipt Date": "27/06/2022 02:03:35 PM", 
    "Reference Number": "PAY-I3S-6276-9294", 
    "Transaction Type": "Online",
    "Amount": "CR 12.72",
    "Status": "success",
    "Action": "",
  }, 
  {   
    "#":"0002",
    "Receipt Date": "20/07/2022 04:34:49 PM", 
    "Reference Number": "PAY-I3S-4567-7615", 
    "Transaction Type": "Online",
    "Amount": "CR 12.72",
    "Status": "failed",
    "Action": "",
  },  
    {   
    "#":"0003",
    "Receipt Date": "21/07/2022 09:41:59 AM", 
    "Reference Number": "PAY-I3S-9484-1214", 
    "Transaction Type": "Customer Service",
    "Amount": "CR 12.72",
    "Status": "Order received",
    "Action": "",
  },     
]

</script>
<template>
<div>
    <div>
      <div class="flex justify-between">
        <h4 class="mb-4 uppercase">Search Purchase Card i3s</h4>
      </div>
    </div>

    <!-- SEARCH FUNCTION -->
   <rs-card class="p-5">
        <FormKit type="form" :actions="false" :incomplete-message="true" @submit="submitForm">
        <section> 
            <FormKit v-model="form.Transaction" type="select"          
            :options="TransactionTypeDropdown"
            label="Transaction Type" 
            validation="required|length:0,50" />    

           <!--<FormKit v-model="form.Date" type="date" label="Date Purchase" validation="required|length:0,100" />-->
           <FormKit v-model="form.Fullname" type="text" label="Customer Name" validation="required|length:0,100" /> 
          
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

   <!-- TABLE DISPLAY RESULT FUNCTION -->
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
                      <nuxt-link :to="`/customer-service/purchase-card/view-purchase/[id]`">
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