import { useState } from "react";
import Logo from "../assets/logo.png";
import { FiltersPanel } from "./filtersPanel";

export const Layout = ({ children }) => {
  const [location, setLocation] = useState("");
  const [guests, setGuests] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="main-container">
      <header>
        <p className="nav-brand">
          <img height="40" src={Logo} />
        </p>
        <button onClick={() => setShowFilters(true)} className="filters-button">
          <p
            className={
              location ? "filters-btn-text" : "text-mute filters-btn-text"
            }
          >
            {location || "Add location"}
          </p>
          <p
            className={
              guests ? "filters-btn-text" : "text-mute filters-btn-text"
            }
          >
            {guests ? `${guests} guests` : "Add guests"}
          </p>
          <span className="search-icon material-symbols-outlined">search</span>
        </button>
      </header>
      <main>{children}</main>
      <footer>
        Created by <strong>iamvishal345</strong> - devChallenges.io
      </footer>
      <FiltersPanel
        className={showFilters ? "show" : ""}
        guests={guests}
        setGuests={setGuests}
        location={location}
        setLocation={setLocation}
        setShowFilters={setShowFilters}
      />
    </div>
  );
};
