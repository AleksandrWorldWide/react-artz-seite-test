
import css from './Header.module.scss'
import { useSelector } from 'react-redux'

export const Header = () => {

	const data = useSelector((state) => state.header)
	const title = data.title

	return (
		<header className={css.Header}>
			<h1>{title}</h1>
		</header>
	)
}