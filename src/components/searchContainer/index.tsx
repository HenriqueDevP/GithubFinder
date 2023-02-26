import './styles.css'
import React, {ChangeEvent, HtmlHTMLAttributes, useState,KeyboardEvent} from 'react'


export type searchProps={
  loadUser: (search:string)=> Promise<void>;
}

function SearchContainer({loadUser}:searchProps){

  
const [userSearched,setUserSearched]=useState<string>('')

    
  async function   handleSearch(e:React.FormEvent<HTMLFormElement>){
e.preventDefault()
 await loadUser(userSearched)

}

const handleKeyDown= async(e:KeyboardEvent)=>{
if(e.key==='Enter'){
  await loadUser(userSearched)
}
}

    return(
        <>

       <form onSubmit={handleSearch} className="search-card">
<label htmlFor="githubUser">Search a github user</label>
<input type="text" name="githubUser" id="githubUser" placeholder='github user name' 
onChange={(e:ChangeEvent<HTMLInputElement>)=>setUserSearched(e.target.value)}
onKeyDown={handleKeyDown}
/>
<button type='submit'>Search</button>
       </form>
        </>
    ) 
}

export default SearchContainer