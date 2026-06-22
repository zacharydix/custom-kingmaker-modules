# Foundry Tooltip & Settlement Utility Tech Notes

This file captures the technical issues encountered while working on the settlement hover tooltip and Foci descriptions in Foundry, along with solutions and best practices.

## 1. Foundry hover handling and tooltip follow-mouse behavior

### Issue
- The settlement hover tooltip was following the cursor continuously rather than staying locked adjacent to the token.
- This happened because the code created or updated the tooltip position inside a `mousemove` handler while the token was hovered.

### Root cause
- `canvas.stage.on("mousemove", moveHandler)` was being used inside the `hoverToken` hook.
- Every mouse movement over the token caused `showSettlementTooltip(event, token)` to execute again.
- The tooltip position then tracked the pointer instead of staying fixed.

### Solution
- A solution could not be found and was switched out for a simpler solution where we do not lock it, do not try to hover over the foci for the description and instead shows the description next to the foci name.

## 2. Tooltip DOM pointer events and nested hover content

### Issue
- The tooltip content included focus descriptions via inline hover, but they were not reachable or visible.

### Root cause
- The tooltip container had `pointer-events: none`, which prevented browser hover events on inner elements.
- When the container ignored pointer events, nested `title` attributes and interactive elements could not receive mouse events.

### Solution
- Set the tooltip container to `pointer-events: auto` when nested hover or interactive content is required.
- If the tooltip itself should not block other interactions, use more nuanced event handling or a separate overlay element.

## 3. Using token bounds for fixed positioning

### Issue
- Positioning the tooltip using event coordinates made it follow the mouse.

### Root cause
- The display position was computed from `event.clientX` and `event.clientY`, which are the current pointer location.

### Solution
- Use token geometry when available: `token.bounds` or `token.getBounds()`.
- Compute a fixed tooltip `left`/`top` based on token position on the canvas.
- Example: `tooltip.style.left = `${window.scrollX + x + width + 12}px`;`

## 4. Duplicate script versions and loaded source confusion

### Issue
- Changes made in one script file did not appear in Foundry because another duplicate script implementation was loaded.

### Root cause
- There were two representations of the same utility: one in `Macros/SettlementUtilities.js` and another in `Modules/kingdom-system-autoloader/scripts/settlement-utilities.js`.
- Foundry could be using the module version while edits were made only to the macro file.

### Solution
- Confirm the active loaded script in Foundry before editing.
- Keep a single authoritative source for reusable logic when possible.
- If duplicate copies exist, synchronize code or remove outdated versions.

## 5. Data mapping for documentation-driven content

### Issue
- The tooltip needed Foci short descriptions based on the `Foci.html` quick reference section.

### Solution
- Build a mapping object from Foci names to short descriptions.
- Use a helper function to render each focus with its description inline, e.g.:
  - `Palace (Reduce Unrest by 1 each Kingdom Turn.)`
- This avoids relying on nested hover tooltips and keeps the tooltip content readable.

## 6. Foundry-specific debugging tips

- Use `Hooks.on("hoverToken", ...)` for token hover detection, but be careful not to pair it with continuous `mousemove` updates unless intentional.
- For tooltip overlays, `pointer-events` is critical: `none` disables nested hover interaction, while `auto` enables it.
- Verify whether canvas tokens are still valid with `canvas.tokens.placeables.includes(token)`.
- If using HTML tooltips, prefer inline text or standard DOM `title` only if pointer events are enabled.
- Reload the module/script in Foundry after any code update to ensure the active version is current.

## 7. Future recommendation

- Centralize common UI helper functions in a shared module file rather than duplicating logic in both Macros and Modules.
- Document key Foundry event hooks and DOM styling expectations for future tooltip work.
- Keep mapping data such as Foci descriptions in one place if it is reused across multiple tooltip contexts.
