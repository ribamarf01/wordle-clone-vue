export default class Guess {
  guess: string
  hint: string[]

  constructor(guess: string, hint: string[]) {
    this.guess = guess
    this.hint = hint
  }
}