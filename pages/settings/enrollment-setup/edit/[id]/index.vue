<script setup>
definePageMeta({
  title: "Edit Enrollment",
  
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
<style lang="scss" scoped>
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 25px;
}

.switch input { 
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 18px;
  width: 20px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #2196F3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 60%;
}
</style>

<template>
 <div>
      <div class="flex justify-between">
        <h4 class="mb-4 ">Edit Access Level (Finance Manager) </h4>
      </div> 
      
  <rs-tab style="margin-top: 3%;">
    <rs-tab-item title="Inventory Assistant"> 
      <div>
        <div>
          <div class="flex justify-between">
            <h4 class="mb-4 uppercase">Inventory Setup</h4>
          </div>
          <!--<rs-card class="py-5">-->
            <div  class="flex flex-col md:flex-row justify-between items-start md:items-center gap-y-2 px-5">            
            
              <!--<div>
                <h5 class="font-semibold">School Session</h5>
                <span class="text-sm text-gray-500">
                  Below is the list of all school session
                </span>
              </div>-->

              <!--<nuxt-link to="/report/merchants/list-companies/approve-merchant">
                <rs-button class="mb-4" variant="warning">
                  <Icon name="fe:plus" class="mr-1"/>
                 Approve
                </rs-button>
              </nuxt-link>-->
                
            </div>

            <!--DISPLAY CHECKBOX INVENTORY -->               

                 <FormKit type="checkbox" label="card" input-class="icon-check" />
                 <FormKit type="checkbox" label="POS Terminal" input-class="icon-check" />
                 <FormKit type="checkbox" label="Server" input-class="icon-check" />
                 <FormKit type="checkbox" label="Switch" input-class="icon-check" />
                 <FormKit type="checkbox" label="Wireless Access Point" input-class="icon-check" />
          <!--</rs-card>-->

            <!-- DISPLAY BUTTON -->

            <nuxt-link :to="`/`">
            <rs-button variant="warning" class="w-64" style="margin-top: -0.5%;margin-left: 91%;width: 9%;">Update</rs-button>
            </nuxt-link>  
            <nuxt-link :to="`/settings/Enrollment-setup`">
            <rs-button variant="primary" class="w-64" style="margin-top: -2.8%;margin-left: 81%;width: 9%;">Cancel</rs-button>
            </nuxt-link>
        </div>
      </div>
    </rs-tab-item>

    <rs-tab-item title="School Management"> 
      <div>
        <div>
          <div class="flex justify-between">
            <h4 class="mb-4 uppercase">School Registration</h4>
          </div>         
            <div
              class="flex flex-col md:flex-row justify-between items-start md:items-center gap-y-2 px-5">
            
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
        <!-- DISPLAY DETAILS -->
        
            <label for="my-switch"> Disabled </label>
                <label class="switch">
                   <input type="checkbox"><span class="slider round"></span> </label> 
            <label for="my-switch">Enable</label>                 
         

           <!-- DISPLAY BUTTON -->
           
            <nuxt-link :to="`/myForm`">
            <rs-button variant="warning" class="w-64" style="margin-top: -0.5%;margin-left: 91%;width: 9%;">Update</rs-button>
            </nuxt-link>  
            <nuxt-link :to="`/settings/Enrollment-setup`">
            <rs-button variant="primary" class="w-64" style="margin-top: -2.8%;margin-left: 81%;width: 9%;">Cancel</rs-button>
            </nuxt-link>

        </div>
      </div>
    </rs-tab-item>

     <rs-tab-item title="User"> 
        <div>
        <div>
          <div class="flex justify-between">
            <h4 class="mb-4 uppercase">User Registration</h4>
          </div>       
            <div
              class="flex flex-col md:flex-row justify-between items-start md:items-center gap-y-2 px-5">
            
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
        <!-- DISPLAY DETAILS -->

            <FormKit type="checkbox" label="Merchant" input-class="icon-check" />
            <FormKit type="checkbox" label="Parent" input-class="icon-check" />
            <FormKit type="checkbox" label="Staff" input-class="icon-check" />
            <FormKit type="checkbox" label="Student" input-class="icon-check" />           
          
            <nuxt-link :to="`/myForm`">
            <rs-button variant="warning" class="w-64" style="margin-top: -0.5%;margin-left: 91%;width: 9%;">Update</rs-button>
            </nuxt-link>  
            <nuxt-link :to="`/settings/Enrollment-setup`">
            <rs-button variant="primary" class="w-64" style="margin-top: -2.8%;margin-left: 81%;width: 9%;">Cancel</rs-button>
            </nuxt-link>
      </div>
      </div>
     </rs-tab-item>
     
     <rs-tab-item title="Card Management"> 
        <div>
        <div>
          <div class="flex justify-between">
            <h4 class="mb-4 uppercase">Card Assignment</h4>
          </div>       
            <div
              class="flex flex-col md:flex-row justify-between items-start md:items-center gap-y-2 px-5">
            
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
        <!-- DISPLAY DETAILS -->

            <label for="my-switch"> Disabled </label>
                <label class="switch">
                   <input type="checkbox"><span class="slider round"></span> </label> 
            <label for="my-switch">Enable</label>              
          
            <nuxt-link :to="`/myForm`">
            <rs-button variant="warning" class="w-64" style="margin-top: -0.5%;margin-left: 91%;width: 9%;">Update</rs-button>
            </nuxt-link>  
            <nuxt-link :to="`/settings/Enrollment-setup`">
            <rs-button variant="primary" class="w-64" style="margin-top: -2.8%;margin-left: 81%;width: 9%;">Cancel</rs-button>
            </nuxt-link>
      </div>
      </div>
     </rs-tab-item>


     <rs-tab-item title="Customer Service"> 
        <div>
        <div>
          <div class="flex justify-between">
            <h4 class="mb-4 uppercase">Customer Service Assistant</h4>
          </div>       
            <div
              class="flex flex-col md:flex-row justify-between items-start md:items-center gap-y-2 px-5">
            
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
        <!-- DISPLAY DETAILS -->

            <FormKit type="checkbox" label="New Ticket" input-class="icon-check" />
            <FormKit type="checkbox" label="Card Status" input-class="icon-check" />
            <FormKit type="checkbox" label="Wallet Transaction" input-class="icon-check" />
            <FormKit type="checkbox" label="Purchase Card i3s" input-class="icon-check" />
            <FormKit type="checkbox" label="Attendance" input-class="icon-check" />
          
            <nuxt-link :to="`/myForm`">
            <rs-button variant="warning" class="w-64" style="margin-top: -0.5%;margin-left: 91%;width: 9%;">Update</rs-button>
            </nuxt-link>  
            <nuxt-link :to="`/settings/Enrollment-setup`">
            <rs-button variant="primary" class="w-64" style="margin-top: -2.8%;margin-left: 81%;width: 9%;">Cancel</rs-button>
            </nuxt-link>
      </div>
      </div>
     </rs-tab-item>


     <rs-tab-item title="Reports"> 
        <div>
        <div>
          <div class="flex justify-between">
            <h4 class="mb-4 uppercase">Reports Detail</h4>
          </div>       
            <div
              class="flex flex-col md:flex-row justify-between items-start md:items-center gap-y-2 px-5">
            
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
        <!-- DISPLAY DETAILS -->

            <FormKit type="checkbox" label="Inventory" input-class="icon-check" />
            <FormKit type="checkbox" label="School" input-class="icon-check" />
            <FormKit type="checkbox" label="User" input-class="icon-check" />
            <FormKit type="checkbox" label="Card Assignment" input-class="icon-check" />
            <FormKit type="checkbox" label="Card Transaction" input-class="icon-check" />
            <FormKit type="checkbox" label="Customer service" input-class="icon-check" />
            <FormKit type="checkbox" label="Merchant Sales" input-class="icon-check" />
            <FormKit type="checkbox" label="Merchant Claims" input-class="icon-check" />
           
          
            <nuxt-link :to="`/myForm`">
            <rs-button variant="warning" class="w-64" style="margin-top: -0.5%;margin-left: 91%;width: 9%;">Update</rs-button>
            </nuxt-link>  
            <nuxt-link :to="`/settings/Enrollment-setup`">
            <rs-button variant="primary" class="w-64" style="margin-top: -2.8%;margin-left: 81%;width: 9%;">Cancel</rs-button>
            </nuxt-link>
      </div>
      </div>
     </rs-tab-item>

    <rs-tab-item title="Setting"> 
        <div>
        <div>
          <div class="flex justify-between">
            <h4 class="mb-4 uppercase">System Configuration</h4>
          </div>       
            <div
              class="flex flex-col md:flex-row justify-between items-start md:items-center gap-y-2 px-5">
            
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
        <!-- DISPLAY DETAILS -->

            <FormKit type="checkbox" label="User Management" input-class="icon-check" />
            <FormKit type="checkbox" label="Set Access Level" input-class="icon-check" />
            <FormKit type="checkbox" label="School Holiday" input-class="icon-check" />
            <FormKit type="checkbox" label="Public Holiday" input-class="icon-check" />
            <FormKit type="checkbox" label="System Broadcast" input-class="icon-check" />
            
          
            <nuxt-link :to="`/myForm`">
            <rs-button variant="warning" class="w-64" style="margin-top: -0.5%;margin-left: 91%;width: 9%;">Update</rs-button>
            </nuxt-link>  
            <nuxt-link :to="`/settings/Enrollment-setup`">
            <rs-button variant="primary" class="w-64" style="margin-top: -2.8%;margin-left: 81%;width: 9%;">Cancel</rs-button>
            </nuxt-link>
      </div>
      </div>
     </rs-tab-item>
  </rs-tab>

 </div>
</template>
