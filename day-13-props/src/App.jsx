

import ProfileCard from "./Components/Profile_card"
import man_image from "./assets/image.png"

function App() {

  

  let name = "Rohan Sah";
  let job = "Backend developer";


  let description = `Hi my name is ${name} and I am a ${job}. I have been working in this industry for 10 yrs.`

  let stats = [100,"fancy","good"]

  return <>
  
    <ProfileCard name = {name} job={job} description={description} stats={stats} img={man_image}></ProfileCard>
  </>
  

  
}

export default App
