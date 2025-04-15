
let pendingHash: string | null = null;

export function setPendingHash(hash: string) {
  pendingHash = hash;
}

export function getPendingHash() {
  return pendingHash;
}

export function clearPendingHash() {
  pendingHash = null;
}
