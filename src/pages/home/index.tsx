import axios from "axios"
import { useState } from "react"
import SearchContainer from "../../components/searchContainer"
import UserCard from "../../components/userCard"
import Error from "../../components/Error"
import { userProps } from "../../types/user"
import './styles.css'
import Loading from "../../components/Loading"
function Home(){

    const [user,setUser]= useState<userProps | null>(null)
const [error,setError]=useState<Boolean>(false)
const [loading,setLoading]=useState<Boolean>(false)

const loadUser= async(search:string)=>{
    setError(false)
    setUser(null)
    setLoading(true)
    const userInfo= await axios.get(`https://api.github.com/users/${search}`)
    .then(res=>res).catch(error=>error)

    
if(userInfo.response){
    setError(true)
    setLoading(false)
    return
}


    const {avatar_url,login,location,followers,following}=userInfo.data
const userData:userProps={
    avatar_url,
    login,
    location,
    followers,
    following
}
setLoading(false)
setUser(userData)

}

    return(
        <>
        <div className="home">
        <SearchContainer loadUser={loadUser}/>
      {user && <UserCard {...user}/>}
      {error && <Error />}
      {loading && <Loading/>}
        </div>
        </>
    )
}

export default Home