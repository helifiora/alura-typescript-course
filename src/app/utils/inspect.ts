export function inspect (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const original = descriptor.value
  descriptor.value = function (...args: any[]) {
    console.log(`--- Método ${propertyKey}`)
    console.log(`------ Parâmetros: ${JSON.stringify(args)}`)
    const returnValue = original.apply(this, args)
    console.log(`------ Retorno: ${JSON.stringify(returnValue)}`)
    return returnValue
  }

  return descriptor
}
