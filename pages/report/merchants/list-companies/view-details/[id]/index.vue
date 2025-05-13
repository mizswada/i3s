<script setup>
definePageMeta({
  title: "View List of companies",
  
});

const form = ref({   
    "Location": "SMK SEKSYEN 18",
    "CompanyName": "KEMBARA DESA RESOURCES",
    "RegNumber": "SA0095789P",
    "ContactNumber": "0123949400",
    "BankType": "BANK ISLAM",
    "BankNumber": "12038010080000",       
    "Status":"Pending",    
})

const schoolDropdown = ref([  
  { label: "Select School", value: "" },
  { label: "SMK Seksyen 18 Shah Alam", value: "SMK Seksyen 18 Shah Alam" },
  { label: "MRSM Lenggong", value: "MRSM Lenggong" },
  { label: "Smk Taman Tun Dr Ismail", value: "Smk Taman Tun Dr Ismail" },
]);

const merchantTypeDropdown = ref([
  { label: "Choose merchant type", value: "" },
  { label: "Canteen", value: "Canteen" },
  { label: "Cooperative", value: "Cooperative" },
  { label: "Book Store", value: "Book Store" },   
])

const statusDropdown = ref([
  { label: "Choose Status", value: "" },
  { label: "Active", value: "Active" },
  { label: "Inactive", value: "Inactive" },
  { label: "Pending", value: "Pending" },
  { label: "Terminate", value: "Terminate" },     
]);

const dataMerchant = [
{   
    "#":"0001",     
    "Location": "SMK SEKSYEN 18",
    "Company Name": "KEMBARA DESA RESOURCES",
    "Reg Number":"SA0095789P",
    "Contact Number":"0123949400",
    "Bank Type":"BANK ISLAM",
    "Bank Number":"12038010080000",
    "Status":"Active", 
  },  
  {   
    "#":"0002",     
     "Location": "DAMANSARA",
     "Company Name": "SHOP I3S",
     "Reg Number":"404477T",
     "Contact Number":"0199305000",
     "Bank Type":"CIMB",
     "Bank Number":"707235300",
     "Status":"Active",
  },   
]

const dataClaims = [
  {
    "#":"0001",     
    "Location": "SMK SEKSYEN 18",
    "Company Name": "KEMBARA DESA RESOURCES",
    "Transaction Date": "2025-04-22",   
    "Sales Amount": "RM 3500",
    "Bank Type":"BANK ISLAM",
    "Bank Number":"12038010080000",
    "Status":"Pending", 
    "Action":"",
  },
]

const dataHstryClaims = [
  {
    "#":"0001",     
    "Date Claim": "2025-03-10",
    "Amount Claim": "RM 3500",
    "Claim By":"Muttoo",    
    "Status":"Claim", 
  },
  {
    "#":"0002",     
    "Date Claim": "2025-03-09",
    "Amount Claim": "RM 5000",
    "Claim By":"Muttoo",    
    "Status":"Claim",
  },
]

</script>
<template>
  <rs-tab>
    <rs-tab-item title="Merchant"> 
      <div>
        <div>
          <div class="flex justify-between">
            <h4 class="mb-4 uppercase">Merchant Details</h4>
          </div>
          <rs-card class="py-5">
            <div
              class="flex flex-col md:flex-row justify-between items-start md:items-center gap-y-2 px-5"
            >
             
            </div>

            <!--FORM DISPLAY MERCHANT DETAILS -->
              <FormKit v-model="form.Location" type="text" label="Location" disabled="disabled" />
              <FormKit v-model="form.CompanyName" type="text" label="Company Name" disabled="disabled" />
              <FormKit v-model="form.RegNumber" type="text" label="Registration Number" disabled="disabled" />
              <FormKit v-model="form.ContactNumber" type="text" label="Contact Number" disabled="disabled" />
              <FormKit v-model="form.ContactNumber" type="text" label="Contact Number" disabled="disabled" />
              <FormKit v-model="form.ContactNumber" type="text" label="Contact Number" disabled="disabled" />
              <FormKit v-model="form.Status" type="select" :options="statusDropdown" label="Status" />
          </rs-card>
        </div>
      </div>
      
      <nuxt-link :to="`/report/merchants/list-companies`">
        <rs-button variant="primary" class="w-64" style="margin-left: 59%;">Close</rs-button>
      </nuxt-link>
            &nbsp;&nbsp;&nbsp;
      <nuxt-link :to="`/report/merchants/list-companies`">
        <rs-button btn-type="submit" variant="warning" class="w-64" style="margin-top: -4.5%;margin-left: 80%;" :disabled="processing"> {{ processing ? "Saving..." : "Approve" }}
        </rs-button>
      </nuxt-link>
    </rs-tab-item>

      

    <rs-tab-item title="Claims"> 
      <div>
        <div>
          <div class="flex justify-between">
            <h4 class="mb-4 uppercase">Claims Details</h4>
          </div>
          <rs-card class="py-5">
            <div
              class="flex flex-col md:flex-row justify-between items-start md:items-center gap-y-2 px-5"
            >
              <!--<div>
                <h5 class="font-semibold">Staff Shift</h5>
                <span class="text-sm text-gray-500">
                  Below is the list of all Staff Shift
                </span>
              </div>-->

              <!--<nuxt-link to="/report/financial/claims-report">
                <rs-button class="mb-4" variant="warning">
                  <Icon name="fe:plus" class="mr-1" />
                  Process Claims
                </rs-button>
              </nuxt-link>-->
                
            </div>
        <!-- DISPLAY CLAIMS DETAILS -->
        
            <rs-table
              :data="dataClaims"
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
                      <nuxt-link :to="`/report/financial/claims-report/edit-claims/[id]`">
                        <rs-button variant="warning">
                        <Icon name="mdi-check-circle" /> 
                        </rs-button>
                      </nuxt-link>
                    </div>            
                  </div>
                </template>
             </rs-table>                  
          </rs-card>
        </div>
      </div>
    </rs-tab-item>

     <rs-tab-item title="Claims History"> 
        <div>
        <div>
          <div class="flex justify-between">
            <h4 class="mb-4 uppercase">Claims History Details</h4>
          </div>
          <rs-card class="py-5">
            <div
              class="flex flex-col md:flex-row justify-between items-start md:items-center gap-y-2 px-5"
            >
              <!--<div>
                <h5 class="font-semibold">Staff Shift</h5>
                <span class="text-sm text-gray-500">
                  Below is the list of all Staff Shift
                </span>
              </div>-->

              <!--<nuxt-link to="/report/financial/claims-report">
                <rs-button class="mb-4">
                  <Icon name="fe:plus" class="mr-1" />
                  Process Claims
                </rs-button>
              </nuxt-link>-->
                
            </div>
        <!-- DISPLAY CLAIMS HISTORY DETAILS -->
            <rs-table
            :data="dataHstryClaims"
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
            <!--<template v-slot:Status="data" >
              <rs-badge variant="success" v-if="data.text == 'Active'">Aktif</rs-badge>
              <rs-badge variant="danger" v-else>Tidak Aktif</rs-badge>
            </template>-->
            
            </rs-table>
          </rs-card>
        </div>
      </div>
     </rs-tab-item>
  </rs-tab>
</template>