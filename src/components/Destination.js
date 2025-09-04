import Mountain1 from "..//assets/1.jpg"
import Mountain2 from "..//assets/2.jpg"
import Mountain3 from "..//assets/3.jpg"
import Mountain4 from "..//assets/4.jpg" 
import DestinationData from "./DestinationData"
import "./DestinationStyle.css"


const Destination  =  ()=>{
    return(
     <div className="destination">
        <h1>Popular Destination</h1>
        <p>Tours give you the opportunity to see a lot, within a time frame</p>

       <DestinationData
       className="first-des"
       
       heading= "Asdf Kjhg Rgnm Ohgd"
       text ="Despite the fact that piranhas are relatively harmless,
             many people continue to believe the pervasive myth that
              piranhas are dangerous to humans. This impression of piranhas 
              is exacerbated by their mischaracterization in popular media. 
              For example,representation easily captures the imagination and
              promotes unnecessary fear."
        img1={Mountain1}
         img2={Mountain2}
       />

        <DestinationData
        className="first-des-reverse"
       
       heading= "Bydf King Rgnm Ohgd"
       text ="Despite the fact that piranhas are relatively harmless,
             many people continue to believe the pervasive myth that
              piranhas are dangerous to humans. This impression of piranhas 
              is exacerbated by their mischaracterization in popular media. 
              For example,representation easily captures the imagination and
              promotes unnecessary fear."
        img1={Mountain3}
         img2={Mountain4}
       />
     </div>
    )
}
export default Destination