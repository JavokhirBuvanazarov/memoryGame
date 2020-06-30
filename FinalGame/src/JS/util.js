//получение объекта карты по её идентификатору
function getObjById (state, id) {
  const obj = state.cards.find((element) => element.id === id)
  return (obj === undefined) ? null : obj
}

//получение позиции карты в коллекции по её идентификатору
function getIndexById (state, id) {
  const idx = state.cards.findIndex((element) => element.id === id)
  return (idx === -1) ? null : idx
}

//проверка одинаковы ли 2 перевернутые карты
function checkForMatch (state, commit) {
  if (state.firstCard.nameCard === state.secondCard.nameCard) {
    disableCards(state, commit)
  } else {
    unflipCards(state, commit)
  }
}

//скрытие 2-х одинаковых карт
function disableCards (state, commit) {
  setTimeout(() => {
    commit(
      'setShow',
      {
        id: state.firstCard.id,
        flag: false,
      })
    commit(
      'setShow',
      {
        id: state.secondCard.id,
        flag: false,
      })
    resetBoard(state)
  }, 500)
}

//переворот 2-х карт
function unflipCards (state, commit) {
  state.secondTimeoutID = setTimeout(() => {
    commit(
      'setFlip',
      {
        id: state.firstCard.id,
        flag: false,
      })
    commit(
      'setFlip',
      {
        id: state.secondCard.id,
        flag: false,
      })
    resetBoard(state)
  }, 5000)
}

//переворот 1 карты
function unflipSingleCard (state, commit) {
  state.firstTimeoutID = setTimeout(() => {
    commit(
      'setFlip',
      {
        id: state.firstCard.id,
        flag: false,
      })
    resetBoard(state)
  }, 5000)
}

//сброс игрового поля
function resetBoard (state) {
  state.hasFlippedCard = false
  state.firstCard = null
  state.secondCard = null
  if (state.firstTimeoutID !== 0) {
    clearTimeout(state.firstTimeoutID)
    state.firstTimeoutID = 0
  }
  if (state.secondTimeoutID !== 0) {
    clearTimeout(state.secondTimeoutID)
    state.secondTimeoutID = 0
  }
}
//сброс перевёрнутых карт по таймеру
function resetUnflipCards (state, commit) {
  if (state.secondTimeoutID !== 0) {
    clearTimeout(state.secondTimeoutID)
    commit(
      'setFlip',
      {
        id: state.firstCard.id,
        flag: false,
      })
    commit(
      'setFlip',
      {
        id: state.secondCard.id,
        flag: false,
      })
    resetBoard(state)
  }
}
//сброс одной перевёрнутой карты по таймеру
function resetUnflipSingleCard (state) {
  if (state.firstTimeoutID !== 0) {
    clearTimeout(state.firstTimeoutID)
    state.firstTimeoutID = 0
  }
}
//форматирование времени с ведущими нулями для рейтинга
function getFormattedTime (num) {
  let twoDigits = (value) => {
    if (value.toString().length <= 1) {
      return '0' + value.toString()
    }
    return value.toString()
  }

  const sec = Math.trunc(num) % 60
  const min = Math.trunc(num / 60) % 60

  return twoDigits(min) + ':' + twoDigits(sec)
}
//сброс игры и переход на главный экран
function resetGame () {
  this.stopTimer()
  this.resetBoard()
  this.createCards()
  this.$router.push({name: 'Home'})
}

export {
  getObjById,
  getIndexById,
  checkForMatch,
  resetUnflipCards,
  unflipSingleCard,
  resetUnflipSingleCard,
  resetBoard,
  getFormattedTime,
  resetGame,
}
