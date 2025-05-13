<script setup>
  definePageMeta({
    title: "Staff",
    
  });

  const field = [
    "Id",
    "FullName",
    "NRIC",
    "AccountNumber",
    "SchoolName",
    "Status",
    "Action",
  ]
  const data = [
    {
      id: 1,
      fullname: "Staff 1",
      nric: 1200,
      accountNo: 345,
      schoolName: "SMKCJ",
      status: "Active",
      action: "",
    },
    {
      id: 2,
      fullname: "Staff 2",
      nric: 1200,
      accountNo: 310,
      schoolName: "SMKCJ",
      status: "Active",
      action: "",
    },
    {
      id: 3,
      fullname: "Staff 3",
      nric: 1200,
      accountNo: 356,
      schoolName: "SMKCJ",
      status: "Active",
      action: "",
    },
  ]

const showModalDeleteStaff = ref(false);
const showModalDeleteForm = ref({
  nameStaff: "Staff 1",
});

</script>
<template>
  <div>
    <!--<LayoutsBreadcrumb />-->
    <div>
      <div class="flex justify-between">
        <h4 class="mb-4 uppercase">Staff Management</h4>
      </div>
    </div>
  </div>

  <!-- BUTTON ADD STAFF -->
  <div class="flex justify-end mb-2">
    <nuxt-link :to="`/usermanagement/staff/addstaff`">
      <rs-button class="mx-5 px-5" variant = "warning"><Icon name="fe:plus" class="mr-1" />
        New Staff
      </rs-button>
    </nuxt-link>

    <nuxt-link :to="`/usermanagement/staff/uploadstaff`">
      <rs-button class="px-5" variant = "warning">
        Excel Upload
      </rs-button>
    </nuxt-link>
  </div> 

  <!-- TABLE LIST STAFF -->
  <rs-card  class="flex-wrap justify-between p-5 bg-white text-black rounded-md flex-col">     
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

      <template v-slot:NRIC="data" >
        <p class="">
          {{ data.value.nric }}
        </p>
      </template>

      <template v-slot:AccountNumber="data" >
        <p class="">
          {{ data.value.accountNo }}
        </p>
      </template>

      <template v-slot:SchoolName="data" >
        <p class="">
          {{ data.value.schoolName }}
        </p>
      </template>

      <template v-slot:Status="data" >
        <rs-badge variant="success" v-if="data.value.status == 'Active'">Aktif</rs-badge>
        <rs-badge variant="danger" v-else>Tidak Aktif</rs-badge>
      </template>

      <template v-slot:Action="data">
        <div class="flex flex-row">
          <nuxt-link :to="`/usermanagement/staff/editstaff/(id)`">
            <rs-button variant = "warning" v-tooltip.focus.top="'Edit Staff'">
              <Icon name="material-symbols:edit-outline"></Icon>
            </rs-button>
          </nuxt-link>

          <nuxt-link :to="`/usermanagement/staff/assignclass/(id)`" class="ml-2">
            <rs-button variant = "warning" v-tooltip.focus.top="'View Class'">
              <Icon name="ic:baseline-class"></Icon>
            </rs-button>
          </nuxt-link>

          <nuxt-link :to="``" class="ml-2">
            <rs-button variant="danger" v-tooltip.focus.top="'Delete'" @click="showModalDeleteStaff = true">
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

  <rs-modal title="Delete Confirmation" ok-title="Yes" cancel-title="No" :ok-callback="delete" v-model = "showModalDeleteStaff">
    <p>
      Are you sure want to delete this staff name ({{ showModalDeleteForm.nameStaff }})?
    </p>
  </rs-modal>

  <!-- <rs-card class="flex-wrap justify-between p-5 bg-white text-black rounded-md flex-col">   
  
    <rs-tab 
      variant="primary" 
      type="card"
      justify="left"
      fill>
      <rs-tab-item title="Teacher"> 
        <div>
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

            <template v-slot:AccountNumber="data" >
              <p class="">
                {{ data.value.accountNo }}
              </p>
            </template>

            <template v-slot:SchoolName="data" >
              <p class="">
                {{ data.value.schoolName }}
              </p>
            </template>

            <template v-slot:Status="data" >
              <rs-badge variant="success" v-if="data.value.status == 'Active'">Aktif</rs-badge>
              <rs-badge variant="danger" v-else>Tidak Aktif</rs-badge>
            </template>

            <template v-slot:Action="data">
              <div class="flex flex-row">
                <nuxt-link :to="`/usermanagement/staff/editstaff/(id)`">
                  <rs-button variant="primary-text">
                    <Icon name="material-symbols:edit-outline"></Icon>
                  </rs-button>
                </nuxt-link>
                <nuxt-link :to="`/usermanagement/staff/assignclass/(id)`" class="ml-2">
                  <rs-button variant="primary-text">
                    <Icon name="ic:baseline-class"></Icon>
                  </rs-button>
                </nuxt-link>
                <nuxt-link :to="``" class="ml-2">
                  <rs-button variant="danger-text">
                    <Icon name="material-symbols:delete-outline"></Icon>
                  </rs-button>
                </nuxt-link>
              </div>  
              
            </template>

          </rs-table>
          <div v-else class="">
            <rs-empty-table :field="field"></rs-empty-table>        
          </div>
        </div>
      </rs-tab-item>
      <rs-tab-item title="Non-Teacher"> 
        <div>
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

            <template v-slot:AccountNumber="data" >
              <p class="">
                {{ data.value.accountNo }}
              </p>
            </template>

            <template v-slot:SchoolName="data" >
              <p class="">
                {{ data.value.schoolName }}
              </p>
            </template>

            <template v-slot:Status="data" >
              <rs-badge variant="success" v-if="data.value.status == 'Active'">Aktif</rs-badge>
              <rs-badge variant="danger" v-else>Tidak Aktif</rs-badge>
            </template>

            <template v-slot:Action="data">
              <div class="flex flex-row">
                <nuxt-link :to="`/usermanagement/staff/editstaff/(id)`">
                  <rs-button>
                    <Icon name="material-symbols:edit-outline"></Icon>
                  </rs-button>
                </nuxt-link>
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
        </div>
      </rs-tab-item>
    </rs-tab>
  </rs-card> -->
  
</template>
      