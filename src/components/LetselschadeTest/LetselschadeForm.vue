<template>
  <div class="max-w-2xl mx-auto">
    <transition :name="direction" mode="out-in">
      <!-- Show category selector if no category is selected -->
      <CategorySelector
        v-if="!selectedCategory"
        @category-selected="handleCategorySelection"
        :key="'categories'"
        :lead_types="lead_types"
        :questions="questions"
      />

      <!-- Show steps only after category is selected -->
      <div v-else :key="'form'">
        <div class="bg-white rounded-lg shadow-md p-6">
          <h2 class="text-shield-blue-dark font-cinzel mb-6 text-center">
            {{ getCategoryTitle(selectedCategory) }}
          </h2>

          <StepIndicator
            :currentStep="currentStep"
            :totalSteps="5"
            :stepTitles="stepTitles"
            @step-clicked="handleStepClick"
          />

          <transition :name="direction" mode="out-in">
            <div :key="currentStep" class="mt-6">
              <div v-show="currentStep >= 1 && currentStep <= 5">
                <h3 class="text-lg font-cinzel text-shield-blue-dark mb-4">
                  {{ getStepTitle(currentStep) }}
                </h3>
                <div v-if="selectedCategory" class="space-y-6">
                  <div class="text-center space-y-4">
                    <h1 class="text-2xl font-cinzel text-shield-blue-dark">
                      {{ getCategoryTitle() }}
                    </h1>
                    <p class="text-shield-gray-dark">{{ getStepTitle() }}</p>
                  </div>

                  <div class="space-y-4">
                    <div
                      v-for="field in getStepFields(currentStep)"
                      :key="field.id"
                      v-show="shouldDisplayField(field)"
                      class="space-y-2"
                    >
                      <div v-if="field.type === 'switch'" class="space-y-2">
                        <label
                          class="block text-sm font-medium text-shield-gray-dark mb-2"
                        >
                          {{ field.label }}
                        </label>
                        <div class="inline-flex">
                          <button
                            type="button"
                            :class="[
                              localFormData[field.id] === field.options[0].value
                                ? 'bg-shield-blue text-white'
                                : 'bg-white text-shield-gray-700 border-shield-gray-400',
                              'px-4 py-2 text-sm font-medium border-2 focus:outline-none focus:ring-2 focus:ring-shield-blue focus:ring-offset-2 hover:bg-shield-gray-50 rounded-l-md border-r-0',
                              errors[field.id] ? 'border-red-500' : '',
                            ]"
                            @click="
                              handleFieldChange(
                                field.id,
                                localFormData[field.id] ===
                                  field.options[0].value
                                  ? null
                                  : field.options[0].value
                              )
                            "
                          >
                            {{ field.options[0].label }}
                          </button>
                          <button
                            type="button"
                            :class="[
                              localFormData[field.id] === field.options[1].value
                                ? 'bg-shield-blue text-white'
                                : 'bg-white text-shield-gray-700 border-shield-gray-400',
                              'px-4 py-2 text-sm font-medium border-2 focus:outline-none focus:ring-2 focus:ring-shield-blue focus:ring-offset-2 hover:bg-shield-gray-50 rounded-r-md',
                              errors[field.id] ? 'border-red-500' : '',
                            ]"
                            @click="
                              handleFieldChange(
                                field.id,
                                localFormData[field.id] ===
                                  field.options[1].value
                                  ? null
                                  : field.options[1].value
                              )
                            "
                          >
                            {{ field.options[1].label }}
                          </button>
                        </div>
                        <p
                          v-if="errors[field.id]"
                          class="mt-1 text-sm text-red-500"
                        >
                          {{ errors[field.id] }}
                        </p>
                      </div>
                      <template v-else>
                        <div
                          v-if="field.extraHtmlTop"
                          v-html="field.extraHtmlTop"
                        ></div>
                        <label
                          class="block text-sm font-medium text-shield-gray-dark"
                        >
                          {{ field.label }}
                        </label>
                        <div v-if="field.type === 'radio'" class="space-y-2">
                          <div
                            v-for="option in field.options"
                            :key="option.value"
                            class="flex items-center"
                          >
                            <input
                              type="radio"
                              :id="field.id + '_' + option.value"
                              :name="field.id"
                              :value="option.value"
                              v-model="localFormData[field.id]"
                              @change="
                                handleFieldChange(field.id, $event.target.value)
                              "
                              :class="[
                                'h-4 w-4 focus:ring-shield-blue',
                                errors[field.id]
                                  ? 'border-red-500 text-red-500'
                                  : 'border-shield-gray-300 text-shield-blue',
                              ]"
                            />
                            <label
                              :for="field.id + '_' + option.value"
                              class="ml-3 block text-sm text-shield-gray-dark"
                            >
                              {{ option.label }}
                            </label>
                          </div>
                          <p
                            v-if="errors[field.id]"
                            class="mt-1 text-sm text-red-500"
                          >
                            {{ errors[field.id] }}
                          </p>
                        </div>
                        <div v-else-if="field.type === 'textarea'" class="mt-1">
                          <textarea
                            :id="field.id"
                            v-model="localFormData[field.id]"
                            @input="
                              handleFieldChange(field.id, $event.target.value)
                            "
                            rows="3"
                            :class="[
                              'block w-full rounded-md border-2 shadow-sm focus:ring-shield-blue sm:text-sm p-3 bg-white',
                              errors[field.id]
                                ? 'border-red-500 focus:border-red-500'
                                : 'border-shield-gray-400 focus:border-shield-blue',
                            ]"
                            :placeholder="field.placeholder || ''"
                          ></textarea>
                          <p
                            v-if="errors[field.id]"
                            class="mt-1 text-sm text-red-500"
                          >
                            {{ errors[field.id] }}
                          </p>
                        </div>
                        <div v-else-if="field.type === 'text'" class="mt-1">
                          <input
                            type="text"
                            :id="field.id"
                            v-model="localFormData[field.id]"
                            @input="
                              handleFieldChange(field.id, $event.target.value)
                            "
                            :class="[
                              'block w-full rounded-md border-2 shadow-sm focus:ring-shield-blue sm:text-sm p-3 bg-white',
                              errors[field.id]
                                ? 'border-red-500 focus:border-red-500'
                                : 'border-shield-gray-400 focus:border-shield-blue',
                            ]"
                            :placeholder="field.placeholder || ''"
                          />
                          <p
                            v-if="errors[field.id]"
                            class="mt-1 text-sm text-red-500"
                          >
                            {{ errors[field.id] }}
                          </p>
                        </div>
                        <div v-else-if="field.type === 'email'" class="mt-1">
                          <input
                            type="email"
                            :id="field.id"
                            v-model="localFormData[field.id]"
                            @input="
                              handleFieldChange(field.id, $event.target.value)
                            "
                            :class="[
                              'block w-full rounded-md border-2 shadow-sm focus:ring-shield-blue sm:text-sm p-3 bg-white',
                              errors[field.id]
                                ? 'border-red-500 focus:border-red-500'
                                : 'border-shield-gray-400 focus:border-shield-blue',
                            ]"
                            :placeholder="field.placeholder || ''"
                          />
                          <p
                            v-if="errors[field.id]"
                            class="mt-1 text-sm text-red-500"
                          >
                            {{ errors[field.id] }}
                          </p>
                        </div>
                        <div v-else-if="field.type === 'tel'" class="mt-1">
                          <input
                            type="tel"
                            :id="field.id"
                            v-model="localFormData[field.id]"
                            @input="
                              handleFieldChange(field.id, $event.target.value)
                            "
                            :class="[
                              'block w-full rounded-md border-2 shadow-sm focus:ring-shield-blue sm:text-sm p-3 bg-white',
                              errors[field.id]
                                ? 'border-red-500 focus:border-red-500'
                                : 'border-shield-gray-400 focus:border-shield-blue',
                            ]"
                            :placeholder="field.placeholder || ''"
                          />
                          <p
                            v-if="errors[field.id]"
                            class="mt-1 text-sm text-red-500"
                          >
                            {{ errors[field.id] }}
                          </p>
                        </div>
                        <div v-else-if="field.type === 'select'" class="mt-1">
                          <select
                            :id="field.id"
                            v-model="localFormData[field.id]"
                            @change="
                              handleFieldChange(field.id, $event.target.value)
                            "
                            :class="[
                              'block w-full rounded-md border-2 shadow-sm focus:ring-shield-blue sm:text-sm',
                              errors[field.id]
                                ? 'border-red-500 focus:border-red-500'
                                : 'border-shield-gray-400 focus:border-shield-blue',
                            ]"
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
                          <p
                            v-if="errors[field.id]"
                            class="mt-1 text-sm text-red-500"
                          >
                            {{ errors[field.id] }}
                          </p>
                        </div>
                        <div
                          v-else-if="field.type === 'textGroup'"
                          class="mt-1"
                        >
                          <div class="flex flex-wrap">
                            <div
                              v-for="groupField in field.groupFields"
                              :key="groupField.id"
                              :style="{
                                width: groupField.lengthPercentage
                                  ? groupField.lengthPercentage + '%'
                                  : 'auto',
                                flex: groupField.lengthPercentage
                                  ? 'none'
                                  : '1',
                              }"
                              class="min-w-0"
                            >
                              <label
                                class="block text-sm font-medium text-shield-gray-dark mb-1"
                              >
                                {{ groupField.label }}
                              </label>
                              <template v-if="groupField.type === 'switch'">
                                <div class="inline-flex">
                                  <button
                                    type="button"
                                    :class="[
                                      localFormData[groupField.id] ===
                                      groupField.options[0].value
                                        ? 'bg-shield-blue text-white'
                                        : 'bg-white text-shield-gray-700 border-shield-gray-400',
                                      'px-3 py-1.5 text-sm font-medium border-2 focus:outline-none focus:ring-2 focus:ring-shield-blue focus:ring-offset-2 hover:bg-shield-gray-50 rounded-l-md border-r-0',
                                      errors[groupField.id]
                                        ? 'border-red-500'
                                        : '',
                                    ]"
                                    @click="
                                      handleFieldChange(
                                        groupField.id,
                                        localFormData[groupField.id] ===
                                          groupField.options[0].value
                                          ? null
                                          : groupField.options[0].value
                                      )
                                    "
                                  >
                                    {{ groupField.options[0].label }}
                                  </button>
                                  <button
                                    type="button"
                                    :class="[
                                      localFormData[groupField.id] ===
                                      groupField.options[1].value
                                        ? 'bg-shield-blue text-white'
                                        : 'bg-white text-shield-gray-700 border-shield-gray-400',
                                      'px-3 py-1.5 text-sm font-medium border-2 focus:outline-none focus:ring-2 focus:ring-shield-blue focus:ring-offset-2 hover:bg-shield-gray-50 rounded-r-md',
                                      errors[groupField.id]
                                        ? 'border-red-500'
                                        : '',
                                    ]"
                                    @click="
                                      handleFieldChange(
                                        groupField.id,
                                        localFormData[groupField.id] ===
                                          groupField.options[1].value
                                          ? null
                                          : groupField.options[1].value
                                      )
                                    "
                                  >
                                    {{ groupField.options[1].label }}
                                  </button>
                                </div>
                              </template>
                              <template
                                v-else-if="groupField.type === 'select'"
                              >
                                <select
                                  :id="groupField.id"
                                  v-model="localFormData[groupField.id]"
                                  @change="
                                    handleFieldChange(
                                      groupField.id,
                                      $event.target.value
                                    )
                                  "
                                  :class="[
                                    'block w-full rounded-md border-2 shadow-sm focus:ring-shield-blue sm:text-sm',
                                    errors[groupField.id]
                                      ? 'border-red-500 focus:border-red-500'
                                      : 'border-shield-gray-400 focus:border-shield-blue',
                                  ]"
                                >
                                  <option value="">Selecteer een optie</option>
                                  <option
                                    v-for="option in groupField.options"
                                    :key="option.value"
                                    :value="option.value"
                                  >
                                    {{ option.label }}
                                  </option>
                                </select>
                              </template>
                              <template v-else>
                                <input
                                  :type="groupField.type"
                                  :id="groupField.id"
                                  v-model="localFormData[groupField.id]"
                                  @input="
                                    groupField.id === 'postal_code_letters'
                                      ? handlePostalCodeLetters(
                                          groupField.id,
                                          $event.target.value
                                        )
                                      : handleFieldChange(
                                          groupField.id,
                                          $event.target.value
                                        )
                                  "
                                  :class="[
                                    'block w-full rounded-md border-2 shadow-sm focus:ring-shield-blue sm:text-sm p-3 bg-white',
                                    errors[groupField.id]
                                      ? 'border-red-500 focus:border-red-500'
                                      : 'border-shield-gray-400 focus:border-shield-blue',
                                  ]"
                                  :placeholder="groupField.placeholder || ''"
                                  :maxlength="groupField.maxlength"
                                  :pattern="groupField.pattern"
                                  :inputmode="groupField.inputmode"
                                />
                              </template>
                              <p
                                v-if="errors[groupField.id]"
                                class="mt-1 text-sm text-red-500"
                              >
                                {{ errors[groupField.id] }}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div
                          v-else-if="field.type === 'overview'"
                          class="space-y-6"
                        >
                          <div class="text-center space-y-4">
                            <h2 class="font-logo mb-2 text-xl text-blue-900">
                              Letselschade Test verstuurd!
                            </h2>
                            <p class="text-lg mb-2">
                              Bedankt voor het inzenden van uw gegevens over uw
                              ongeval. Wij gaan zo spoedig mogelijk en zo
                              zorgvuldig mogelijk uw situatie nader bekijken.
                            </p>
                            <p class="text-lg">
                              Een letselschade specialist/advocaat neemt daarna
                              per mail of telefonisch contact op om u juridisch
                              advies te geven. Wij wijzen er nogmaals op dat een
                              gesprek vrijblijvend is en zonder kosten.
                            </p>
                          </div>

                          <div class="mt-8 space-y-6">
                            <div class="space-y-4">
                              <h3
                                class="text-xl font-cinzel text-shield-blue-dark text-center"
                              >
                                {{ getCategoryTitle(selectedCategory) }}
                              </h3>
                            </div>

                            <div
                              v-for="step in [1, 2, 3]"
                              :key="step"
                              class="space-y-4"
                            >
                              <h3
                                class="text-xl font-cinzel text-shield-blue-dark"
                              >
                                {{ getStepTitle(step) }}
                              </h3>
                              <div class="space-y-4">
                                <div
                                  v-for="field in getStepFields(step)"
                                  :key="field.id"
                                  v-show="shouldDisplayField(field)"
                                  class="space-y-2"
                                >
                                  <div class="flex flex-col">
                                    <span
                                      class="font-medium text-shield-blue-dark"
                                    >
                                      {{ field.label }}
                                    </span>
                                    <span class="text-shield-gray-700">
                                      <em>{{ getFieldDisplayValue(field) }}</em>
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </template>
                    </div>
                  </div>

                  <div class="flex justify-between pt-4">
                    <template v-if="currentStep === 5">
                      <button
                        @click="backToCategories"
                        :disabled="isLoading"
                        class="px-4 py-2 text-sm font-medium text-shield-blue hover:text-shield-blue-dark focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        Opnieuw beginnen
                      </button>
                      <button
                        @click="submitForm"
                        :disabled="isLoading"
                        class="px-4 py-2 text-sm font-medium text-white bg-shield-blue rounded-md hover:bg-shield-blue-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-shield-blue disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
                      >
                        <i
                          v-if="isLoading"
                          class="fas fa-spinner fa-spin mr-2"
                        ></i>
                        Naar andere pagina
                      </button>
                    </template>
                    <template v-else>
                      <button
                        @click="goBack"
                        :disabled="isLoading"
                        class="px-4 py-2 text-sm font-medium text-shield-blue hover:text-shield-blue-dark focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        Terug
                      </button>
                      <button
                        @click="nextStep"
                        :disabled="isLoading"
                        class="px-4 py-2 text-sm font-medium text-white bg-shield-blue rounded-md hover:bg-shield-blue-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-shield-blue disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
                      >
                        <i
                          v-if="isLoading"
                          class="fas fa-spinner fa-spin mr-2"
                        ></i>
                        Volgende
                      </button>
                    </template>
                  </div>
                </div>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import CategorySelector from "./CategorySelector.vue";
