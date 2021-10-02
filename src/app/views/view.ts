export abstract class View<T> {
    private readonly element: HTMLElement
    private readonly escape: boolean

    constructor (element: HTMLElement, escape?: boolean) {
      this.element = element
      this.escape = escape ?? false
    }

    public render (model: T): void {
      let template = this.template(model)
      if (this.escape) {
        template = template.replace(/<script>[\s\S]*?<\/script>/g, '')
      }

      this.element.innerHTML = template
    }

    protected abstract template(model: T): string
}
