export function logPerformanceTime (inSeconds: boolean = false) {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value
    descriptor.value = function (...args: any[]) {
      const unitDivisor = inSeconds ? { divisor: 1000, unit: 'segundos' } : { divisor: 1, unit: 'milissegundos' }
      const initial = performance.now()
      const returnValue = originalMethod.apply(this, args)
      const final = performance.now()
      console.log(`(${propertyKey}) Tempo de execução: ${(final - initial) / unitDivisor.divisor} ${unitDivisor.unit}`)
      return returnValue
    }

    return descriptor
  }
}
