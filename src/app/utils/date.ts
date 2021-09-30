export function parseDate (rawDate: string): Date {
  return new Date(rawDate.replace(/-/g, ','))
}
