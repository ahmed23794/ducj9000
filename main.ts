controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    smurfy.drop_smurf()
    info.startCountdown(7)
})
info.onCountdownEnd(function () {
    info.changeLifeBy(1)
    info.startCountdown(7)
})
let win = 0
let _42 = 0
smurfy.set_first_smurf(assets.image`jump`)
scene.setBackgroundColor(13)
smurfy.add_floating_smurf()
info.startCountdown(7)
info.setLife(5)
_42 += win
game.onUpdate(function () {
	
})
