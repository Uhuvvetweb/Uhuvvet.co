/**
 * Application-wide constants
 */

export const APP_NAME = 'Uhuvvet Community';

export const ROUTES = {
  HOME: '/',
  TIME: '/time',
  COMMUNITY: '/community',
  WIKI: '/wiki',
  DEPARTMENTS: '/idari',
  PROFILE: '/profile',
  SETTINGS: '/settings',
  NOTIFICATIONS: '/notifications',
  SAVED: '/saved',
  POST_DETAIL: (id: string) => `/time/${id}`,
  COMMUNITY_DETAIL: (id: string) => `/community/${id}`,
  WIKI_DETAIL: (id: string) => `/wiki/${id}`,
  DEPARTMENT_DETAIL: (id: string) => `/idari/${id}`,
} as const;

export const PAGINATION = {
  DEFAULT_PAGE_SIZE: 20,
  MAX_PAGE_SIZE: 100,
} as const;

export const VALIDATION = {
  MIN_POST_LENGTH: 1,
  MAX_POST_LENGTH: 5000,
  MIN_COMMENT_LENGTH: 1,
  MAX_COMMENT_LENGTH: 1000,
  MIN_USERNAME_LENGTH: 3,
  MAX_USERNAME_LENGTH: 30,
  MIN_PASSWORD_LENGTH: 8,
} as const;

export const STORAGE_KEYS = {
  AUTH_TOKEN: 'auth_token',
  USER_PREFERENCES: 'user_preferences',
  THEME: 'theme',
  LANGUAGE: 'language',
} as const;

export const API_ENDPOINTS = {
  BASE_URL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3001/api',
} as const;

export const COMMUNITY_TABS = [
  { id: 'general', label: 'Genel', path: '' },
  { id: 'announcements', label: 'Duyurular', path: '/duyurular' },
  { id: 'events', label: 'Etkinlikler', path: '/etkinlikler' },
  { id: 'classes', label: 'Dersler', path: '/dersler' },
  { id: 'board', label: 'Heyet', path: '/heyet' },
] as const;

export const WIKI_CATEGORIES = [
  'Tarih',
  'Bilim',
  'Teknoloji',
  'Sanat',
  'Edebiyat',
  'Felsefe',
  'Din',
  'Kültür',
] as const;

export const DEPARTMENT_CATEGORIES = [
  'education',
  'social',
  'technical',
  'management',
  'support',
] as const;
