function selectedDropdown(event) {
  // don't alert the default without value, checking value selected against only 3 value options
  if (event.target.value.length > 0) {
    let timeZone = moment()
      .tz(event.target.value)
      .format("dddd, MMMM D, YYYY H:mm A");

    alert(`It is ${timeZone} in ${event.target.value}`);
  }
}

let nameSelect = document.querySelector("#selectCity");
nameSelect.addEventListener("change", selectedDropdown);
