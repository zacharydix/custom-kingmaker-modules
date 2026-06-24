// scripts/main.js

import { KINGDOM_DC_BY_LEVEL } from "./data/kingdom-data.js";
import { FOCI, FOCUS_IDS } from "./data/focus-data.js";
import { FocusService } from "./services/focus-service.js";
import { SettlementService } from "./services/settlement-service.js";
import { KingdomService } from "./services/kingdom-service.js";

import {
  SETTLEMENT_DEVELOPMENT_REQUIREMENTS,
  SETTLEMENT_TYPES
} from "./data/settlement-data.js";

Hooks.once("init", () => {
  console.log("Kingmaker Toolkit | Initializing");
});

Hooks.once("ready", () => {
  console.log("Kingmaker Toolkit | Ready");


  game.kingmakerToolkit = {
    version: game.modules.get("kingmaker-toolkit")?.version ?? "unknown",
    apps: {},
    services: {},
    data: {},
    utils: {}
  };
});