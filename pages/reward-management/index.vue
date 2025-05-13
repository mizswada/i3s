<script setup>
definePageMeta({
  title: "Cash Reward Setup",
  
});

const data = [
{   
    "#":"1", 
    "Title": "SMK SEKSYEN 18 Cash Intensive April 2025",
    "Reward Type": "Percentage",
    "Reward Amount": "10",       
    "Start Date": "2025-04-18",
    "End Date": "2025-04-22",
    "Status":"Active",
    "Action":""   
  },
  {    
    "#":"2", 
    "Title": "SK PUTRAJAYA PRESINT 18(2) Cash Intensive 2025",
    "Reward Type": "RM",
    "Reward Amount": "10",       
    "Start Date": "2025-04-18",
    "End Date": "2025-04-23",
    "Status":"Cancel",
    "Action":""  
  },
]

</script>

<template>
    <div>
    <div>
      <div class="flex justify-between">
        <!--<h4 class="mb-4 uppercase">List of Cash Reward</h4>-->
      </div>
      <rs-card class="py-5">
        <div
          class="flex flex-col md:flex-row justify-between items-start md:items-center gap-y-2 px-5"
        >
          <div>
            <!--<h5 class="font-semibold">List of Cash Reward</h5>
            <span class="text-sm text-gray-500">
              Below is the list of all complain from the user
            </span>-->
          </div>

          <nuxt-link to="/reward-management/add-reward">
            <rs-button variant="warning" class="mb-4">
              <Icon name="fe:plus" class="mr-1" />
              New Reward Setup
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
              <nuxt-link :to="`/reward-management/edit-reward/[id]`">
                <rs-button variant="warning">
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