<script setup>
definePageMeta({
  title: "Add Credit Setup",
  
});

const statusDropdown = ref([
  { label: "Active", value: "Active" },
  { label: "Inactive", value: "Inactive" },
  { label: "Cancel", value: "Cancel" },  
]);

const applyToDropdown = ref([
     { label: "Reload", value: "Reload" },
     { label: "Online Payment", value: "Online Payment" },
     { label: "Terminal Payment", value: "Terminal Payment" },
])

const categoryRadio2 =["Open", "School"]; 

const categoryRadio = ref([
     { label: "Open", value: "Open" },
     { label: "School", value: "School" },   
])
const options = ["RM", "%"];

const CronjobSetting = ["None","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const CronjobType = ["Time","Frequency"];

const form = ref({
title : "",
Startdate : "",
Enddate : "",
Creditvalue : "",
status : "",
budget:"",
})

import { DateTime } from "luxon";
const dt = DateTime.now();
        
const date = dt.toISODate();
const datetime = dt.toFormat("yyyy-MM-dd'T'HH:mm");
const month = dt.toFormat("yyyy-MM");
const time = dt.toFormat("HH:mm");
const week = dt.toFormat("yyyy-'W'kk");

const programDropdown = ref([
     { label: "Credit", value: "Credit" },
     { label: "Voucher", value: "Voucher" },
     { label: "Product", value: "Product" },

])

const programDetailDropdown = ref([
     { label: "SMKS 18 Cash Incentive April 25", value: "SMKS 18 Cash Incentive April 25" },
     { label: "SKPJ Cash Incentive April 25", value: "SKPJ Cash Incentive April 25" },
])

const frequencyType = ref([
    { label: "Hour", value: "Hour" },
    { label: "Minute", value: "Minute" },
])



const dataSchool = [
{   
    "Id":"1", 
    "Reward": "1",
    "School": "SMK SEKSYEN 18",       
    "Receiver Type": "User Group",
    "Group": "8",
    "Status":"Active",
    "Action":""   
  },
  {    
    "Id":"2", 
    "Reward": "1",
    "School": "SMK SEKSYEN 18",       
    "Receiver Type": "User Group",
    "Group": "9",
    "Status":"Active",
    "Action":""     
  }
]


</script>

<template>
     <div>
        <div class="flex justify-between">
        <h4 class="mb-4 uppercase"></h4>
        </div>
        <!-- Detail Cash reward Setup-->
        <FormKit type="form" :actions="false" :incomplete-message="true" @submit="submitForm">
            <section>
                 <rs-card class="p-5">
                    <div class="flex justify-between items-center mb-5">
                        <div>
                            <h5 class="font-semibold">New Cash Reward</h5>
                            <span class="text-sm text-gray-500">                                
                            </span>
                        </div>
                    </div>
                    
                    <FormKit v-model="form.title" type="text" label="Title*" validation="required|length:0,50"/>
                    <FormKit type="textarea" rows="8" label="Reward Description"/> 
                   
                        <fieldset>
                            <legend></legend>
                            <FormKit type="radio" label= "Reward Type *" help="What type of reward you want to set?" 
                            :options= "options"
                            validation="required|length:0,50"/>
                        </fieldset>
                  

                    <FormKit v-model="form.title" type="text" label="Amount Reward" validation="required|length:0,50"/>
                  <div>
                     <fieldset>
                        <legend></legend>
                        <FormKit v-model="form.budget"              
                            type="select"                    
                            :options="programDropdown"
                            label="Program Reward for?"
                            validation="required|length:0,50" /> 
                       
                        <FormKit v-model="form.budget"              
                            type="select"                    
                            :options="programDetailDropdown"
                            label="Program details" help="Refer to Credit Setup Title"
                            validation="required|length:0,50" />                        
                    </fieldset>
                 </div>
             

                    <!--<FormKit v-model="form.title" type="text" label="Minimum Amount Reward (RM)" validation="required|length:0,50"/>
                    <FormKit v-model="form.title" type="text" label="Maximum Amount Reward (RM)" validation="required|length:0,50"/>-->
                    <FormKit v-model="form.title" type="text" label="Limit Amount per user (RM) *" validation="required|length:0,50"/>
                    <FormKit v-model="form.title" type="number" label="Cycle" help="Number of cycle to be applied for every user" validation="required|length:0,50"/>

                    <FormKit
                    v-model="form.Status"
                    type="select"                    
                    :options="applyToDropdown"
                    label="Apply to?"
                    validation="required|length:0,50"          
                    /> 

                    <FormKit v-model="form.Startdate" type="date" label="Start Date" validation="required|length:0,50"/>
                    <FormKit v-model="form.Enddate" type="date" label="End Date" validation="required|length:0,50"/>
                    
                    <FormKit
                    v-model="form.Status"
                    type="select"                    
                    :options="statusDropdown"
                    label="Status"
                    validation="required|length:0,50"          
                    />  

                 </rs-card>                               
            </section> 
        </FormKit>

         <!-- Receiver Setup-->
        <FormKit type="form" :actions="false" :incomplete-message="true" @submit="submitForm">
            <section>
             <rs-card class="p-5">
                <div class="flex justify-between items-center mb-5">
                    <div>
                        <h5 class="font-semibold">Receiver</h5>
                            <span class="text-sm text-gray-500">                                    
                            </span>
                    </div>
                </div>
                 <fieldset>
                    <legend></legend>
                        <FormKit type="radio" label= "Category *" 
                        :options= "categoryRadio"
                        validation="required|length:0,50"/>
                    </fieldset>                 
            </rs-card>
           </section>            
        </FormKit>

        <!-- Cronjob Setup-->
        <FormKit type="form" :actions="false" :incomplete-message="true" @submit="submitForm">
            <section>
             <rs-card class="p-5">
                <div class="flex justify-between items-center mb-5">
                    <div>
                        <h5 class="font-semibold">Cronjob Setting</h5>
                            <span class="text-sm text-gray-500">                                    
                            </span>
                    </div>
                </div>
                 <fieldset>
                    <legend></legend>
                        <FormKit type="checkbox" label= "Cronjob Cycle *" help="select days"
                        :options= "CronjobSetting"
                        validation="required|length:0,50"/>
                    </fieldset>

                     <fieldset>
                    <legend></legend>
                        <FormKit type="radio" label= "Cronjob Type *" help="What type of cronjob you want to set?"
                        :options= "CronjobType"
                        validation="required|length:0,50"/>
                    </fieldset>
                
                  <!-- Date Time if choose cronjob type TIME -->
                    <FormKit type="datetime-local" :value="datetime" label="Cronjob Time" />

                  <!-- Date Time if choose cronjob type FREQUENCY -->
                    <FormKit v-model="form.title" type="text" label="Frequency value" validation="required|length:0,50"/>

                    <fieldset>
                    <legend></legend>
                        <FormKit type="radio" label= "Frequency Type"
                        :options= "frequencyType" help="What type of frequency you want to set?"
                        validation="required|length:0,50"/>
                    </fieldset>
                   <!-- END if choose cronjob type FREQUENCY -->

                    <!-- Date Time -->
                      <FormKit type="datetime-local" :value="datetime" label="Cronjob End Date" />
            </rs-card>
           </section>            
        </FormKit>

         <!-- Table List of School-->
         <!-- Display when receiver is SCHOOL -->
  
        <FormKit type="form" :actions="false" :incomplete-message="true" @submit="submitForm">
            <section>
                <rs-card class="py-5">
                  <div
                    class="flex flex-col md:flex-row justify-between items-start md:items-center gap-y-2 px-5"
                    >
                    <div>
                        <h5 class="font-semibold">List of Reward by school</h5>
                        <!--<span class="text-sm text-gray-500">
                        Below is the list of all complain from the user
                        </span>-->
                    </div>

                    <nuxt-link to="/reward-management/add-school">
                        <rs-button variant="warning" class="mb-4">
                        <Icon name="fe:plus" class="mr-1" />
                        Add School
                        </rs-button>
                    </nuxt-link> 
                  </div>

                <rs-table
                :data="dataSchool"
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
                <template v-slot:Action="dataSchool">
                    <div class="flex flex-row gap-x-2">
                        <div class="flex items-center gap-x-2">
                        <nuxt-link :to="`/reward-management/edit-school/[id]`">
                            <rs-button
                            variant="warning"
                            >
                            <Icon name="material-symbols:edit-outline" /> 
                            </rs-button>
                        </nuxt-link>

                        <div class="flex items-center gap-x-2">
                            <nuxt-link :to="`/reward-management/delete-school/[id]`">
                                <rs-button
                                variant="danger">
                                <Icon name="material-symbols:delete-outline" />  
                                </rs-button>
                            </nuxt-link>                            
                        </div>
                        </div>            
                    </div>
                </template>
                </rs-table>
                </rs-card>
           </section>            
        </FormKit> 
        
        <!-- Display when receiver is OPEN -->

    </div>   
     <!--<rs-button btn-type="submit" class="w-full" :disabled="processing">
                {{ processing ? "Saving..." : "Save" }}
            </rs-button>-->

            <nuxt-link :to="`/reward-management/`">
            <rs-button class="w-64" style="margin-left: 59%;">Cancel</rs-button>
            </nuxt-link>
            &nbsp;&nbsp;&nbsp;
            <rs-button variant="warning" class="w-64" style="margin-top: -4.5%;margin-left: 80%;">Submit</rs-button>
</template>
