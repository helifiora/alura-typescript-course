import { Negotiation } from './negotiation'

export class NegotiationList {
    private data: Negotiation[]

    constructor () {
      this.data = []
    }

    public add (...negotiations: Negotiation[]): void {
      this.data.push(...negotiations)
    }

    public getData (): readonly Negotiation[] {
      return this.data
    }

    public has (negotiation: Negotiation): boolean {
      return this.data.some(n => n.isEqualTo(negotiation))
    }
}
