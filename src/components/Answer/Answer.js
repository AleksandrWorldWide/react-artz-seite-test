import { useSelector } from 'react-redux'
import css from './Answer.module.scss'

export const Answer = () => {

	const data = useSelector((state) => state.answer)

	const {title, subtitle} = data

	return (
		<div className={css.Answer}>
			<p className={css.title}>{title}</p>
			<p className={css.subtitle}>{subtitle}</p>
		</div>
	)
}