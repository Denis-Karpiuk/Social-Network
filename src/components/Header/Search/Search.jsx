import { connect } from 'react-redux'
import { Field, Form, reduxForm, reset } from 'redux-form'
import search from '../../../assets/images/iconsApp/search.png'
import { getSearchUser } from '../../../redux/Users-Reducer'
import { required } from '../../../util/Validators'
import { InputSearch } from '../../Common/FormsControl/FormsControl'
import Icon from '../../Common/Icon/Icon'
import NavIcon from '../../Common/NavIcon/NavIcon'
import s from './Search.module.css'

const SearchUsersForm = ({ handleSubmit, search, reset, ...props }) => {
	return (
		<div className={s.searchForm}>
			<Form onSubmit={handleSubmit}>
				<div className={s.search}>
					<Field
						name='name'
						placeholder='Enter User Name '
						validate={[required]}
						component='input'
					/>
					<div onClick={handleSubmit} className={s.icon}>
						<NavIcon type='submit' link={'search'} img={search}></NavIcon>
					</div>
				</div>
			</Form>
		</div>
	)
}
const SearchReduxForm = reduxForm({ form: 'searchUsers' })(SearchUsersForm)

const SearchUser = ({ reset, ...props }) => {
	const onSearch = data => {
		props.getSearchUser(data.name)

		reset('searchUsers')
	}
	return (
		<div className={s.search}>
			<SearchReduxForm search={search} onSubmit={onSearch} />
		</div>
	)
}

export default connect(null, { getSearchUser, reset })(SearchUser)
