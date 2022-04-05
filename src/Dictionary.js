import { german } from '@/assets/wordlist.json'

export default class Dictionary {
  static getRandomWord () {
    const randomIndex = Math.floor(Math.random() * german.length)
    const word = german[randomIndex]

    const wonWords = JSON.parse(localStorage.getItem('wonWords'))
    if (wonWords.includes(word)) {
      return this.getRandomWord()
    }

    return word.toUpperCase()
  }

  static getWonWordsCount () {
    const wonWords = JSON.parse(localStorage.getItem('wonWords'))

    if (wonWords) return wonWords.length

    return 0
  }

  static getWordListLength () {
    return german.length
  }
}
