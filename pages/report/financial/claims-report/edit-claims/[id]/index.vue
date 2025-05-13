<script setup>
definePageMeta({
  title: "List of companies",
  
});

const statusDropdown = ref([
  { label: "Choose status", value: "" },
  { label: "Pending", value: "Pending" },
  { label: "Claim", value: "Claim" },  
]);

const form = ref({ 
    "Location": "SK SAUJANA IMPIAN 2",
    "CompanyName": "MAHAT HASHIM ENTERPRISE", 
    "Email": "mahat@gmail.com", 
    "SalesAmount": "RM 3500", 
    "BankType": "BANK ISLAM",
    "BankNumber":"04024000028395",
    "Status":"Pending"     
})


</script>
<template>
    <FormKit type="form" :actions="false" :incomplete-message="true" @submit="submitForm" id="myForm">
        <section>
            <rs-card class="p-7">

                <FormKit v-model="form.Location" type="text" label="Location" disabled="disabled" />
                <FormKit v-model="form.CompanyName" type="text" label="Company Name" disabled="disabled" />
                <FormKit v-model="form.Email" type="text" label="Email" disabled="disabled" />
                <FormKit v-model="form.SalesAmount" type="text" label="Sales Amount" disabled="disabled" />
                <FormKit v-model="form.BankType" type="text" label="Bank Type" disabled="disabled" />
                <FormKit v-model="form.BankNumber" type="text" label="Bank Number" disabled="disabled" />              
                <FormKit v-model="form.Status" type="select" :options="statusDropdown" label="Status"/>

            </rs-card>             
        </section>
        <!--<rs-button btn-type="submit" variant="warning" style="margin-top: -0.5%;margin-left: 88%;width: 10%;" :disabled="processing">
            {{ processing ? "Saving..." : "Update" }}
            </rs-button>-->

            <nuxt-link :to="`/report/financial/claims-report`">
                <rs-button variant="primary" class="w-64" style="margin-left: 59%;">Close</rs-button>
            </nuxt-link>
            &nbsp;&nbsp;&nbsp;
            <nuxt-link :to="`/`">
                <rs-button btn-type="submit" variant="warning" class="w-64" style="margin-top: -4.5%;margin-left: 80%;" :disabled="processing"> {{ processing ? "Saving..." : "Approve" }}
                </rs-button>
            </nuxt-link>
    </FormKit>
</template>