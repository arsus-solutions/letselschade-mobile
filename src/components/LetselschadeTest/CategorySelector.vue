<template>
  <div class="space-y-6">
    <div class="text-center space-y-4">
      <h1 class="text-2xl font-cinzel text-shield-blue-dark">
        Start de letselschadetest
      </h1>
      <p class="text-shield-gray-dark">
        Ontdek binnen enkele minuten wat uw schadevergoeding kan zijn. Kies uw
        ongevalstype om te beginnen:
      </p>
    </div>
    <div class="grid grid-cols-2 gap-4">
      <button
        v-for="lead_type in lead_types"
        :key="lead_type.id"
        @click="$emit('category-selected', lead_type.id)"
        :class="[
          'p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col items-center gap-4',
          getCategoryColor(lead_type.id),
        ]"
      >
        <font-awesome-icon
          :icon="getCategoryIcon(lead_type.id)"
          class="text-white text-4xl"
        />
        <span class="font-medium text-white">{{ lead_type.name }}</span>
      </button>
    </div>
  </div>
</template>

<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faCar,
  faIndustry,
  faPaw,
  faRoad,
} from "@fortawesome/free-solid-svg-icons";

library.add(faCar, faIndustry, faPaw, faRoad);

export default {
  name: "CategorySelector",
  components: {
    FontAwesomeIcon,
  },
  props: {
    lead_types: {
      type: Array,
      required: true,
    },
  },
  methods: {
    getCategoryIcon(id) {
      switch (id) {
        case 1:
          return "car"; // Verkeersongeval
        case 2:
          return "industry"; // Bedrijfsongeval
        case 5:
          return "paw"; // Ongeval door dieren
        case 7:
          return "road"; // Ongeval door gebrek wegdek
        default:
          return "question";
      }
    },
    getCategoryColor(id) {
      switch (id) {
        case 1:
          return "bg-blue-600 hover:bg-blue-700"; // Verkeersongeval
        case 2:
          return "bg-green-600 hover:bg-green-700"; // Bedrijfsongeval
        case 5:
          return "bg-purple-600 hover:bg-purple-700"; // Ongeval door dieren
        case 7:
          return "bg-orange-600 hover:bg-orange-700"; // Ongeval door gebrek wegdek
        default:
          return "bg-gray-600 hover:bg-gray-700";
      }
    },
  },
};
</script>
