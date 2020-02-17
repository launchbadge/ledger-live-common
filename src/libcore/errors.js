// @flow

let impl = (e: mixed): Error =>
  e && e instanceof Error ? e : new Error(String(e));

export function setRemapLibcoreErrorsImplementation(
  remap: (error: mixed) => Error
) {
  impl = remap;
}

export function remapLibcoreErrors(error: mixed): Error {
  return impl(error);
}

export function isNonExistingAccountError(error: Error): boolean {
  return error.message.includes("doesn't exist");
}

export function isNonExistingWalletError(error: Error): boolean {
  return error.message.includes("doesn't exist");
}
