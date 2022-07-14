import { useSelector } from 'react-redux'
import css from './Answer.module.scss'

export const Answer = ({match}) => {

	const data = useSelector((state) => state.answer)
	const {title, subtitle} = data

	const cls = 'Answer' + match

	return (
		<div className={css[cls]}>
			<p className={css.title}>{title}</p>
			<p className={css.subtitle}>{subtitle}</p>
		</div>
	)
}