<script setup>
definePageMeta({
  title: "Enrollment Setting",
  
  keepalive: {
    exclude: ["rs-table"],
  },
});

const { $swal, $router } = useNuxtApp();

const userList = ref([]);
const userRoleList = ref([]);

const showModal = ref(false);
const showModalForm = ref({
  username: "",
  fullname: "",
  email: "",
  phone: "",
  password: "",
  role: "",
  status: "",
});

const modalType = ref("");

const showModalRole = ref(false);
const showModalRoleForm = ref({
  role: "",
  description: "",
});

const showModalDelete = ref(false);
const showModalDeleteForm = ref({
  username: "",
});

const statusDropdown = ref([
  { label: "Active", value: "ACTIVE" },
  { label: "Inactive", value: "INACTIVE" },
]);

const checkAllRole = ref(false);

const userListbyRole = ref([]);

// Call API
// onMounted(async () => {
//   await getUserList();
//   await getRoleList();
// });

await getUserList();
await getRoleList();

async function getUserList() {
  const { data } = await useFetch("/api/devtool/user/list", {
    initialCache: false,
  });

  // Rename the key
  if (data.value?.statusCode === 200) {
    userList.value = data.value.data.map((user) => ({
      username: user.userUsername,
      fullname: user.userFullName,
      email: user.userEmail,
      phone: user.userPhone,
      role: user.roles.map((r) => {
        return {
          label: r.role.roleName,
          value: r.role.roleID,
        };
      }),
      status: user.userStatus,
      action: null,
    }));

    groupUserByRole();
  }
}

async function getRoleList() {
  const { data } = await useFetch("/api/devtool/role/list", {
    initialCache: false,
  });

  if (data.value.statusCode === 200) {
    userRoleList.value = data.value.data.map((role) => ({
      label: role.roleName,
      value: role.roleID,
    }));
  }
}

function roleWithComma(role) {
  // Limit the number of role to 4 and add "..." if there are more than 4 role
  const roleList = role.map((r) => r.label);
  return roleList.length > 4
    ? roleList.slice(0, 4).join(", ") + "..."
    : roleList.join(", ");
}

// Watch checkAllRole value
watch(
  checkAllRole,
  async (value) => {
    if (value) {
      showModalForm.value.role = userRoleList.value;
    } else {
      if (showModalForm.value.role.length === userRoleList.value.length) {
        showModalForm.value.role = [];
      }
    }
  },
  { immediate: true }
);

// Watch showModalForm.role value
watch(
  showModalForm,
  async (value) => {
    if (value.role.length === userRoleList.value.length) {
      checkAllRole.value = true;
    } else {
      checkAllRole.value = false;
    }
  },
  { deep: true }
);

// Open Modal Add or Edit User
const openModal = async (value, type) => {
  modalType.value = type;

  if (type == "edit") {
    showModalForm.value.username = value.username;
    showModalForm.value.fullname = value.fullname;
    showModalForm.value.phone = value.phone;
    showModalForm.value.email = value.email;
    showModalForm.value.role = value.role;
    showModalForm.value.status = value.status;
  } else {
    showModalForm.value.username = "";
    showModalForm.value.fullname = "";
    showModalForm.value.phone = "";
    showModalForm.value.email = "";
    showModalForm.value.role = "";
    showModalForm.value.status = "";
  }

  showModalRole.value = false;
  showModal.value = true;
};

// Open Modal Add Role
const openModalRole = async (value) => {
  showModalRoleForm.value.role = "";
  showModalRoleForm.value.description = "";

  showModal.value = false;
  showModalRole.value = true;
};

// Close Modal Role
const closeModalRole = () => {
  showModalRole.value = false;
  showModal.value = true;
};

// Open Modal Delete User
const openModalDelete = async (value) => {
  showModalDeleteForm.value.username = value.username;

  showModalDelete.value = true;
};

const checkDeveloperRole = (role) => {
  return role.some((r) => r.label === "Developer");
};

const saveUser = async () => {
  if (modalType.value == "add") {
    const { data } = await useFetch("/api/devtool/user/add", {
      initialCache: false,
      method: "POST",
      body: JSON.stringify({
        ...showModalForm.value,
        module: "user",
      }),
    });

    if (data.value.statusCode === 200) {
      // console.log("data.value", data.value);
      $swal.fire({
        position: "center",
        icon: "success",
        title: "Success",
        text: "User has been added",
        timer: 1000,
        showConfirmButton: false,
      });
      // await getUserList();
      // showModal.value = false;

      setTimeout(() => {
        $router.go();
      }, 1000);
    } else {
      $swal.fire({
        position: "center",
        icon: "error",
        title: "Error",
        text: data.value.message,
      });
    }
  } else {
    const { data } = await useFetch("/api/devtool/user/edit", {
      initialCache: false,
      method: "POST",
      body: JSON.stringify(showModalForm.value),
    });

    if (data.value.statusCode === 200) {
      $swal.fire({
        position: "center",
        icon: "success",
        title: "Success",
        text: "User has been updated",
        timer: 1000,
        showConfirmButton: false,
      });
      // await getUserList();
      // showModal.value = false;

      setTimeout(() => {
        $router.go();
      }, 1000);
    } else {
      $swal.fire({
        position: "center",
        icon: "error",
        title: "Error",
        text: data.value.message,
      });
    }
  }
};

