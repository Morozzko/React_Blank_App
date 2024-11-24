/**
 * Formats a date string into a specific format.
 * @param dateString - The date string to format.
 * @param format - The format to use for the date. Defaults to 'YYYY-MM-DD hh:mm:ss'.
 * @example formatDate(new Date(), 'YYYY-MM-DD hh:mm:ss')
 * @example formatDate(new Date(), 'YYYY.mm.ss')
 * @returns The formatted date string.
 */
export const formatDate = (
  dateString: string,
  format = 'YYYY-MM-DD hh:mm:ss'
) => {
  const date = new Date(dateString)
  const replacements: Record<string, string> = {
    YYYY: date.getFullYear().toString(),
    MM: (date.getMonth() + 1).toString().padStart(2, '0'),
    DD: date.getDate().toString().padStart(2, '0'),
    hh: date.getHours().toString().padStart(2, '0'),
    mm: date.getMinutes().toString().padStart(2, '0'),
    ss: date.getSeconds().toString().padStart(2, '0'),
  }

  return format.replace(/YYYY|MM|DD|hh|mm|ss/g, match => replacements[match])
}
