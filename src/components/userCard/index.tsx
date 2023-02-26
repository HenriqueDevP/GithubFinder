import './styles.css'
import { userProps } from "../../types/user"
import {MdLocationOn} from 'react-icons/md'


function UserCard({avatar_url,login,location,following,followers}:userProps){

    
    return(
        <>
        <div className="user-card">
           
         <img  id='userPhoto' src={avatar_url} alt="user avatar" />
         <h3>{login}</h3>
         <div className='user-info'>
           {location? <p>{location} <MdLocationOn className="info-icon"/></p>
           :<p>Empty <MdLocationOn className="info-icon"/></p>}
            <p>Followers: {followers}</p>
            <p>Following: {following}</p>
            </div>
           
         </div>
        
    
        </>
    )
}

export default UserCard