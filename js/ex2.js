// Country list
const countryList = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Anguilla",
  "Antarctica",
  "Antigua-and-Barbuda",
  "Argentina",
  "Armenia",
  "Aruba",
  "Australia",
  "Autria",
  "Azerbaïjan"
];

const input = document.getElementById("country");
const suggestions = document.getElementById("suggestions");

input.addEventListener("input", () => {
  suggestions.innerHTML = "";

  const matches = countryList.filter(country =>
    country.toLowerCase().startsWith(input.value.toLowerCase())
  );

  matches.forEach(country => {
    const div = document.createElement("div");
    div.classList.add("suggestion");
    div.textContent = country;
    div.addEventListener("click", () => {
      input.value = country;
      suggestions.innerHTML = "";
    });
    suggestions.appendChild(div);
  });
});