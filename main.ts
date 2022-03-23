input.onButtonPressed(Button.A, function () {
    First_Number += 1
    basic.showNumber(First_Number)
})
input.onButtonPressed(Button.AB, function () {
    if (0 == Second_Number) {
        Second_Number = First_Number
        First_Number = 0
        basic.showNumber(First_Number)
        basic.showLeds(`
            . . . . .
            . . # . .
            . # # # .
            . . # . .
            . . . . .
            `)
        basic.showString("?")
        basic.showLeds(`
            . . . . .
            . # # # .
            . . . . .
            . # # # .
            . . . . .
            `)
        basic.showString("?")
    } else {
        basic.showNumber(First_Number)
        basic.showNumber(Second_Number)
        basic.showLeds(`
            . . . . .
            . . # . .
            . # # # .
            . . # . .
            . . . . .
            `)
        basic.showNumber(First_Number)
        basic.showLeds(`
            . . . . .
            . # # # .
            . . . . .
            . # # # .
            . . . . .
            `)
        basic.showNumber(Second_Number + First_Number)
    }
})
input.onButtonPressed(Button.B, function () {
    First_Number += -1
    basic.showNumber(First_Number)
})
input.onGesture(Gesture.Shake, function () {
    if (0 == Second_Number) {
        Second_Number = First_Number
        First_Number = 0
        basic.showNumber(First_Number)
        basic.showLeds(`
            . . . . .
            . . . . .
            . # # # .
            . . . . .
            . . . . .
            `)
        basic.showString("?")
        basic.showLeds(`
            . . . . .
            . # # # .
            . . . . .
            . # # # .
            . . . . .
            `)
        basic.showString("?")
    } else {
        basic.showNumber(Second_Number)
        basic.showLeds(`
            . . . . .
            . . . . .
            . # # # .
            . . . . .
            . . . . .
            `)
        basic.showNumber(First_Number)
        basic.showLeds(`
            . . . . .
            . # # # .
            . . . . .
            . # # # .
            . . . . .
            `)
        basic.showNumber(Second_Number - First_Number)
    }
})
let Second_Number = 0
let First_Number = 0
basic.showLeds(`
    . . . . .
    . . # . .
    . # # # .
    . . # . .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . # # # .
    . . . . .
    . . . . .
    `)
First_Number = 0
Second_Number = 0
