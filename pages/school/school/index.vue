<script setup>
definePageMeta({
  title: "Manage School",
  
});

const data = [
  {
    "School Name": "SMK Seksyen 6",
    "School Type": "Sekolah Menengah Kebangsaan",
    "State": "Shah Alam",
    "Status": "Active",
    "Action": ""
  },
]

const showModaldelete = ref(false);
const showModalDeleteForm = ref({
  school: "SK PUTRAJAYA PRESINT 18(2)",
});

</script>
<template>
  <div>
    <div>
      <div class="flex justify-between">
        <h4 class="mb-4 uppercase">School Details</h4>
      </div>
      <rs-card class="py-5">
        <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-y-2 px-5">
          <div>
            <h5 class="font-semibold">School</h5>
            <span class="text-sm text-gray-500">
              Below is the list of all school
            </span>
          </div>

          <nuxt-link to="/school/school/add-school">
            <rs-button class="mb-4" variant="warning">
              <Icon name="fe:plus" class="mr-1" />
              Add School
            </rs-button>
          </nuxt-link>
            
        </div>

        <rs-table
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
          class="mt-4">
        <template v-slot:Status="data" >
          <rs-badge variant="success" v-if="data.text == 'Active'">Aktif</rs-badge>
          <rs-badge variant="danger" v-else>Tidak Aktif</rs-badge>
        </template>
        <template v-slot:Action="data">
          <div class="flex flex-row gap-x-2">
            <div class="flex items-center gap-x-2">
              <nuxt-link :to="`/school/school/edit-school/[id]`">
                <rs-button variant="warning" v-tooltip.focus.top="'Edit school'">
                  <Icon name="material-symbols:edit-outline" /> 
                </rs-button>
              </nuxt-link>
            </div>
            <div class="flex items-center gap-x-2">
              <nuxt-link :to="`/school/school/session/[id]`">
                <rs-button variant="warning" v-tooltip.focus.top="'Session'">
                  <Icon name="ic:round-access-time" /> 
                </rs-button>
              </nuxt-link>
            </div>
            <div class="flex items-center gap-x-2">
              <nuxt-link :to="`/school/school/class/[id]`">
                <rs-button variant="warning" v-tooltip.focus.top="'Class'">
                  <Icon name="ic:outline-class" /> 
                </rs-button>
              </nuxt-link>
            </div>
             <div class="flex items-center gap-x-2">
              <nuxt-link :to="`/school/school/subject/[id]`">
                <rs-button variant="warning" v-tooltip.focus.top="'Subject'">
                  <Icon name="icon-park-outline:list" /> 
                </rs-button>
              </nuxt-link>
            </div>
            <div class="flex items-center gap-x-2">
              <nuxt-link :to="``">
                <rs-button variant="danger" v-tooltip.focus.top="'Delete'" @click="showModaldelete = true" >               
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
          Are you sure want to delete this school name ({{ showModalDeleteForm.school }})?
        </p>
      </rs-modal>

    </div>
  </div>
</template>
