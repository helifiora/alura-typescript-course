import { Negotiation } from '../models/negotiation'
import { NegotiationList } from '../models/negotiation-list'
import { parseDate } from '../utils/date'

interface Input {
    date: HTMLInputElement
    quantity: HTMLInputElement
    value: HTMLInputElement
}

export class NegotiationController {
    private readonly input: Input
    private readonly negotiationList: NegotiationList

    constructor (input: Input, negotiationList: NegotiationList) {
      this.input = input
      this.negotiationList = negotiationList
    }

    public add (): void {
      const negotiation = this.createNegotiation()
      this.negotiationList.add(negotiation)
      console.log(this.negotiationList.getData())
      this.clearInput()
      this.focus('date')
    }

    private createNegotiation (): Negotiation {
      const date = parseDate(this.input.date.value)
      const quantity = parseInt(this.input.quantity.value)
      const value = parseFloat(this.input.value.value)
      return new Negotiation(date, quantity, value)
    }

    private clearInput (): void {
      this.input.date.value = ''
      this.input.quantity.value = ''
      this.input.value.value = ''
    }

    private focus (key: keyof Input): void {
      this.input[key].focus()
    }
}
