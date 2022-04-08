<template>
  <div class="flex flex-col">
    <span class="text-white text-center text-3xl mb-7" :class="game.gameOver ? 'visible': 'invisible'">The word was: {{ game.word }}</span>
    <div class="text-white font-bold text-3xl my-1" v-for="({ guess, hint }) in game.getGuesses" :key="guess">
      <div v-if="guess" class="flex flex-row">
        <div class="mx-1 border w-16 h-16 flex justify-center items-center" :class="defineBgColor(hint[0])">
          <span class="uppercase">{{ guess[0] }}</span>
        </div>
        <div class="mx-1 border w-16 h-16 flex justify-center items-center" :class="defineBgColor(hint[1])">
          <span class="uppercase">{{ guess[1] }}</span>
        </div>
        <div class="mx-1 border w-16 h-16 flex justify-center items-center" :class="defineBgColor(hint[2])">
          <span class="uppercase">{{ guess[2] }}</span>
        </div>
        <div class="mx-1 border w-16 h-16 flex justify-center items-center" :class="defineBgColor(hint[3])">
          <span class="uppercase">{{ guess[3] }}</span>
        </div>
        <div class="mx-1 border w-16 h-16 flex justify-center items-center" :class="defineBgColor(hint[4])">
          <span class="uppercase">{{ guess[4] }}</span>
        </div>
      </div>

      <div v-else class="flex flex-row">
        <div class="mx-1 border w-16 h-16 flex justify-center items-center">
          <span class="uppercase"></span>
        </div>
        <div class="mx-1 border w-16 h-16 flex justify-center items-center">
          <span class="uppercase"></span>
        </div>
        <div class="mx-1 border w-16 h-16 flex justify-center items-center">
          <span class="uppercase"></span>
        </div>
        <div class="mx-1 border w-16 h-16 flex justify-center items-center">
          <span class="uppercase"></span>
        </div>
        <div class="mx-1 border w-16 h-16 flex justify-center items-center">
          <span class="uppercase"></span>
        </div>
      </div>
    </div>

    <form @submit.prevent="submitTry" class="w-full flex flex-col items-center">
      <input class="text-center my-3 p-3 rounded-full bg-gray-400 placeholder-gray-700 text-lg w-full outline-none" type="text" maxlength="5" minlength="5" placeholder="Your guess" v-model="word">
      <div class="flex w-full justify-center">
        
        <a href="#" @click.prevent="resetGame" class="bg-gray-400 text-lg font-bold w-1/3 p-2 rounded-full text-center mx-3" :class="game.gameOver ? 'visible': 'invisible' ">Retry</a>
      </div>
    </form>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useGameStateStore } from '../store/GameState'

const game = useGameStateStore()
const word = ref("")

const submitTry = () => {
  game.newGuess(word.value)
  word.value = ""
}

const resetGame = () => {
  game.resetGame()
}

const defineBgColor = (hint: string): string => {
  let color = ""

  switch(hint) {
    case "0": 
      color = "bg-gray-400"
      break;
    case "1": 
      color = "bg-yellow-400"
      break;
    case "2":
      color = "bg-green-400"
      break;
    default: 
      color = ""
      break;
  }

  return color 
}

</script>

<style scoped>

</style>