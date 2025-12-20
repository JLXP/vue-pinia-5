import { defineStore } from "pinia";

export const useGameStore = defineStore("gameStore", {
  state: () => ({
    score: 0,
    maxHeath: 100,
    maxAttack: 30,
    maxDefense: 10,
  }),
  getters: {
    getScore() {
      return this.score;
    },
    setNextAttack() {
      let attack = Math.floor(Math.random() * this.maxAttack) + 1;
      console.log("attack: ", attack);
      return this.score + attack;
    },
    setNextDefense() {
      let defense = Math.floor(Math.random() * this.maxDefense) + 1;
      console.log("attack: ", defense);
      return this.score - defense;
    },
  },
});
