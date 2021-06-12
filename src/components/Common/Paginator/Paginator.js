import s from './Paginator.module.css'

const Paginator = ({ ...props }) => {
	let maxPageNumber = Math.ceil(props.totalCount / props.pageSize)
	let pages = []
	for (
		let i = props.pageStart;
		i <
		(props.pageStart + 10 < maxPageNumber
			? props.pageStart + 10
			: maxPageNumber + 1);
		i++
	)
		pages.push(i)

	let onPrev = () => {
		let pageNumber = props.pageStart - 10
		if (pageNumber >= 1) props.prevNextPages(pageNumber)
	}
	let onNext = () => {
		let pageNumber = props.pageStart + 10
		if (pageNumber < maxPageNumber) props.prevNextPages(pageNumber)
	}
	let onPageNumber = pageNumber => {
		props.activePage(pageNumber)
	}
	return (
		<div className={s.paginator}>
			<span className={s.prevPages} onClick={onPrev}>
				Prev
			</span>
			{pages.map(page => (
				<span
					key={page}
					className={props.pageNumber === page ? s.activePage : null}
					onClick={() => onPageNumber(page)}
				>
					{page}
				</span>
			))}
			<span className={s.nextPages} onClick={onNext}>
				Next
			</span>
		</div>
	)
}
export default Paginator
