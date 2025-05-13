<script setup>
definePageMeta({
  title: "View Details Wallet Transaction",
  
});


const form = ref({ 
    "ReferenceNumber": "TRF-I3S-4567-7615",  
    "TransactionType": "Transfer to Others",
    "TransferFrom": "Ali Bin Ab Talib",
    "ReceiverName": "Abu Bakar As-Siddiq",
    "Amount": "RM 10.00",
    "Status": "success", 
});
</script>

<template>
    <FormKit type="form" :actions="false" :incomplete-message="true" @submit="submitForm" id="myForm">
        <section>
            <rs-card class="p-7">

                <FormKit v-model="form.ReferenceNumber" type="text" label="Reference Number" disabled="disabled" />
                <FormKit v-model="form.TransactionType" type="text" label="Transaction Type" disabled="disabled" />
                <FormKit v-model="form.TransferFrom" type="text" label="Transfer From" disabled="disabled" />
                <FormKit v-model="form.ReceiverName" type="text" label="Receiver Name" disabled="disabled" />
                <FormKit v-model="form.Amount" type="text" label="Amount" disabled="disabled" />
                <FormKit v-model="form.Status" type="text" label="Status" disabled="disabled"/>

            </rs-card>             
        </section>
        <nuxt-link :to="`/customer-service/wallet-transaction`">
        <rs-button btn-type="submit" variant="primary" style="margin-top: -0.5%;margin-left: 88%;width: 10%;" :disabled="processing">
            {{ processing ? "Saving..." : "Close" }}
            </rs-button>  
        </nuxt-link>
            
    </FormKit>
</template>