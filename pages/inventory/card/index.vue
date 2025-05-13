<script setup>
definePageMeta({
  title: "Manage Card",
  //  // middleware: ["auth"],
  //  // requiresAuth: true,
});

const data = [
  {
    "Card Number": "202000005501",
    "HexID": "ABCD1234",   
    "Status": "Active",
    "Action": ""
  },
  {
    "Card Number": "202000005502",
    "HexID": "ABCD1204",   
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
        <h4 class="mb-4 uppercase">Inventory Card</h4>
      </div>
    </div>
  </div>

  <!-- BUTTON ADD CARD -->
  <div class="flex justify-end mb-2">
    <nuxt-link :to="`/inventory/card/add-new-card`">
      <rs-button class="mx-5 px-5" variant="warning"><Icon name="fe:plus" class="mr-1" />
        New Card
      </rs-button>
    </nuxt-link>

    <nuxt-link :to="`/inventory/card/uploadcard`">
      <rs-button class="mb-4" variant="warning">
        <span style="height: 24px;">Excel Upload </span>
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
                    <nuxt-link :to="`/inventory/card/edit-card/[id]`">
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
      Are you sure want to delete this card number ?
    </p>
  </rs-modal>

</template>