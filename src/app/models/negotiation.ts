import { Model } from '../interfaces/model'
import { DateUtil } from '../utils/date'

export class Negotiation implements Model<Negotiation> {
    private date: Date
    private quantity: number
    private value: number

    public constructor (date: Date, quantity: number, value: number) {
      this.date = date
      this.quantity = quantity
      this.value = value
    }

    public volume (): number {
      return this.quantity * this.value
    }

    public getDate (): Date {
      return new Date(this.date.getTime())
    }

    public getQuantity (): number {
      return this.quantity
    }

    public getValue (): number {
      return this.value
    }

    public isEqualTo (negotiation: Negotiation): boolean {
      const sameDate = this.date.getDate() === negotiation.date.getDate()
      const sameMonth = this.date.getMonth() === negotiation.date.getMonth()
      const sameYear = this.date.getFullYear() === negotiation.date.getFullYear()
      return sameDate && sameMonth && sameYear
    }

    public toText (): string {
      return `
      ========================
      Negociação
      ========================
      Data: ${DateUtil.format(this.date)}
      Quantidade: ${this.quantity}
      Valor: ${this.value}
      Volume: ${this.volume()}
      ========================`
    }
}
