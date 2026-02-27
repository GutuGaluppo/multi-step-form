/**
 * Extrai o valor numérico de uma string de preço (ex: "$9/mo" -> 9, "+$1/mo" -> 1).
 * @param priceString A string de preço.
 * @returns O valor numérico do preço.
 */
export const extractPriceValue = (priceString: string): number => {
  // Remove '$', '+', '/mo', '/yr' e espaços, depois converte para número
  const cleanedPrice = priceString
    .replace(/[+$]/g, '')
    .replace(/\/mo|\/yr/g, '')
    .trim();
  return parseFloat(cleanedPrice);
};

/**
 * Formata um valor numérico de volta para uma string de preço com base no período.
 * @param value O valor numérico.
 * @param period O período de faturamento ('monthly' ou 'yearly').
 * @returns A string de preço formatada (ex: "$9/mo", "$120/yr").
 */
export const formatPrice = (
  value: number,
  period: 'monthly' | 'yearly'
): string => {
  const suffix = period === 'monthly' ? '/mo' : '/yr';
  return `$${value}${suffix}`;
};
