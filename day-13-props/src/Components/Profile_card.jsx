
import './Profile_card.css'
import Avatar from './Avatar'
import Bio from './Bio'
import Stats from './Stats'




function ProfileCard(props){

    return <>

    <div className="main">


        <Avatar img={props.img}></Avatar>


        <Bio name={props.name} job_name={props.job} description={props.description}></Bio>


        <Stats stats={props.stats}></Stats>

        

        
    </div>
    
    
    
    </>

}

export default ProfileCard