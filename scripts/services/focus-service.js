import { FOCI } from "../data/focus-data.js";

export class FocusService {
  static getAll() {
    return Object.values(FOCI);
  }

  static getById(id) {
    return FOCI[id] ?? null;
  }

  static getName(id) {
    return this.getById(id)?.name ?? id;
  }
}