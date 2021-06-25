import { connect } from 'react-redux'
import { create } from 'react-test-renderer'
import { reduxForm } from 'redux-form'
import { required } from '../../../util/Validators'
import {
	createField,
	Input,
	Textarea,
} from '../../Common/FormsControl/FormsControl'
import s from './FormAbout.module.css'

const FormAbout = ({ handleSubmit, contacts, error }) => {
	return (
		<form onSubmit={handleSubmit} className={s.formAbout}>
			<div className={s.fullName}>
				<b>FullName :</b>{' '}
				{createField('fullName', 'fullName', [required], Input, '')}
			</div>
			<div className={s.jobs__looking}>
				<b>Looking for a job :</b>
				{createField('lookingForAJob', '', [], Input, 'checkbox')}
			</div>
			<div className={s.jobs__looking__description}>
				<b>My professionl skills :</b>
				{createField(
					'lookingForAJobDescription',
					'My professionl skills',
					[required],
					Textarea,
					''
				)}
			</div>
			<div className={s.about}>
				<b>About Me :</b>{' '}
				{createField('aboutMe', 'About Me', [required], Textarea, '')}
			</div>
			<div>
				{Object.keys(contacts).map(key => (
					<div key={key} className={s.contact__item}>
						<b>{key}</b> {createField('contacts.' + key, key, [], Input, '')}
					</div>
				))}
			</div>
			{!error ? null : <div className={s.form__serverError}> {error}</div>}
			<button>save</button>
		</form>
	)
}
const AboutReduxForm = reduxForm({ form: 'AboutForm' })(FormAbout)

export default AboutReduxForm
