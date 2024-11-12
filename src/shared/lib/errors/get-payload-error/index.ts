import { Errors, isObj } from 'shared/lib/validators';

/**
 * For slices
 */
export const getPayloadError = (payload: Errors | undefined): Errors => isObj(payload)
  ? payload as Errors
  : {} as Errors;
