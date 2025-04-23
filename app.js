async function getWeather() {
    const city = document.getElementById("cityInput").value;
    const resultDiv = document.getElementById("weatherResult");

    if (!city) {
        resultDiv.innerText = "Please enter a city name.";
        return;
    }

    const apiKey = "c51d26aa60f745909e6140444252204";
    const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=yes`;


    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("City not found");

        const data = await response.json();
        const temperature = data.current.temp_c;
        const condition = data.current.condition.text;
        resultDiv.innerHTML = `
      <strong>${data.location.name}</strong><br>
      Temperature: ${temperature}°C<br>
      Condition: ${condition}
    `;
    } catch (error) {
        resultDiv.innerText =
            "Error fetching weather data. Please try again.";
    }
}