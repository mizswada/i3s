<script setup>
definePageMeta({
  title: "Credit Management",
  
});

const data = [
{   
    "#":"1", 
    "Campaign budget title": "SMKS 18 Cash Incentive April 25",
    "Total Amount": "10,000",
    "Balance Amount": "8000",        
    "Start Date": "2025-04-18",
    "End Date": "2025-04-22",
    "Status":"Active",
    "Action": ""   
  },
  {    
    "#":"2", 
    "Campaign budget title": "SKPJ Cash Incentive April 25",
    "Total Amount": "5000",
    "Balance Amount": "4000",        
    "Start Date": "2025-04-24",
    "End Date": "2025-04-30",
    "Status":"Active",
    "Action": ""    
  },
]
</script>

<template>
    <div>
    <div>
      <div class="flex justify-between">
        <!--<h4 class="mb-4 uppercase">List of Credit Setup</h4>-->
      </div>

      <div class="flex justify-end mb-2"> 

            <nuxt-link to="/credit-management/add-credit">
              <rs-button variant="warning" class="mb-4">
                <Icon name="fe:plus" class="mr-1" />
                New Credit Setup
              </rs-button>
            </nuxt-link>           

         </div>

      <rs-card class="py-5">
        <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-y-2 px-5">
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
                <nuxt-link :to="`/credit-management/edit-credit/[id]`">
                  <rs-button variant="warning" v-tooltip.focus.top="'Edit Credit'">
                    <Icon name="material-symbols:edit-outline" /> 
                  </rs-button>
                </nuxt-link>
                <nuxt-link :to="`/credit-management/upload-donation`">
                  <rs-button variant="success" v-tooltip.focus.top="'upload donation'">
                    <Icon name="vaadin:money" /> 
                  </rs-button>
                </nuxt-link>
              </div>            
            </div>
            
          </template>
          </rs-table>
        </div>
      </rs-card>
    </div>
  </div>
</template>