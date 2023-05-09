<script setup lang="ts">
import PhaserGame from 'nuxtjs-phaser/phaserGame.vue'
import { getGame } from '@/game'
import televisionImage from '@/assets/television.png'

const game = () => getGame()
const emit = (eventName: string) => NuxtPhaser.eventEmitter?.emit(eventName)
const pause = () => emit('pause')
</script>

<template>
  <div class="game">
    <div class="buttons">
      <button type="button" @click="pause">✋ Pause</button>
    </div>
    <img :src="televisionImage" />
    <PhaserGame :createGame="game" v-if="game" />
  </div>
</template>

<style scoped>
.game img {
  position: absolute;
  width: 50rem;
}

.buttons {
  display: inline;
  position: absolute;
  left: 28rem;
  top: 7rem;
  z-index: 1;
}

button {
  background-color: #fff;
  border: none;
  color: black;
  padding: 0.5rem;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 12px;
  border-radius: 8px;
  font-weight: 500;
}

button:hover {
  background-color: tomato;
  font-weight: 500;
}
</style>
