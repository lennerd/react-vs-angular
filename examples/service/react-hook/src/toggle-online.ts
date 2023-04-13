let globalIsOnline = navigator.onLine;

// Simulate online and offline events.
export default function toggleOnline(isOnline = !globalIsOnline) {
  globalIsOnline = isOnline;
  window.dispatchEvent(new Event(isOnline ? "online" : "offline"));
}
