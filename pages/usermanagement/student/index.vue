<script setup>
  definePageMeta({
    title: "Student",
    
  });

  const field = [
    "Id",
    "FullName",
    "NRIC",
    "WalletNumber",
    "SchoolName",
    "Status",
    "Action",
  ]
  const data = [
    {
      id: 1,
      fullname: "Student 1",
      nric: 1200,
      walletNo: 340,
      schoolName: "SMKCJ",
      status: "Active",
      action: "",
    },
    {
      id: 2,
      fullname: "Student 2",
      nric: 1200,
      walletNo: 340,
      schoolName: "SMKCJ",
      status: "Active",
      action: "",
    },
    {
      id: 3,
      fullname: "Student 3",
      nric: 1200,
      walletNo: 340,
      schoolName: "SMKCJ",
      status: "Active",
      action: "",
    },
  ]

const showModalDeleteStudent = ref(false);
const showModalDeleteForm = ref({
  nameStudent: "Student 1",
});

</script>
<template>
  <div>
    <!--<LayoutsBreadcrumb />-->
  </div>

  <!-- BUTTON ADD STUDENT -->
  <div class="flex justify-end mb-2">
    <nuxt-link :to="`/usermanagement/student/addstudent`">
      <rs-button class="mx-5 px-5" variant = "warning"><Icon name="fe:plus" class="mr-1" />
        New Student
      </rs-button>
    </nuxt-link>

    <nuxt-link :to="`/usermanagement/student/uploadstudent`">
      <rs-button class="px-5" variant = "warning">
        Excel Upload
      </rs-button>
    </nuxt-link>
  </div> 

  <!--- DATATABLE  -->
  <rs-card
    class="flex-wrap justify-between p-5 bg-white text-black rounded-md flex-col"
  >

    <!-- TABLE LIST STUDENT -->
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

      <template v-slot:WalletNumber="data" >
        <p class="">
          {{ data.value.walletNo }}
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
          <nuxt-link :to="`/usermanagement/student/editstudent/(id)`">
            <rs-button variant="warning" v-tooltip.focus.top="'Edit Student'">
              <Icon name="material-symbols:edit-outline"></Icon>
            </rs-button>
          </nuxt-link>
          <nuxt-link :to="`/usermanagement/student/assignclass/(id)`" class="ml-2">
            <rs-button variant="warning" v-tooltip.focus.top="'Class'">
              <Icon name="ic:baseline-class"></Icon>
            </rs-button>
          </nuxt-link>
          <nuxt-link :to="``" class="ml-2">
            <rs-button variant="danger" v-tooltip.focus.top="'Delete'" @click="showModalDeleteStudent = true">
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

    <rs-modal title="Delete Confirmation" ok-title="Yes" cancel-title="No" :ok-callback="delete" v-model = "showModalDeleteStudent">
    <p>
      Are you sure want to delete this student name ({{ showModalDeleteForm.nameStudent }})?
    </p>
  </rs-modal>

</template>
      