import StepIndicator from "./StepIndicator.vue";
import FormFields from "./FormFields.vue";

export default {
  name: "LetselschadeForm",
  components: {
    CategorySelector,
    StepIndicator,
    FormFields,
  },
  props: {
    formData: {
      type: Object,
      required: true,
    },
    questions: {
      type: Object,
      required: true,
    },
    lead_types: {
      type: Array,
      required: true,
    },
    mainData: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      selectedCategory: null,
      currentStep: 1,
      localFormData: { ...this.formData },
      direction: "slide",
      errors: {}, // Store validation errors
      isLoading: false, // Add loading state
    };
  },
  methods: {
    getCategoryTitle(categoryId) {
      const category = this.lead_types.find((type) => type.id === categoryId);
      return category ? category.name : "";
    },
    getStepTitle(step) {
      switch (step) {
        case 1:
          return "Aansprakelijkheid";
        case 2:
          return "Schade";
        case 3:
          return "Arbeidsongeschiktheid";
        case 4:
          return "Overig";
        case 5:
          return "Overzicht";
        default:
          return "";
      }
    },
    getStepFields(step) {
      // This will be customized based on the step and category
      const baseFields = {
        1: [
          {
            id: "erkenning",
            name: "erkenning",
            label: this.questions.erkenning,
            type: "switch",
            required: true,
            displayedIf: [
              {
                field: "lead_type",
                value: [1, 2],
              },
            ],
            options: [
              { value: true, label: "Ja" },
              { value: false, label: "Nee" },
            ],
          },
          {
            id: "toelichting_aansprakelijkheid",
            name: "toelichting_aansprakelijkheid",
            label: this.questions.toelichting_aansprakelijkheid,
            type: "textarea",
            required: true,
            options: null,
          },
          {
            id: "wanneer_ongeval",
            name: "wanneer_ongeval",
            label: this.questions.wanneer_ongeval,
            type: "radio",
            required: true,
            options: [
              {
                value: "Korter dan 1 maand geleden",
                label: "Korter dan 1 maand geleden",
              },
              {
                value: "Maximaal 1 jaar geleden",
                label: "Maximaal 1 jaar geleden",
              },
              {
                value: "Tussen 1 en 3 jaar geleden",
                label: "Tussen 1 en 3 jaar geleden",
              },
              {
                value: "Langer dan 3 jaar geleden",
                label: "Langer dan 3 jaar geleden",
              },
            ],
          },
          {
            id: "eerder_verhaal",
            name: "eerder_verhaal",
            label: this.questions.eerder_verhaal,
            type: "switch",
            required: true,
            options: [
              { value: true, label: "Ja" },
              { value: false, label: "Nee" },
            ],
          },
          {
            id: "manier_verhaal",
            name: "manier_verhaal",
            label: this.questions.manier_verhaal,
            type: "radio",
            required: true,
            displayedIf: [
              {
                field: "lead_type",
                value: [1, 2, 5, 7],
                operator: "AND",
              },
              {
                field: "eerder_verhaal",
                value: true,
              },
            ],
            options: [
              {
                value: "Via rechtsbijstandsverzekering",
                label: "Via rechtsbijstandsverzekering",
              },
              {
                value: "Via letselschadebureau",
                label: "Via letselschadebureau",
              },
              { value: "Via advocaat", label: "Via advocaat" },
              { value: "Zelfstandig", label: "Zelfstandig" },
              { value: "Op een andere manier", label: "Op een andere manier" },
            ],
          },
          {
            id: "juridische_hulp",
            name: "juridische_hulp",
            label: this.questions.juridische_hulp,
            type: "radio",
            required: true,
            displayedIf: [
              {
                field: "lead_type",
                value: [1, 2, 5, 7],
                operator: "AND",
              },
              {
                field: "eerder_verhaal",
                value: false,
                operator: "OR",
              },
              {
                field: "manier_verhaal",
                value: ["Zelfstandig", "Op een andere manier"],
              },
            ],
            options: [
              { value: "Ja", label: "Ja" },
              {
                value: "Ja, zo spoedig mogelijk",
                label: "Ja, zo spoedig mogelijk",
              },
              {
                value: "Ik wil eerst meer informatie",
                label: "Ik wil eerst meer informatie",
              },
            ],
          },
          {
            id: "reden_ontevreden",
            name: "reden_ontevreden",
            label: this.questions.reden_ontevreden,
            type: "textarea",
            required: true,
            displayedIf: [
              {
                field: "manier_verhaal",
                value: [
                  "Via rechtsbijstandsverzekering",
                  "Via letselschadebureau",
                  "Via advocaat",
                ],
              },
            ],
            extraHtmlTop:
              "<h3 class='text-shield-gray-dark text-lg font-bold'>Bent u ergens ontevreden over?</h3><p>Ontevredenheid over een schadebehandelaar is geen onbekend verschijnsel. U bezoekt deze website waarschijnlijk omdat u met vragen zit. Hieronder kunt u deze aangeven waar u mee zit. Een second opinion of overname van uw zaak door een van onze betrouwbare experts behoort ook tot de mogelijkheden.</p>",
            options: [],
          },
          {
            id: "interesse_overname_secondopinion",
            name: "interesse_overname_secondopinion",
            label: this.questions.interesse_overname_secondopinion,
            type: "radio",
            required: true,
            displayedIf: [
              {
                field: "manier_verhaal",
                value: [
                  "Via rechtsbijstandsverzekering",
                  "Via letselschadebureau",
                  "Via advocaat",
                ],
              },
            ],
            extraHtmlTop:
              "<h3 class='text-shield-gray-dark text-lg font-bold'>Kan een ander mij wel helpen?</h3><p>Een overname van uw zaak door onze experts is kosteloos. Er zal vooraf een gesprek plaatsvinden over de zaak en mogelijke overname. Met een schriftelijke machtiging kan een zaak door ons worden overgenomen. Bij een overname hoeft u zich geen zorgen te maken over kosten of uw huidige behandelaar; uw recht tot overname is wettelijk bepaald.</p>",
            options: [
              { value: "Een overname", label: "Een overname" },
              { value: "Een second opinion", label: "Een second opinion" },
              { value: "Meer informatie", label: "Meer informatie" },
            ],
          },
          {
            id: "durf_aansprakelijk",
            name: "durf_aansprakelijk",
            label: this.questions.durf_aansprakelijk,
            type: "switch",
            required: true,
            displayedIf: [
              {
                field: "lead_type",
                value: [2],
              },
            ],
            options: [
              { value: true, label: "Ja" },
              { value: false, label: "Nee" },
            ],
          },
          {
            id: "data_tegenpartij",
            name: "data_tegenpartij",
            label: this.questions.data_tegenpartij,
            type: "switch",
            required: true,
            displayedIf: [
              {
                field: "lead_type",
                value: [5, 7],
                operator: "OR",
              },
              {
                field: "lead_type",
                value: [1],
                operator: "AND",
              },
              {
                field: "erkenning",
                value: false,
              },
            ],
            options: [
              { value: true, label: "Ja" },
              { value: false, label: "Nee" },
            ],
          },
          {
            id: "politie",
            name: "politie",
            label: this.questions.politie,
            type: "switch",
            required: true,
            displayedIf: [
              {
                field: "lead_type",
                value: [5, 7],
                operator: "OR",
              },
              {
                field: "lead_type",
                value: [1],
                operator: "AND",
              },
              {
                field: "erkenning",
                value: false,
              },
            ],
            options: [
              { value: true, label: "Ja" },
              { value: false, label: "Nee" },
            ],
          },
          {
            id: "politie_inspectie",
            name: "politie_inspectie",
            label: this.questions.politie_inspectie,
            type: "switch",
            required: true,
            displayedIf: [
              {
                field: "lead_type",
                value: [2],
                operator: "AND",
              },
              {
                field: "erkenning",
                value: false,
              },
            ],
            options: [
              { value: true, label: "Ja" },
              { value: false, label: "Nee" },
            ],
          },
        ],
        2: [
          {
            id: "soort_letsel",
            name: "soort_letsel",
            label: this.questions.soort_letsel,
            type: "radio",
            required: true,
            options: [
              {
                value: "Licht (herstel korter dan 3 maanden)",
                label: "Licht (herstel korter dan 3 maanden)",
              },
              {
                value: "Middel",
                label: "Middel",
              },
              {
                value: "Zwaar (herstel langer dan 6 maanden of blijvend)",
                label: "Zwaar (herstel langer dan 6 maanden of blijvend)",
              },
            ],
          },
          {
            id: "omschrijving_letsel",
            name: "omschrijving_letsel",
            label: this.questions.omschrijving_letsel,
            type: "textarea",
            required: true,
          },
          {
            id: "behandeling",
            name: "behandeling",
            label: this.questions.behandeling,
            type: "radio",
            required: true,
            options: [
              {
                value: "Niet onder behandeling geweest",
                label: "Niet onder behandeling geweest",
              },
              {
                value: "1 keer of minimaal behandeld",
                label: "1 keer of minimaal behandeld",
              },
              {
                value: "Nog onder behandeling",
                label: "Nog onder behandeling",
              },
            ],
          },
          {
            id: "opgelopen_schade",
            name: "opgelopen_schade",
            label: this.questions.opgelopen_schade,
            type: "radio",
            required: true,
            options: [
              {
                value: "Minder dan € 1.000,-",
                label: "Minder dan € 1.000,-",
              },
              {
                value: "€ 1.000,- tot € 10.000,-",
                label: "€ 1.000,- tot € 10.000,-",
              },
              {
                value: "Meer dan € 10.000,-",
                label: "Meer dan € 10.000,-",
              },
              {
                value: "Geen idee",
                label: "Geen idee",
              },
            ],
          },
        ],
        3: [
          {
            id: "arbeidsongeschiktheid",
            name: "arbeidsongeschiktheid",
            label: this.questions.arbeidsongeschiktheid,
            type: "radio",
            required: true,
            options: [
              { value: "Volledig", label: "Volledig" },
              {
                value: "Gedeeltelijk / herstellend",
                label: "Gedeeltelijk / herstellend",
              },
              { value: "Geen", label: "Geen" },
            ],
          },
          {
            id: "duur_ao",
            name: "duur_ao",
            label: this.questions.duur_ao,
            type: "switch",
            required: true,
            displayedIf: [
              {
                field: "arbeidsongeschiktheid",
                value: ["Volledig", "Gedeeltelijk / herstellend"],
              },
            ],
            options: [
              { value: true, label: "Ja" },
              { value: false, label: "Nee" },
            ],
          },
          {
            id: "huishoudelijk",
            name: "huishoudelijk",
            label: this.questions.huishoudelijk,
            type: "radio",
            required: true,
            options: [
              { value: "Ja blijvend", label: "Ja blijvend" },
              {
                value: "Ja langer dan 3 maanden",
                label: "Ja langer dan 3 maanden",
              },
              {
                value: "Ja korter dan 3 maanden",
                label: "Ja korter dan 3 maanden",
              },
              { value: "Nee", label: "Nee" },
            ],
          },
          {
            id: "zelfstandig",
            name: "zelfstandig",
            label: this.questions.zelfstandig,
            type: "switch",
            required: true,
            options: [
              { value: true, label: "Ja" },
              { value: false, label: "Nee" },
            ],
          },
          {
            id: "leeftijdsgroep",
            name: "leeftijdsgroep",
            label: this.questions.leeftijdsgroep,
            type: "radio",
            required: true,
            options: [
              { value: "Jonger dan 18", label: "Jonger dan 18" },
              { value: "Tussen 18 - 25", label: "Tussen 18 - 25" },
              { value: "Tussen 26 - 50", label: "Tussen 26 - 50" },
              { value: "Tussen 51 - 67", label: "Tussen 51 - 67" },
              { value: "Ouder dan 67", label: "Ouder dan 67" },
            ],
          },
        ],
        4: [
          {
            id: "gender",
            name: "gender",
            type: "switch",
            required: true,
            options: [
              { value: "m", label: "Dhr." },
              { value: "f", label: "Mevr." },
            ],
          },
          {
            id: "name",
            name: "name",
            label: "Naam",
            type: "textGroup",
            required: true,
            groupFields: [
              {
                id: "firstname",
                name: "firstname",
                type: "text",
                required: true,
                placeholder: "Voornaam",
              },
              {
                id: "lastname",
                name: "lastname",
                type: "text",
                required: true,
                placeholder: "Achternaam",
              },
            ],
          },
          {
            id: "address",
            name: "address",
            label: "Postcode/Huisnummer",
            type: "textGroup",
            required: true,
            groupFields: [
              {
                id: "postal_code_id",
                name: "postal_code_id",
                placeholder: "1234",
                type: "text",
                required: true,
                lengthPercentage: 50,
                maxlength: "4",
                pattern: "[0-9]*",
                inputmode: "numeric",
              },
              {
                id: "postal_code_letters",
                name: "postal_code_letters",
                placeholder: "AB",
                type: "text",
                required: true,
                lengthPercentage: 25,
                maxlength: "2",
                pattern: "[A-Za-z]*",
              },
              {
                id: "house_number",
                name: "house_number",
                placeholder: "12-a",
                type: "text",
                required: true,
                lengthPercentage: 25,
              },
            ],
          },
          {
            id: "email",
            name: "email",
            label: "Email",
            type: "email",
            required: true,
            placeholder: "voorbeeld@email.nl",
          },
          {
            id: "phone",
            name: "phone",
            label: "Telefoon",
            type: "tel",
            required: true,
            placeholder: "06 12345678",
          },
          {
            id: "best_time_to_call",
            name: "best_time_to_call",
            label: "Wanneer bent u het beste te bereiken?",
            type: "textGroup",
            required: true,
            groupFields: [
              {
                id: "best_time_hour",
                name: "best_time_hour",
                label: "Uur",
                type: "select",
                required: true,
                lengthPercentage: 30,
                options: Array.from({ length: 9 }, (_, i) => ({
                  value: String(i + 9).padStart(2, "0"),
                  label: String(i + 9).padStart(2, "0"),
                })),
              },
              {
                id: "best_time_minute",
                name: "best_time_minute",
                label: "Minuten",
                type: "select",
                required: true,
                lengthPercentage: 30,
                options: [
                  { value: "00", label: "00" },
                  { value: "15", label: "15" },
                  { value: "30", label: "30" },
                  { value: "45", label: "45" },
                ],
              },
              {
                id: "best_time_day",
                name: "best_time_day",
                label: "Dag",
                type: "select",
                required: true,
                lengthPercentage: 40,
                options: [
                  { value: "maandag", label: "Maandag" },
                  { value: "dinsdag", label: "Dinsdag" },
                  { value: "woensdag", label: "Woensdag" },
                  { value: "donderdag", label: "Donderdag" },
                  { value: "vrijdag", label: "Vrijdag" },
                ],
              },
            ],
          },
          {
            id: "details",
            name: "details",
            label: "Eventuele vragen en/ of opmerkingen:",
            type: "textarea",
            required: true,
            placeholder: "Uw vragen of opmerkingen...",
          },
        ],
        5: [
          {
            id: "overview",
            name: "overview",
            type: "overview",
          },
        ],
      };

      return baseFields[step] || [];
    },
    shouldDisplayField(field) {
      if (!field.displayedIf) return true;

      const conditions = field.displayedIf;
      let result = this.evaluateCondition(conditions[0]);

      if (result && conditions[0].operator === "OR") {
        return result;
      }

      // Process each condition with its operator
      for (let i = 0; i < conditions.length - 1; i++) {
        const currentCondition = conditions[i];
        const nextCondition = conditions[i + 1];
        const nextResult = this.evaluateCondition(nextCondition);

        if (currentCondition.operator === "AND") {
          result = result && nextResult;
        } else if (currentCondition.operator === "OR") {
          result = result || nextResult;
        } else {
          // If no operator specified, default to OR for arrays, AND for single values
          result = result && nextResult;
        }
      }

      return result;
    },
    evaluateCondition(condition) {
      const value = this.localFormData[condition.field];

      // If condition.value is an array, check if the value matches any in the array (OR)
      if (Array.isArray(condition.value)) {
        return condition.value.includes(value);
      }

      // Otherwise do a direct comparison
      return value === condition.value;
    },
    handleFieldChange(fieldId, value) {
      this.localFormData[fieldId] = value;
      // Clear error for this field if it exists
      if (this.errors[fieldId]) {
        delete this.errors[fieldId];
      }
      this.$emit("update:formData", this.localFormData);
    },
    goBack() {
      if (this.currentStep > 1) {
        this.direction = "slide-reverse";
        this.currentStep--;
      } else {
        this.direction = "slide";
        this.selectedCategory = null;
        this.currentStep = 1;
      }
    },
    backToCategories() {
      this.selectedCategory = null;
      this.currentStep = 1;
      this.localFormData = { ...this.formData };
    },
    handleCategorySelection(categoryId) {
      this.direction = "slide";
      this.selectedCategory = categoryId;
      this.currentStep = 1;
      this.localFormData = {
        ...this.formData,
        lead_type: categoryId,
      };
      // Update mainData with the selected lead_type_id
      this.$emit("update:mainData", {
        ...this.mainData,
        request: {
          ...this.mainData.request,
          register_webreaction: {
            ...this.mainData.request.register_webreaction,
            lead_type_id: categoryId,
          },
        },
      });
    },
    validateStep(step) {
      const fields = this.getStepFields(step);
      const errors = {};

      fields.forEach((field) => {
        if (this.shouldDisplayField(field) && field.required) {
          // Handle group fields
          if (field.type === "textGroup" && field.groupFields) {
            field.groupFields.forEach((groupField) => {
              const value = this.localFormData[groupField.id];
              if (this.isEmptyValue(value)) {
                errors[groupField.id] = "Dit veld is verplicht";
              } else if (
                groupField.type === "email" &&
                !this.isValidEmail(value)
              ) {
                errors[groupField.id] = "Vul een geldig e-mailadres in";
              } else if (
                groupField.type === "tel" &&
                !this.isValidDutchPhone(value)
              ) {
                errors[groupField.id] =
                  "Vul een geldig Nederlands telefoonnummer in";
              }
            });
          }
          // Handle regular fields
          else {
            const value = this.localFormData[field.id];
            if (this.isEmptyValue(value)) {
              errors[field.id] = "Dit veld is verplicht";
            } else if (field.type === "email" && !this.isValidEmail(value)) {
              errors[field.id] = "Vul een geldig e-mailadres in";
            } else if (field.type === "tel" && !this.isValidDutchPhone(value)) {
              errors[field.id] = "Vul een geldig Nederlands telefoonnummer in";
            }
          }
        }
      });

      this.errors = errors;

      // If there are errors, scroll to the first invalid field
      if (Object.keys(errors).length > 0) {
        this.$nextTick(() => {
          const firstErrorId = Object.keys(errors)[0];
          const element = document.getElementById(firstErrorId);
          if (element) {
            element.scrollIntoView({
              behavior: "smooth",
              block: "center",
            });
          }
        });
      }

      return Object.keys(errors).length === 0;
    },
    isEmptyValue(value) {
      // Handle null/undefined
      if (value === null || value === undefined) return true;

      // Handle strings
      if (typeof value === "string") {
        return value.trim() === "";
      }

      // Handle arrays
      if (Array.isArray(value)) {
        return value.length === 0;
      }

      // Handle boolean values (for switch/radio button group)
      if (typeof value === "boolean") {
        return false; // boolean values are never empty
      }

      // Handle other types
      return false;
    },
    async nextStep() {
      if (this.currentStep < 5) {
        if (this.validateStep(this.currentStep)) {
          // If moving to step 5, wait for API response
          if (this.currentStep === 4) {
            try {
              await this.prepareFormSubmission();
              this.direction = "slide";
              this.currentStep++;
            } catch (error) {
              console.error("Error submitting form:", error);
              // Stay on step 4 if there's an error
              return;
            }
          } else {
            this.direction = "slide";
            this.currentStep++;
          }
        }
      }
    },
    async prepareFormSubmission() {
      // Collect profile data from step 4
      const profileData = {
        gender: this.localFormData.gender,
        firstname: this.localFormData.firstname,
        lastname: this.localFormData.lastname,
        email: this.localFormData.email,
        telephone: this.localFormData.phone,
        house_number: this.localFormData.house_number,
        postal_code_id: this.localFormData.postal_code_id,
        postal_code_letters: this.localFormData.postal_code_letters,
      };

      // Helper function to convert boolean to Ja/Nee
      const convertBooleanToJaNee = (value) => {
        if (value === true || value === 1) return "Ja";
        if (value === false || value === 0) return "Nee";
        return value;
      };

      // Collect all questions and answers
      const json_details = {};
      for (let step = 1; step <= 3; step++) {
        const fields = this.getStepFields(step);
        fields.forEach((field) => {
          if (this.shouldDisplayField(field)) {
            if (field.type === "textGroup" && field.groupFields) {
              field.groupFields.forEach((groupField) => {
                json_details[this.questions[groupField.id]] =
                  convertBooleanToJaNee(this.localFormData[groupField.id]);
              });
            } else {
              json_details[this.questions[field.id]] = convertBooleanToJaNee(
                this.localFormData[field.id]
              );
            }
          }
        });
      }

      // Add best_time_to_call and details to json_details
      json_details[
        "Wanneer bent u het beste te bereiken?"
      ] = `${this.localFormData.best_time_hour}:${this.localFormData.best_time_minute} ${this.localFormData.best_time_day}`;
      json_details["Eventuele vragen en/ of opmerkingen:"] =
        this.localFormData.details;

      // Update mainData with the collected data
      const updatedMainData = {
        ...this.mainData,
        request: {
          ...this.mainData.request,
          register_webreaction: {
            ...this.mainData.request.register_webreaction,
            ...profileData,
            json_details: json_details,
          },
        },
      };

      // Log the data for debugging
      console.log("Updated mainData:", updatedMainData);

      // Send data to API and return the promise
      return this.sendDataToApi(updatedMainData);
    },
    async sendDataToApi(data) {
      this.isLoading = true; // Start loading
      try {
        const response = await fetch(
          "https://extranet.letselschadeclaimen.nl/api",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify(data),
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        console.log("API Response:", result);

        // Emit success event to parent component
        this.$emit("form-submitted", { success: true, data: result });
      } catch (error) {
        console.error("Error sending data to API:", error);
        // Emit error event to parent component
        this.$emit("form-submitted", { success: false, error: error.message });
      } finally {
        this.isLoading = false; // End loading regardless of success/failure
      }
    },
    getFieldDisplayValue(field) {
      if (!field) return "";

      const value = this.localFormData[field.id];
      if (value === null || value === undefined) return "";

      // Handle switch/radio button options
      if (field.options) {
        const option = field.options.find((opt) => opt.value === value);
        return option ? option.label : value;
      }

      // Handle textGroup fields
      if (field.type === "textGroup" && field.groupFields) {
        return field.groupFields
          .map((groupField) => this.localFormData[groupField.id])
          .filter(Boolean)
          .join(" ");
      }

      return value;
    },
    handlePostalCodeLetters(fieldId, value) {
      // Convert to uppercase and limit to letters
      const uppercaseValue = value.toUpperCase().replace(/[^A-Z]/g, "");
      this.handleFieldChange(fieldId, uppercaseValue);
    },
    isValidEmail(email) {
      // Basic email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    },
    isValidDutchPhone(phone) {
      if (!phone) return false;

      // Remove all spaces, hyphens, and parentheses
      const cleanPhone = phone.replace(/[\s\-\(\)]/g, "");

      // Basic validation: at least 10 digits
      return cleanPhone.length >= 10 && /^\d+$/.test(cleanPhone);
    },
    handleStepClick(step) {
      // Only allow going back to previous steps
      if (step < this.currentStep) {
        // Validate all steps up to the clicked step
        let canGoToStep = true;
        for (let i = 1; i <= step; i++) {
          if (!this.validateStep(i)) {
            canGoToStep = false;
            break;
          }
        }

        if (canGoToStep) {
          this.direction = "slide-reverse";
          this.currentStep = step;
        }
      }
    },
  },
  watch: {
    localFormData: {
      deep: true,
      handler(newValue) {
        this.$emit("update:formData", newValue);
      },
    },
  },
  computed: {
    stepTitles() {
      return {
        1: this.getStepTitle(1),
        2: this.getStepTitle(2),
        3: this.getStepTitle(3),
        4: this.getStepTitle(4),
        5: this.getStepTitle(5),
      };
    },
  },
};
</script>

<style>
.slide-enter-active,
.slide-leave-active,
.slide-reverse-enter-active,
.slide-reverse-leave-active {
  transition: all 0.3s ease-out;
}

.slide-enter-from {
  opacity: 0;
  transform: translateX(100px);
}

.slide-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}

.slide-reverse-enter-from {
  opacity: 0;
  transform: translateX(-100px);
}

.slide-reverse-leave-to {
  opacity: 0;
  transform: translateX(100px);
}

.slide-enter-to,
.slide-leave-from,
.slide-reverse-enter-to,
.slide-reverse-leave-from {
  opacity: 1;
  transform: translateX(0);
}

/* Add red focus ring for invalid fields */
.border-red-500:focus {
  box-shadow: 0 0 0 1px #ef4444;
}
</style>
