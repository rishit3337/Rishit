import "../styles/Categories.css";
import Links from "./Links";
import SearchBar from "./SearchBar";

export default function Categories() {
  const data = [
    { 1: ["Bedroom", "/categories/bedroom"] },
    { 2: ["Dinning Room", "/categories/dinning-room"] },
    { 3: ["Meeting Room", "/categories/meeting-room"] },
    { 4: ["Workspace", "/categories/workspace"] },
    { 5: ["Living Room", "/categories/living-room"] },
    { 6: ["Room Kitchen", "/categories/room-kitchen"] },
    { 7: ["Living Space", "/categories/living-space"] },
  ];

  return (
    <div className="category">
      <SearchBar />
      <div className="top-category-cont">
        <div className="diff-category">
          <Links data={data} />
        </div>
      </div>
    </div>
  );
}
