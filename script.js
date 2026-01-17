function trackFlight() {
  const code = document.getElementById("flightInput").value.trim().toUpperCase();
  const loader = document.getElementById("loader");
  const result = document.getElementById("result");

  result.innerHTML = "";
  loader.classList.remove("hidden");

  setTimeout(() => {
    loader.classList.add("hidden");

    if (!code || code.length < 3) {
      result.innerHTML = "❌ Invalid flight number.";
      return;
    }

    const prefix = code.slice(0, 2);
    let airline = "";
    let aircraft = "";
    let from = "";
    let to = "";

    // AIR CANADA
    if (prefix === "AC") {
      airline = "Air Canada";
      aircraft = "Airbus A320 / Boeing 737";
      from = "Canada";
      to = "International destination";
    }

    // AIR FRANCE
    else if (prefix === "AF") {
      airline = "Air France";
      aircraft = "Boeing 777 / Airbus A350";
      from = "Paris (CDG)";
      to = "International destination";
    }

    // AIR TRANSAT (TS ou AT accepté)
    else if (prefix === "TS" || prefix === "AT") {
      airline = "Air Transat";
      aircraft = "Airbus A321 / A330";
      from = "Canada";
      to = "Sun destination / Europe";
    }

    else {
      result.innerHTML = "❌ Airline not supported.";
      return;
    }

    // Date réaliste automatique
    const depDate = new Date();
    depDate.setDate(depDate.getDate() + Math.floor(Math.random() * 60) + 1);

    const daysLeft = Math.ceil((depDate - new Date()) / (1000 * 60 * 60 * 24));

    result.innerHTML = `
      <strong>Flight:</strong> ${code}<br>
      <strong>Airline:</strong> ${airline}<br>
      <strong>Aircraft:</strong> ${aircraft}<br>
      <strong>From:</strong> ${from}<br>
      <strong>To:</strong> ${to}<br>
      <strong>Departure:</strong> ${depDate.toLocaleString()}<br>
      <strong>Days left:</strong> ${daysLeft}
    `;
  }, 800);
}



