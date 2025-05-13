<script setup>
  definePageMeta({
    title: "Parent",
    
  });

  const field = [
    "Id",
    "FullName",
    "NRIC",
    "AccountNumber",
    "Status",
    "Action",
  ]
  const data = [
    {
      id: 1,
      parentFullname: "Parent 1",
      parentIC: 1200,
      parentWalletNo: 340,
      status: "Active",
      action: "",
    },
    {
      id: 2,
      parentFullname: "Parent 2",
      parentIC: 1200,
      parentWalletNo: 341,
      status: "Active",
      action: "",
    },
    {
      id: 3,
      parentFullname: "Parent 3",
      parentIC: 1200,
      parentWalletNo: 344,
      status: "Active",
      action: "",
    },
  ]

const showModalDeleteParent = ref(false);
const showModalDeleteForm = ref({
  parentName: "Parent 1",
});

</script>
<template>
  <div>
    <!--<LayoutsBreadcrumb />-->
    <div>
      <div class="flex justify-between">
        <h4 class="mb-4 uppercase">Parent Management</h4>
      </div>
    </div>
  </div>

  <!-- BUTTON ADD PARENT -->
  <div class="flex justify-end mb-2">    
    <nuxt-link :to="`/usermanagement/parent/addparent`">
      <rs-button class="mx-5 px-5" variant = "warning">
        Add Parent
      </rs-button>
    </nuxt-link>
  </div>

  <!--- DATATABLE  -->
  <rs-card class="flex-wrap justify-between p-5 bg-white text-black rounded-md flex-col"  >  

    <!-- TABLE LIST PARENT -->
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
          {{ data.value.parentFullname }}
        </p>
      </template>

      <template v-slot:NRIC="data" >
        <p class="">
          {{ data.value.parentIC }}
        </p>
      </template>

      <template v-slot:AccountNumber="data" >
        <p class="">
          {{ data.value.parentWalletNo }}
        </p>
      </template>

      <template v-slot:Status="data" >
          <rs-badge variant="success" v-if="data.value.status == 'Active'">Aktif</rs-badge>
          <rs-badge variant="danger" v-else>Tidak Aktif</rs-badge>
      </template>

      <template v-slot:Action="data">
        <div class="flex flex-row">
          <nuxt-link :to="`/usermanagement/parent/editparent/(id)`">
              <rs-button variant = "warning" v-tooltip.focus.top="'Edit Parent'">
                  <Icon name="material-symbols:edit-outline"></Icon>
              </rs-button>
          </nuxt-link>
          <nuxt-link :to="`/usermanagement/parent/assignstudent/(id)`" class="ml-2">
              <rs-button variant = "warning" v-tooltip.focus.top="'Student'">
                  <Icon name="ic:sharp-people-alt"></Icon>
              </rs-button>
          </nuxt-link>
          <nuxt-link :to="``" class="ml-2">
              <rs-button variant="danger" v-tooltip.focus.top="'Delete'" @click="showModalDeleteParent = true">
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

 <rs-modal title="Delete Confirmation" ok-title="Yes" cancel-title="No" :ok-callback="delete" v-model = "showModalDeleteParent">
    <p>
      Are you sure want to delete this name ({{ showModalDeleteForm.parentName }})?
    </p>
  </rs-modal>
</template>
      