const deleteUser = async () => {
  const { data } = await useFetch("/api/devtool/user/delete", {
    initialCache: false,
    method: "POST",
    body: JSON.stringify({ username: showModalDeleteForm.value.username }),
  });

  if (data.value.statusCode === 200) {
    $swal.fire({
      position: "center",
      icon: "success",
      title: "Success",
      text: "User has been deleted",
      timer: 1000,
      showConfirmButton: false,
    });

    // Timer to wait timer in swal
    setTimeout(() => {
      $router.go();
    }, 1000);
  } else {
    $swal.fire({
      position: "center",
      icon: "error",
      title: "Error",
      text: data.value.message,
    });
  }
};

const saveRole = async () => {
  if (
    showModalRoleForm.value.role == "" ||
    showModalRoleForm.value.role == " "
  ) {
    return false;
  }

  const { data } = await useFetch("/api/devtool/role/add", {
    method: "POST",
    body: JSON.stringify({
      name: showModalRoleForm.value.role,
      description: showModalRoleForm.value.description,
      module: "user",
    }),
  });

  if (data.value.statusCode === 200) {
    $swal.fire({
      position: "center",
      title: "Success",
      text: data.value.message,
      icon: "success",
      timer: 1000,
      showConfirmButton: false,
    });

    await getRoleList();
    closeModalRole();
  } else {
    $swal.fire({
      position: "center",
      title: "Error",
      text: data.value.message,
      icon: "error",
    });
  }
};

function groupUserByRole() {
  userListbyRole.value = userList.value.reduce((acc, cur) => {
    const { role } = cur;
    if (!acc[role.value]) {
      acc[role.value] = {
        role: role,
        users: [],
      };
    }
    acc[role.value].users.push(cur);
    return acc;
  }, {});
}

const showModalabc = ref(false);
const form = ref ({
    id: "",
    username: "",
    description: "",   
    status: ""
  })

//Dummy data for access level
const data = [
  {
    "#": "1",
    "User Role": "Finance Manager",  
    "Username": "Vyra",
    "Description":  "",
    "Action": ""
  },
  {
    "#": "2",
    "User Role": "Customer Service Assistant",  
    "Username": "sara",
    "Description":  "",
    "Action": ""  
    
  },
  {
    "#": "3",
    "User Role": "System Admin",    
    "Username": "DNT",
    "Description":  "",
    "Action": ""   
  },
]

