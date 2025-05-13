<script setup>
definePageMeta({
  title: "Upload Subjects",
  
});

  const field = [
    "Id",
    "GredType",
    "Description",   
    "Action",
  ]

 const form = ref({    
    gred_doc: "",    
  });

const data = [
  {
    "id": "1",
    "gredType": "A+",
    "description": "Cemerlang Tertinggi",
    "status": "",
    "Action": ""
  }, 
]
</script>
<template>
  <div>
    <!--<LayoutsBreadcrumb />-->
     <div>
      <div class="flex justify-between">
        <h4 class="mb-4 uppercase">Upload Gred</h4>
      </div>
    </div>
  </div>

  <!-- UPLOAD DOC -->
  <rs-card class="flex-wrap justify-between p-5 bg-white text-black rounded-md flex-col">
    <div class="p-5">
      <FormKit type="form" :action="false" @submit="submit" :incomplete-message="false" id="myForm" >
     
        <div class="flex flex-row justify-between">
          <div class="basis-1/2 mr-5">
            <FormKit type="file" label="Documents" accept=".xlsx,.xml,.csv" validation="required|length:0,200" v-model="form.gred_doc" >
           
              <template #label>
              <label class="formkit-label text-gray-700 dark:text-gray-200 block mb-2 font-semibold text-sm formkit-invalid:text-red-500">Documents <span class="text-danger">*</span></label>
              </template>
            </FormKit>
          </div>          
        </div>        
      </FormKit>      
    </div>    
  </rs-card>

  <!--- DATATABLE  -->
  <rs-card class="flex-wrap justify-between p-5 bg-white text-black rounded-md flex-col" >   
 
    <template #header>
      <div class="flex">List of Gred</div>
    </template>

    <!-- TABLE LIST SUBJECT -->
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

      <template v-slot:GredType="data" >
        <p class="">
          {{ data.value.gredType }}
        </p>
      </template>

      <template v-slot:Description="data" >
        <p class="">
          {{ data.value.description }}
        </p>
      </template>
        

      <template v-slot:Status="data" >
        <rs-badge variant="success" v-if="data.value.status == 'Active'">Active</rs-badge>
        <rs-badge variant="danger" v-else>Active</rs-badge>
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