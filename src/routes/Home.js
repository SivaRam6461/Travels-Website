import Destination from "../components/Destination";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar  from "../components/Navbar";
import Trip from "../components/Trip";


function Home (){
return(
    <>
    <Navbar/>
    <Hero  
    cName ="hero"
    heroImg = "https://images.unsplash.com/photo-1735238075869-365228c7cb68?q=80&w=1946&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    title ="Your Jounery Your Story"
    text = "Choose Your Favourite Destination"
    buttonText = "Travel Plan"
    url ="/"
    btnClass = "show"
   />
   <Destination/>
   <Trip/>
   <Footer/>
   

    
    </>
)
}

export default Home ; 