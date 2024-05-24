import { useNetworkState } from "../hooks";

export function NetworkStateExample() {
  const isOnline = useNetworkState();

  return (
    <div>{isOnline ? <span>Connected</span> : <span>Not Connected</span>}</div>
  );
}
