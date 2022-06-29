import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tours-project";
function App() {
  const [loading, isLoading] = useState(true);
  const [tours, setTours] = useState([]);
  const removeTour = id => {
    const newTour = tours.filter(tour => tour.id !== id);
    setTours(newTour);
  };
  const fechTours = async () => {
    isLoading(true);

    try {
      const response = await fetch(url);
      const tours = await response.json();
      isLoading(false);
      setTours(tours);
    } catch (error) {
      isLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fechTours();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  return (
    <main>
      <Tours fechTours={fechTours} removeTour={removeTour} tours={tours} />
    </main>
  );
}

export default App;
