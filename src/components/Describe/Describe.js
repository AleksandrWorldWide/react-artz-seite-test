import { useDispatch, useSelector } from 'react-redux'
import { picActive } from '../../redux/reducer'
import css from './Describe.module.scss'
import shortid from 'shortid'
import { getByAltText } from '@testing-library/react'

export const Describe = () => {

	const data = useSelector((state) => state.patient.items)
	const dispatch = useDispatch()
	const tagIsActive = data.filter(item => item.isActive === true)
	let url, title, iconUrl, tagId

	if (tagIsActive.length > 0) {
		url = tagIsActive[0].url
		tagId = tagIsActive[0].id
		title = tagIsActive[0].human
		iconUrl = tagIsActive[0].pic
	} else {
		url = data[0].url
		tagId = data[0].id
		title = data[0].human
		iconUrl = data[0].pic
	}

	const posAlt = (f) => {
		let altX = 0, altY = 0, text_align = 'center'
		if ((f > 285 && f < 360) || (f >= 0 && f < 75)) {
			altX = 140
			altY = 65
			text_align = 'left'
		}
		if (f > 75 && f < 105) {
			altX = -60
			altY = 145
			text_align = 'center'
			
		}
		if (f > 255 && f < 285) {
			altX = -60
			altY = -30
			text_align = 'center'
		}
		if (f >= 105 && f <= 255) {
			altX = -270
			altY = 50
			text_align = 'right'
		}
		return {altX: altX, altY: altY, text_align: text_align}
	}

	return (
		<div className={css.Describe}>
			<div className={css.body}>
				<div className={css.image}>
					<img src={require(`../../assets/images/${url}.jpg`)} alt={url} />
				</div>
				<p className={css.image__title}>{title}</p>
				<ul>
					{
						iconUrl.map((item,index) => {
							const f = (360 / iconUrl.length) * Math.PI / 180
							const picF = 360 / iconUrl.length * index
							const x = 300 * Math.cos(f * index) + 15
							const y = 300 * Math.sin(f * index) + 15
							const {altX, altY, text_align} = posAlt(picF)		
							return (
								<li 
									key={shortid.generate()} 
									style={{top: y, left: x }}
									// onMouseMove={() => dispatch(picActive({tagId: tagId, picId: index, isActive: !item.isActive}))}
									onClick={() => dispatch(picActive({tagId: tagId, picId: index, isActive: !item.isActive}))}
								>
									<img 
										src={require(`../../assets/icons/${item.name}.png`)} 
										alt={item.alt} 
										
									/>	
									{item.isActive && <p 
										className={css.pic__alt}
										style={{top: altY, left: altX, textAlign: text_align}}
									>{item.alt}</p>}
								</li>
							)
						})
					}
			</ul>
			</div>
			
		</div>
	)
}