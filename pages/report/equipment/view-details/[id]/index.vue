<script setup>
definePageMeta({
  title: "View Detail equipment",
  
});

const form = ref({   
    "#":"0001", 
    "School": "SMK SEKSYEN 18, SHAH ALAM",
    "Equipment": "RFID Reader",
    "TotalReader": "5",
    "TotalPos": "3",
    "TotalServer": "1",
    "TotalSwitch": "1",
    "Address": "Jalan Kelapa Bali 18/43, Seksyen 18, 40200 Shah Alam, Selangor",
    "Status":"Active"     
})

const schoolDropdown = ref([   
  { label: "SMK Seksyen 18 Shah Alam", value: "SMK Seksyen 18 Shah Alam" },
  { label: "MRSM Lenggong", value: "MRSM Lenggong" },
  { label: "Smk Taman Tun Dr Ismail", value: "Smk Taman Tun Dr Ismail" },
]);

const statusDropdown = ref([
  { label: "Active", value: "Active" },
  { label: "Faulty", value: "Faulty" },
  { label: "Repair", value: "Repair" },  
]);

const equipmentDropdown = ref([  
  { label: "RFID Reader", value: "RFID Reader" },
  { label: "POS Terminal", value: "POS Terminal" },  
  { label: "Server", value: "Server" }, 
  { label: "Switch", value: "Switch" },
])
</script>

<template>
    <FormKit type="form" :actions="false" :incomplete-message="true" @submit="submitForm" id="myForm">
        <section>
            <rs-card class="p-7">
                <FormKit v-model="form.School" type="select" label="School" :options="schoolDropdown" disabled="disabled" />

                <FormKit v-model="form.Equipment" type="select" label="Equipment Type" :options="equipmentDropdown" disabled="disabled" />
                <FormKit v-model="form.TotalReader" type="text" label="Total Reader" disabled="disabled" />
                <FormKit v-model="form.TotalPos" type="text" label="Total POS" disabled="disabled" />
                <FormKit v-model="form.TotalServer" type="text" label="Total Server" disabled="disabled" />
                <FormKit v-model="form.TotalSwitch" type="text" label="Total Switch" disabled="disabled" />
                <FormKit v-model="form.Address" type="text" label="Location" disabled="disabled" />
                <FormKit v-model="form.Status" type="select" :options="statusDropdown" label="Status" disabled="disabled"/>

            </rs-card>             
        </section>
        <nuxt-link :to="`/report/equipment`">
        <rs-button btn-type="submit" variant="primary" style="margin-top: -0.5%;margin-left: 88%;width: 10%;" :disabled="processing">
            {{ processing ? "Saving..." : "Close" }}
            </rs-button>  
        </nuxt-link>
    </FormKit>
</template>