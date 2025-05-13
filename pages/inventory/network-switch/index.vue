<script setup>
definePageMeta({
  title: "Manage Network Switch",
   // middleware: ["auth"],
   // requiresAuth: true,
});

const data = [
  {
    "Id":"1",
    "Model": "Onexox",
    "Type" : "Simcard",
    "Serial Number/PUK Code": "415384",
    "Description": "",       
    "Status": "Active",
    "Action": ""
  },
  {
    "Id":"2",
    "Model": "Xpax",
    "Type" : "Simcard",
    "Serial Number/PUK Code": "415386",
    "Description": "",
    "Status": "Inactive",
    "Action": ""
  },
  {
    "Id":"3",
    "Model": "TP-LINK",
    "Type" : "Switch",
    "Serial Number/PUK Code": "EESB20250401-001",
    "Description": "",
    "Status": "Active",
    "Action": ""
  },
]

const showModaldelete = ref(false);

</script>

<template>
  <div>
    <div>
      <div class="flex justify-between">
        <h4 class="mb-4 uppercase">Inventory Network Switch</h4>
      </div>
    </div>
  </div>

  <!-- BUTTON ADD CARD -->
  <div class="flex justify-end mb-2">

    <nuxt-link to="/inventory/network-switch/add-network-switch">
     <rs-button class="mb-4" variant = "warning">
            <Icon name="fe:plus" class="mr-1" />
              Add New Network
            </rs-button>
     </nuxt-link>    
    
  </div>

<!-- TABLE LIST CARD -->
<rs-card class="flex-wrap justify-between p-5 bg-white text-black rounded-md flex-col"> 
  <rs-table
      :data="data"
      :options="{
      variant: 'default',
      striped: true,
      borderless: true,
      }"
      :options-advanced="{
      sortable: true,
      responsive: true,
      filterable: false,
      }"
      advanced
      >
      <template v-slot:status="data">
          <rs-badge
              :variant="
              data.text === 'Active'
              ? 'success'
              : data.text == 'Inactive'
              ? 'warning'
              : 'danger'
                    ">
                              
          </rs-badge>
        </template>
          <template v-slot:Action="data">
          <div class="flex flex-row gap-x-2">
              <div class="flex items-center gap-x-2">
                <nuxt-link :to="`/inventory/network-switch/edit-network/[id]`">
                  <rs-button variant="warning">
                    <Icon name="material-symbols:edit-outline" /> 
                  </rs-button>
                </nuxt-link>
              </div>
              <div class="flex items-center gap-x-2">
                <nuxt-link :to="``">
                  <rs-button variant="danger" @click="showModaldelete = true">
                    <Icon name="material-symbols:delete-outline" />  
                  </rs-button>
                </nuxt-link>
              </div>
          </div>
          </template>
  </rs-table>
</rs-card>

 <rs-modal title="Delete Confirmation" ok-title="Yes" cancel-title="No" :ok-callback="delete" v-model="showModaldelete" >
    <p>
      Are you sure want to delete this ?
    </p>
  </rs-modal>

</template>