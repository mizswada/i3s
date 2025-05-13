<script setup>
definePageMeta({
  title: "Manage School Subject",
  
});

const dataExam = [
  {  
    "#" : "1", 
    "Exam Type": "Ujian 1",
    "Action": ""
  },
  {   
    "#" : "2", 
    "Exam Type": "Ujian Pertengahan Tahun",
    "Action": ""
  },
]

const dataSubject = [
  {  
    "#" : "1", 
    "Subject Name": "Bahasa Melayu",
    "Action": ""
  },
  {   
    "#" : "2", 
    "Subject Name": "Bahasa English",
    "Action": ""
  },
]

const dataGred = [
  {  
    "#" : "1", 
    "Gred": "A+",
    "Description": "Cemerlang Tertinggi",
    "Action": ""
  },
  {   
    "#" : "2", 
    "Gred": "A",
    "Description": "Cemerlang Tinggi",
    "Action": ""
  },
]

const showModaldeleteExam = ref(false);
const showModaldeleteSubject = ref(false);
const showModaldeleteGred = ref(false);
const showModalDeleteForm = ref({
  exam: "Ujian 1",
  subject: "Bahasa Melayu",
  gred: "E"
});

</script>
<template>
<rs-tab>
  <rs-tab-item title="School Exam">
    <div>
     <!--<div class="flex justify-between">
        <h4 class="mb-4">School Exam Details</h4>
      </div>-->
       <span class="text-sm text-gray-500">
          Below is the list of all exam detail by school
       </span>

      <!-- BUTTON ADD EXAM -->
      <div class="flex justify-end mb-2">
         <nuxt-link to="/school/school/subject/add-exam/[id]">
            <rs-button class="mx-5 px-5" variant = "warning">
              <Icon name="fe:plus" class="mr-1" />
                Add Exam
            </rs-button>
          </nuxt-link>   

          <nuxt-link to="/school/school/subject/uploadexam">
            <rs-button class="mb-4" variant = "warning">              
             <span style="height: 24px;">Excel Upload </span>
            </rs-button>
          </nuxt-link>
      </div>

      <rs-card class="py-5">
         <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-y-2 px-5">
            <rs-table :data="dataExam" :options="{ variant: 'default',striped: true,bordered: true,borderless: true,hover: true,fixed: false,
            }"
            advanced
            class="mt-4">
          
            <template v-slot:Action="data">
              <div class="flex flex-row gap-x-2">
                <div class="flex items-center gap-x-2">
                  <!--<nuxt-link :to="`/school/school/subject/edit-exam/[id]`">
                    <rs-button variant="warning" v-tooltip.focus.top="'Edit Exam'">
                      <Icon name="material-symbols:edit-outline" /> 
                    </rs-button>
                  </nuxt-link>-->
                </div>  

                <div class="flex items-center gap-x-2">
                  <nuxt-link :to="``">
                    <rs-button variant="danger" v-tooltip.focus.top="'Delete'" @click="showModaldeleteExam = true">
                      <Icon name="material-symbols:delete-outline" /> 
                    </rs-button>
                  </nuxt-link>
                </div>
              </div>
            </template>
            </rs-table> 
         </div>
      </rs-card>

      <rs-modal title="Delete Confirmation" ok-title="Yes" cancel-title="No" :ok-callback="delete" v-model="showModaldeleteExam" >
        <p>
          Are you sure want to delete exam name ({{ showModalDeleteForm.exam }})?
        </p>
      </rs-modal>

    </div>
  </rs-tab-item>

  <rs-tab-item title="School Subject">
   <div>
      <!--<div class="flex justify-between">
        <h4 class="mb-4">School Subject Details</h4>
      </div>-->
       <span class="text-sm text-gray-500">
          Below is the list of all subject detail by school
       </span>


      <!-- BUTTON ADD SUBJECT -->
      <div class="flex justify-end mb-2">      
         <nuxt-link to="/school/school/subject/add-subject/[id]">
            <rs-button class="mx-5 px-5" variant = "warning">
              <Icon name="fe:plus" class="mr-1" />
                Add Subject
            </rs-button>
          </nuxt-link>   

          <nuxt-link to="/school/school/subject/uploadExam">
            <rs-button class="mb-4" variant = "warning">              
             <span style="height: 24px;">Excel Upload </span>
            </rs-button>
          </nuxt-link>
      </div>

      <rs-card class="py-5">
         <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-y-2 px-5">          

            <rs-table
            :data="dataSubject"
            :options="{
            variant: 'default',
            striped: true,
            bordered: true,
            borderless: true,
            hover: true,
            fixed: false,
            }"
            advanced
            class="mt-4"
          >
          <template v-slot:Action="data">
            <div class="flex flex-row gap-x-2">
              <div class="flex items-center gap-x-2">
                <!--<nuxt-link :to="`/school/school/subject/edit-subject/[id]`">
                  <rs-button variant="warning" v-tooltip.focus.top="'Edit subject'">
                    <Icon name="material-symbols:edit-outline" /> 
                  </rs-button>
                </nuxt-link>-->
              </div>  

              <div class="flex items-center gap-x-2">
                <nuxt-link :to="``">
                  <rs-button variant="danger" v-tooltip.focus.top="'Delete'" @click="showModaldeleteSubject = true">
                    <Icon name="material-symbols:delete-outline" /> 
                  </rs-button>
                </nuxt-link>
              </div>
            </div>
          </template>
          </rs-table>
         </div>
      </rs-card>

      <rs-modal title="Delete Confirmation" ok-title="Yes" cancel-title="No" :ok-callback="delete" v-model="showModaldeleteSubject" >
        <p>
          Are you sure want to delete this subject ({{ showModalDeleteForm.subject }})?
        </p>
      </rs-modal>

    </div>
  </rs-tab-item>

  <rs-tab-item title="School Gred">
   <div>
      <!--<div class="flex justify-between">
        <h4 class="mb-4">School Gred Details</h4>
      </div>-->
       <span class="text-sm text-gray-500">
          Below is the list of all gred detail by school
       </span>

      <!-- BUTTON ADD GRED -->
      <div class="flex justify-end mb-2">
         <nuxt-link to="/school/school/subject/add-gred/[id]">
            <rs-button class="mx-5 px-5" variant = "warning">
              <Icon name="fe:plus" class="mr-1" />
                Add Gred
            </rs-button>
          </nuxt-link>   

          <nuxt-link to="/school/school/subject/uploadgred">
            <rs-button class="mb-4" variant = "warning">              
             <span style="height: 24px;">Excel Upload </span>
            </rs-button>
          </nuxt-link>
      </div>

      <rs-card class="py-5">
         <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-y-2 px-5">
           <rs-table
            :data="dataGred"
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
          
            <template v-slot:Action="data">
              <div class="flex flex-row gap-x-2">
                <div class="flex items-center gap-x-2">
                  <!--<nuxt-link :to="`/school/school/subject/edit-subject/[id]`">
                    <rs-button variant="warning" v-tooltip.focus.top="'Edit Gred'">
                      <Icon name="material-symbols:edit-outline" /> 
                    </rs-button>
                  </nuxt-link>-->
                </div>  

                <div class="flex items-center gap-x-2">
                  <nuxt-link :to="``">
                    <rs-button variant="danger" v-tooltip.focus.top="'Delete'" @click="showModaldeleteGred = true">
                      <Icon name="material-symbols:delete-outline" /> 
                    </rs-button>
                  </nuxt-link>
                </div>
              </div>
            </template>
          </rs-table> 
         </div>
      </rs-card>

      <rs-modal title="Delete Confirmation" ok-title="Yes" cancel-title="No" :ok-callback="delete" v-model="showModaldeleteGred" >
        <p>
          Are you sure want to delete this gred ({{ showModalDeleteForm.gred }})?
        </p>
      </rs-modal>

    </div>
  </rs-tab-item>
</rs-tab>  
</template>
