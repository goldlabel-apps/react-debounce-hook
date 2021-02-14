import React from 'react'
import './Example.css'
import useDebounce from './debounceHook'

export default function Example() {

	const [searchTerm, setSearchTerm] = React.useState( `` )
	const debouncedSearchTerm = useDebounce( searchTerm, 500 )
	React.useEffect(() => {
		if (debouncedSearchTerm) {
			console.log ('debouncedAPICall', debouncedSearchTerm )
		}
	}, [ debouncedSearchTerm ] )

	return <div className="app">

			<header className="header">

			<input
				autoFocus
				type={`text`} 
				className="search-field"
				value={ searchTerm }
				id={ `search-term` }
		        onChange={ (e) => {
		        	e.preventDefault()
		        	setSearchTerm( e.target.value )
		        }}
		   	/>

		   	<a
	          className="link"
	          href="https://reactjs.org"
	          target="_blank"
	          rel="noopener noreferrer"
	        >
	          No way, Get Fucked, Fuck off.
	        </a>

			</header>

			
		   	

		   </div>
}