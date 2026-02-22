import Phaser from 'phaser'
import { registerSW } from 'virtual:pwa-register'

class MainScene extends Phaser.Scene {
  constructor() {
    super('main')
  }

  create() {
    this.add.text(40, 40, 'Phaser + TypeScript + Vite + PWA', {
      color: '#ffffff',
      fontSize: '24px'
    })
  }
}

new Phaser.Game({
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  backgroundColor: '#1d1d1d',
  parent: 'app',
  scene: [MainScene]
})

registerSW()
