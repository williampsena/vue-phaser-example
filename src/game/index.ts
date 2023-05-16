import meme from '@/assets/meme.png'
import Phaser from 'phaser'

export const getGame = () =>
  new Phaser.Game({
    title: 'Phaser vue game example',
    type: Phaser.AUTO,
    width: 800,
    height: 500,
    backgroundColor: 'white',
    physics: {
      default: 'arcade',
      arcade: {
        gravity: { y: 500 }
      }
    },
    render: {
      pixelArt: true
    },
    autoFocus: true,
    scale: {
      parent: 'app'
    },
    scene: [new VueScene()]
  })

export class VueScene extends Phaser.Scene {
  private logo?: Phaser.GameObjects.Image
  private text?: Phaser.GameObjects.Text

  constructor() {
    super({ key: 'default' })
  }

  preload() {
    this.load.image('meme', meme)
  }

  create() {
    this.text = this.add.text(100, this.cameras.main.height / 2 - 100, 'More information can be found at willsena.dev.')

    this.logo = this.add.image(-100, this.cameras.main.height / 2 + 60, 'meme')
    this.logo.scale = 0.25

    NuxtPhaser.eventEmitter?.addListener('pause', this.pauseGame, this)
  }

  update(): void {
    if (!this.logo) return

    const limitScreen = this.cameras.main.width * 1.5

    this.logo.x += 2

    if (this.logo.x > limitScreen) {
      this.logo.x = 0
    }
  }

  pauseGame() {
    if (this.game.isPaused) this.game.resume()
    else this.game.pause()
  }
}
