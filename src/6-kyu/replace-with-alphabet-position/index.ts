export function alphabetPosition(text: string) {
  const isLetter = (char: string) =>
    char.toLowerCase() >= 'a' && char.toLowerCase() <= 'z'

  const textSplited = text.toLowerCase().split('')

  const getPosition = (char: string) => char.toLowerCase().charCodeAt(0) - 96

  return textSplited.filter(isLetter).map(getPosition).join(' ')
}
