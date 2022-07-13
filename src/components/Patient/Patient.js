import { PatientItem } from './parts/PatientItem'
import css from './Patient.module.scss'
import { useSelector } from 'react-redux'
import shortid from 'shortid'

export const Patient = () => {


	const data = useSelector((state) => state.patient)


	const title = data.title
	const patients = data.items

	return (
		<div className={css.Patient}>
			<h2>{title}</h2>
			<div className={css.content}>
				{
					patients.map((item, index) => {
						const {human, url, indications, isActive, id} = item
						return (
							<PatientItem
								key={shortid.generate()}
								id = {id}
								human={human}
								url={url}
								isActive={isActive}
								indications={indications}
							/>
						)
					})
				}
			</div>
		</div>
	)
}