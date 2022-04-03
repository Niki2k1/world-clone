import { german } from '@/assets/wordlist.json'

export default class Dictionary {
  static getRandomWord () {
    const randomIndex = Math.floor(Math.random() * german.length)
    const word = german[randomIndex]
    return word.toUpperCase()
  }
}
