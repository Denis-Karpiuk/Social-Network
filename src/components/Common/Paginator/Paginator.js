import { logDOM } from '@testing-library/react'
import React, { useState } from 'react'
import s from './Paginator.module.css'

const Paginator = ({
	pageSize,
	pageNumber,
	totalCount,
	portionSize = 10,
	onPageNumber,
	...props
}) => {
	let pagesCount = Math.ceil(totalCount / pageSize)
	let pages = []
	for (let i = 0; i < pagesCount; i++) pages.push(i)
	let portionCount = pagesCount / portionSize
	let portionNuber =
		pageNumber / portionSize < 1 ? 1 : Math.ceil(pageNumber / portionSize)
	const leftPortionPageNumber = (portionNuber - 1) * portionSize + 1
	const rightPortionPageNumber = portionNuber * portionSize

	return (
		<div className={s.paginator}>
			{portionNuber > 1 && (
				<button
					onClick={() => onPageNumber(leftPortionPageNumber - portionSize)}
				>
					Prev
				</button>
			)}
			{pages
				.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
				.map(p => (
					<span
						key={p}
						className={pageNumber === p ? s.activePage : null}
						onClick={() => onPageNumber(p)}
					>
						{p}
					</span>
				))}
			{portionCount > portionNuber && (
				<button onClick={() => onPageNumber(rightPortionPageNumber + 1)}>
					Next
				</button>
			)}
		</div>
	)
}
export default Paginator
