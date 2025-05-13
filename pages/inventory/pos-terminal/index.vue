<script setup>
definePageMeta({
  title: "Manage Pos Terminal",
   // middleware: ["auth"],
   // requiresAuth: true,
});

const data = [
  {
    "Model": "PT7003",
    "Serial Number": "202209090100003", 
    "Tag Number": "SKPP18(2)/2023/POS/20.10", 
    "School Name": "SK PRESINT 18(2)",   
    "Status": "In Stock",
    "Action": ""
  },
  {
    "Model": "PT7003",
    "Serial Number": "202209090100010", 
    "Tag Number": "SMKS18/2023/POS/20.10", 
    "School Name": "SMK SEKSYEN 18",   
    "Status": "In Stock",
    "Action": ""
  },
]
const showModaldelete = ref(false);

</script>
<template>
  <div>
    <div>
      <div class="flex justify-between">
        <h4 class="mb-4 uppercase">Inventory Pos Terminal</h4>
      </div>
    </div>
  </div>

  <!-- BUTTON ADD CARD -->
  <div class="flex justify-end mb-2">
   <nuxt-link to="/inventory/pos-terminal/add-new-pos-terminal">
     <rs-button class="mb-4" variant = "warning">
            <Icon name="fe:plus" class="mr-1" />
              Add New Pos terminal
            </rs-button>
     </nuxt-link>
  </div>

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
                <nuxt-link :to="`/inventory/pos-terminal/edit/[id]`">
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
      Are you sure want to delete this serial number ?
    </p>
  </rs-modal>

</template>