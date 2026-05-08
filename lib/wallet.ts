/**
 * Utility helpers for MetaMask / wallet integration.
 *
 * Always call `isMetaMaskAvailable()` before attempting any `window.ethereum`
 * operation to avoid crashes when the extension is absent or its background
 * service worker is not yet ready.
 */

/**
 * Returns true when MetaMask's injected provider is present in the page.
 * Safe to call during SSR (returns false on the server).
 */
export function isMetaMaskAvailable(): boolean {
  return (
    typeof window !== "undefined" &&
    typeof (window as Window & { ethereum?: unknown }).ethereum !== "undefined"
  );
}

/**
 * Attempt a wallet operation with a built-in availability guard.
 * Returns null (and optionally calls `onError`) if MetaMask is unavailable
 * or if the operation throws.
 */
export async function safeWalletCall<T>(
  fn: () => Promise<T>,
  onError?: (err: unknown) => void
): Promise<T | null> {
  if (!isMetaMaskAvailable()) {
    onError?.(new Error("MetaMask extension not found"));
    return null;
  }
  try {
    return await fn();
  } catch (err) {
    onError?.(err);
    return null;
  }
}