</script>
<template>
<div>
  <div>
      <div class="flex justify-between">
        <!--<h4 class="mb-4 uppercase">Enrollment Setup</h4>-->
      </div>
    </div>
   
    <rs-tab style="margin-top: 3%;">
       <rs-tab-item title="Create Role">
          <div class="flex justify-end items-center mb-4">
            <!--<nuxt-link to="/settings/user-management/user-list">-->
              <rs-button class="mb-4" variant = "warning" @click="showModalabc = true">
                 <Icon name="material-symbols:add" class="mr-1"></Icon>
                Create Role Type
              </rs-button>
            <!--</nuxt-link>-->     
          </div>
          <rs-card class="py-5"> 
            <rs-table
              :data="data"
              :options="{
              variant: 'default',
              striped: true,
              borderless: true,
              }"
              :options-advanced="{
              sortable: true,
              responsive: true,
              filterable: false,
              }"
              advanced
              >
            <!--<template v-slot:status="data">
                <rs-badge :variant="data.text === 'Active'? 'success' : data.text == 'Inactive' ? 'warning' : 'danger'">                            
                </rs-badge>
              </template>-->
              <!--<template v-slot:users="data">
                {{ usersWithCommans(data.text) }}
              </template>-->

                <!--<template v-slot:action="data">
                <div class="flex justify-center items-center" v-if="data.value.role?.value != '1'" >
                  <Icon
                    name="material-symbols:edit-outline-rounded"
                    class="text-primary hover:text-primary/90 cursor-pointer mr-1"
                    size="22" @click="showModalabc(data.value, 'edit')" ></Icon>
                  <Icon
                    name="material-symbols:close-rounded"
                    class="text-primary hover:text-primary/90 cursor-pointer"
                    size="22" @click="openModalDeleteRole(data.value)" ></Icon>
                </div>
                <div class="flex justify-center items-center" v-else>-</div>
              </template>-->
              <template v-slot:Action="data">
                <div class="flex flex-row gap-x-2">
                  <div class="flex items-center gap-x-2">
                    <nuxt-link :to="`/settings/enrollment-setup/edit/[id]`">
                      <rs-button variant="warning" v-tooltip.focus.top="'Edit role'">
                        <Icon name="material-symbols:edit-outline" /> 
                      </rs-button>
                    </nuxt-link>
                  </div>   
                </div>           
              </template>
            </rs-table>
          </rs-card>

          <!-- MODAL -->
           <rs-modal :title="modalType == 'edit' ? 'Edit Role' : 'Add Role'" ok-title="Save" :ok-callback="saveRole" v-model="showModalabc" >
              <FormKit type="text" v-model="form.username" label="Name" placeholder = "Enter username" validation="required" validation-visibility="live"/>
              <FormKit type="textarea" v-model="form.description" placeholder = "Enter description" label="Description" />          
              <FormKit type="select" :options="statusDropdown" v-model="form.status" name="status" label="Status" />            
           </rs-modal>

           <!-- Modal Delete Confirmation -->
          <rs-modal title="Delete Confirmation" ok-title="Yes" cancel-title="No" :ok-callback="deleteRole" v-model="showModalDeleteRole" >
            <p>
              Are you sure want to delete this role ({{ showModalDeleteForm.name }})?
            </p>
          </rs-modal>
       </rs-tab-item>

       <rs-tab-item title="Add User">
          <div class="flex justify-end items-center mb-4">              
             <rs-button variant = "warning" style="margin-right: 3%;" @click="openModal(null, 'add')">
                <Icon name="material-symbols:add" class="mr-1"></Icon>
                  Add User
              </rs-button>   
          </div>
          <rs-card>
            <div class="pt-2">
              <rs-tab fill>
                <rs-tab-item title="All User">
                  <!--<div class="flex justify-end items-center mb-4">
                    <rs-button variant = "warning" style="margin-right: 3%;" @click="openModal(null, 'add')">
                      <Icon name="material-symbols:add" class="mr-1"></Icon>
                      Add User
                    </rs-button> 
                  </div>-->
                  <rs-table
                    v-if="userList && userList.length > 0"
                    :data="userList"
                    :options="{
                      variant: 'default',
                      striped: true,
                      borderless: true,
                    }"
                    advanced
                  >
                    <template v-slot:role="data">
                      <!-- {{ data.text?.label }} -->
                      {{ roleWithComma(data.text) }}
                    </template>

                    <template v-slot:action="data">
                      <div class="flex justify-center items-center" v-if="!checkDeveloperRole(data.value.role)" >                   
                        <Icon name="material-symbols:edit-outline-rounded"
                          class="text-primary hover:text-primary/90 cursor-pointer mr-1"
                          size="22" @click="openModal(data.value, 'edit')"></Icon>
                        <Icon name="material-symbols:close-rounded" class="text-primary hover:text-primary/90 cursor-pointer" size="22"
                          @click="openModalDelete(data.value)" ></Icon>
                      </div>

                      <div class="flex justify-center items-center" v-else>-</div>
                    </template>                  
                  </rs-table>
                </rs-tab-item>
              </rs-tab>            
            </div>
          </rs-card>


          <!--MODAL -->
          <rs-modal :title="modalType == 'edit' ? 'Edit User' : 'Add User'" ok-title="Save" :ok-callback="saveUser" v-model="showModal">

            <FormKit type="text" v-model="showModalForm.username" name="username" placeholder= "Enter username" label="Username" :disabled="modalType == 'edit' ? true : false" />
            <FormKit type="text" v-model="showModalForm.fullname" name="fullname" placeholder= "Enter fullname" label="Fullname" />
            <FormKit type="text" v-model="showModalForm.email" name="email" placeholder= "Enter email" Label="Email" validation="email" validation-visibility="dirty"/>
            <FormKit type="mask" v-model="showModalForm.phone" name="phone" placeholder= "Enter phone number" label="Phone" mask="###########" />

            <div class="flex justify-between items-center mb-2">
              <label class="formkit-label flex items-center gap-x-4 font-semibold text-gray-700 dark:text-gray-200 blockfont-semibold text-sm formkit-invalid:text-red-500 dark:formkit-invalid:text-danger"
                for="input_4">
                Role
              </label>
              <!-- <rs-button size="sm" @click="openModalRole"> Add Role </rs-button> -->
            </div>

            <v-select class="formkit-vselect" :options="userRoleList" v-model="showModalForm.role" multiple ></v-select>            
            <FormKit type="select" :options="statusDropdown" v-model="showModalForm.status" name="status" label="Status" />            
          </rs-modal>

          <!-- MODAL ROLE -->
          <rs-modal title="Add Role" ok-title="Save" cancel-title="Back" :cancel-callback="closeModalRole" :ok-callback="saveRole" v-model="showModalRole">
            <FormKit type="text" v-model="showModalRoleForm.role" label="Name" validation="required" validation-visibility="live" />
            <FormKit type="textarea" v-model="showModalRoleForm.description" label="Description" />
          </rs-modal>

          <!-- MODAL DELETE CONFIRMATION -->
          <rs-modal title="Delete Confirmation" ok-title="Yes" cancel-title="No" :ok-callback="deleteUser" v-model="showModalDelete">
          
            <p>
              Are you sure want to delete this user ({{ showModalDeleteForm.username}})?
            </p>
          </rs-modal>
       </rs-tab-item>
    </rs-tab> 
 </div>
</template>