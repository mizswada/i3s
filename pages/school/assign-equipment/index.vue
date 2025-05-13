<script setup>
 definePageMeta({
    title: "Assign Equipment",
    
  });

const field = [
    //"Id",
    //"Model",
    //"SerialNumber",
    "SchoolName",
    "TotalEquipment",    
    "Status",
    "Action",
]

 const data = [
    {
      id: 1,
      //model: "TP-LINK",
      //serialNumber: "EESB20250401-001",
      //equipmentType:"Switch",
      schoolName:"SK PUTRAJAYA PRESINT 18(2)",
      totalEquipment: "9",
      status: "Active",
      action: "",
    },
    {
      id: 2,
      //model: "RFID Reader",
      //serialNumber: "202306170100031",
      //equipmentType:"Reader",
      schoolName:"SMK SEKSYEN 18",
      totalEquipment: "8",
      status: "Active",
      action: "",
    },
    //{
      //id: 3,
      //model: "RFID Reader",
      //serialNumber: "202306170100033",
      //equipmentType:"Reader",
      //schoolName:"SK PUTRAJAYA PRESINT 18(2)",
      //status: "Faulty",
      //action: "",
    //},
    //{
      //id: 4,
      //model: "IDF-VAPL30",
      //serialNumber: "DT202407200009",
      //equipmentType:"Server",
      //schoolName:"SK PUTRAJAYA PRESINT 18(2)",
      //status: "Active",
      //action: "",
    //},
  ]

const showModaldeleteAssignEq = ref(false);

</script>

<template>
<div>
 <div>
    <!--<LayoutsBreadcrumb />-->
    <div class="flex justify-between">
        <h4 class="mb-4 uppercase">Assign Equipment</h4>
      </div>
  </div>

  <!-- BUTTON ASSIGN NEW EQUIPMENT -->
    <!--<div class="flex justify-end mb-2">
        <nuxt-link :to="`/school/school/addassign-equipment`">
          <rs-button class="mx-5 px-5" variant = "warning"><Icon name="fe:plus" class="mr-1" />
             Assign New Equipment 
          </rs-button>
        </nuxt-link>
    </div>-->

<!--- DATATABLE  -->
  <rs-card class="flex-wrap justify-between p-5 bg-white text-black rounded-md flex-col">
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

      <!--<template v-slot:Model="data" >
        <p class="">
          {{ data.value.model }}
        </p>
      </template>

       <template v-slot:SerialNumber="data" >
        <p class="">
          {{ data.value.serialNumber }}
        </p>
      </template>-->

      <template v-slot:SchoolName="data" >
        <p class="">
          {{ data.value.schoolName }}
        </p>
      </template>

       <template v-slot:TotalEquipment="data" >
        <p class="">
          {{ data.value.totalEquipment }}
        </p>
      </template>     

      <template v-slot:Status="data" >
          <rs-badge variant="success" v-if="data.value.status == 'Active'">Aktif</rs-badge>
          <rs-badge variant="danger" v-else>Tidak Aktif</rs-badge>
      </template>
      <template v-slot:Action="data">
        <div class="flex flex-row">         

          <nuxt-link :to="`/school/assign-equipment/assignreader/(id)`" class="ml-2">
            <rs-button variant = "warning" v-tooltip.focus.top="'Reader'">
              <Icon name="icon-park-twotone:activity-source"></Icon>
            </rs-button>
          </nuxt-link>

          <nuxt-link :to="`/school/assign-equipment/assignswitch/(id)`" class="ml-2">
            <rs-button variant = "warning" v-tooltip.focus.top="'Switch'">
              <Icon name="icon-park-twotone:activity-source"></Icon>
            </rs-button>
          </nuxt-link>

          <nuxt-link :to="`/school/assign-equipment/assignserver/(id)`" class="ml-2">
            <rs-button variant = "warning" v-tooltip.focus.top="'Server'">
              <Icon name="oui:storage"></Icon>
            </rs-button>
          </nuxt-link>

          <nuxt-link :to="``" class="ml-2">
            <rs-button variant="danger" @click="showModaldeleteAssignEq = true">
              <Icon name="material-symbols:delete-outline"></Icon>
            </rs-button>
          </nuxt-link>
        </div>  
        
      </template> 
    </rs-table>
  </rs-card>
  <rs-modal title="Delete Confirmation" ok-title="Yes" cancel-title="No" :ok-callback="delete" v-model="showModaldeleteAssignEq" >
    <p>
      Are you sure want to delete this ?
    </p>
  </rs-modal>

</div>
</template>