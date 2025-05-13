<script setup>

definePageMeta({
  title: "Add New Card",
  
});

const form = ref({
    fullName: "",
    userRole: "",
    schoolName: "",   
    cardNumber: "",
    status: "",
    Action: "",
});

const SchoolName = ref([  
  { label: "Choose School Name", value: "null" }, 
  { label: "SMK PRESINT 18(1)", value: "SMK PRESINT 18(1)" },
  { label: "SK PRESINT 18(2)", value: "SK PRESINT 18(2)" },
  { label: "SMK PRESINT 9(1)", value: "SMK PRESINT 9(1)" },
  { label: "SMK SEKSYEN 18", value: "SMK SEKSYEN 18" }  
]);

const UserRoleDropdown = ref([
  { label: "Choose Role", value: "" }, 
  { label: "Student", value: "Student" },
  { label: "Staff", value: "Staff" },
]);

const FullNameDropdown = ref([  
  { label: "Choose Name", value: "" },  
  { label: "Normaisarah", value: "Normaisarah" },
  { label: "Ali", value: "Ali" },
  { label: "Abu Bakar", value: "Abu Bakar" }, 
]);

const CardNumberDropdown = ref([
  { label: "Choose", value: "" },  
  { label: "202100005001", value: "202100005001" },
  { label: "202100015002", value: "202100015002" },   
]);

const statusDropdown = ref([
  { label: "Choose", value: "null" }, 
  { label: "In stock", value: "In Stock" }  
]);

</script>

<template>
 <div>
    <div class="flex justify-between">
    <h4 class="mb-4 uppercase"></h4>
    </div>
</div>

<FormKit type="form" :actions="false" :incomplete-message="true" @submit="submitForm">
    <section>
        <rs-card class="p-5">
            <div class="flex justify-between items-center mb-5">
              <div>
              <h5 class="font-semibold">New Card Assignment</h5>
              <span class="text-sm text-gray-500">                  
              </span>
              </div>
            </div>

            <div class="flex flex-row justify-between"> 
              <div class="basis-1/2 mr-5">
                <FormKit v-model="form.schoolName" type="select" :options="SchoolName" label="School Name" validation="required" />
              </div>
              <div class="basis-1/2">
                <FormKit v-model="form.userRole" type="select" :option="UserRoleDropdown" label="User Role" validation="required"/>
              </div>
            </div>

            <div class="flex flex-row justify-between"> 
              <div class="basis-1/3 mr-5">
                <FormKit v-model="form.fullName" type="select" :option="FullNameDropdown" label="Fullname" validation="required" />
              </div>
              <div class="basis-1/3 mr-5">
                <FormKit v-model="form.cardNumber" type="select" :option="CardNumberDropdown" label="Card Number" validation="required|length:0,20" /> 
              </div>
              <div class="basis-1/3 mr-5">
                <FormKit v-model="form.status" type="select" :options="statusDropdown" label="Status" validation="required"/> 
              </div>
            </div>                
        
        </rs-card>
    </section>

    <!--<rs-button btn-type="submit" class="w-full" :disabled="processing">
      {{ processing ? "Saving..." : "Save" }}
    </rs-button>-->

    <nuxt-link :to="`/card-assignment/card-assign`">
      <rs-button variant="primary" class="w-64" style="margin-left: 59%;">Close</rs-button>
      </nuxt-link>
      &nbsp;&nbsp;&nbsp;
      <rs-button variant="warning" class="w-64" style="margin-top: -4.5%;margin-left: 80%;">Save</rs-button>
      
</FormKit>
</template>