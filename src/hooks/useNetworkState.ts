import { useSyncExternalStore } from "react";

function getSnapshot() {
  return navigator.onLine;
}

function subscribe(callback: () => void) {
  window.addEventListener("online", callback);
  window.addEventListener("offline", callback);
  return () => {
    window.removeEventListener("online", callback);
    window.removeEventListener("offline", callback);
  };
}

export function useNetworkState() {
  const isOnline = useSyncExternalStore(subscribe, getSnapshot);
  return isOnline;
}
