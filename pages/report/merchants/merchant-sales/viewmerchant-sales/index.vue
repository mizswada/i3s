<script setup>

definePageMeta({
  title: "View Merchant Sales ",
  
});

const form = ref({ 
    "salesDate": "2025-05-07",
    "companyName": "MAHAT HASHIM ENTERPRISE", 
    "merchantName": "MAHAT HASHIM", 
    "totalSales": "CR 46.64", 
    "feeAmount": "CR 2.64", 
    "netAmount": "CR 44.00",    
    "status":"Paid"     
})
</script>

<template>
    <div>
        <div>
            <div class="flex justify-between">
                <h4 class="mb-4 uppercase">View Details Merchant Sales</h4>
            </div>
        </div>

        <!-- FORM VIEW DETAILS-->
        <FormKit type="form" :actions="false" :incomplete-message="true">
            <rs-card class="p-5">
                 <div class="flex flex-row justify-between"> 
                    <div class="basis-1/2 mr-5">
                        <FormKit v-model="form.salesDate" type="date" label="Sales Date" disabled="disabled" />
                    </div>
                    <div class="basis-1/2">
                        <FormKit v-model="form.companyName" type="text" label="Company Name" disabled="disabled" />
                    </div>                    
                 </div>
                
                <div class="flex flex-row justify-between">
                    <div class="basis-1/2 mr-5">
                        <FormKit v-model="form.merchantName" type="text" label="Merchant Name" disabled="disabled" />
                    </div> 
                    <div class="basis-1/2">
                        <FormKit v-model="form.totalSales" type="text" label="Total Sales" disabled="disabled" />
                    </div> 
                </div>

                 <div class="flex flex-row justify-between"> 
                    <div class="basis-1/3 mr-5">
                        <FormKit v-model="form.feeAmount" type="text" label="Total Fee Amount" disabled="disabled" />
                    </div>
                    <div class="basis-1/3 mr-5">
                        <FormKit v-model="form.netAmount" type="text" label="Total Net Amount" disabled="disabled" />
                    </div>
                    <div class="basis-1/3">
                        <FormKit v-model="form.status" type="text" label="Status" disabled="disabled" />
                    </div>
                 </div>                
                
            </rs-card>

            <nuxt-link :to="`/report/merchants/merchant-sales`">
                <rs-button variant="primary" class="w-64" style="margin-left: 80%;">Cancel</rs-button>
            </nuxt-link>
            &nbsp;&nbsp;&nbsp;           

        </formkit>

    </div>
</template>