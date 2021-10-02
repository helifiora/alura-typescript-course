import { DayOfWeek } from './day-of-week'

export class DateUtil {
  private static DateFormatter = new Intl.DateTimeFormat('pt-br')

  public static parse (raw: string): Date {
    return new Date(raw.replace(/-/g, ','))
  }

  public static format (date: Date): string {
    return DateUtil.DateFormatter.format(date)
  }

  public static isDayOfWeek (date: Date): boolean {
    return !DateUtil.isWeekend(date)
  }

  public static isWeekend (date: Date): boolean {
    const dayOfWeek = date.getDay()
    return dayOfWeek === DayOfWeek.SUNDAY || dayOfWeek === DayOfWeek.SATURDAY
  }
}
