import { defineStore } from 'pinia'
import Guess from '@/@types/Guess'

export const gameStateStore = defineStore('gameState', {
  state: () => ({
    word: '',
    guesses: [] as Guess[]
  }),
  actions: {
    resetGame(): void {
      this.word = '',
        this.guesses = [] as Guess[]
    },
    newWord(newWord: string): void {
      // 0 - Não esta na palavra
      let hint = [..."00000"]
      let formatedword = [...newWord]
      // 1 - Esta na palavra, mas em outra posição
      for (let i = 0; i < 5; i++) {
        if (this.word.includes(formatedword[i])) {
          hint[i] = "1"
        }
      }
      // 2 - Esta na palavra na posição correta
      for (let i = 0; i < 5; i++) {
        if (this.word[i] === formatedword[i]) {
          hint[i] = "2"
        }
      }

      const guess: Guess = new Guess(newWord, hint)
      this.guesses.push(guess)
      
    }
  },
  getters: {
    getGuesses(): Guess[] {
      return this.guesses
    }
  }
})