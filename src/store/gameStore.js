import { defineStore } from "pinia";
import { ref } from "vue";

export const useGameStore = defineStore("gameStore", () => {
  const score = ref(0);
  const maxHeath = ref(100);
  const maxAttack = ref(30);
  const maxDefense = ref(10);

  const getScore = computed(() => score.value);
  const getWinningScore = computed(() => maxHeath.value);

  setNextAttack = () => {
    let attack = Math.floor(Math.random() * maxAttack.value) + 1;
    console.log("attack: ", attack);
    score.value += attack;
  };
  setNextDefense = () => {
    let defense = Math.floor(Math.random() * maxDefense.value) + 1;
    console.log("defense: ", defense);
    score.value -= defense;
  };
  resetScore = () => {
    score.value = 0;
  };
  return {
    //state
    score,
    maxAttack,
    maxDefense,
    //getters
    getScore,
    getWinningScore,
    //actions
    setNextAttack,
    setNextDefense,
    resetScore
  };
});
