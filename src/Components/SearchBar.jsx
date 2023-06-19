
import search from "../assets/search.svg";
import hamburger from "../assets/hamburger.svg";
import "../styles/SearchBar.css";

export default function SearchBar() {
  return (
    <div className="search-ham">
      <div className="search">
        <img src={search} alt="search" />
        <input type="text" placeholder="Search..." />
      </div>
      <img src={hamburger} alt="hamburger" className="ham" />
    </div>
  );
}
