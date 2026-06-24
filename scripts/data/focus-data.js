// scripts/data/focus-data.js

export const FOCUS_IDS = {
  ARCANUM_GUILD: "ARCANUM_GUILD",
  ARTISANS_GUILD: "ARTISANS_GUILD",
  CARAVANSARAI: "CARAVANSARAI",
  CASINO: "CASINO",
  CIRCUS: "CIRCUS",
  DRUIDS_GROVE: "DRUIDS_GROVE",
  EXORCISTS_EXTRAORDINAIRE: "EXORCISTS_EXTRAORDINAIRE",
  FARMING_INITIATIVE: "FARMING_INITIATIVE",
  FAMOUS_TAVERN: "FAMOUS_TAVERN",
  HEALING_HOUSES: "HEALING_HOUSES",
  HUNTERS_LODGE: "HUNTERS_LODGE",
  MAGICAL_CRAFTER: "MAGICAL_CRAFTER",
  MUSEUM_OF_THE_ANCIENT_ARCANE: "MUSEUM_OF_THE_ANCIENT_ARCANE",
  PRINTING_PRESS: "PRINTING_PRESS",
  TEMPLE_DISTRICT: "TEMPLE_DISTRICT",
  THIEVES_GUILD: "THIEVES_GUILD",
  TRAINING_GROUND: "TRAINING_GROUND",
  TRAINING_HOSPITAL: "TRAINING_HOSPITAL"
};

export const FOCI = {
  [FOCUS_IDS.ARCANUM_GUILD]: {
    id: FOCUS_IDS.ARCANUM_GUILD,
    name: "Arcanum Guild",
    settlementType: "Town",
    earnIncomeSkills: ["arcana", "occultism"]
  },

  [FOCUS_IDS.ARTISANS_GUILD]: {
    id: FOCUS_IDS.ARTISANS_GUILD,
    name: "Artisan's Guild",
    settlementType: "Town",
    earnIncomeSkills: ["crafting"]
  },

  [FOCUS_IDS.CARAVANSARAI]: {
    id: FOCUS_IDS.CARAVANSARAI,
    name: "Caravansarai",
    settlementType: "Village",
    earnIncomeSkills: ["deception", "diplomacy"]
  },

  [FOCUS_IDS.CASINO]: {
    id: FOCUS_IDS.CASINO,
    name: "Casino",
    settlementType: "City",
    earnIncomeSkills: ["deception", "thievery"]
  },

  [FOCUS_IDS.CIRCUS]: {
    id: FOCUS_IDS.CIRCUS,
    name: "Circus",
    settlementType: "Town",
    earnIncomeSkills: ["acrobatics", "performance"]
  },

  [FOCUS_IDS.DRUIDS_GROVE]: {
    id: FOCUS_IDS.DRUIDS_GROVE,
    name: "Druids' Grove",
    settlementType: "Village",
    earnIncomeSkills: ["survival", "nature"]
  },

  [FOCUS_IDS.EXORCISTS_EXTRAORDINAIRE]: {
    id: FOCUS_IDS.EXORCISTS_EXTRAORDINAIRE,
    name: "Exorcists Extraordinaire",
    settlementType: "Town",
    earnIncomeSkills: ["intimidation", "occultism"]
  },

  [FOCUS_IDS.FARMING_INITIATIVE]: {
    id: FOCUS_IDS.FARMING_INITIATIVE,
    name: "Farming Initiative",
    settlementType: "Village",
    earnIncomeSkills: ["athletics", "nature"]
  },

  [FOCUS_IDS.FAMOUS_TAVERN]: {
    id: FOCUS_IDS.FAMOUS_TAVERN,
    name: "Famous Tavern",
    settlementType: "Village",
    earnIncomeSkills: ["performance", "lore"]
  },

  [FOCUS_IDS.HEALING_HOUSES]: {
    id: FOCUS_IDS.HEALING_HOUSES,
    name: "Healing Houses",
    settlementType: "Town",
    earnIncomeSkills: ["medicine", "religion"]
  },

  [FOCUS_IDS.HUNTERS_LODGE]: {
    id: FOCUS_IDS.HUNTERS_LODGE,
    name: "Hunter's Lodge",
    settlementType: "Village",
    earnIncomeSkills: ["stealth", "survival"]
  },

  [FOCUS_IDS.MAGICAL_CRAFTER]: {
    id: FOCUS_IDS.MAGICAL_CRAFTER,
    name: "Magical Crafter",
    settlementType: "Town",
    earnIncomeSkills: []
  },

  [FOCUS_IDS.MUSEUM_OF_THE_ANCIENT_ARCANE]: {
    id: FOCUS_IDS.MUSEUM_OF_THE_ANCIENT_ARCANE,
    name: "Museum of the Ancient Arcane",
    settlementType: "City",
    earnIncomeSkills: ["acrobatics", "arcana"]
  },

  [FOCUS_IDS.PRINTING_PRESS]: {
    id: FOCUS_IDS.PRINTING_PRESS,
    name: "Printing Press",
    settlementType: "Town",
    earnIncomeSkills: ["diplomacy", "society"]
  },

  [FOCUS_IDS.TEMPLE_DISTRICT]: {
    id: FOCUS_IDS.TEMPLE_DISTRICT,
    name: "Temple District",
    settlementType: "Town",
    earnIncomeSkills: ["religion", "society"]
  },

  [FOCUS_IDS.THIEVES_GUILD]: {
    id: FOCUS_IDS.THIEVES_GUILD,
    name: "Thieves' Guild",
    settlementType: "Town",
    earnIncomeSkills: ["stealth", "thievery"]
  },

  [FOCUS_IDS.TRAINING_GROUND]: {
    id: FOCUS_IDS.TRAINING_GROUND,
    name: "Training Ground",
    settlementType: "Town",
    earnIncomeSkills: ["athletics", "intimidation"]
  },

  [FOCUS_IDS.TRAINING_HOSPITAL]: {
    id: FOCUS_IDS.TRAINING_HOSPITAL,
    name: "Training Hospital",
    settlementType: "Town",
    earnIncomeSkills: ["crafting", "medicine"]
  }
};