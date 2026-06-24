// scripts/main.js

import { KingdomService } from './services/kingdom-service.js';
import { SettlementService } from './services/settlement-service.js';
import { FocusService } from './services/focus-service.js';
import { openSettlementDashboard } from './apps/settlement-dashboard.js';
import { openDowntimeDashboard } from './apps/downtime-dashboard.js';

Hooks.once('init', () => {
  console.log('Kingmaker Toolkit | Initializing');
});

Hooks.once('ready', () => {
  console.log('Kingmaker Toolkit | Ready');

  game.kingmakerToolkit = {
    version: game.modules.get('kingmaker-toolkit')?.version ?? 'unknown',

    apps: {
      openSettlementDashboard,
      openDowntimeDashboard,
    },

    services: {
      kingdom: KingdomService,
      settlement: SettlementService,
      focus: FocusService,
    },

    data: {},
    utils: {},
  };
});
