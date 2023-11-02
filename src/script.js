function selectedDropdown(event) {
  // don't alert the default without value, checking value selected against only 3 value options
  if (event.target.value.length > 0) {
    let timeZone = moment()
      .tz(event.target.value)
      .format("dddd, MMMM D, YYYY H:mm A");

    alert(`It is ${timeZone} in ${event.target.value}`);
  }
}

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
  let cityOneTime = moment().tz("America/Los_Angeles");
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
