// Minimal service worker — its only job is to exist so the page can call
// registration.showNotification(), which Android Chrome requires instead of
// the plain `new Notification(...)` constructor.

self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});
