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
               className="search-field"
               value={ searchTerm }
               onChange={ (e) => {
                 e.preventDefault()
                   setSearchTerm( e.target.value )
               }}/>
           </header>
         </div>
}
