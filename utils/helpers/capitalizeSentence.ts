const capitalizeSentence = (sentence: string) => {
  const words = sentence.split(' ')
  return words
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

export default capitalizeSentence
