import { NegotiationsApi } from '../interfaces/negotiation-day'
import { Negotiation } from '../models/negotiation'

export class NegotiationService {
  private readonly url: string

  constructor (url: string) {
    this.url = url
  }

  public async getNegotiations (): Promise<Negotiation[]> {
    const response = await fetch(this.url)
    const result: NegotiationsApi = await response.json()
    return result.map(r => new Negotiation(new Date(), r.vezes, r.montante))
  }
}
