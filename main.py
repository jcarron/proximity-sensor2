distance = 0

def on_forever():
    global distance
    pins.digital_write_pin(DigitalPin.P2, 0)
    control.wait_micros(2)
    pins.digital_write_pin(DigitalPin.P2, 1)
    control.wait_micros(10)
    pins.digital_write_pin(DigitalPin.P2, 0)
    # v=d/t
    # d=v*t
    # D=d/2
    # D=v*t/2
    # v=(343m/s)*(100cm/m)/(1000000ms/s)
    # D=t*(343m/s)*(100cm/m)/(1000000ms/s)/2
    distance = Math.round(pins.pulse_in(DigitalPin.P1, PulseValue.HIGH) * (343 * 100 / 1000000 / 2))
    serial.write_value("distance", distance)
    control.wait_micros(500000)
basic.forever(on_forever)