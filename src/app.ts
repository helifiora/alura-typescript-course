import { NegotiationController } from './app/controllers/negotiation-controller'
import { NegotiationList } from './app/models/negotiation-list'
import { NegotiationService } from './app/services/negotiation-service'
import { MessageView } from './app/views/message-view'
import { NegotiationView } from './app/views/negotiation-view'
import './style.less'

function createNegotiationController (dom: Document): NegotiationController {
  const date = dom.getElementById('data') as HTMLInputElement
  const quantity = dom.getElementById('quantidade') as HTMLInputElement
  const value = dom.getElementById('valor') as HTMLInputElement
  const negotiationView = dom.getElementById('negotiation-view') as HTMLElement
  const messageView = dom.getElementById('message-view') as HTMLElement

  return new NegotiationController(
    { date, quantity, value },
    new NegotiationList(),
    new NegotiationView(negotiationView),
    new NegotiationService('http://localhost:8080/dados'),
    new MessageView(messageView)
  )
}

const controller = createNegotiationController(document)
const form = document.querySelector('form')
form?.addEventListener('submit', event => {
  event.preventDefault()
  controller.add()
})

const importBtn = document.getElementById('import-btn')
importBtn?.addEventListener('click', event => {
  event.preventDefault()
  controller.import().then()
})
