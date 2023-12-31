let distance = 0
let limit = 100
music.setVolume(100)
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P1, 0)
    control.waitMicros(2)
    pins.digitalWritePin(DigitalPin.P1, 1)
    control.waitMicros(10)
    pins.digitalWritePin(DigitalPin.P1, 0)
    // v=d/t
    // d=v*t
    // D=d/2
    // D=v*t/2
    // v=(343m/s)*(100cm/m)/(1000000ms/s)
    // D=t*(343m/s)*(100cm/m)/(1000000ms/s)/2
    distance = Math.round(pins.pulseIn(DigitalPin.P0, PulseValue.High) * (343 * 100 / 1000000 / 2))
    if (distance <= limit) {
        serial.writeValue("distance", distance)
        control.waitMicros(500000)
    } else {
        distance = limit
        serial.writeValue("distance", distance)
        control.waitMicros(250000)
        led.plotBarGraph(
        distance,
        limit
        )
    }
})
basic.forever(function () {
	
})
