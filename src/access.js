export function access(accessor, base) {
  if (!accessor) {
    return
  }

  var accessors = String(accessor)
    .trim()
    .replace(/\[(\w+)\]/g, '.$1')
    .replace(/^\./, '')
    .split('.')
    .filter(accessor => !!accessor.trim())

  return accessors.length > 0 ? accessors.reduce((o, accessor) => (o ? o[accessor] : undefined), base) : undefined
}
