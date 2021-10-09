import React from "react";
import SearchAirport from "./SearchAirport";


import "./../Main.css";
function Search() {
  return (
    <div>
      <div class="portfolio-popup open">
        <div class="pp-inner">
          <div class="pp-content">
            <div class="pp-header">
              <div class="pp-thumbnail">
                <img src="./img/portfolio/3.jpg" alt="" />
              </div>
              <h3>Airport ID, Name, City, or State:</h3>
            </div>
            <div class="pp-body">
              <SearchAirport />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
