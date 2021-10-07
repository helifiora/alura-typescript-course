export abstract class View<T> {
    private readonly element: HTMLElement

    constructor (element: HTMLElement) {
      this.element = element
    }

    public render (model: T): void {
      const template = this.template(model)
      this.element.innerHTML = template
    }

    protected abstract template(model: T): string
}
