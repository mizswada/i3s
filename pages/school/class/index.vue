<script setup>
definePageMeta({
  title: "Manage Class",
  
});

const data = [
  {
    "Class Name": "3 Melor",
    "School Class Shift": "Morning",
    "Action": ""
  },
]
</script>
<template>  
    <div>
      <div class="flex justify-between">
        <h4 class="mb-4">Class Details</h4>
      </div>

        <!-- BUTTON  -->
         <div class="flex justify-end mb-2">
          <nuxt-link to="/school/class/add-class">
            <rs-button class="mx-5 px-5" variant = "warning">
              <Icon name="fe:plus" class="mr-1" />
              Add Class
            </rs-button>
          </nuxt-link>

           <nuxt-link to="/school/class/uploadclass">
            <rs-button class="mb-4" variant = "warning">              
             <span style="height: 24px;">Excel Upload </span>
            </rs-button>
          </nuxt-link>
        </div>   

      <rs-card class="py-5">
        <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-y-2 px-5" >       
            <rs-table
            :data="data"
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
                <nuxt-link :to="`/school/class/edit-class/[id]`">
                  <rs-button variant="warning">
                    <Icon name="material-symbols:edit-outline" /> 
                  </rs-button>
                </nuxt-link>
              </div>
              <div class="flex items-center gap-x-2">
                <nuxt-link :to="``">
                  <rs-button variant="danger">                  
                    <Icon name="material-symbols:delete-outline" /> 
                  </rs-button>
                </nuxt-link>
              </div>
            </div>
          </template>
        </rs-table>
        </div>        
      </rs-card>
    </div>
 
</template>
