<script setup>
definePageMeta({
  title: "Customer Service",
  
});


const data = [
{   
    "Ticket #":"0001", 
    "Category": "Technical Support",
    "Problem Type": "RFID Reader",
    "Priority Type": "Medium",    
    "School Name": "SKPP 18(2), PUTRAJAYA",
    "Report By": "Cikgu Farah",    
    "Problem Description": "Reader not functional",
    "Ticket Status":"Open",
    "Action":""
  },
  {    
    "Ticket #":"0002",
    "Category": "Finance",
    "Problem Type": "Reload",
    "Priority Type": "High",    
    "School Name": "SKPP 18(2), PUTRAJAYA",
    "Report By": "Ali",    
    "Problem Description": "This morning, user reload RM20 but the top-up has not been reflected in the eWallet balance.",
    "Ticket Status":"Close",
    "Action":""
  },
]
</script>

<template>
    <div>
    <div>
      <div class="flex justify-between">
        <!--<h4 class="mb-4 uppercase">List ticket</h4>-->
      </div>
      <rs-card class="py-5">
        <div
          class="flex flex-col md:flex-row justify-between items-start md:items-center gap-y-2 px-5"
        >
          <div>
            <!--<h5 class="font-semibold">Ticket</h5>-->
            <span class="text-sm text-gray-500">
              Below is the list of all complain from the user
            </span>
          </div>

          <nuxt-link to="/customer-service/new-ticket/add-ticket">
            <rs-button class="mb-4" variant = "warning">
              <Icon name="fe:plus" class="mr-1" />
              New Support Ticket
            </rs-button>
          </nuxt-link>
            
        </div>

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
              <nuxt-link :to="`/customer-service/new-ticket/edit-ticket/[id]`">
                <rs-button variant="warning" >
                  <Icon name="material-symbols:edit-outline" /> 
                </rs-button>
              </nuxt-link>
            </div>            
          </div>
        </template>
        </rs-table>
      </rs-card>
    </div>
  </div>
</template>