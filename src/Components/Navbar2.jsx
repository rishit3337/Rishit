
import "../styles/NavBar2.css";
import Links from "./Links";

export default function Side_Navbar({data , navbarRef}) {
  return (
    <div className="side_navbar" ref={navbarRef}> 
    <Links data={data}/>
    </div>
  )
}
