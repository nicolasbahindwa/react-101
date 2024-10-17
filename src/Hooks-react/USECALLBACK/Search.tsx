import React, { FC , memo} from 'react'
 

interface SearchProps{
    onChange: (text:string) => void;
}

const Search: FC<SearchProps> = ({onChange}) => {
    console.log('search rendered')
  return (
    <div>
        <input
         type='text'
         className='search-input border border-gray-400 ml-2'
          placeholder='search' 
          onChange = {(e)=> onChange(e.target.value)}/>
    </div>
  )
}

export default memo(Search)