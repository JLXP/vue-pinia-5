<template>
  <div>
    <h1 class="text-center">Info</h1>
    <p class="text-center">This is teh Info Page</p>
    <p>
      This is a simple game where you can incremente, decrement, or randomize
      score. The score starts at 50 and yoy can win by reaching
      {{ gameStore.getWinningScore }}. If you reach
    </p>

    <input type="text" v-model="gameStore.maxHeath"/>

  </div>
</template>
<script setup>
import { useGameStore } from "@/store/gameStore";

const gameStore = useGameStore();
</script>
