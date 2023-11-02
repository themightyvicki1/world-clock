function selectedDropdown(event) {
  // don't alert the default without value, checking value selected against only 3 value options
  if (event.target.value.length > 0) {
    // if one of the options from drop down is selected other than the label then it'll update the time every 1 second
    setInterval(function () {
      let cityTimeZone = event.target.value;
      // if current value is selected from drop down it'll guess timezone
      if (cityTimeZone === "current") {
        cityTimeZone = moment.tz.guess();
      }
      let nameOfCity = cityTimeZone.replace("_", " ").split("/")[1];
      let cityTime = moment().tz(cityTimeZone);

      //alert(`It is ${timeZone} in ${event.target.value}`);

      let selectedElement = document.querySelector("#cities");
      selectedElement.innerHTML = `<div class="city">
          <div class = "eachCity">
            <h2>${nameOfCity}</h2>
            <div class="date">${cityTime.format("MMMM Do, YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "h:mm:ss"
          )} <small id = "ampm">${cityTime.format("A")}</small></div>`;
    }, 1000);
  }
}
// select the select drop down
let nameSelect = document.querySelector("#selector");
nameSelect.addEventListener("change", selectedDropdown);

// moved all updates into one function, set interval to call this function and start with a function call here so it updates right when loaded
function updateTimes() {
  // use set interval function to keep time updating
  // this code was made not in its own function so in setInterval use a function without a name
  // update every 1 second (1000)
  // target first city's date, selecting the element then class in element
  let cityOneElement = document.querySelector("#city-one");
  let cityOneDateElement = cityOneElement.querySelector(".date");
  // target city one's time
  let cityOneTimeElement = cityOneElement.querySelector(".time");
  // time for first city
  let cityOneTime = moment().tz("Asia/Singapore");
  cityOneDateElement.innerHTML = cityOneTime.format("MMMM Do, YYYY");
  cityOneTimeElement.innerHTML = `${cityOneTime.format(
    "h:mm:ss"
  )} <small id = "ampm">${cityOneTime.format("A")}</small>`;

  // target second city's date, selecting the element then class in element
  let cityTwoElement = document.querySelector("#city-two");
  let cityTwoDateElement = cityTwoElement.querySelector(".date");
  // target city two's time
  let cityTwoTimeElement = cityTwoElement.querySelector(".time");
  // time for second city
  let cityTwoTime = moment().tz("America/Chicago");
  cityTwoDateElement.innerHTML = cityTwoTime.format("MMMM Do, YYYY");
  cityTwoTimeElement.innerHTML = `${cityTwoTime.format(
    "h:mm:ss"
  )} <small id = "ampm">${cityTwoTime.format("A")}</small>`;

  // target third city's date, selecting the element then class in element
  let cityThreeElement = document.querySelector("#city-three");
  let cityThreeDateElement = cityThreeElement.querySelector(".date");
  // target city three's time
  let cityThreeTimeElement = cityThreeElement.querySelector(".time");
  // time for third city
  let cityThreeTime = moment().tz("Europe/Gibraltar");
  cityThreeDateElement.innerHTML = cityThreeTime.format("MMMM Do, YYYY");
  cityThreeTimeElement.innerHTML = `${cityThreeTime.format(
    "h:mm:ss"
  )} <small id = "ampm">${cityThreeTime.format("A")}</small>`;
}

updateTimes();
setInterval(updateTimes, 1000);
