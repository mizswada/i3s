<script setup>
  import { DateTime } from "luxon";
  definePageMeta({
    title: "Edit Merchant",
    
  });

  const dt = DateTime.now();
  const date = dt.toISODate();
  const month = dt.toFormat("yyyy-MM");

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

  const getBank = await useFetch("https://toyyibpay.com/index.php/api/getBank", {
    method: "GET",
  });
  //console.log(getBank.data.value);
  const bankList = JSON.parse(getBank.data.value);
  //console.log("bankList:", bankList);

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
    merchant_companyName: "",
    merchant_registrationNo: "",
    merchant_bankName: "",
    merchant_bankAccNo: "",
    merchant_mdrRate: "",
    merchant_effectiveSettlementRate: "",
    merchant_contractExpiryDate: "",
    merchant_status: "",
  });

</script>
<template>

  <FormKit
    type="form"
    :actions="false"
    @submit="submit"
    :incomplete-message="false"
    id="myForm"
  >
    <rs-card class="flex-wrap justify-between p-5 bg-white text-black rounded-md flex-col">
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
        <div class="flex">Merchant Details</div>
      </template>

      <div class="flex flex-row justify-between p-5">
        <div class="basis-1/2 mr-5">
          <FormKit 
            type="text" 
            label="Company Name"
            validation="required|length:0,200"
            v-model="form.merchant_companyName"
          >
            <template #label>
            <label class="formkit-label text-gray-700 dark:text-gray-200 block mb-2 font-semibold text-sm formkit-invalid:text-red-500">COmpany Name <span class="text-danger">*</span></label>
            </template>
          </FormKit>
        </div>
        <div class="basis-1/2 mr-5">
          <FormKit 
            type="text" 
            label="Registration No"
            validation="required|length:0,200"
            v-model="form.merchant_registrationNo"
          >
            <template #label>
            <label class="formkit-label text-gray-700 dark:text-gray-200 block mb-2 font-semibold text-sm formkit-invalid:text-red-500">Registration No <span class="text-danger">*</span></label>
            </template>
          </FormKit>
        </div>
        <div class="basis-1/2">
          <!-- <FormKit 
            type="select" 
            label="Shift"
            :options="shift"
            validation="required|length:0,200"
            v-model="form.staff_shift"
          >
            <template #label>
            <label class="formkit-label text-gray-700 dark:text-gray-200 block mb-2 font-semibold text-sm formkit-invalid:text-red-500">Shift <span class="text-danger">*</span></label>
            </template>
          </FormKit> -->
        </div>
      </div>

      <div class="flex flex-row justify-between p-5">
        <div class="basis-1/2 mr-5">
          <FormKit 
            type="select" 
            label="Bank Name"
            validation="required"
            v-model="form.merchant_bankName"
          >
            <option
              v-for="option in bankList"
              :key="option.id"
              :value="option.bank"
            >
              {{ option.bank }}
            </option>
            <template #label>
            <label class="formkit-label text-gray-700 dark:text-gray-200 block mb-2 font-semibold text-sm formkit-invalid:text-red-500">Bank Name <span class="text-danger">*</span></label>
            </template>
          </FormKit>
        </div>
        <div class="basis-1/2 mr-5">
          <FormKit 
            type="text" 
            label="Bank Account Number"
            validation="required|length:0,200"
            v-model="form.merchant_bankAccNo"
          >
            <template #label>
            <label class="formkit-label text-gray-700 dark:text-gray-200 block mb-2 font-semibold text-sm formkit-invalid:text-red-500">Bank Account Number <span class="text-danger">*</span></label>
            </template>
          </FormKit>
        </div>
        <div class="basis-1/2">
          <FormKit 
            type="select" 
            label="Status"
            :options="status"
            validation="required|length:0,200"
            v-model="form.merchant_status"
          >
            <template #label>
            <label class="formkit-label text-gray-700 dark:text-gray-200 block mb-2 font-semibold text-sm formkit-invalid:text-red-500">Status <span class="text-danger">*</span></label>
            </template>
          </FormKit>
        </div>
      </div>

      <div class="flex flex-row justify-between p-5">
        <div class="basis-1/2 mr-5">
          <FormKit 
            type="text" 
            label="MDR Rate"
            validation="required"
            v-model="form.merchant_mdrRate"
          >
            <template #label>
            <label class="formkit-label text-gray-700 dark:text-gray-200 block mb-2 font-semibold text-sm formkit-invalid:text-red-500">MDR Rate <span class="text-danger">*</span></label>
            </template>
          </FormKit>
        </div>
        <div class="basis-1/2 mr-5">
          <FormKit 
            type="text" 
            label="Effective Settlement Rate"
            validation="required|length:0,200"
            v-model="form.merchant_effectiveSettlementRate"
          >
            <template #label>
            <label class="formkit-label text-gray-700 dark:text-gray-200 block mb-2 font-semibold text-sm formkit-invalid:text-red-500">Effective Settlement Rate <span class="text-danger">*</span></label>
            </template>
          </FormKit>
        </div>
        <div class="basis-1/2">
          <FormKit 
            type="month" 
            label="Contract Expiry Date"
            :value="month"
            validation="required"
            v-model="form.merchant_contractExpiryDate"
          >
            <template #label>
            <label class="formkit-label text-gray-700 dark:text-gray-200 block mb-2 font-semibold text-sm formkit-invalid:text-red-500">Contract Expiry Date <span class="text-danger">*</span></label>
            </template>
          </FormKit>
        </div>
      </div>
    </rs-card>
  </FormKit>

  <nuxt-link :to="`/usermanagement/merchant`">
    <rs-button variant="primary" class="w-64" style="margin-left: 59%;">Cancel</rs-button>
  </nuxt-link>
  &nbsp;&nbsp;&nbsp;
  <rs-button variant="warning" class="w-64" style="margin-top: -4.5%;margin-left: 80%;">Save</rs-button>

</template>
      