import React from 'react';
import {ReactComponent as SearchIcon} from "assets/icon-search.svg"
import styles from './Search.module.scss';
import { Button } from 'components/Button'
import {useRef} from 'react'

interface SearchProps { 
	hasError: boolean,
	onSubmit: (text: string) => void, 

}

export const Search = ({ hasError, onSubmit}: SearchProps) => {
const searchRef = useRef<HTMLInputElement | null>(null)
const handleSubmit = (event: React.FormEvent) => {
	event.preventDefault()

	const text = searchRef.current ? searchRef.current.value : ''
	if(text.trim()) {
		onSubmit(text)
		if(searchRef.current)
			searchRef.current.value =''
	}
}

 return ( 
 	<form onSubmit ={handleSubmit} autoComplete="off">
	<div className={styles.search}>
	<label htmlFor="search" className={styles.label}>
		<SearchIcon />
	</label>
	<input 
	ref={searchRef}
	type="text" className={styles.textField}
	id="search"
	name = "username"
	placeholder='Search GitHub username...'
	/>

	{hasError && (
	<div className={styles.error}>No result</div>
	)}
	<Button>Search</Button>
	</div>
 	 </form>
	)
	}
	

