export class Negotiation {
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
}
