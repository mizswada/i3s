<script setup>
definePageMeta({
  title: "Add Subject",
  
});

const data = [
  {    
    "Subject Name": "Bahasa Melayu",
    "Action": ""
  },  
]
const form = ref({
  subjectName: "",
  schoolName: ""
})

const schoolDropdown = ref ([
   { label: "SK PUTRAJAYA PRESINT 18(2)", value: "SK PUTRAJAYA PRESINT 18(2)" },
   { label: "SMK SEKSYEN 18", value: "SMK SEKSYEN 18" },
])
</script>
<template>
  <div>
    <div class="flex justify-between">
    <h4 class="mb-4 uppercase"></h4>
    </div>

    <FormKit type="form" :actions="false" :incomplete-message="true" @submit="submitForm">
      <section>
        <rs-card class="p-5">
          <div class="flex justify-between items-center mb-5">
              <div>
              <h5 class="font-semibold">Add Subject</h5>
              <span class="text-sm text-gray-500">
                  Information about the subject
              </span>
              </div>
          </div>
        
         <FormKit v-model="form.schoolName" type="select" :options="schoolDropdown" label="School Name" validation="required"/> 
          
          <FormKit v-model="form.subjectName" type="text" label="Subject Name" validation="required|length:0,200"/>          

          <!--<FormKit
            v-model="form.classSession"
            type="text"
            label="School Class Session"
            validation="required|length:0,200"            
          />   

           <FormKit
            v-model="form.status"
            type="select"
            :options="statusDropdown"
            label="Status"
            validation="required|length:0,200" 
          /> -->
        </rs-card>

      </section>        
        <nuxt-link :to="`/school/school/subject/[id]`">
          <rs-button variant="primary" class="w-64" style="margin-left: 59%;">Close</rs-button>
        </nuxt-link>
        &nbsp;&nbsp;&nbsp;
        <rs-button variant="warning" class="w-64" style="margin-top: -4.5%;margin-left: 80%;">Save</rs-button>
    </FormKit>
  </div>
</template>
