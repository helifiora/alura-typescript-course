import { Negotiation } from '../models/negotiation'
import { DateUtil } from '../utils/date'

export class NegotiationDto {
    public readonly date: Date
    public readonly quantity: number
    public readonly value: number

    public constructor (date: string, quantity: string, value: string) {
      this.date = DateUtil.parse(date)
      this.quantity = parseInt(quantity)
      this.value = parseFloat(value)
    }

    public toEntity (): Negotiation {
      return new Negotiation(this.date, this.quantity, this.value)
    }
}
