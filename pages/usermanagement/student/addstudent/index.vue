<script setup>
  import { DateTime } from "luxon";

  definePageMeta({
    title: "Add Student",
    
  });

  const dt = DateTime.now();
  const date = dt.toISODate();

  const cardType = [
    { label: "Choose Identity card type", value: null },
    { label: "MyKad", value: "MyKad" },
    { label: "Passport", value: "Passport" },
  ]

  const race = [
    { label: "Choose race", value: null },
    { label: "Malay", value: "Malay" },
    { label: "Chinese", value: "Chinese" },
    { label: "Indian", value: "Indian" },
    { label: "Other", value: "Other" },
  ]

  const status = [
    { label: "Choose status", value: null },
    { label: "Aktif", value: "Aktif" },
    { label: "Tidak Aktif", value: "Tidak Aktif" },
    { label: "Batal", value: "Batal" }
  ]

  const school = [
    { label: "Choose school", value: null },
    { label: "School 1", value: "School 1" },
    { label: "School 2", value: "School 2" },
    { label: "School 3", value: "School 3" }
  ]

  const state = [
    "Johor",
    "Kedah",
    "Kelantan",
    "Melaka",
    "Negeri Sembilan",
    "Pahang",
    "Perak",
    "Perlis",
    "Pulau Pinang",
    "Putrajaya",
    "Selangor",
    "Terengganu",
    "Wilayah Persekutuan",
  ];

  const country = [
    "Malaysia",
    "Singapore",
    "Thailand",
    "Indonesia",
    "Brunei",
    "Laos",
    "Cambodia",
    "Myanmar",
    "Philippines",
    "Vietnam",
    "Timor-Leste",
  ];

  const className = [
    { label: "Choose class", value: null },
    { label: "Class 1", value: "Class 1" },
    { label: "Class 2", value: "Class 2" },
    { label: "Class 3", value: "Class 3" }
  ]

  const form = ref({
    fullname: "",
    cardType: "",
    nric: "",
    dateOfBith: "",
    race:"",
    contactNo: "",
    email: "",
    address: "",
    postcode: "",
    city: "",
    state: "",
    country: "",
    student_school: "",
    student_class: "",
    student_number: "",
    student_walletNo: "",
    student_cardNo: "",
    student_status: "",
  });
</script>
<template> 

  <FormKit type="form" :actions="false" :incomplete-message="true" @submit = "submit">
    <rs-card  class="flex-wrap justify-between p-5 bg-white text-black rounded-md flex-col"    >
      <template #header>
        <div class="flex">Personal Details</div>
      </template>

      <div class="p-5">
        <FormKit type="text" label="Full Name" validation="required|length:0,200" v-model="form.fullname" >
          <template #label>
          <label class="formkit-label text-gray-700 dark:text-gray-200 block mb-2 font-semibold text-sm formkit-invalid:text-red-500">Full Name <span class="text-danger">*</span></label>
          </template>
        </FormKit>

        <div class="flex flex-row justify-between">
          <div class="basis-1/2 mr-5">
            <FormKit type="select" label="Identity Card Type" :options="cardType" validation="required" v-model="form.cardType">
              <template #label>
              <label class="formkit-label text-gray-700 dark:text-gray-200 block mb-2 font-semibold text-sm formkit-invalid:text-red-500">Identity Card Type <span class="text-danger">*</span></label>
              </template>
            </FormKit>
          </div>
          <div class="basis-1/2 mr-5">
            <FormKit type="text" label="NRIC" validation="required|length:0,200" v-model="form.nric">
              <template #label>
              <label class="formkit-label text-gray-700 dark:text-gray-200 block mb-2 font-semibold text-sm formkit-invalid:text-red-500">NRIC <span class="text-danger">*</span></label>
              </template>
            </FormKit>
          </div>
          <div class="basis-1/2">
            <FormKit type="date" :value="date" label="Date of Birth" validation="required|length:0,200" v-model="form.dateOfBith">
              <template #label>
              <label class="formkit-label text-gray-700 dark:text-gray-200 block mb-2 font-semibold text-sm formkit-invalid:text-red-500">Date of Birth <span class="text-danger">*</span></label>
              </template>
            </FormKit>
          </div>
        </div> 
      </div>
    </rs-card>

    <rs-card class="flex-wrap justify-between p-5 bg-white text-black rounded-md flex-col"    >
      <template #header>
        <div class="flex">Student Details</div>
      </template>

      <div class="flex flex-row justify-between p-5">
        <div class="basis-1/2 mr-5">
          <FormKit 
            type="select" 
            label="School Name"
            :options="school"
            validation="required|length:0,200"
            v-model="form.student_school"
          >
            <template #label>
            <label class="formkit-label text-gray-700 dark:text-gray-200 block mb-2 font-semibold text-sm formkit-invalid:text-red-500">School Name <span class="text-danger">*</span></label>
            </template>
          </FormKit>
        </div>
        <div class="basis-1/2 mr-5">
          <FormKit 
            type="select" 
            label="Class"
            :options="className"            
            v-model="form.student_class"
          >
            <template #label>
            <label class="formkit-label text-gray-700 dark:text-gray-200 block mb-2 font-semibold text-sm formkit-invalid:text-red-500">Class </label>
            </template>
          </FormKit> 
        </div>
        <div class="basis-1/2">
          <!-- <FormKit 
            type="text" 
            label="Student Number"
            validation="required|length:0,200"
            v-model="form.student_number"
          >
            <template #label>
            <label class="formkit-label text-gray-700 dark:text-gray-200 block mb-2 font-semibold text-sm formkit-invalid:text-red-500">Student Number <span class="text-danger">*</span></label>
            </template>
          </FormKit> -->
        </div>
      </div>

      <div class="flex flex-row justify-between p-5">
        <div class="basis-1/2 mr-5">
          <FormKit 
            type="text" 
            label="Wallet Number"
            validation="required|length:0,200"
            v-model="form.student_walletNo"
          >
            <template #label>
            <label class="formkit-label text-gray-700 dark:text-gray-200 block mb-2 font-semibold text-sm formkit-invalid:text-red-500">Wallet Number <span class="text-danger">*</span></label>
            </template>
          </FormKit>
        </div>
        <div class="basis-1/2 mr-5">
          <FormKit 
            type="text" 
            label="Card Number"
            validation="required|length:0,200"
            v-model="form.student_cardNo"
          >
            <template #label>
            <label class="formkit-label text-gray-700 dark:text-gray-200 block mb-2 font-semibold text-sm formkit-invalid:text-red-500">Card Number <span class="text-danger">*</span></label>
            </template>
          </FormKit>
        </div>
        <div class="basis-1/2">
          <FormKit 
            type="select" 
            label="Status"
            :options="status"
            validation="required|length:0,200"
            v-model="form.student_status"
          >
            <template #label>
            <label class="formkit-label text-gray-700 dark:text-gray-200 block mb-2 font-semibold text-sm formkit-invalid:text-red-500">Status <span class="text-danger">*</span></label>
            </template>
          </FormKit>
        </div>
      </div>
    </rs-card>
    
    <nuxt-link :to="`/usermanagement/student`">
      <rs-button variant="primary" class="w-64" style="margin-left: 59%;">Cancel</rs-button>
    </nuxt-link>
    &nbsp;&nbsp;&nbsp;
    <rs-button variant="warning" class="w-64" style="margin-top: -4.5%;margin-left: 80%;">Save</rs-button>

  </FormKit>
</template>
      