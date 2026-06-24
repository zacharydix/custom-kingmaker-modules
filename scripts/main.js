// scripts/main.js

import { KINGDOM_DC_BY_LEVEL } from "./data/kingdom-data.js";

import { FOCI, FOCUS_IDS } from "./data/focus-data.js";

import {
  SETTLEMENT_DEVELOPMENT_REQUIREMENTS,
  SETTLEMENT_TYPES
} from "./data/settlement-data.js";

Hooks.once("init", () => {
  console.log("Kingmaker Toolkit | Initializing");
});

Hooks.once("ready", () => {
  console.log("Kingmaker Toolkit | Ready");

  console.log(
    "Kingmaker Toolkit | Artisan's Guild:",
    FOCI[FOCUS_IDS.ARTISANS_GUILD]
  );


  game.kingmakerToolkit = {
    version: game.modules.get("kingmaker-toolkit")?.version ?? "unknown",
    apps: {},
    services: {},
    data: {},
    utils: {}
  };
});