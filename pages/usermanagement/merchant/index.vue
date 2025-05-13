<script setup>
  definePageMeta({
    title: "Merchant Management",
    
  });

  const field = [
    "Id",
    "CompanyName",
    "OwnerName",
    "Status",
    "Action",
  ]
  const data = [
    {
      id: 1,
      companyName: "Company A",
      ownerName: "Yusuf",
      status: "Active",
      action: "",
    },
    {
      id: 2,
      companyName: "Company B",
      ownerName: "Zarif",
      status: "Active",
      action: "",
    },
    {
      id: 3,
      companyName: "Company C",
      ownerName: "Shella",
      status: "Active",
      action: "",
    },
  ]

const showModalDeleteMerchant = ref(false);
const showModalDeleteForm = ref({
  companyName: "Company A",
});

</script>
<template>
  <div>
    <!--<LayoutsBreadcrumb />-->
    <div class="flex justify-between">
        <h4 class="mb-4 uppercase">Merchant Management</h4>
      </div>
  </div>

  <!-- BUTTON ADD MERCHANT -->
  <div class="flex justify-end mb-2">
    <nuxt-link :to="`/usermanagement/merchant/addmerchant`">
      <rs-button class="mx-5 px-5" variant = "warning"><Icon name="fe:plus" class="mr-1" />
        New Merchant
      </rs-button>
    </nuxt-link>
  </div>

  <!--- DATATABLE  -->
  <rs-card
    class="flex-wrap justify-between p-5 bg-white text-black rounded-md flex-col"> 
   

    <!-- TABLE LIST MERCHANT -->
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

      <template v-slot:CompanyName="data" >
        <p class="">
          {{ data.value.companyName }}
        </p>
      </template>

      <template v-slot:OwnerName="data" >
        <p class="">
          {{ data.value.ownerName }}
        </p>
      </template>

      <template v-slot:Status="data" >
          <rs-badge variant="success" v-if="data.value.status == 'Active'">Aktif</rs-badge>
          <rs-badge variant="danger" v-else>Tidak Aktif</rs-badge>
      </template>

      <template v-slot:Action="data">
        <div class="flex flex-row">
          <nuxt-link :to="`/usermanagement/merchant/editmerchant/(id)`">
            <rs-button variant = "warning" v-tooltip.focus.top="'Edit merchant'">
              <Icon name="material-symbols:edit-outline"></Icon>
            </rs-button>
          </nuxt-link>
          <nuxt-link :to="`/usermanagement/merchant/assignschool/(id)`" class="ml-2">
            <rs-button variant = "warning" v-tooltip.focus.top="'School'">
              <Icon name="teenyicons:school-outline"></Icon>
            </rs-button>
          </nuxt-link>
          <nuxt-link :to="`/usermanagement/merchant/assignterminal/(id)`" class="ml-2">
            <rs-button variant = "warning" v-tooltip.focus.top="'POS Terminal'">
              <Icon name="material-symbols:dock-outline"></Icon>
            </rs-button>
          </nuxt-link>
          <!--<nuxt-link :to="`/usermanagement/merchant/assignserver/(id)`" class="ml-2">
            <rs-button variant = "warning" v-tooltip.focus.top="'Server'"> 
              <Icon name="icon-park-twotone:activity-source"></Icon>
            </rs-button>
          </nuxt-link>-->
          <nuxt-link :to="``" class="ml-2">
            <rs-button variant="danger" v-tooltip.focus.top="'Delete'" @click = "showModalDeleteMerchant = true">
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

  <rs-modal title="Delete Confirmation" ok-title="Yes" cancel-title="No" :ok-callback="delete" v-model = "showModalDeleteMerchant">
    <p>
      Are you sure want to delete this merchant ({{ showModalDeleteForm.companyName }})?
    </p>
  </rs-modal>

</template>
      