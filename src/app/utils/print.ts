export interface Printable {
  toText(): string
}

export function printData (...objects: Printable[]): void {
  for (const obj of objects) {
    console.log(obj.toText())
  }
}
