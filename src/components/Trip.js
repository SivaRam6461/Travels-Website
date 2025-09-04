import "./TripStyle.css"
import Tripdata from "./TripData"
import Trip1 from "../assets/5.jpg"
import Trip2 from "../assets/8.jpg"
import Trip3 from "../assets/6.jpg"

function Trip(){
    return(
        <div className="trip">

      <h1>Recent Trips</h1>
      <p>You can discover unique destinations using Google Maps</p>
      <div className="tripcard">

       <Tripdata
        image={Trip1}
        heading="Trip in indonesia"
        text="Indonesia, country located off the coast of mainland Southeast Asia in
         the Indian and Pacific oceans. The most populous country in Southeast Asia
          and the fourth most populous in the world, Indonesia is situated on an archipelago
           that lies across the Equator and spans a distance equivalent to one-eighth of Earth’s circumference.
            Its islands can be grouped into the Greater Sunda Islands of Sumatra (Sumatera), Java (Jawa),"
       />

          <Tripdata
        image={Trip2}
        heading="Trip in Malaysia"
        text="Indonesia, country located off the coast of mainland Southeast Asia in
         the Indian and Pacific oceans. The most populous country in Southeast Asia
          and the fourth most populous in the world, Indonesia is situated on an archipelago
           that lies across the Equator and spans a distance equivalent to one-eighth of Earth’s circumference.
            Its islands can be grouped into the Greater Sunda Islands of Sumatra (Sumatera), Java (Jawa),"
       />

          <Tripdata
        image={Trip3}
        heading="Trip in france"
        text="Indonesia, country located off the coast of mainland Southeast Asia in
         the Indian and Pacific oceans. The most populous country in Southeast Asia
          and the fourth most populous in the world, Indonesia is situated on an archipelago
           that lies across the Equator and spans a distance equivalent to one-eighth of Earth’s circumference.
            Its islands can be grouped into the Greater Sunda Islands of Sumatra (Sumatera), Java (Jawa),"
       />


      </div>
        </div>
    )
}

export default Trip