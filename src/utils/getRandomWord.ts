import { words } from '../assets/wordleWordList.json'

export default function getRandomWord(): string {
  return words[Math.floor(Math.random() * words.length)]
}