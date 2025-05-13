<script setup>
definePageMeta({
  title: "Add New Ticket",
  
});

const form = ref({
    SupportCategory: "",
    ProblemType: "",
    PriorityType: "",    
    SchoolName: "",
    ReportBy: "",
    Subject: "",
    ProblemDescription: ""

})

const supportDropdown = ref([
  { label: "Finance", value: "Active" },
  { label: "Technical Support", value: "Repair" },
  { label: "Application Mobile", value: "In Stock" },
  { label: "Operation & Sales", value: "Faulty" }, 
]);

const problemDropdown = ref([
  { label: "Reload", value: "Reload" },
  { label: "Refund", value: "Refund" },
  { label: "Settlement", value: "Settlement" },  
]);

const priorityDropdown = ref([
  { label: "Critical", value: "Critical" },
  { label: "High", value: "High" },
  { label: "Medium", value: "Medium" },
  { label: "Low", value: "Low" },
 
]);

const schoolDropdown = ref([  
  { label: "SMK Seksyen 18 Shah Alam", value: "SMK Seksyen 18 Shah Alam" },
  { label: "MRSM Lenggong", value: "MRSM Lenggong" },
  { label: "Smk Taman Tun Dr Ismail", value: "Smk Taman Tun Dr Ismail" },
]);

const statusDropdown = ref([
  { label: "Open", value: "Open" },
  { label: "Pending", value: "Pending" },
  { label: "Closed", value: "Closed" },
  { label: "Resolved", value: "Resolved" }, 
]);

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
                            <h5 class="font-semibold">Add New Ticket</h5>
                            <span class="text-sm text-gray-500">
                                
                            </span>
                        </div>
                    </div>
                    
                     <div class="flex flex-row justify-between">
                      <div class="basis-1/3 mr-5">
                        <FormKit v-model="form.SupportCategory" type="select" :options="supportDropdown" label="Support Category" validation="required" />                       
                      </div>                 
                      <div class="basis-1/3 mr-5">                     
                        <FormKit v-model="form.ProblemType" type="select" :options="problemDropdown" label="Problem Type" validation="required" />
                      </div>
                      <div class="basis-1/3">  
                         <FormKit v-model="form.PriorityType" type="select" :options="priorityDropdown" label="Priority Type" validation="required" />
                      </div>                    
                    </div>                   

                     <div class="flex flex-row justify-between">
                      <div class="basis-1/2 mr-5">
                        <FormKit v-model="form.schoolName" type="select" :options="schoolDropdown" label="School Name" validation="required" />
                      </div>
                      <div class="basis-1/2">
                        <FormKit v-model="form.ReportBy" type="text" label="Report by" validation="required|length:0,50"/> 
                      </div>
                     </div>                   

                    <FormKit v-model="form.Subject" type="text" label="Subject" validation="required|length:0,50"/>

                    <FormKit type="textarea" rows="8" label="Problem Description"/> 

                    <FormKit v-model="form.status" type="select" :options="statusDropdown" label="Ticket Status" validation="required" /> 
       
                 </rs-card>
            </section>
            <!--<rs-button btn-type="submit" class="w-full" :disabled="processing">
                {{ processing ? "Saving..." : "Save" }}
            </rs-button>-->

            <nuxt-link :to="`/customer-service/new-ticket`">
            <rs-button variant="primary" class="w-64" style="margin-left: 59%;">Close</rs-button>
            </nuxt-link>
            &nbsp;&nbsp;&nbsp;
            <rs-button variant="warning" class="w-64" style="margin-top: -4.5%;margin-left: 80%;">Update</rs-button>
            
        </FormKit>
    </div>
</template>