<script setup>
  definePageMeta({
    title: "Upload Staff",
    
  });

  const field = [
    "Id",
    "FullName",
    "Nric",
    "Status",
    "Action",
  ]

  const school = [
    { label: "Choose school", value: null },
    { label: "School 1", value: "School 1" },
    { label: "School 2", value: "School 2" },
    { label: "School 3", value: "School 3" }
  ]

  const staffType = [
    { label: "Choose staff type", value: null },
    { label: "Headmaster", value: "Headmaster" },
    { label: "Haed Assisstant", value: "Haed Assisstant" },
    { label: "Teacher", value: "Teacher" },
    { label: "Staff", value: "Staff" },
    { label: "Teacher/Wardent", value: "Teacher/Wardent" },
    { label: "School Admin", value: "School Admin" }
  ]

  const data = [
    // {
    //   id: 1,
    //   fullname: "Student 1",
    //   nric: 1200,
    //   walletNo: 340,
    //   status: "Active",
    //   action: "",
    // },
    // {
    //   id: 2,
    //   fullname: "Student 2",
    //   nric: 1200,
    //   walletNo: 340,
    //   status: "Active",
    //   action: "",
    // },
    // {
    //   id: 3,
    //   fullname: "Student 3",
    //   nric: 1200,
    //   walletNo: 340,
    //   status: "Active",
    //   action: "",
    // },
  ]

  const form = ref({
    staff_school: "",
    staff_doc: "",
    staff_type: "",
  });
</script>
<template>
  <div>
    <!--<LayoutsBreadcrumb />-->
  </div>

  <!-- UPLOAD DOC -->
  <rs-card class="flex-wrap justify-between p-5 bg-white text-black rounded-md flex-col">

    <div class="p-5">
      <FormKit type="form" :actions="false" :incomplete-message="true" @submit="submit" id="myForm">        
        
        <div class="flex flex-row justify-between">
          <div class="basis-1/3 mr-5">
            <FormKit 
              type="file"
              label="Documents"
              accept=".xlsx,.xml,.csv"
              validation="required|length:0,200"
              v-model="form.staff_doc" >
              <template #label>
              <label class="formkit-label text-gray-700 dark:text-gray-200 block mb-2 font-semibold text-sm formkit-invalid:text-red-500">Documents <span class="text-danger">*</span></label>
              </template>
            </FormKit>
          </div>
          <div class="basis-1/3 mr-5">
            <FormKit 
              type="select" 
              label="School Name"
              :options="school"
              validation="required|length:0,200"
              v-model="form.staff_school"
            >
              <template #label>
              <label class="formkit-label text-gray-700 dark:text-gray-200 block mb-2 font-semibold text-sm formkit-invalid:text-red-500">School Name <span class="text-danger">*</span></label>
              </template>
            </FormKit>
          </div>
          <div class="basis-1/3 ">
            <FormKit 
              type="select" 
              label="Staff Type"
              :options="staffType"
              validation="required|length:0,200"
              v-model="form.staff_type"
            >
              <template #label>
              <label class="formkit-label text-gray-700 dark:text-gray-200 block mb-2 font-semibold text-sm formkit-invalid:text-red-500">Staff Type <span class="text-danger">*</span></label>
              </template>
            </FormKit>
          </div>
        </div>
      </FormKit>       
    </div>
     
    <rs-button variant="warning" class="w-70" style="margin-left: 9%;">Update</rs-button> 
      &nbsp;&nbsp;&nbsp;
     <nuxt-link :to="`/usermanagement/staff`">    
        <rs-button variant="primary" class="w-70" style="margin-left: 2%;margin-top: -4.6%;">Cancel</rs-button>
     </nuxt-link>
  </rs-card>

  <!--- DATATABLE  -->
  <rs-card
    class="flex-wrap justify-between p-5 bg-white text-black rounded-md flex-col"
  >
    <template #header>
      <div class="flex">List of Staff</div>
    </template>

    <!-- TABLE LIST STAFF -->
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

      <template v-slot:FullName="data" >
        <p class="">
          {{ data.value.fullname }}
        </p>
      </template>

      <template v-slot:Nric="data" >
        <p class="">
          {{ data.value.nric }}
        </p>
      </template>

      <template v-slot:WalletNumber="data" >
        <p class="">
          {{ data.value.walletNo }}
        </p>
      </template>

      <template v-slot:Status="data" >
        <rs-badge variant="success" v-if="data.value.status == 'Active'">Aktif</rs-badge>
        <rs-badge variant="danger" v-else>Tidak Aktif</rs-badge>
      </template>

      <template v-slot:Action="data">
        <div class="flex flex-row">
          <nuxt-link :to="``" class="ml-2">
            <rs-button variant="danger">
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
</template>
      