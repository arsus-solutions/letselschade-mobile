<template>
  <div class="min-h-screen bg-shield-blue-light/10 pb-24 relative">
    <header class="bg-shield-blue p-3 sm:p-4 shadow-lg">
      <div
        class="container mx-auto flex items-center justify-center gap-3 sm:gap-4 md:gap-6"
      >
        <img
          src="../assets/images/logo.png"
          alt="Letselschade Logo"
          class="h-12 sm:h-14 md:h-16"
        />
        <h1 class="font-cinzel text-xl sm:text-2xl md:text-3xl tracking-normal">
          <span class="text-white">Letselschade</span>
          <span class="text-shield-blue-light">test</span>
        </h1>
      </div>
    </header>

    <nav class="bg-white border-b border-shield-gray-light shadow-sm">
      <div class="container mx-auto flex justify-center">
        <div class="flex space-x-8">
          <button
            @click="currentPage = 'test'"
            class="px-4 py-3 font-medium transition-colors border-b-2"
            :class="
              currentPage === 'test'
                ? 'text-shield-blue border-shield-blue'
                : 'text-shield-gray border-transparent'
            "
          >
            Test
          </button>
          <button
            @click="currentPage = 'advies'"
            class="px-4 py-3 font-medium transition-colors border-b-2"
            :class="
              currentPage === 'advies'
                ? 'text-shield-blue border-shield-blue'
                : 'text-shield-gray border-transparent'
            "
          >
            Advies
          </button>
          <button
            @click="currentPage = 'info'"
            class="px-4 py-3 font-medium transition-colors border-b-2"
            :class="
              currentPage === 'info'
                ? 'text-shield-blue border-shield-blue'
                : 'text-shield-gray border-transparent'
            "
          >
            Info
          </button>
        </div>
      </div>
    </nav>

    <main class="container mx-auto px-4 py-6 sm:py-8">
      <transition name="fade" mode="out-in">
        <div :key="currentPage">
          <div v-show="currentPage === 'test'">
            <LetselschadeForm
              :formData="formData"
              :questions="questions"
              :lead_types="lead_types"
              :mainData="mainData"
              @update:mainData="updateMainData"
            />
          </div>

          <div v-show="currentPage === 'advies'" class="max-w-2xl mx-auto">
            <h2
              class="text-xl sm:text-2xl font-cinzel text-shield-blue-dark mb-4 text-center"
            >
              Persoonlijk Advies
            </h2>
            <div class="bg-white rounded-lg shadow-md p-6">
              <p class="text-shield-gray-dark mb-4">
                Wilt u persoonlijk advies over uw letselschade? Neem contact met
                ons op.
              </p>
            </div>
          </div>

          <div v-show="currentPage === 'info'" class="max-w-2xl mx-auto">
            <h2
              class="text-xl sm:text-2xl font-cinzel text-shield-blue-dark mb-4 text-center"
            >
              Informatie
            </h2>
            <div class="bg-white rounded-lg shadow-md p-6">
              <p class="text-shield-gray-dark mb-4">
                Hier vindt u belangrijke informatie over letselschade en onze
                diensten.
              </p>
            </div>
          </div>
        </div>
      </transition>
    </main>

    <footer
      class="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-shield-gray-light"
    >
      <div
        class="container mx-auto px-4 py-3 flex flex-col sm:flex-row justify-between items-center text-xs text-shield-gray-dark"
      >
        <p class="text-center sm:text-left mb-2 sm:mb-0">
          Copyright © 2009-2025 Letselschadeclaimen.nl is een onderdeel van
          Letselschadebegeleiding B.V, te Breda KvK. Nummer.60256974
        </p>
        <p class="font-medium">
          <span class="text-shield-blue">Tel:</span> 088 - 076 76 76
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
import LetselschadeForm from "./components/LetselschadeTest/LetselschadeForm.vue";

