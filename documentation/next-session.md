# Next Session Notes

## Current State

### Completed

* Module architecture established.
* Public API registered on `game.kingmakerToolkit`.
* Shared data layer created.
* Shared service layer created.
* Settlement Dashboard migrated into module.
* Focus definitions centralized into:

  * `focus-data.js`
  * `FocusService`
* Settlement Dashboard now consumes `FocusService`.
* Update and Upgrade functionality tested successfully.

### Current Public API

```js
game.kingmakerToolkit.services.kingdom
game.kingmakerToolkit.services.settlement
game.kingmakerToolkit.services.focus

game.kingmakerToolkit.apps.openSettlementDashboard()
```

## Current Architecture

UI
↓
Services
↓
Data

Implemented:

* KingdomService
* SettlementService
* FocusService

## Next Candidate Work

### Option A - Earn Income Refactor

Pros:

* Uses shared data already created.
* High player value.
* Logic-heavy system.

### Option B - Kingdom Dashboard Migration

Pros:

* Major feature.
* Uses KingdomService heavily.

### Option C - Downtime Dashboard Migration

Pros:

* Smaller migration.
* Good preparation for Earn Income refactor.

## Recommended Next Issue

Issue #7

Migrate Downtime Dashboard into Module

Goal:

Move the existing Downtime Dashboard into:

`scripts/apps/downtime-dashboard.js`

while preserving existing behavior.

No ApplicationV2.
No UI redesign.
No new functionality.
