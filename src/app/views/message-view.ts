import { View } from './view'

export class MessageView extends View<string> {
  protected template (model: string): string {
    return `
        <p class="tag--success" style="margin-bottom: 24px">${model}</p>
    `
  }
}
