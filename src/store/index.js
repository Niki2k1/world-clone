import Dictionary from '@/Dictionary'
import { createStore } from 'vuex'

export default createStore({
  state: {
    darkMode: false,
    tiles: [],
    wordToGuess: '',
    currentCol: 0,
    currentRow: 0,
    currentWord: ''
  },
  getters: {
    darkMode (state) {
      return state.darkMode
    },
    tiles (state) {
      return state.tiles
    },
    currentTile (state) {
      return state.tiles[state.currentRow][state.currentPos]
    }
  },
  mutations: {
    setDarkMode (state, darkMode) {
      state.darkMode = darkMode
      if (darkMode) {
        document.body.classList.remove('light')
        document.body.classList.add('dark')
      } else {
        document.body.classList.remove('dark')
        document.body.classList.add('light')
      }
    },
    setTiles (state, tiles) {
      state.tiles = tiles
      state.tiles[0][0].focus = true
    },
    setWordToGuess (state, word) {
      state.wordToGuess = word
    },
    check (state) {
      if (state.wordToGuess === state.currentWord) {
        console.log('WON')

        for (const tile of state.tiles) {
          tile.color = 'green'
        }
      } else {
        const matchedPos = []
        const matched = []
        for (let i = 0; i < state.currentWord.length; i++) {
          // Check if char is at right pos and equal (green)
          if (state.wordToGuess[i] === state.currentWord[i]) {
            matchedPos.push(state.currentWord[i])
          }

          // Check if word to guess includes the char (yellow)
          if (state.wordToGuess.includes(state.currentWord[i])) {
            if (!matchedPos.includes(state.currentWord[i])) {
              matched.push(state.currentWord[i])
            }
          }

          const matchedPosTiles = state.tiles.filter(tile => matchedPos.includes(tile.value))
          const matchedTiles = state.tiles.filter(tile => matched.includes(tile.value))

          for (const tile of matchedPosTiles) {
            tile.color = 'green'
          }

          for (const tile of matchedTiles) {
            tile.color = 'yellow'
          }
        }

        state.currentWord = ''
        state.typeCount = 0
      }
    },
    setCursorNextPos (state) {
      if (state.currentCol === 4) {
        state.currentRow++
        state.currentCol = 0
      } else {
        state.currentCol++
      }

      for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 5; j++) {
          state.tiles[i][j].focus = false
        }
      }

      state.tiles[state.currentRow][state.currentCol].focus = true
    },
    setCursorPrevPos (state) {
      if (state.currentRow > 1 && state.currentCol === 0) {
        state.currentRow--
        state.currentCol = 4
      } else {
        state.currentCol--
      }

      for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 5; j++) {
          state.tiles[i][j].focus = false
        }
      }

      state.tiles[state.currentRow][state.currentCol].focus = true
      state.tiles[state.currentRow][state.currentCol].value = ''
      state.currentWord = state.currentWord.slice(0, -1)
    },
    setChar (state, char) {
      state.tiles[state.currentRow][state.currentCol].value = char
      state.currentWord += char
    }
  },
  actions: {
    toggleDarkMode ({ commit, state }) {
      commit('setDarkMode', !state.darkMode)
    },
    setChar ({ commit, state, getters }, char) {
      if (char === '<-') {
        commit('setCursorPrevPos')
      } else {
        commit('setChar', char)
        commit('setCursorNextPos')
      }

      if (state.currentCol === 4) commit('check')
    },
    setFocus ({ commit }, tile) {
      commit('setFocus', tile)
    },
    init ({ commit }) {
      const tiles = []
      for (let i = 0; i < 6; i++) {
        if (!tiles[i]) tiles[i] = []
        for (let j = 0; j < 5; j++) {
          tiles[i].push({ value: '', color: '', focus: false })
        }
      }

      commit('setDarkMode', false)
      commit('setTiles', tiles)
      commit('setWordToGuess', Dictionary.getRandomWord())
    }
  },
  modules: {
  }
})
