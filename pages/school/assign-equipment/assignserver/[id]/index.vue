<script setup>
  definePageMeta({
    title: "Assign Server to School",
    
  });

  const field = [
    "Id",
    "SerialNumber",
    "SchoolName",
    "Status",
    "Action",
  ]

  const hardwarestatus = [   
    { label: "In Stock", value: "In Stock" },   
  ]

const serverserialno = [
  { label: "Choose Serial Number", value: null },
  { label: "DT202407200008", value: "DT202407200008" },
  { label: "DT202407200010", value: "DT202407200010" },
  { label: "DT202407200011", value: "DT202407200011" }
]

const schoolDropdown = [
  { label: "Select School", value: null },
  { label: "SK PUTRAJAYA PRESINT 18(2), PUTRAJAYA", value: "SK PUTRAJAYA PRESINT 18(2), PUTRAJAYA" },
  { label: "SMK SEKSYEN 18, SHAH ALAM", value: "SMK SEKSYEN 18, SHAH ALAM" },
  { label: "SK PANDAMARAN JAYA, KLANG", value: "SK PANDAMARAN JAYA, KLANG" },  
]
  const data = [
    {
      id: 1,
      serialNo: "DT202407200009",
      schoolName: "SMK SEKSYEN 18, SHAH ALAM",
      status: "Active",
      action: "",
    },
    {
      id: 2,
      serialNo: "DT202407200009",
      schoolName: "SK PANDAMARAN JAYA, KLANG",
      status: "Active",
      action: "",
    },    
  ]

  const form = ref({
    server_serialNo: "",
    server_status: "",
    server_school: "",
  });


  function showform(){
    // document.getElementById('relationship').style.display = 'block';
    var x = document.getElementById("relationship");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

const ModaldeleteAssignServer = ref(false);
const showModalDeleteForm = ref({
  server_serialNo: "DT202407200009",
});

</script>
<template>
 <div>
    <!--<LayoutsBreadcrumb />-->
  </div>

  <!--- First card : Merchant Name -->
   <!--<div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-x-6">    
    <rs-card>
      <div class="summary-1 pt-5 pb-3 px-5 flex items-center gap-4">
        <div
          class="p-5 flex justify-center items-center bg-primary/20 rounded-2xl"
        >
          <Icon class="text-primary" name="material-symbols:person"></Icon>
        </div>
        <div class="flex-1 truncate">
          <span class="block font-semibold text-xl leading-tight">
            Company A </span>
          <span class="text-base font-semibold text-gray-500">Merchant</span>
        </div>
      </div>
    </rs-card>
  </div>-->


  <!-- BUTTON ADD SERVER -->
  <div class="flex justify-end mb-2">
    <rs-button class="mx-5 px-5" variant = "warning" @click="showform()"><Icon name="fe:plus" class="mr-1" />
      New Server
    </rs-button>

     <nuxt-link to="/school/assign-equipment">
        <rs-button class="mb-4" variant = "primary">              
          <span style="height: 24px;"> cancel </span>
        </rs-button>
      </nuxt-link>

  </div>

<!-- NEW SERVER -->
  <rs-card
    class="flex-wrap justify-between p-5 bg-white text-black rounded-md flex-col"
    id="relationship" hidden >
  
    <template #header>
        <div class="flex">New Server</div>
    </template>

    <div class="p-5">
        <FormKit
            type="form"
            :action="false"
            @submit="submit"
            :incomplete-message="false"
            id="myForm"
        >
            <div class="flex flex-row justify-between">
            <div class="basis-1/2 mr-5">
                <FormKit 
                type="select" 
                label="School Name"
                :options="schoolDropdown"
                validation="required"
                v-model="form.server_school"
                >
                <template #label>
                <label class="formkit-label text-gray-700 dark:text-gray-200 block mb-2 font-semibold text-sm formkit-invalid:text-red-500">School <span class="text-danger">*</span></label>
                </template>
                </FormKit>
            </div>            
            <div class="basis-1/2 mr-5">
                <FormKit 
                type="select" 
                label="Serial Number"
                :options="serverserialno"
                validation="required|length:0,200"
                v-model="form.server_serialNo"
                >
                <template #label>
                <label class="formkit-label text-gray-700 dark:text-gray-200 block mb-2 font-semibold text-sm formkit-invalid:text-red-500">Serial Number <span class="text-danger">*</span></label>
                </template>
                </FormKit>
            </div>
            <div class="basis-1/2">
                <FormKit 
                type="select" 
                label="status"
                :options="hardwarestatus"
                validation="required"
                v-model="form.server_status"
                >
                <template #label>
                <label class="formkit-label text-gray-700 dark:text-gray-200 block mb-2 font-semibold text-sm formkit-invalid:text-red-500">Status <span class="text-danger">*</span></label>
                </template>
                </FormKit>
            </div>
            
            </div>
        </FormKit>
        </div>
</rs-card>

<!--- DATATABLE  -->
  <rs-card
    class="flex-wrap justify-between p-5 bg-white text-black rounded-md flex-col"
  >
    <template #header>
      <div class="flex">List of Server</div>
    </template>

    <!-- TABLE LIST SERVER -->
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

      <template v-slot:SerialNumber="data" >
        <p class="">
          {{ data.value.serialNo }}
        </p>
      </template>

      <template v-slot:SchoolName="data" >
        <p class="">
          {{ data.value.schoolName }}
        </p>
      </template>

      <template v-slot:Status="data" >
        <rs-badge variant="success" v-if="data.value.status == 'Active'">Active</rs-badge>
        <rs-badge variant="danger" v-else>Tidak Aktif</rs-badge>
      </template>

      <template v-slot:Action="data">
        <div class="flex flex-row">
          <nuxt-link :to="``" class="ml-2">
            <rs-button variant="danger" @click="ModaldeleteAssignServer = true">
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

    <rs-modal title="Delete Confirmation" ok-title="Yes" cancel-title="No" :ok-callback="delete" v-model="ModaldeleteAssignServer" >
    <p>
      Are you sure want to delete this serial number ({{showModalDeleteForm.server_serialNo}}) ?
    </p>
  </rs-modal>
  
</template>