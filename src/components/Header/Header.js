
import css from './Header.module.scss'
import { useSelector } from 'react-redux'

export const Header = ({match}) => {

	const data = useSelector((state) => state.header)
	const title = data.title
	const cls =  'Header' + match
	
	return (
		<header className={css[cls]}>
			<h1>{title}</h1>
		</header>
	)
}