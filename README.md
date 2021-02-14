![Listingslab's SVG](https://raw.githubusercontent.com/listingslab-software/listingslab/develop/plugins/push2talk/public/svg/listingslabText.svg)

## React Debounce Hook

> [React Debounce Hook](https://listingslab.com/react-debounce-hook/)

One wheel we’re really bored of reinventing is the problem of throttling API requests in a text field Input context. Say you have a text field into which a user is typing a search term. To give them live results, you need to hit the API, right? But if you hit it on every keystroke, you are making more requests than you need to.

The solution is called debouncing. At the end of the day, JavaScript has an internal clock and some simple methods called set & clear timeout (), which if properly implemented will give you the control to optimise the number of API calls you’re making

Why React Hooks? They let us use state and other React features without writing a class. Hooks are backwards-compatible

#### useDebounce()

This is a hook called useDebounce. Create a new file with this content and import it into wherever you need to debounce something

`debounceHook.jsx`

```javascript
// eslint-disable-next-line
import React, { useState, useEffect } from 'react'

export default function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value)
  useEffect(() => {
      const handler = setTimeout(() => {
        setDebouncedValue(value)
      }, delay)
      return () => {
        clearTimeout(handler)
      }
    },
    [value] 
  )
  return debouncedValue
}
```

## Example Usage

`./src/Example.jsx`

```javascript
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
```
