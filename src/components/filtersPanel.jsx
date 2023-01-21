import { useEffect, useState } from "react";

const locations = [
  "Helsinki, Finland",
  "Turku, Finland",
  "Oulu, Finland",
  "Vaasa, Finland",
];
export const FiltersPanel = ({
  setLocation,
  setGuests,
  location,
  guests,
  setShowFilters,
  className,
}) => {
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);

  useEffect(() => {
    setGuests(children + adults);
  }, [children, adults]);

  return (
    <div className={`${className} filters-panel-backdrop`}>
      <div className="filters-panel-container">
        <div className="filters-top">
          <p className="filters-top-label">Edit your search</p>
          <button
            className="filter-panel-close"
            onClick={() => setShowFilters(false)}
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        <div className="filters-panel">
          <div className="filter">
            <div className="filters-field">
              <label htmlFor="location">LOCATION</label>
              <input
                name="location"
                id="location"
                className="filter-input"
                placeholder="Add Location"
                onChange={(e) => setLocation(e.target.value)}
                value={location}
              />
            </div>
            <div className="filters-selection">
              <ul className="location-list">
                {locations.map((location) => (
                  <li
                    onClick={() => setLocation(location)}
                    className="location-item"
                    key={location}
                  >
                    <span className="material-symbols-outlined">
                      location_on
                    </span>
                    {location}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="filter">
            <div className="filters-field">
              <label htmlFor="guests">GUESTS</label>
              <input
                readOnly
                name="guests"
                id="guests"
                value={guests > 0 ? `${guests} guests` : ""}
                className="filter-input"
                placeholder="Add Guests"
              ></input>
            </div>
            <div className="filters-selection">
              <div className="guest-type-container">
                <p className="guest-title">Adults</p>
                <p className="guest-subtitle">Age 13 or above</p>
                <div className="guest-buttons-container">
                  <button onClick={() => setAdults(adults ? adults - 1 : 0)}>
                    -
                  </button>
                  <p className="guest-count">{adults}</p>
                  <button onClick={() => setAdults(adults + 1)}>+</button>
                </div>
              </div>
              <div
                style={{ marginTop: "50px" }}
                className="guest-type-container"
              >
                <p className="guest-title">Children</p>
                <p className="guest-subtitle">Age 2-12</p>
                <div className="guest-buttons-container">
                  <button
                    onClick={() => setChildren(children ? children - 1 : 0)}
                  >
                    -
                  </button>
                  <p className="guest-count">{children}</p>
                  <button onClick={() => setChildren(children + 1)}>+</button>
                </div>
              </div>
            </div>
          </div>
          <div className="filter">
            <div className="filters-field">
              <button
                className="filter-button"
                onClick={() => setShowFilters(false)}
              >
                <span className="material-symbols-outlined">search</span>
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
