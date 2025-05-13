<script setup>
definePageMeta({
  title: "Manage Reader",
   // middleware: ["auth"],
   // requiresAuth: true,
});

const data = [
  {
    "Model": "RFID7003",
    "Serial Number": "SKPP18(2)/2021/CR/20.10", 
    "Tag Number": "SKPP18(2)/2021/CR/20.10", 
    "School Name": "SK PRESINT 18(2)",   
    "Status": "In Stock",
    "Action": ""
  },
  {
    "Model": "RFID7003",
    "Serial Number": "SKCJ/2021/CR/20.10", 
    "Tag Number": "SKCJ/2021/CR/20.10",
    "School Name": "SK CHERAS JAYA",   
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
        <h4 class="mb-4 uppercase">Inventory RFID Reader</h4>
      </div>
    </div>
  </div>

   <!-- BUTTON ADD CARD -->
  <div class="flex justify-end mb-2">
   <nuxt-link to="/inventory/reader/add-new-reader">
     <rs-button class="mb-4" variant="warning">
            <Icon name="fe:plus" class="mr-1" />
              Add New Reader
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
                <nuxt-link :to="`/inventory/reader/edit-reader/[id]`">
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
      Are you sure want to delete this reader ?
    </p>
  </rs-modal>

</template>