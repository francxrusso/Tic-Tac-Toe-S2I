<template>
  <img src="/src/assets/img/logo cerchio scuro.svg" alt="logomio" class="logo" />
  <img src="/src/assets/img/nuvoletteintere.svg" alt="nuvolebg" />
  <h1>Tic Tac Toe</h1>
  <p>
    Play tic tac toe with a friend, when the game is over press ↺ to reset the
    board
  </p>
  <div class="container-indicator">
    <TurnIndicator v-show="!isEnded" :turnNum="turn" />
    <WinIndicator v-show="isEnded" :turnNum="turn" :isTie="isTie" />
  </div>
  <div class="container-grid">
    <MarkSign v-for="slotID in 9" :key="slotID - 1" @click="onMarkSlotClick(slotID - 1)" :turnNum="board[slotID - 1]" />
  </div>
  <button id="btn-reset" @click="resetBoard">↺</button>
  <p class="footer">
    Project from Start2Impact University | Frontend Development course
  </p>
</template>


<script>
import MarkSign from "./components/MarkSign.vue";
import TurnIndicator from "./components/TurnIndicator.vue";
import WinIndicator from "./components/WinIndicator.vue";

function resetBoard() {
  this.board = [-1, -1, -1, -1, -1, -1, -1, -1, -1];
  this.turn = 0;
  this.isEnded = false;
  this.isTie = false;
}

function onMarkSlotClick(id) {
  // Check if the game has ended or the slot has already been filled.
  if (this.isEnded || this.board[id] != '-1') { return }

  // Converts the turn into the corresponding mark.
  // x = 0 | o = 1
  let mark = this.turn % 2;
  this.board[id] = mark;

  // Win check for rows and columns
  for (let i = 0; i < 3; i++) {
    if (this.board[0 + i * 3] === mark
      && this.board[1 + i * 3] === mark
      && this.board[2 + i * 3] === mark
      ||
      this.board[0 + i] === mark
      && this.board[3 + i] === mark
      && this.board[6 + i] === mark) {
      this.isEnded = true;
    }
  }
  // Win check for diagonals
  if (this.board[0] === mark
    && this.board[4] === mark
    && this.board[8] === mark
    ||
    this.board[2] === mark
    && this.board[4] === mark
    && this.board[6] === mark
  ) {
    this.isEnded = true;
  }
  // Tie check
  else if (this.turn >= 8) {
    this.isEnded = true;
    this.isTie = true;
  }
  // Continue to next turn
  else if (!this.isEnded) {
    this.turn += 1;
  }
}

export default {
  name: "App",
  components: {
    MarkSign,
    TurnIndicator,
    WinIndicator,
  },
  methods: {
    resetBoard,
    onMarkSlotClick
  },
  data() {
    return {
      turn: 0,
      board: [-1, -1, -1, -1, -1, -1, -1, -1, -1],
      isEnded: false,
      isTie: false
    }
  }
}
</script>
