<script setup>
definePageMeta({
  title: "Add School for Cash Reward",
  
});

 const form = ref ({
    id: "1",
    class: "0 class found",
    club: "0 club found",
    school: "SK PUTRAJAYA PRESINT 18(2)",
    usrGroup: "Student with parent",
    status: "Active",
});

const schoolDropdown = ref ([
     { label: "SMK SEKSYEN 18, SHAH ALAM", value: "SMK SEKSYEN 18, SHAH ALAM" },
     { label: "SK PUTRAJAYA PRESINT 18(2), PUTRAJAYA", value: "SK PUTRAJAYA PRESINT 18(2)" },     
]);

const userGroup = ref ([
    { label: "Merchant", value: "Merchant" },
    { label: "Staff", value: "Staff" },
    { label: "Parent", value: "Parent" }, 
    { label: "Student with Parent", value: "Student with Parent" },
]);

const statusDropdown = ref ([
  { label: "Active", value: "Active" },
  { label: "Inactive", value: "Inactive" },
  { label: "Cancel", value: "Cancel" },  
]);

const clubDropdown = ref ([
  { label: "", value: "" },
  { label: "", value: "" },
  { label: "", value: "" }, 

])

const classDropdown = ref ([
  { label: "", value: "" },
  { label: "", value: "" },
  { label: "", value: "" }, 

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
                            <h5 class="font-semibold">Add School</h5>
                            <span class="text-sm text-gray-500">                                
                            </span>
                        </div>
                    </div>
                    
                    <FormKit v-model="form.id" type="text" label="Reward ID" disabled = "disabled" validation="required|length:0,50" />
                    
                    <FormKit v-model="form.school" type="select" :options="schoolDropdown" label="School" validation="required|length:0,50" />

                    <FormKit
                    v-model="form.class"
                    type="select"          
                    :options="classDropdown"
                    label="Class" disabled = "disabled"
                    validation="required|length:0,50"        
                    /> 

                    <FormKit
                    v-model="form.club"
                    type="select"                    
                    :options="clubDropdown"
                    label="Club" disabled = "disabled"
                    validation="required|length:0,50"          
                    /> 

                    <FormKit
                    v-model="form.usrGroup"
                    type="select"                    
                    :options="userGroup"
                    label="User Group" 
                    validation="required|length:0,50"          
                    />                    
                    
                    <FormKit
                    v-model="form.status"
                    type="select"                    
                    :options="statusDropdown"
                    label="Status"
                    validation="required|length:0,50"          
                    />  

                 </rs-card>                               
            </section> 
    </FormKit>
</div>
    <nuxt-link :to="`/reward-management/add-reward`">
        <rs-button class="w-64" style="margin-left: 59%;">Cancel</rs-button>
    </nuxt-link>
      &nbsp;&nbsp;&nbsp;
    <rs-button variant="warning" class="w-64" style="margin-top: -4.5%;margin-left: 80%;">Submit</rs-button>            
</template>