<template>
  <div class="mb-8">
    <div class="flex justify-between items-center">
      <template v-for="step in totalSteps" :key="step">
        <div class="flex items-center" :class="{ 'flex-1': step < totalSteps }">
          <div
            class="w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors cursor-pointer relative group"
            :class="[
              currentStep >= step
                ? 'bg-shield-blue text-white'
                : 'bg-shield-gray-light text-shield-gray-dark',
              step < currentStep ? 'hover:bg-shield-blue-dark' : '',
            ]"
            @click="step < currentStep ? $emit('step-clicked', step) : null"
          >
            {{ step }}
            <!-- Tooltip for inactive steps -->
            <div
              v-if="step > currentStep"
              class="absolute -top-2 left-1/2 transform -translate-x-1/2 -translate-y-full px-2 py-1 bg-gray-900 text-white text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200"
            >
              {{ getStepTitle(step) }}
            </div>
          </div>
          <div
            v-if="step < totalSteps"
            class="flex-1 h-1 mx-2"
            :class="[
              currentStep > step ? 'bg-shield-blue' : 'bg-shield-gray-light',
            ]"
          ></div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: "StepIndicator",
  props: {
    currentStep: {
      type: Number,
      required: true,
    },
    totalSteps: {
      type: Number,
      required: true,
    },
    stepTitles: {
      type: Object,
      required: true,
    },
  },
  methods: {
    getStepTitle(step) {
      return this.stepTitles[step] || `Stap ${step}`;
    },
  },
};
</script>
