import { NegotiationList } from '../models/negotiation-list'
import { DateUtil } from '../utils/date'
import { MessageView } from '../views/message-view'
import { NegotiationView } from '../views/negotiation-view'
import { NegotiationDto } from './negotiation-dto'

interface Input {
    date: HTMLInputElement
    quantity: HTMLInputElement
    value: HTMLInputElement
}

export class NegotiationController {
    private readonly input: Input
    private readonly negotiationList: NegotiationList
    private readonly negotiationView: NegotiationView
    private readonly messageView: MessageView

    constructor (input: Input, negotiationList: NegotiationList, view: NegotiationView, messageView: MessageView) {
      this.input = input
      this.negotiationList = negotiationList
      this.negotiationView = view
      this.messageView = messageView
    }

    public add (): void {
      const dto = new NegotiationDto(this.input.date.value, this.input.quantity.value, this.input.value.value)
      const negotiation = dto.toEntity()
      if (DateUtil.isWeekend(negotiation.getDate())) {
        this.messageView.render('Apenas negociações em dias úteis são aceitas')
        return
      }

      this.negotiationList.add(negotiation)
      this.update()
      this.clearInput()
    }

    private clearInput (): void {
      this.input.date.value = ''
      this.input.quantity.value = ''
      this.input.value.value = ''
      this.focus('date')
    }

    private focus (key: keyof Input): void {
      this.input[key].focus()
    }

    private update (): void {
      this.negotiationView.render(this.negotiationList)
      this.messageView.render('Negociação adicionada com sucesso!')
    }
}
