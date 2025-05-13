<script setup>
definePageMeta({
  title: "Upload List Donation ",
  
});

  const field = [
    "Id",
    "NamaStudent",
    "NRIC",
    "Amount",
    "Status",
    "Action",
  ]

 const form = ref({    
    donation_doc: "",    
  });

const data = [
  {
    "id": "1",
    "namaStudent": "sara",   
    "nric": "082222221212",
    "amount": "0",  
    "status": "Active",
    "Action": ""
  },
  {
    "id": "2",
    "namaStudent": "Ali",   
    "nric": "082222221212",
    "amount": "10",  
    "status": "Active",
    "Action": ""
  },
]

const showModalDeleteDonation = ref(false);
const showModalDeleteForm = ref({
  studentName: "Student 1",
});

</script>
<template>
  <div>
    <!--<LayoutsBreadcrumb />-->
     <div>
      <div class="flex justify-between">
        <h4 class="mb-4 uppercase">Upload List Donation </h4>
      </div>
    </div>
  </div>

  <!-- UPLOAD DOC -->
  <rs-card class="flex-wrap justify-between p-5 bg-white text-black rounded-md flex-col">
    <div class="p-5">
      <FormKit type="form" :actions="false" @submit="submit" :incomplete-message="false" id="myForm" >
     
        <div class="flex flex-row justify-between">
          <div class="basis-1/2 mr-5">
            <FormKit type="file" label="Documents" accept=".xlsx,.xml,.csv" validation="required|length:0,200" v-model="form.donation_doc" >
           
              <template #label>
              <label class="formkit-label text-gray-700 dark:text-gray-200 block mb-2 font-semibold text-sm formkit-invalid:text-red-500">Documents <span class="text-danger">*</span></label>
              </template>
            </FormKit>
          </div>          
        </div>
      </FormKit>
      <rs-button class="w-68" variant = "warning" style="margin-left: 10%;width: 9%;">submit</rs-button>
      <nuxt-link :to="`/credit-management`">
        <rs-button variant="primary" class="w-64" style="margin-left: 0%; margin-top: -3%; width: 9%;">Cancel</rs-button>
      </nuxt-link>

    </div>    
  </rs-card>

  <!--- DATATABLE  -->
  <rs-card class="flex-wrap justify-between p-5 bg-white text-black rounded-md flex-col" >
 
    <template #header>
      <div class="flex">List of Donation</div>
    </template>

    <!-- TABLE LIST CARD -->
    <rs-table v-if="data && data.length > 0"
      :field="field"
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
    >
    <template v-slot:Id="data" >
        <p class="">
          {{ data.value.id }}
        </p>
      </template>

      <template v-slot:NamaStudent="data" >
        <p class="">
          {{ data.value.namaStudent }}
        </p>
      </template>

      <template v-slot:NRIC="data" >
        <p class="">
          {{ data.value.nric }}
        </p>
      </template>    

      <template v-slot:Amount="data" >
        <p class="">
          {{ data.value.amount }}
        </p>
      </template>

      <template v-slot:Status="data" >
        <rs-badge variant="success" v-if="data.value.status == 'Active'">Active</rs-badge>
        <rs-badge variant="danger" v-else>In active</rs-badge>
      </template>

      <template v-slot:Action="data">
        <div class="flex flex-row">
          <nuxt-link :to="``" class="ml-2">
            <rs-button variant="danger" @click = "showModalDeleteDonation = true">
              <Icon name="material-symbols:delete-outline"></Icon>
            </rs-button>
          </nuxt-link>
        </div>  
        
      </template>

    </rs-table>
    <div v-else class="">
      <rs-empty-table :field="field"></rs-empty-table>        
    </div>
  </rs-card>


  <rs-modal title="Delete Confirmation" ok-title="Yes" cancel-title="No" :ok-callback="delete" v-model = "showModalDeleteDonation">
    <p>
      Are you sure want to delete this donation name ({{ showModalDeleteForm.studentName }})?
    </p>
  </rs-modal>

</template>