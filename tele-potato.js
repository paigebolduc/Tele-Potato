let item = 0
let potato = 0
radio.onDataPacketReceived( ({ receivedNumber }) =>  {
    potato = receivedNumber
})
input.onButtonPressed(Button.AB, () => {
    item = 10 + Math.random(21)
})
input.onGesture(Gesture.Shake, () => {
    if (potato > 0) {
        radio.sendNumber(potato)
        potato = -1
    }
})
potato = -1
radio.setGroup(1)
basic.forever(() => {
    if (potato == 0) {
        basic.showIcon(IconNames.Skull)
        if (potato < 0) {
            basic.clearScreen()
        }
        if (potato > 0) {
            basic.showIcon(IconNames.Chessboard)
            potato += -1
        }
    }
})
