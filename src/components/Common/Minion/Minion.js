import push from '../../../assets/images/Minion/push.gif'
import kiss from '../../../assets/images/Minion/kiss.gif'
import dance from '../../../assets/images/Minion/dance.gif'
import idea from '../../../assets/images/Minion/idea.gif'
import ideas from '../../../assets/images/Minion/ideas.gif'
import music from '../../../assets/images/Minion/music.gif'
import jump from '../../../assets/images/Minion/jump.gif'
import jump2 from '../../../assets/images/Minion/jump2.gif'
import groups from '../../../assets/images/Minion/groups.gif'
import settings from '../../../assets/images/Minion/jump3.gif'
import fly from '../../../assets/images/Minion/fly.gif'
import s from './Minion.module.css'

let minions = {
	push,
	kiss,
	dance,
	idea,
	ideas,
	music,
	jump,
	jump2,
	groups,
	settings,
	fly,
}

const Minion = ({ minion }) => {
	return (
		<div className={s.minion}>
			<div>in progress....</div>
			<img src={minions[minion]} />
		</div>
	)
}

export default Minion
