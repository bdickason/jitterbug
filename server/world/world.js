const Gameloop = require('node-gameloop')

class World {
  constructor() {
    this.state = {
      players: []
    }

    const loop = Gameloop.setGameLoop((delta) => {
      this.update()
    })

    console.log('there is a world here')
  }

  update(delta) {
    console.log('Players: ' + this.state.players)
  }
}

module.exports = World
