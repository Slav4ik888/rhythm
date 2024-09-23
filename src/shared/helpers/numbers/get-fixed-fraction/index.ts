
/** Возвращает число с обрезанными десятичными, по заданную длину */
export const getFixedFraction = (
  value           : number | undefined,
  fractionDigits? : number
): number => +(value as unknown as number)?.toFixed(fractionDigits || 0)
