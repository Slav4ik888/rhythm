import { PARTNER_IDS } from '../../consts';

export const isValidPartnerCode = (partnerCode: string): boolean => PARTNER_IDS.includes(partnerCode);
