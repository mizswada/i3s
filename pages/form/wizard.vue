<script setup>
definePageMeta({
  title: "Wizard Form",
});

const showCode = reactive({});
const tooltips = reactive({});

const toggleCode = (section) => {
  showCode[section] = !showCode[section];
};

const copyCode = (codeId) => {
  const codeElement = document.getElementById(codeId);
  if (codeElement) {
    navigator.clipboard
      .writeText(codeElement.textContent)
      .then(() => {
        console.log("Code copied to clipboard");
        showTooltip(codeId, "Code copied!");
      })
      .catch((err) => {
        console.error("Failed to copy code: ", err);
        showTooltip(codeId, "Failed to copy code");
      });
  }
};

const showTooltip = (codeId, message) => {
  tooltips[codeId] = message;
  setTimeout(() => {
    tooltips[codeId] = null;
  }, 2000);
};

const step = ref("contactInfo");
const stepNames = ["Contact Info", "Organization Info", "Application"];
const stepNames2 = ["Contact", "Organization", "Application"];

function submit() {
  alert("Form submitted");
}
</script>

<template>
  <div>
    <LayoutsBreadcrumb />
    <rs-card>
      <template #header> Top Step </template>
      <template #body>
        <rs-wizard
          type="top"
          :steps="stepNames"
          :form-submit="submit"
          :form-action="true"
          :form-step-required="true"
          :form-step-back="true"
          :form-navigate="true"
          :form-error-counter="false"
        >
          <template #contactinfo>
            <FormKit
              type="text"
              label="*First name"
              help="Please enter your first name"
              validation="required"
              validation-visibility="dirty"
            />
          </template>
          <template #organizationinfo>
            <FormKit
              type="text"
              label="Organization name"
              validation="required"
              validation-visibility="dirty"
            />
          </template>
        </rs-wizard>
        <div class="flex justify-end mt-4">
          <button
            class="text-sm border border-slate-200 py-1 px-3 rounded-lg"
            @click="toggleCode('topStep')"
          >
            {{ showCode.topStep ? "Hide Code" : "Show Code" }}
          </button>
        </div>
        <ClientOnly>
          <transition name="fade">
            <div v-show="showCode.topStep" class="relative" v-highlight>
              <button
                @click="copyCode('codeTopStep')"
                class="absolute top-4 right-2 text-sm bg-gray-300 hover:bg-gray-400 py-1 px-3 rounded z-10"
              >
                Copy
              </button>
              <span
                v-if="tooltips['codeTopStep']"
                class="absolute top-4 right-20 bg-black text-white text-xs rounded py-1 px-2 z-20"
              >
                {{ tooltips["codeTopStep"] }}
              </span>
              <NuxtScrollbar style="height: 400px">
                <pre id="codeTopStep" class="language-html shadow-none">
                  <code>
                    &lt;template&gt;
                      &lt;rs-wizard
                        type="top"
                        :steps="stepNames"
                        :form-submit="submit"
                        :form-action="true"
                        :form-step-required="true"
                        :form-step-back="true"
                        :form-navigate="true"
                        :form-error-counter="false"
                      &gt;
                        &lt;template #contactinfo&gt;
                          &lt;FormKit
                            type="text"
                            label="*First name"
                            help="Please enter your first name"
                            validation="required"
                            validation-visibility="dirty"
                          /&gt;
                        &lt;/template&gt;
                        &lt;template #organizationinfo&gt;
                          &lt;FormKit
                            type="text"
                            label="Organization name"
                            validation="required"
                            validation-visibility="dirty"
                          /&gt;
                        &lt;/template&gt;
                      &lt;/rs-wizard&gt;
                    &lt;/template&gt;

                    &lt;script setup&gt;
                      const stepNames = ["Contact Info", "Organization Info", "Application"];

                      function submit() {
                        alert("Form submitted");
                      }
                    &lt;/script&gt;
                  </code>
                </pre>
              </NuxtScrollbar>
            </div>
          </transition>
        </ClientOnly>
      </template>
    </rs-card>

    <rs-card>
      <template #header> Left Step </template>
      <template #body>
        <rs-wizard
          type="left"
          :steps="stepNames2"
          :form-submit="submit"
          :form-action="true"
          :form-step-required="true"
          :form-step-back="true"
          :form-navigate="false"
          :form-error-counter="false"
        >
          <template #contact>
            <FormKit
              type="text"
              label="*First name"
              help="Please enter your first name"
              validation="required"
              validation-visibility="dirty"
            />
            <FormKit
              type="text"
              label="*First name"
              help="Please enter your first name"
              validation="required"
              validation-visibility="dirty"
            />
            <FormKit
              type="text"
              label="*First name"
              help="Please enter your first name"
              validation="required"
              validation-visibility="dirty"
            />
          </template>
          <template #organization>
            <FormKit type="text" label="Organization name" />
          </template>
        </rs-wizard>
        <div class="flex justify-end mt-4">
          <button
            class="text-sm border border-slate-200 py-1 px-3 rounded-lg"
            @click="toggleCode('leftStep')"
          >
            {{ showCode.leftStep ? "Hide Code" : "Show Code" }}
          </button>
        </div>
        <ClientOnly>
          <transition name="fade">
            <div v-show="showCode.leftStep" class="relative" v-highlight>
              <button
                @click="copyCode('codeLeftStep')"
                class="absolute top-4 right-2 text-sm bg-gray-300 hover:bg-gray-400 py-1 px-3 rounded z-10"
              >
                Copy
              </button>
              <span
                v-if="tooltips['codeLeftStep']"
                class="absolute top-4 right-20 bg-black text-white text-xs rounded py-1 px-2 z-20"
              >
                {{ tooltips["codeLeftStep"] }}
              </span>
              <NuxtScrollbar style="height: 400px">
                <pre id="codeLeftStep" class="language-html shadow-none">
                  <code>
                    &lt;template&gt;
                      &lt;rs-wizard
                        type="left"
                        :steps="stepNames2"
                        :form-submit="submit"
                        :form-action="true"
                        :form-step-required="true"
                        :form-step-back="true"
                        :form-navigate="false"
                        :form-error-counter="false"
                      &gt;
                        &lt;template #contact&gt;
                          &lt;FormKit
                            type="text"
                            label="*First name"
                            help="Please enter your first name"
                            validation="required"
                            validation-visibility="dirty"
                          /&gt;
                          &lt;FormKit
                            type="text"
                            label="*First name"
                            help="Please enter your first name"
                            validation="required"
                            validation-visibility="dirty"
                          /&gt;
                          &lt;FormKit
                            type="text"
                            label="*First name"
                            help="Please enter your first name"
                            validation="required"
                            validation-visibility="dirty"
                          /&gt;
                        &lt;/template&gt;
                        &lt;template #organization&gt;
                          &lt;FormKit type="text" label="Organization name" /&gt;
                        &lt;/template&gt;
                      &lt;/rs-wizard&gt;
                    &lt;/template&gt;

                    &lt;script setup&gt;
                      const stepNames2 = ["Contact", "Organization", "Application"];

                      function submit() {
                        alert("Form submitted");
                      }
                    &lt;/script&gt;
                  </code>
                </pre>
              </NuxtScrollbar>
            </div>
          </transition>
        </ClientOnly>
      </template>
    </rs-card>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
