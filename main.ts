let strip = neopixel.create(DigitalPin.P0, 24, NeoPixelMode.RGB)
basic.forever(function () {
    strip.setPixelColor(0, neopixel.rgb(input.acceleration(Dimension.X), input.acceleration(Dimension.Y), input.acceleration(Dimension.Z)))
    strip.show()
    basic.pause(100)
    strip.shift(1)
})
