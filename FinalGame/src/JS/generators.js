//создание простого тестового поля
function generateSimpleGrid () {
    const images = ['facebook','instagram','messenger','skype','snapchat','telegram','twitter','viber','whatsup','zoom']
  let cards = []
  let card = {}
  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 6; j++) {
      card = {
        id: i * 10 + j,
        url: '../assests/' + images[Math.floor(Math.random() * images.length)] + '.png',
        item: `card__item-${i}-${j}`,
        isFlip: false,
        isShow: true,
      }
      cards.push(card)
    }
  }
  return cards
}
//создание поля со случайными неповторяющими попарными картами
function generateGrid () {
  const countCards = 18
  const countCells = 6
    const names = ['facebook','instagram','messenger','skype','snapchat','telegram','twitter','viber','whatsup','zoom']

  let cards = []
  let card = {}
  let grid = []
  let i = 0, j = 0

  for (i = 0; i < countCells; i++) {
    grid[i] = []
    for (j = 0; j < countCells; j++) {
      grid[i][j] = 0
    }
  }
  j = 0
  for (i = 0; i < countCards; i++) {
    let x = 0, y = 0
    do {
      x = Math.floor(Math.random() * countCells)
      y = Math.floor(Math.random() * countCells)
    } while (grid[x][y] !== 0)
    grid[x][y] = 1

    card = {
      id: i,
      nameCard: names[j],
      url: './src/assets/' + names[j] + '.png',
      item: `card__item-${x}-${y}`,
      isFlip: false,
      isShow: true,
    }
    cards.push(card)

    if ((i + 1) % 2 === 0) {
      j++
    }
  }
  return cards
}
//создание пользователей для рейтинга
function generateUsers () {
  let rating = []
  let user = {}
  for (let i = 0; i < 10; i++) {
    user = {
      nameUser: 'Player-' + i,
      timeUser: Math.floor(Math.random() * 90) + 30,
    }
    rating.push(user)
  }
  rating.sort((a, b) => a.timeUser - b.timeUser)
  return rating
}

export { generateGrid, generateUsers }
