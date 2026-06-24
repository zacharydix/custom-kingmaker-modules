// scripts/data/focus-data.js

export const FOCUS_IDS = {
  MAGICAL_CRAFTER: "MAGICAL_CRAFTER",
  FARMING_INITIATIVE: "FARMING_INITIATIVE"
};

export const FOCI = {
  [FOCUS_IDS.MAGICAL_CRAFTER]: {
    id: FOCUS_IDS.MAGICAL_CRAFTER,
    name: "Magical Crafter",
    settlementType: "Town",
    earnIncomeSkills: []
  },

  [FOCUS_IDS.FARMING_INITIATIVE]: {
    id: FOCUS_IDS.FARMING_INITIATIVE,
    name: "Farming Initiative",
    settlementType: "Village",
    earnIncomeSkills: ["athletics", "nature"]
  }
};