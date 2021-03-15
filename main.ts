// on button A, 'P1' goes up by 1
input.onButtonPressed(Button.A, function () {
    basic.showString("P1")
    basic.pause(200)
    basic.showLeds(`
        # . . . #
        . # # # .
        . # # # .
        . # # # .
        # . . . #
        `)
    basic.pause(200)
    P1 += 1
    basic.showNumber(P1)
})
// on screen down, 'P2' goes down by 1
input.onGesture(Gesture.ScreenDown, function () {
    basic.showString("P2")
    basic.pause(200)
    basic.showLeds(`
        . # # # .
        # . . . #
        # . # . #
        # . . . #
        . # # # .
        `)
    basic.pause(200)
    P2 += -1
    basic.showNumber(P2)
})
// resets program
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Square)
    basic.showIcon(IconNames.SmallSquare)
    basic.showIcon(IconNames.Square)
    P1 = 0
    P2 = 0
})
// on button B, 'P2' goes up by 1
input.onButtonPressed(Button.B, function () {
    basic.showString("P2")
    basic.pause(200)
    basic.showLeds(`
        . # # # .
        # . . . #
        # . # . #
        # . . . #
        . # # # .
        `)
    basic.pause(200)
    P2 += 1
    basic.showNumber(P2)
})
// on shake, random true or false is picked
// - if true, H is shown
// - if false, T is shown
// - if true and false, H&T is shown
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Square)
    basic.showIcon(IconNames.SmallSquare)
    basic.showIcon(IconNames.Square)
    random = Math.randomBoolean()
    if (true || true) {
        basic.showString("H")
        basic.pause(200)
        basic.showIcon(IconNames.Ghost)
    } else if (false || false) {
        basic.showString("T")
        basic.pause(200)
        basic.showIcon(IconNames.Sword)
    } else if (true && false) {
        basic.showString("H&T")
        basic.pause(200)
        basic.showLeds(`
            # . # . #
            # # # # #
            # . # . #
            . . # . .
            . # # # .
            `)
    }
})
// on logo down, 'P1' goes down by 1
input.onGesture(Gesture.LogoDown, function () {
    basic.showString("P1")
    basic.pause(200)
    basic.showLeds(`
        # . . . #
        . # # # .
        . # # # .
        . # # # .
        # . . . #
        `)
    basic.pause(200)
    P1 += -1
    basic.showNumber(P1)
})
// name of program is shown; sets both 'P1' & 'P2' to 0
let random = false
let P2 = 0
let P1 = 0
basic.showIcon(IconNames.Square)
basic.showIcon(IconNames.SmallSquare)
basic.showIcon(IconNames.Square)
basic.pause(200)
basic.clearScreen()
basic.showString("Two Coin Toss")
basic.pause(200)
P1 = 0
P2 = 0
