import Data from "./assets/data.json";
import { Card } from "./components/card";

export const LandingPage = () => {
  return (
    <>
      <div className="page-title-container">
        <h1>Stays in Finland</h1>
        <p>12+ stays</p>
      </div>
      <div className="cards-container">
        {Data.map((card, i) => (
          <Card cardData={card} key={i} />
        ))}
      </div>
    </>
  );
};
