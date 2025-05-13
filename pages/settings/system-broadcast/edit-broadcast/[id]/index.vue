<script setup>
    definePageMeta({
    title: "System Broadcast",
    middleware: ["auth"],
    requiresAuth: true,
    });

    const form = ref({
        startDate : "2025-04-23",
        endDate : "2025-04-24",
        userRole : "All",
        schoolName : "SKPP 18(2), PUTRAJAYA",
        message : "Promo!! Nasi tomato harga RM 2.50 SAHAJA.",
        action : ""   
    })

    const schoolDropdown = ref([  
    { label: "SMK Seksyen 18 Shah Alam", value: "SMK Seksyen 18 Shah Alam" },
    { label: "MRSM Lenggong", value: "MRSM Lenggong" },
    { label: "Smk Taman Tun Dr Ismail", value: "Smk Taman Tun Dr Ismail" },

    ]);

    const roleDropdown = ref([
        { label: "All", value: "All" },
        { label: "Staff", value: "Staff" },
        { label: "Parent", value: "Parent" },
        { label: "Student", value: "Student" },
        { label: "Merchant", value: "Merchant" },
    ]);

</script>

<template>
     <div>      

        <FormKit type="form" :actions="false" :incomplete-message="true" @submit="submitForm">
            <section>
                 <rs-card class="p-5">
                    <div class="flex justify-between items-center mb-5">
                        <div>
                            <h5 class="font-semibold">Edit Broadcast</h5>
                            <span class="text-sm text-gray-500">                                
                            </span>
                        </div>
                    </div>

                    <div class="flex flex-row justify-between">
                      <div class="basis-1/3 mr-5">
                         <FormKit v-model="form.startDate" type="date" label="Start Date" validation="required" />
                      </div>
                      <div class="basis-1/3 mr-5">
                        <FormKit v-model="form.endDate" type="date" label="End Date" validation="required" />
                      </div>
                      <div class="basis-1/3">
                        <FormKit v-model="form.userRole" type="select" :options="roleDropdown" label="User Role" validation="required" />
                      </div>
                    </div> 

                    <div class="mb-4">
                        <span class="font-semibold">School Name</span>
                        <v-select
                        v-model="form.schoolName" 
                        name="school" 
                        multiple
                        :options="schoolDropdown"
                        >
                        </v-select>
                    </div>

                    <FormKit type="textarea" placeholder="Enter message" rows="8" label="Message"/>

                    <FormKit
                        type="file"
                        label="Attachment"
                        accept=".jpeg,.png,.JPEG,.PNG,.GIF"                        
                      />

                 </rs-card>
            </section>
            <!--<rs-button btn-type="submit" class="w-full" :disabled="processing">
                {{ processing ? "Saving..." : "Save" }}
            </rs-button>-->

             <nuxt-link :to="`/settings/system-broadcast`">
            <rs-button variant="primary" class="w-64" style="margin-left: 59%;">Close</rs-button>
            </nuxt-link>
            &nbsp;&nbsp;&nbsp;
            <rs-button variant="warning" class="w-64" style="margin-top: -4.5%;margin-left: 80%;">Update</rs-button>
            
        </FormKit>
    </div>
</template>