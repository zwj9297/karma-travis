export function add(...numbers) {
  return numbers.reduce((p, c) => p + c)
}

export function minus(...numbers) {
  return numbers.reduce((p, c) => p - c)
}
