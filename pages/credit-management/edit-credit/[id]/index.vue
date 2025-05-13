<script setup>
definePageMeta({
  title: "Edit Credit Setup",
  
});

const statusDropdown = ref([
  { label: "Active", value: "Active" },
  { label: "Repair", value: "Repair" },
  { label: "In stock", value: "In Stock" },
  { label: "Faulty", value: "Faulty" },
  { label: "Missing", value: "Missing" },
]);

const form = ref({
title : "",
Startdate : "",
Enddate : "",
Creditvalue : "",
Status : "",
})

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
                            <!--<h5 class="font-semibold">Edit Credit Setup</h5>
                            <span class="text-sm text-gray-500">                                
                            </span>-->
                        </div>
                    </div>
                    
                    <FormKit v-model="form.title" type="text" label="Campaign budget title" disabled =  disabled validation="required"/>
                    <FormKit type="textarea" rows="8" label="Budget Description" disabled =  disabled /> 

                    <div class="flex flex-row justify-between">
                      <div class="basis-1/3 mr-5">
                      <FormKit type="text" label="Set Budget (CR)" placeholder="1.00" disabled =  disabled>
                          <template #prefix> <div class="p-3">RM</div> </template>
                        </FormKit>
                      </div>
                      <div class="basis-1/3 mr-5">
                        <FormKit v-model="form.Startdate" type="date" label="Start Date" disabled =  disabled validation="required|length:0,50"/>
                      </div>
                      <div class="basis-1/3">
                        <FormKit v-model="form.Enddate" type="date" label="End Date" disabled =  disabled validation="required|length:0,50"/>
                      </div>
                    </div>                   

                    <FormKit
                    v-model="form.Status"
                    type="select"                    
                    :options="statusDropdown"
                    label="Status"
                    validation="required|length:0,50" />       
                                
                      
                 </rs-card>
            </section>        

            <nuxt-link :to="`/credit-management`">
            <rs-button class="w-64" style="margin-left: 59%;">Cancel</rs-button>
            </nuxt-link>
            &nbsp;&nbsp;&nbsp;
            <rs-button variant="warning" class="w-64" style="margin-top: -4.5%;margin-left: 80%;">Update</rs-button>
            
        </FormKit>
    </div>
</template>