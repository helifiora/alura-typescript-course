import { NegotiationController } from './app/controllers/negotiation-controller'
import { NegotiationList } from './app/models/negotiation-list'
import './style.less'

function createNegotiationController (dom: Document): NegotiationController {
  const inputDate = dom.getElementById('data') as HTMLInputElement
  const inputQuantity = dom.getElementById('quantidade') as HTMLInputElement
  const inputValue = dom.getElementById('valor') as HTMLInputElement

  return new NegotiationController({
    date: inputDate,
    quantity: inputQuantity,
    value: inputValue
  }, new NegotiationList())
}

const negotiationController = createNegotiationController(document)
const form = document.querySelector('form')
form?.addEventListener('submit', event => {
  event.preventDefault()
  negotiationController.add()
})
