let potato = 0
radio.onDataPacketReceived( ({ receivedNumber }) =>  {
    potato = receivedNumber
})
input.onGesture(Gesture.Shake, () => {
    if (potato > 0) {
        radio.sendNumber(potato)
        potato = -1
    }
})
input.onButtonPressed(Button.AB, () => {
    potato = 10 + Math.random(21)
})
radio.setGroup(1)
potato = -1
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

