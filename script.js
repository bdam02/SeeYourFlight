const flights = {
  "AC870": {
    airline: "Air Canada",
    aircraft: "Airbus A330",
    from: "Montreal (YUL)",
    to: "Paris (CDG)",
    date: "2026-02-12T22:45"
  },
  "AF123": {
    airline: "Air France",
    aircraft: "Boeing 777",
    from: "Paris (CDG)",
    to: "New York (JFK)",
    date: "2026-03-01T15:30"
  },
  "DL456": {
    airline: "Delta Airlines",
    aircraft: "Boeing 737",
    from: "Atlanta (ATL)",
    to: "Los Angeles (LAX)",
    date: "2026-04-10T08:00"
  },
  "BA289": {
    airline: "British Airways",
    aircraft: "Airbus A350",
    from: "London (LHR)",
    to: "Chicago (ORD)",
    date: "2026-01-28T11:15"
  },
  "TS567": {    // <- Air Transat ajouté ici
    airline: "Air Transat",
    aircraft: "Airbus A321",
    from: "Montreal (YUL)",
    to: "Cancun (CUN)",
    date: "2026-02-20T18:00"
  }
};

function trackFlight() {
  const code = document.getElementById("flightInput").value.trim().toUpperCase();
  const loader = document.getElementById("loader");
  const result = document.getElementById("result");

  result.innerHTML = "";
  loader.classList.remove("hidden");

  setTimeout(() => {
    loader.classList.add("hidden");

    if (!flights[code]) {
      result.innerHTML = "❌ Flight not found. Check the flight number.";
      return;
    }

    const f = flights[code];
    const depDate = new Date(f.date);
    const daysLeft = Math.ceil((depDate - new Date()) / (1000 * 60 * 60 * 24));

    result.innerHTML = `
      <strong>Flight:</strong> ${code}<br>
      <strong>Airline:</strong> ${f.airline}<br>
      <strong>Aircraft:</strong> ${f.aircraft}<br>
      <strong>From:</strong> ${f.from}<br>
      <strong>To:</strong> ${f.to}<br>
      <strong>Departure:</strong> ${depDate.toLocaleString()}<br>
      <strong>Days left:</strong> ${daysLeft}
    `;
  }, 900);
}


