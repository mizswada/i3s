<script setup>
definePageMeta({
  title: "Manage Card Assignment",
  
});

const data = [
  {
    "Assignee Name": "Normaisarah",
    "User Role": "Student",
    "School Name": "SMK Seksyen 6",   
    "Card Number": "202100005001",
    "Card Status": "Active",
    "Action": ""
  }, 
   {
    "Assignee Name": "Ali",
    "User Role": "Student",
    "School Name": "SMK Seksyen 6",   
    "Card Number": "202100005101",
    "Card Status": "Active",
    "Action": ""
  }, 
]

const showModaldelete = ref(false);
const showModalDeleteForm = ref({
  name: "Ali",
});

</script>
<template>
  <div>
    <div>
      <div class="flex justify-between">
        <h4 class="mb-4 uppercase">Card Assignment</h4>
      </div>
    </div>
  </div>

 <!-- BUTTON ADD CARD -->
  <div class="flex justify-end mb-2">
   <nuxt-link to="/card-assignment/card-assign/add-card-assign">
     <rs-button class="mb-4" variant="warning">
            <Icon name="fe:plus" class="mr-1" />
              Assign New Card
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
                <nuxt-link :to="`/card-assignment/card-assign/edit-card-assign/[id]`">
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
      Are you sure want to unassign this student ({{ showModalDeleteForm.name }})?
    </p>
  </rs-modal>

</template>