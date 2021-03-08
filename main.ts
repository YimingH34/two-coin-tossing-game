// When you press the A button, it determines whether a coin is head or tails and after 2 coins, it will tell you who wins.
input.onButtonPressed(Button.A, function () {
    let Tails = 0
    Head = 0
    Coin = randint(0, 2)
    if (Coin == 1) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . # . #
            # . . . #
            # # # # #
            `)
        basic.showString("head")
        head_1 += 1
    } else {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # . # .
            . # # # .
            . . . . .
            `)
        basic.showString("tail")
        tail_1 += 1
    }
    Coin = 0
    Coin = randint(0, 2)
    if (Coin == 1) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . # . #
            # . . . #
            # # # # #
            `)
        basic.showString("head")
        Head += 1
    } else {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # . # .
            . # # # .
            . . . . .
            `)
        basic.showString("tail")
        tail_1 += 1
    }
    if (tail_1 && Tails) {
        basic.showString("Player 1 wins")
        player_1 += 1
    } else if (Head && head_1) {
        basic.showString("Player 1 wins")
        player_1 += 1
    } else {
        basic.showString("Player 2 wins")
        player_2 += 1
    }
})
// When you press the B button, it will show the scores of the players.
input.onButtonPressed(Button.B, function () {
    basic.showString("Player 1")
    basic.showNumber(player_1)
    basic.pause(200)
    basic.showString("Player 2")
    basic.showNumber(player_2)
})
// This sets everything to 0.
let tail_1 = 0
let head_1 = 0
let Head = 0
let player_2 = 0
let player_1 = 0
let Coin = 0
let total = 0
Coin = 0
player_1 = 0
player_2 = 0
basic.forever(function () {
	
})
