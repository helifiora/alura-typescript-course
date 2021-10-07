export function escape (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const fn = descriptor.value
  descriptor.value = function (...args: any[]) {
    const result = fn.apply(this, args)
    if (typeof result !== 'string') {
      return result
    }

    return result.replace(/<script>[\s\S]*?<\/script>/g, '')
  }

  return descriptor
}
