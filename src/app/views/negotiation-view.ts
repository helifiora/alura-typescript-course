import { NegotiationList } from '../models/negotiation-list'
import { DateUtil } from '../utils/date'
import { View } from './view'

export class NegotiationView extends View<NegotiationList> {
  protected template (list: NegotiationList): string {
    const data = list.getData()
    return `
        <section class="section">
            <div class="section__container" id="negotiation-view">
                <table class="table">
                    <thead>
                        <tr>
                            <th>Data</th>
                            <th>Quantidade</th>
                            <th>Valor</th>
                        </tr>
                    </thead>
                    <tbody>
                    ${data.map(negotiation => `
                        <tr>
                            <td>${DateUtil.format(negotiation.getDate())}</td>
                            <td>${negotiation.getQuantity()}</td>
                            <td>${negotiation.getValue()}</td>
                        </tr>
                    `).join('')}
                    </tbody>
                </table>
            </div>
        </section>
    `
  }
}