export default {
  name: "App",
  components: {
    LetselschadeForm,
  },
  data() {
    return {
      currentPage: "test",
      lead_types: [
        {
          id: 1,
          name: "Verkeersongeval",
          icon: "faCar",
          color: "bg-blue-500",
        },
        {
          id: 2,
          name: "Bedrijfsongeval",
          icon: "faIndustry",
          color: "bg-green-500",
        },
        {
          id: 5,
          name: "Ongeval door dieren",
          icon: "faPaw",
          color: "bg-purple-500",
        },
        {
          id: 7,
          name: "Ongeval door gebrek wegdek",
          icon: "faRoad",
          color: "bg-orange-500",
        },
      ],
      formData: {
        lead_type: null,
        erkenning: null,
        toelichting_aansprakelijkheid: "",
        wanneer_ongeval: null,
        eerder_verhaal: null,
        durf_aansprakelijk: null,
        manier_verhaal: null,
        juridische_hulp: null,
        data_tegenpartij: null,
        politie_inspectie: null,
        reden_ontevreden: "",
        interesse_overname_secondopinion: null,
        soort_letsel: null,
        omschrijving_letsel: "",
        behandeling: null,
        opgelopen_schade: null,
        arbeidsongeschiktheid: null,
        duur_ao: null,
        huishoudelijk: null,
        zelfstandig: null,
        leeftijdsgroep: null,
        best_time_to_call: null,
        details: null,
      },
      questions: {
        lead_type: "Wat is de aard van uw ongeval?",
        erkenning: "Is er aansprakelijkheid erkend?",
        toelichting_aansprakelijkheid: "Wat is er precies gebeurd?",
        wanneer_ongeval: "Wanneer vond het ongeval plaats?",
        eerder_verhaal: "Heeft u geprobeerd de schade te claimen?",
        durf_aansprakelijk:
          "Vindt u het goed als uw werkgever aansprakelijk wordt gesteld?",
        manier_verhaal: "Hoe heeft u de schade geprobeerd te claimen?",
        juridische_hulp: "Heeft u interesse in kosteloze hulp?",
        data_tegenpartij: "Zijn de gegevens van de tegenpartij bekend?",
        politie: "Is de politie ter plaatse geweest?",
        politie_inspectie:
          "Is de politie of arbeidsinspectie ter plaatse geweest?",
        reden_ontevreden: "Waar bent u ontevreden over?",
        interesse_overname_secondopinion: "Waar heeft u interesse in?",
        soort_letsel: "Hoe ernstig is het letsel?",
        omschrijving_letsel: "Omschrijf uw opgelopen letsel",
        behandeling: "Bent u al onder medische behandeling (geweest)?",
        opgelopen_schade:
          "Kunt u een indicatie geven van de tot nu toe opgelopen schade?",
        arbeidsongeschiktheid: "Is er sprake van arbeidsongeschiktheid?",
        duur_ao:
          "Is de arbeidsongeschiktheid blijvend of langer dan 6 maanden?",
        huishoudelijk:
          "Is er behoefte aan huishoudelijke hulp? (ingehuurd of door familie/vrienden)",
        zelfstandig: "Bent u zelfstandig ondernemer?",
        leeftijdsgroep: "In welke leeftijdsgroep valt u?",
      },
      mainData: {
        request: {
          register_webreaction: {
            webmodule_id: 1,
            lead_webreaction_type_id: 1,
            lead_type_id: 0,
            reference: null,
            domain_name: "m.letselschadeclaimen.nl",
            gender: "m",
            firstname: "",
            lastname: "",
            email: "",
            telephone: "",
            house_number: "",
            postal_code_id: "",
            postal_code_letters: "",
            json_details: {},
          },
        },
        user: {
          api_username: "api@ongevalclaimen.nl",
          api_password: "c8MaUXZ6",
        },
      },
    };
  },
  methods: {
    handleFormSubmission(formData) {
      console.log("Form submitted with data:", formData);
      // Handle the form submission here
      // You might want to send the data to an API or process it further
    },
    updateMainData(newData) {
      this.mainData = newData;
    },
  },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
