class Turn {
  static id = 0

  constructor(player, time, roll) {
    Turn.id = Turn.id + 1
    
    this.id = Turn.id
    this.player = player
    this.time = time
    this.roll = roll
  }
}

export default Turn