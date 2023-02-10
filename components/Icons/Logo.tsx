import { useState, useCallback, useEffect } from 'react'
import { BEAT_NUMBER } from '../../lib/constants'

interface LogoInterface {
	pastBeat?: number // количество тактов анимации
	beatNumber?: number // количество прошедших тактов
}

export function Logo({ pastBeat = 0, beatNumber = BEAT_NUMBER }: LogoInterface) {
	// первый внешний круг
	const [so1, setSo1] = useState({
		a: 0, // угол
		x: 120,
		y: 60,
		l: 1, // 1, если дуга круга > 180 градусов
		xe: 70, // координаты второго края круга
		ye: 119.161,
	})
	// первый внутренний круг
	const [si1, setSi1] = useState({
		a: 0, // угол
		x: 80,
		y: 60,
		l: 1,
		xe: 70,
		ye: 77.321,
	})
	// второй внешний круг
	const [so2, setSo2] = useState({
		a: 350.406, // угол
		x: 199.161,
		y: 130,
		l: 1,
		xe: 199.161,
		ye: 110,
	})
	// второй внутренний круг
	const [si2, setSi2] = useState({
		a: 330, // угол
		x: 157.321,
		y: 130,
		l: 1,
		xe: 157.321,
		ye: 110,
	})
	// прямоугольник
	const [sr, setSr] = useState({
		t: 59, // верхняя координата
		b: 120, // нижняя координата
	})

	const draw = useCallback(() => {
		let beat = pastBeat % beatNumber // количество прошедших тактов

		const o1 = { a: 0, x: 120, y: 60, l: 1, xe: 70, ye: 119.161 }
		const i1 = { a: 0, x: 80, y: 60, l: 1, xe: 70, ye: 77.321 }
		const o2 = { a: 350.406, x: 199.161, y: 130, l: 1, xe: 199.161, ye: 110 }
		const i2 = { a: 330, x: 157.321, y: 130, l: 1, xe: 157.321, ye: 110 }
		const r = { t: 59, b: 120 }

		if (beat <= beatNumber / 3) {
			o2.a = 350.406 - (beat * 340.812) / (beatNumber / 3)
			i2.a = 330 - (beat * 300) / (beatNumber / 3)

			let kv21 = 3600 / (Math.pow(Math.tan((o2.a * Math.PI) / 180), 2) + 1),
				kv22 = 400 / (Math.pow(Math.tan((i2.a * Math.PI) / 180), 2) + 1)

			o2.x = Math.sqrt(kv21)
			o2.y = Math.sqrt(3600 - kv21)
			i2.x = Math.sqrt(kv22)
			i2.y = Math.sqrt(400 - kv22)

			o2.x = o2.a < 270 && o2.a > 90 ? -o2.x : o2.x
			o2.y = o2.a < 180 ? -o2.y : o2.y
			i2.x = i2.a < 270 && i2.a > 90 ? -i2.x : i2.x
			i2.y = i2.a < 180 ? -i2.y : i2.y

			o2.x += 140
			o2.y += 120
			i2.x += 140
			i2.y += 120

			o2.l = o2.a < 189.596 ? 0 : 1
			i2.l = i2.a < 210 ? 0 : 1
		} else if (beat > beatNumber / 3 && beat <= beatNumber / 2) {
			o2.x = 199.161
			o2.y = 110
			i2.x = 157.321
			i2.y = 110
			o2.l = 0
			i2.l = 0
		}
		if (beat > beatNumber / 6 && beat <= (5 * beatNumber) / 24) {
			r.b = 120 - ((beat - beatNumber / 6) * 61) / (beatNumber / 24)
		} else if (beat > (5 * beatNumber) / 24 && beat <= (2 * beatNumber) / 3) {
			r.b = 59
		}
		if (beat > (5 * beatNumber) / 24 && beat <= (1 * beatNumber) / 2) {
			o1.a = ((beat - (5 * beatNumber) / 24) * 279.544) / ((7 * beatNumber) / 24)
			i1.a = ((beat - (5 * beatNumber) / 24) * 299.999) / ((7 * beatNumber) / 24)

			var kv11 = 3600 / (Math.pow(Math.tan((o1.a * Math.PI) / 180), 2) + 1),
				kv12 = 400 / (Math.pow(Math.tan((i1.a * Math.PI) / 180), 2) + 1)

			o1.x = Math.sqrt(kv11)
			o1.y = Math.sqrt(3600 - kv11)
			i1.x = Math.sqrt(kv12)
			i1.y = Math.sqrt(400 - kv12)

			o1.x = o1.a < 270 && o1.a > 90 ? -o1.x : o1.x
			o1.y = o1.a < 180 ? -o1.y : o1.y
			i1.x = i1.a < 270 && i1.a > 90 ? -i1.x : i1.x
			i1.y = i1.a < 180 ? -i1.y : i1.y

			o1.x += 60
			o1.y += 60
			i1.x += 60
			i1.y += 60

			o1.l = o1.a < 99.544 ? 1 : 0
			i1.l = i1.a < 119.999 ? 1 : 0
		} else if (beat > beatNumber / 2 && beat <= (17 * beatNumber) / 24) {
			o1.x = 70
			o1.y = 119.161
			i1.x = 70
			i1.y = 77.321
			o1.l = 0
			i1.l = 0
		}
		if (beat > beatNumber / 2 && beat <= (5 * beatNumber) / 6) {
			o2.x = 199.161
			o2.y = 130
			i2.x = 157.321
			i2.y = 130

			o2.a = 350.406 - ((beat - beatNumber / 2) * 340.812) / (beatNumber / 3)
			i2.a = 330 - ((beat - beatNumber / 2) * 300) / (beatNumber / 3)

			var kv21 = 3600 / (Math.pow(Math.tan((o2.a * Math.PI) / 180), 2) + 1),
				kv22 = 400 / (Math.pow(Math.tan((i2.a * Math.PI) / 180), 2) + 1)

			o2.xe = Math.sqrt(kv21)
			o2.ye = Math.sqrt(3600 - kv21)
			i2.xe = Math.sqrt(kv22)
			i2.ye = Math.sqrt(400 - kv22)

			o2.xe = o2.a < 270 && o2.a > 90 ? -o2.xe : o2.xe
			o2.ye = o2.a < 180 ? -o2.ye : o2.ye
			i2.xe = i2.a < 270 && i2.a > 90 ? -i2.xe : i2.xe
			i2.ye = i2.a < 180 ? -i2.ye : i2.ye

			o2.xe += 140
			o2.ye += 120
			i2.xe += 140
			i2.ye += 120

			o2.l = o2.a > 170.404 ? 0 : 1
			i2.l = i2.a > 150 ? 0 : 1
		} else if (beat > (5 * beatNumber) / 6) {
			o2.x = 199.161
			o2.y = 130
			i2.x = 157.321
			i2.y = 130
			o2.xe = 199.161
			o2.ye = 110
			i2.xe = 157.321
			i2.ye = 110
			o2.l = 1
			i2.l = 1
		}
		if (beat > (2 * beatNumber) / 3 && beat <= (17 * beatNumber) / 24) {
			r.b = 120
			r.t = 120 - ((beat - (2 * beatNumber) / 3) * 61) / (beatNumber / 24)
		} else if (beat > (17 * beatNumber) / 24) {
			r.b = 120
			r.t = 59
		}
		if (beat > (17 * beatNumber) / 24) {
			o1.x = 120
			o1.y = 60
			i1.x = 80
			i1.y = 60

			o1.a = ((beat - (17 * beatNumber) / 24) * 279.544) / ((7 * beatNumber) / 24)
			i1.a = ((beat - (17 * beatNumber) / 24) * 299.999) / ((7 * beatNumber) / 24)

			var kv11 = 3600 / (Math.pow(Math.tan((o1.a * Math.PI) / 180), 2) + 1),
				kv12 = 400 / (Math.pow(Math.tan((i1.a * Math.PI) / 180), 2) + 1)

			o1.xe = Math.sqrt(kv11)
			o1.ye = Math.sqrt(3600 - kv11)
			i1.xe = Math.sqrt(kv12)
			i1.ye = Math.sqrt(400 - kv12)

			o1.xe = o1.a < 270 && o1.a > 90 ? -o1.xe : o1.xe
			o1.ye = o1.a < 180 ? -o1.ye : o1.ye
			i1.xe = i1.a < 270 && i1.a > 90 ? -i1.xe : i1.xe
			i1.ye = i1.a < 180 ? -i1.ye : i1.ye

			o1.xe += 60
			o1.ye += 60
			i1.xe += 60
			i1.ye += 60

			o1.l = o1.a < 180 ? 0 : 1
			i1.l = i1.a < 180 ? 0 : 1
		}

		setSo1(o1)
		setSi1(i1)
		setSo2(o2)
		setSi2(i2)
		setSr(r)
	}, [pastBeat, beatNumber])

	useEffect(() => draw(), [pastBeat, beatNumber, draw])

	return (
		<svg viewBox='0 0 200 180'>
			<path
				d={`M ${so1.xe} ${so1.ye} A 60 60 0 ${so1.l} 1 ${so1.x} ${so1.y} L ${si1.x} ${si1.y} A 20 20 0 ${si1.l} 0 ${si1.xe} ${si1.ye} Z`}
			/>
			<path d={`M 80 ${sr.t} L 120 ${sr.t} L 120 ${sr.b} L 80 ${sr.b} Z`} />
			<path
				d={`M ${so2.x} ${so2.y} A 60 60 0 ${so2.l} 1 ${so2.xe} ${so2.ye} L ${si2.xe} ${si2.ye} A 20 20 0 ${si2.l} 0 ${si2.x} ${si2.y} Z`}
			/>
		</svg>
	)
}
