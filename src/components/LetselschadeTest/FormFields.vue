<template>
  <form @submit.prevent class="space-y-6">
    <div v-for="field in fields" :key="field.name" class="space-y-2">
      <label :for="field.name" class="block text-shield-gray-dark font-medium">
        {{ field.label }}
      </label>

      <!-- Text/Number/Date Input -->
      <input
        v-if="['text', 'number', 'date'].includes(field.type)"
        :type="field.type"
        :id="field.name"
        :value="modelValue[field.name]"
        @input="updateField(field.name, $event.target.value)"
        :required="field.required"
        class="w-full px-4 py-2 border border-shield-gray-light rounded-md focus:outline-none focus:ring-2 focus:ring-shield-blue focus:border-transparent"
      />

      <!-- Select Input -->
      <select
        v-else-if="field.type === 'select'"
        :id="field.name"
        :value="modelValue[field.name]"
        @change="updateField(field.name, $event.target.value)"
        :required="field.required"
        class="w-full px-4 py-2 border border-shield-gray-light rounded-md focus:outline-none focus:ring-2 focus:ring-shield-blue focus:border-transparent"
      >
        <option value="">Selecteer een optie</option>
        <option
          v-for="option in field.options"
          :key="option.value"
          :value="option.value"
        >
          {{ option.label }}
        </option>
      </select>

      <!-- Radio Buttons -->
      <div v-else-if="field.type === 'radio'" class="space-y-2">
        <div
          v-for="option in field.options"
          :key="option.value"
          class="flex items-center"
        >
          <input
            type="radio"
            :id="field.name + '-' + option.value"
            :name="field.name"
            :value="option.value"
            :checked="modelValue[field.name] === option.value"
            @change="updateField(field.name, option.value)"
            :required="field.required"
            class="mr-2"
          />
          <label :for="field.name + '-' + option.value">{{
            option.label
          }}</label>
        </div>
      </div>

      <!-- Textarea -->
      <textarea
        v-else-if="field.type === 'textarea'"
        :id="field.name"
        :value="modelValue[field.name]"
        @input="updateField(field.name, $event.target.value)"
        :required="field.required"
        rows="4"
        class="w-full px-4 py-2 border border-shield-gray-light rounded-md focus:outline-none focus:ring-2 focus:ring-shield-blue focus:border-transparent"
      ></textarea>
    </div>
  </form>
</template>

<script>
export default {
  name: "FormFields",
  props: {
    fields: {
      type: Array,
      required: true,
    },
    modelValue: {
      type: Object,
      required: true,
    },
  },
  methods: {
    updateField(fieldName, value) {
      const updatedData = {
        ...this.modelValue,
        [fieldName]: value,
      };
      this.$emit("update:modelValue", updatedData);
    },
  },
};
</script>
