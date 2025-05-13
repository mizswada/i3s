<script setup>
definePageMeta({
  title: "View Purchase Card i3s",
  
});


const form = ref({ 
    "PaymentBy":" Ali bin Ab Talib",
    "ReceiptDate": "21/07/2022 09:41:59 AM", 
    "ReferenceNumber": "PAY-I3S-9484-1214", 
    "PaymentMethod": "i3s Credit",    
    "Status": "success",
    "Items": "Kad ID Murid",
    "Amount": "CR 12.00",
    "CajFee" : "CR 0.72",
    "TotalAmount": "CR 12.72",
})

const TransactionTypeDropdown = ref([
  { label: "Choose status", value: "" },
  { label: "Online", value: "Online" },
  { label: "Payment", value: "Payment" },
  { label: "Reload", value: "Reload" },  
  { label: "Transfer to Others", value: "Transfer to Others" },    
]);

const data = [
{   
    "#":"0001",
    "Receipt Date": "27/06/2022 02:03:35 PM", 
    "Reference Number": "TPP-JFO-6276-9294", 
    "Transaction Type": "Topup",
    "Amount": "CR 100.00",
    "Status": "success",
    "Action": "",
  }, 
  {   
    "#":"0002",
    "Receipt Date": "20/07/2022 04:34:49 PM", 
    "Reference Number": "TRF-I3S-4567-7615", 
    "Transaction Type": "Transfer to Others",
    "Amount": "CR 10.00",
    "Status": "failed",
    "Action": "",
  },  
    {   
    "#":"0003",
    "Receipt Date": "21/07/2022 09:41:59 AM", 
    "Reference Number": "PAY-I3S-9484-1214", 
    "Transaction Type": "Payment",
    "Amount": "CR 12.72",
    "Status": "Order received",
    "Action": "",
  },     
]

</script>
<template>
 <rs-tab>
    <rs-tab-item title="Payment Transaction History"> 
        <rs-card class="p-5"> 
            <FormKit v-model="form.PaymentBy" type="text" label="Payment By" disabled="disabled" />
            <FormKit v-model="form.ReceiptDate" type="text" label="Receipt Date" disabled="disabled" />
            <FormKit v-model="form.ReferenceNumber" type="text" label="Reference Number" disabled="disabled" />
            <FormKit v-model="form.PaymentMethod" type="text" label="Payment Method" disabled="disabled" />
            <FormKit v-model="form.Status" type="text" label="Total Status" disabled="disabled" />
        </rs-card>
    </rs-tab-item>
     <rs-tab-item title="Items Purchase History"> 
        <rs-card class="p-5"> 
            <FormKit v-model="form.Items" type="text" label="Items" disabled="disabled" />
            <FormKit v-model="form.Amount" type="text" label="Amount" disabled="disabled" />
            <FormKit v-model="form.CajFee" type="text" label="Charge Fee" disabled="disabled"/>
            <FormKit v-model="form.TotalAmount" type="text" label="Total Amount" disabled="disabled"/>   
        </rs-card>
    </rs-tab-item>
</rs-tab>
   <nuxt-link :to="`/customer-service/purchase-card`">
      <rs-button btn-type="submit" variant="primary" style="margin-top: 0.5%;margin-left: 88%;width: 10%;" :disabled="processing">
            {{ processing ? "Saving..." : "Close" }}
      </rs-button> 
   </nuxt-link>
</template>

 