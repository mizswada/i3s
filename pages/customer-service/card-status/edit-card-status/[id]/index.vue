<script setup>
definePageMeta({
  title: "Update Card Status",
  
});


const form = ref({  
    "StudentName": "Abu Bakar As-Siddiq", 
    "CardNumber": "202100120012",
    "Status": "",    
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

const statusDropdown = ref([
  { label: "Choose status", value: "" },
  { label: "Active", value: "Active" },
  { label: "Inactive", value: "Inactive" },
  { label: "Lost", value: "Lost" },  
  { label: "Blacklist", value: "Blacklist" },    
]);

</script>
<template>
    <FormKit type="form" :actions="false" :incomplete-message="true" @submit="submitForm" id="myForm">
        <section>
            <rs-card class="p-7">

                <FormKit v-model="form.StudentName" type="text" label="Student Name" disabled="disabled" />
                <FormKit v-model="form.CardNumber" type="text" label="Card Number" disabled="disabled" /> 
                <FormKit v-model="form.Status" type="select" :options="statusDropdown" label="Status" validation="required|length:0,50" />
       
            </rs-card>             
        </section>
        <rs-button btn-type="submit" variant="warning" style="margin-top: -0.5%;margin-left: 88%;width: 10%;" :disabled="processing">
            {{ processing ? "Saving..." : "Update" }}
            </rs-button>  
              <nuxt-link :to="`/customer-service/card-status`">
                <rs-button btn-type="submit" variant="primary" style="margin-top: -2.7%;margin-left: 77%;width: 10%;" :disabled="processing">
                {{ processing ? "Saving..." : "Close" }}
                </rs-button>  
              </nuxt-link>
    </FormKit>
</template>