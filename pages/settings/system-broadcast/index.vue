<script setup>
definePageMeta({
  title: "System Broadcast",
  
});

const data = [
  {    
    "Start Date": "2025-04-23",
    "End Date": "2025-04-24",
    "User Role": "All",    
    "School": "SKPP 18(2), PUTRAJAYA",
    "Message": "Promo!! Nasi tomato harga RM 2.50 SAHAJA.",
    "Action": ""
  },
  {    
    "Start Date": "2025-04-23",
    "End Date": "2025-04-24",
    "User Role": "All",    
    "School": "All",
    "Message": "Jualan uniform sekolah serendah 30%.",
    "Action": ""
  },
]
</script>

<template>
    <div>
    <div>
      <!--<div class="flex justify-between">
        <h4 class="mb-4 uppercase">System Broadcast Details</h4>
      </div>-->
      <rs-card class="py-5">
        <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-y-2 px-5">
          <div>
            <!--<h5 class="font-semibold">System Broadcast</h5>
            <span class="text-sm text-gray-500">
              Below is the list of all broadcast message
            </span>-->
          </div>

          <nuxt-link to="/settings/system-broadcast/add-broadcast">
            <rs-button class="mb-4" variant = "warning">
              <Icon name="fe:plus" class="mr-1" />
              New message
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
              <nuxt-link :to="`/settings/system-broadcast/edit-broadcast/[id]`">
                <rs-button variant="warning" >
                  <Icon name="material-symbols:edit-outline" /> 
                </rs-button>
              </nuxt-link>
            </div>
            <div class="flex items-center gap-x-2">
              <nuxt-link :to="``">
                <rs-button
                  variant="danger"
                >
                  <Icon name="material-symbols:delete-outline" /> 
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