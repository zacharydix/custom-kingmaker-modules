// scripts/main.js

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

  console.log("Kingmaker Toolkit | API registered:", game.kingmakerToolkit);
});

import { KINGDOM_DC_BY_LEVEL } from "./data/kingdom-data.js";

Hooks.once("ready", () => {
  console.log(
    "Kingmaker Toolkit | Level 8 DC:",
    KINGDOM_DC_BY_LEVEL[8]
  );
});