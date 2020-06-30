import Vue from 'vue'
import Vuex from 'vuex'
import { generateGrid, generateUsers } from './JS/generators'
import * as util from './JS/util'

Vue.use(Vuex);

//более грамотно было бы поделить хранилище на 2: карт и рейтинга, но проект учебный...
export default new Vuex.Store({
  state: {
    //коллекция карт
    cards: generateGrid(),
    //флаг - карта была перевёрнута?
    hasFlippedCard: false,
    //объект - первой перевёрнутой карты
    firstCard: null,
    //объект второй перевёрнутой карты
    secondCard: null,
    //таймер первой перевёрнутой карты
    firstTimeoutID: 0,
    //таймер второй перевёрнутой карты
    secondTimeoutID: 0,
    //текущее время
    currentTime: 0,
    //общий таймер игры
    timer: 0,
    //коллекция рейтинга игроков
    rating: generateUsers(),
    //имя пользователя
    userName: 'noName',
    //текущая позиция пользователя
    curPosition: 99,
  },
  getters: {
    //все карты перевёрнуты?
    isFinish (state) {
      return state.cards.every(elem => !elem.isShow)
    },
  },
  mutations: {
    //перевернуть карту
    setFlip (state, {id, flag}) {
      const obj = util.getObjById(state, id)
      if (obj) {
        obj.isFlip = flag
        Vue.set(state.cards[util.getIndexById(state, id)], 'cards', obj)
      }
    },
    //показать\спрятать карту
    setShow (state, {id, flag}) {
      const obj = util.getObjById(state, id)
      if (obj) {
        obj.isShow = flag
        Vue.set(state.cards[util.getIndexById(state, id)], 'cards', obj)
      }
    },
    //создать карты
    createCards (state) {
      state.cards = generateGrid()
    },
    //сброс игрового поля
    resetBoard (state) {
      util.resetBoard(state)
    },
    //установить таймер игры
    setTimer (state, id) {
      state.timer = id
    },
    //остановить таймер
    stopTimer (state) {
      clearTimeout(state.timer)
      state.timer = 0
    },
    //установить текущее время игрока
    setCurrentTime (state, num) {
      state.currentTime = num
    },
    //добавить текущее время игры
    addCurrentTime (state) {
      state.currentTime++
    },
    //установить имя пользователя
    setUserName (state, name) {
      state.userName = name
    },
    //изменить таблицу рейтинга
    changeRating (state, userTime) {
      let idx = state.rating.findIndex((item) => item.timeUser > userTime)
      if (idx === -1) {
        idx = 9
      }
      state.rating.splice(idx, 0, {
        nameUser: state.userName,
        timeUser: userTime,
      })
      state.rating = state.rating.slice(0, 9)
      state.curPosition = idx
    },
  },
  actions: {
    //перевернуть карту
    flipCard ({state, commit}, id) {
      const obj = util.getObjById(state, id)
      if (obj) {
        if (obj === state.firstCard || obj === state.secondCard) {
          return
        }
        commit(
          'setFlip',
          {
            id: id,
            flag: !obj.isFlip,
          })

        util.resetUnflipCards(state, commit)

        if (!state.hasFlippedCard) {
          state.hasFlippedCard = true
          state.firstCard = obj
          util.unflipSingleCard(state, commit)
        } else {
          util.resetUnflipSingleCard(state)
          state.hasFlippedCard = false
          state.secondCard = obj
          util.checkForMatch(state, commit)
        }
      }
    },
    //запустить таймер игры
    startTimer ({state, commit}) {
      commit('setCurrentTime', 0)
      commit('setTimer', setInterval(() => { commit('addCurrentTime') }, 1000))
    },

  },
})

