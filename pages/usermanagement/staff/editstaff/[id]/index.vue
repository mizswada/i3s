<script setup>
  import { DateTime } from "luxon";

  definePageMeta({
    title: "Edit Staff",
    
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

  const staffType = [
    { label: "Choose staff type", value: null },
    { label: "Headmaster", value: "Headmaster" },
    { label: "Haed Assisstant", value: "Haed Assisstant" },
    { label: "Teacher", value: "Teacher" },
    { label: "Staff", value: "Staff" },
    { label: "Teacher/Wardent", value: "Teacher/Wardent" },
    { label: "School Admin", value: "School Admin" }
  ]

  const shift = [
    { label: "Choose shift", value: null },
    { label: "Sesi Pagi (Masa)", value: "Sesi Pagi" },
    { label: "Sesi Petang (Masa)", value: "Sesi Petang" }
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
    staff_school: "",
    staff_type: "",
    staff_shift: "",
    staff_walletNo: "",
    staff_cardNo: "",
    staff_status: "",
  });
</script>
<template>
  <div>
    <!--<LayoutsBreadcrumb />-->
    <div>
      <div class="flex justify-between">
        <h4 class="mb-4">Edit Staff</h4>
      </div>
    </div>
  </div>

  <FormKit type="form" :actions="false" :incomplete-message="true" @submit="submit" id="myForm">
  
    <rs-card class="flex-wrap justify-between p-5 bg-white text-black rounded-md flex-col" >      
   
      <template #header>
        <div class="flex">Personal Details</div>
      </template>

      <div class="p-5">
        <FormKit 
          type="text" 
          label="Full Name"
          validation="required|length:0,200"
          v-model="form.fullname"
        >
          <template #label>
          <label class="formkit-label text-gray-700 dark:text-gray-200 block mb-2 font-semibold text-sm formkit-invalid:text-red-500">Full Name <span class="text-danger">*</span></label>
          </template>
        </FormKit>

        <div class="flex flex-row justify-between">
          <div class="basis-1/2 mr-5">
            <FormKit 
              type="select"
              label="Identity Card Type"
              :options="cardType" 
              validation="required"
              v-model="form.cardType"
            >
              <template #label>
              <label class="formkit-label text-gray-700 dark:text-gray-200 block mb-2 font-semibold text-sm formkit-invalid:text-red-500">Identity Card Type <span class="text-danger">*</span></label>
              </template>
            </FormKit>
          </div>
          <div class="basis-1/2 mr-5">
            <FormKit 
              type="text" 
              label="NRIC"
              validation="required|length:0,200"
              v-model="form.nric"
            >
              <template #label>
              <label class="formkit-label text-gray-700 dark:text-gray-200 block mb-2 font-semibold text-sm formkit-invalid:text-red-500">NRIC <span class="text-danger">*</span></label>
              </template>
            </FormKit>
          </div>
          <div class="basis-1/2">
            <FormKit 
              type="date" 
              :value="date"
              label="Date of Birth"
              validation="required|length:0,200"
              v-model="form.dateOfBith"
            >
              <template #label>
              <label class="formkit-label text-gray-700 dark:text-gray-200 block mb-2 font-semibold text-sm formkit-invalid:text-red-500">Date of Birth <span class="text-danger">*</span></label>
              </template>
            </FormKit>
          </div>
        </div>
        
        <div class="flex flex-row justify-between mb-5">
          <div class="basis-1/2 mr-5">
            <FormKit 
              type="select" 
              label="Race"
              :options="race"
              validation="required"
              v-model="form.race"
            >
              <template #label>
              <label class="formkit-label text-gray-700 dark:text-gray-200 block mb-2 font-semibold text-sm formkit-invalid:text-red-500">Race <span class="text-danger">*</span></label>
              </template>
            </FormKit>
          </div>
          <div class="basis-1/2 mr-5">
            <FormKit 
              type="text" 
              label="Contact Number"
              validation="required|length:0,200"
              v-model="form.contactNo"
            >
              <template #label>
              <label class="formkit-label text-gray-700 dark:text-gray-200 block mb-2 font-semibold text-sm formkit-invalid:text-red-500">Contact Number <span class="text-danger">*</span></label>
              </template>
            </FormKit>
          </div>
          <div class="basis-1/2">
            <FormKit 
              type="email" 
              label="Email"
              validation="required|length:0,200"
              v-model="form.email"
            >
              <template #label>
              <label class="formkit-label text-gray-700 dark:text-gray-200 block mb-2 font-semibold text-sm formkit-invalid:text-red-500">Email <span class="text-danger">*</span></label>
              </template>
            </FormKit>
          </div>
        </div>
        
        <FormKit
          type="text" 
          label="Address"
          validation="required|length:0,200"
          v-model="form.address"
        >
          <template #label>
          <label class="formkit-label text-gray-700 dark:text-gray-200 block mb-2 font-semibold text-sm formkit-invalid:text-red-500">Address <span class="text-danger">*</span></label>
          </template>
        </FormKit>

        <div class="flex flex-row justify-between">
          <div class="basis-1/2 mr-5">
            <FormKit 
              type="text" 
              label="Postcode"
              validation="required|length:0,200"
              v-model="form.postcode"
            >
              <template #label>
              <label class="formkit-label text-gray-700 dark:text-gray-200 block mb-2 font-semibold text-sm formkit-invalid:text-red-500">Postcode <span class="text-danger">*</span></label>
              </template>
            </FormKit>
          </div>
          <div class="basis-1/2 mr-5">
            <FormKit 
              type="text" 
              label="City"
              validation="required|length:0,200"
              v-model="form.city"
            >
              <template #label>
              <label class="formkit-label text-gray-700 dark:text-gray-200 block mb-2 font-semibold text-sm formkit-invalid:text-red-500">City <span class="text-danger">*</span></label>
              </template>
            </FormKit>
          </div>
          <div class="basis-1/2 mr-5">
            <FormKit 
              type="select" 
              label="State"
              :options="state"
              validation="required"
              v-model="form.state"
            >
              <template #label>
              <label class="formkit-label text-gray-700 dark:text-gray-200 block mb-2 font-semibold text-sm formkit-invalid:text-red-500">State <span class="text-danger">*</span></label>
              </template>
            </FormKit>
          </div>
          <div class="basis-1/2">
            <FormKit 
              type="select" 
              label="Country"
              :options="country"
              validation="required"
              v-model="form.country"
            >
              <template #label>
              <label class="formkit-label text-gray-700 dark:text-gray-200 block mb-2 font-semibold text-sm formkit-invalid:text-red-500">Country <span class="text-danger">*</span></label>
              </template>
            </FormKit>
          </div>
        </div>
      </div>
    </rs-card>

    <rs-card class="flex-wrap justify-between p-5 bg-white text-black rounded-md flex-col">      
    
      <template #header>
        <div class="flex">Staff Details</div>
      </template>

      <div class="flex flex-row justify-between p-5">
        <div class="basis-1/2 mr-5">
          <FormKit 
            type="select" 
            label="School Name"
            :options="school"
            validation="required|length:0,200"
            v-model="form.staff_school"
          >
            <template #label>
            <label class="formkit-label text-gray-700 dark:text-gray-200 block mb-2 font-semibold text-sm formkit-invalid:text-red-500">School Name <span class="text-danger">*</span></label>
            </template>
          </FormKit>
        </div>
        <div class="basis-1/2 mr-5">
          <FormKit 
            type="select" 
            label="Staff Type"
            :options="staffType"
            validation="required|length:0,200"
            v-model="form.staff_type"
          >
            <template #label>
            <label class="formkit-label text-gray-700 dark:text-gray-200 block mb-2 font-semibold text-sm formkit-invalid:text-red-500">Staff Type <span class="text-danger">*</span></label>
            </template>
          </FormKit>
        </div>
        <div class="basis-1/2">
          <FormKit 
            type="select" 
            label="Shift"
            :options="shift"
            validation="required|length:0,200"
            v-model="form.staff_shift"
          >
            <template #label>
            <label class="formkit-label text-gray-700 dark:text-gray-200 block mb-2 font-semibold text-sm formkit-invalid:text-red-500">Shift <span class="text-danger">*</span></label>
            </template>
          </FormKit>
        </div>
      </div>

      <div class="flex flex-row justify-between p-5">
        <div class="basis-1/2 mr-5">
          <FormKit 
            type="text" 
            label="Account Number"
            validation="required|length:0,200"
            v-model="form.staff_walletNo"
          >
            <template #label>
            <label class="formkit-label text-gray-700 dark:text-gray-200 block mb-2 font-semibold text-sm formkit-invalid:text-red-500">Account Number <span class="text-danger">*</span></label>
            </template>
          </FormKit>
        </div>
        <div class="basis-1/2 mr-5">
          <FormKit 
            type="text" 
            label="Card Number"
            validation="required|length:0,200"
            v-model="form.staff_cardNo"
          >
            <template #label>
            <label class="formkit-label text-gray-700 dark:text-gray-200 block mb-2 font-semibold text-sm formkit-invalid:text-red-500">Card Number </label>
            </template>
          </FormKit>
        </div>
        <div class="basis-1/2">
          <FormKit 
            type="select" 
            label="Status"
            :options="status"
            validation="required|length:0,200"
            v-model="form.staff_status">
          
            <template #label>
            <label class="formkit-label text-gray-700 dark:text-gray-200 block mb-2 font-semibold text-sm formkit-invalid:text-red-500">Status <span class="text-danger">*</span></label>
            </template>
          </FormKit>
        </div>
      </div>
    </rs-card>
    
  </FormKit>

  <nuxt-link :to="`/usermanagement/staff`">
    <rs-button variant="primary" class="w-64" style="margin-left: 59%;">Cancel</rs-button>
  </nuxt-link>
  &nbsp;&nbsp;&nbsp;
  <rs-button variant="warning" class="w-64" style="margin-top: -4.5%;margin-left: 80%;">Update</rs-button>

</template>
      