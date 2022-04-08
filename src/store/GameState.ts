import { defineStore } from 'pinia'

import Guess from '../types/Guess'
import getRandomWord from '../utils/getRandomWord'

export const useGameStateStore = defineStore('gameState', {
  state: () => ({
    word: "PLANE",
    guesses: [
      {},
      {},
      {},
      {},
      {},
      {}
    ] as Guess[] | any[],
    actualTry: 0,
    gameOver: false,
    win: false
  }),
  actions: {
    resetGame(): void {
      this.word = getRandomWord()
      this.guesses = [
        {},
        {},
        {},
        {},
        {},
        {}
      ] as Guess[] | any[]
      this.actualTry = 0
      this.gameOver = false
    },
    newGuess(newWord: string): void {

      // Game handle
      // 0 - Não esta na palavra
      if (!this.gameOver) {

        if (newWord.toUpperCase() === this.word) {
          this.gameOver = true
          this.win = true
        }

        let hint = [..."00000"]
        let formatedword = [...newWord.toUpperCase()]

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
        this.guesses[this.actualTry] = guess
        this.actualTry++
      }

      // Handle gameover
      if (this.actualTry === 6) this.gameOver = true

    }
  },
  getters: {
    getGuesses(): Guess[] {
      return this.guesses
    }
  }
})