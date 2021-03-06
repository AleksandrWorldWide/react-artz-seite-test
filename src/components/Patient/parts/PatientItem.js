
import css from './PatientItem.module.scss'
import { useDispatch } from 'react-redux'
import { active } from '../../../redux/reducer'

export const PatientItem = ({human, url, indications, isActive, id, match}) => {

	const dispatch = useDispatch()

	const cls = [
		css.image,
	]

	if (isActive) {
		cls.push(css.active)
	} 

	const clsItem = 'PatientItem' + match

	return (
		<div className={css[clsItem]}>
			<h3>{human}</h3>
			<div className={cls.join(' ')}>
				<img 
					src={require(`../../../assets/images/${url}.jpg`)} 
					alt={url} 
					onClick={() => dispatch(active({tagId: id, isActive: !isActive}))}
				/>
			</div>
			<ul>
				{isActive &&
					indications.map((item, index) => {
						return (
							<li key={index} className={css.item}>{item}</li>
						)
					})
				}
			</ul>
		</div>
	)
}