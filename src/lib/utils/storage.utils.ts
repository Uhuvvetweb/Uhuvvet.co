/**
 * Storage utilities for localStorage management
 */

import { STORAGE_KEYS } from '../../constants';

export const storage = {
  // Auth token
  getAuthToken: (): string | null => {
    return localStorage.getItem(STORAGE_KEYS.AUTH_TOKEN);
  },

  setAuthToken: (token: string): void => {
    localStorage.setItem(STORAGE_KEYS.AUTH_TOKEN, token);
  },

  removeAuthToken: (): void => {
    localStorage.removeItem(STORAGE_KEYS.AUTH_TOKEN);
  },

  // User preferences
  getPreferences: <T>(): T | null => {
    const prefs = localStorage.getItem(STORAGE_KEYS.USER_PREFERENCES);
    return prefs ? JSON.parse(prefs) : null;
  },

  setPreferences: <T>(preferences: T): void => {
    localStorage.setItem(STORAGE_KEYS.USER_PREFERENCES, JSON.stringify(preferences));
  },

  // Generic get/set
  get: <T>(key: string): T | null => {
    const item = localStorage.getItem(key);
    if (!item) return null;
    
    try {
      return JSON.parse(item);
    } catch {
      return item as T;
    }
  },

  set: <T>(key: string, value: T): void => {
    const stringValue = typeof value === 'string' ? value : JSON.stringify(value);
    localStorage.setItem(key, stringValue);
  },

  remove: (key: string): void => {
    localStorage.removeItem(key);
  },

  clear: (): void => {
    localStorage.clear();
  },
};
