import { NegotiationController } from './app/controllers/negotiation-controller'
import { NegotiationList } from './app/models/negotiation-list'
import { MessageView } from './app/views/message-view'
import { NegotiationView } from './app/views/negotiation-view'
import './style.less'

function createNegotiationController (dom: Document): NegotiationController {
  const inputDate = dom.getElementById('data') as HTMLInputElement
  const inputQuantity = dom.getElementById('quantidade') as HTMLInputElement
  const inputValue = dom.getElementById('valor') as HTMLInputElement
  const viewElement = dom.getElementById('negotiation-view') as HTMLElement
  const messageViewElement = document.getElementById('message-view') as HTMLElement

  return new NegotiationController({
    date: inputDate,
    quantity: inputQuantity,
    value: inputValue
  }, new NegotiationList(),
  new NegotiationView(viewElement),
  new MessageView(messageViewElement))
}

const negotiationController = createNegotiationController(document)
const form = document.querySelector('form')
form?.addEventListener('submit', event => {
  event.preventDefault()
  negotiationController.add()
})
