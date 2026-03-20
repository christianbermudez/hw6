const houses = [
    {
        code:"ST",
        name:"Stark"
    },
    {
        code:"LA",
        name:"Lannister"
    },
    {
        code:"BA",
        name:"Baratheon"
    },
    {
        code:"TA",
        name:"Targaryen"
    },
];

// Return an array of characters belonging to a house
const getCharacters = houseCode => {
    switch(houseCode) {
        case "ST":
            return ["Eddard","Catelyn","Robb","Sansa","Arya","Jon Snow"];
        case "LA":
            return ["Tywin", "Cersei", "Jaime", "Tyrion"];
        case "TA":
            return ["Aerys", "Daenerys", "Viserys"];
        default:
            return[]; // Empty array
    }
};

// Fill the dropdown on page load
const select = document.getElementById("house");

houses.forEach(house => {
    const option = document.createElement("option");
    option.value = house.code;
    option.textContent = house.name;
    select.appendChild(option);
});

// Show characters when user selects a house
select.addEventListener("change", () => {
    const characters = getCharacters(select.value);
    const ul = document.getElementById("characters");

    ul.innerHTML = ""; // Clear previous list

    characters.forEach(name => {
        const li = document.createElement("li");
        li.textContent = name;
        ul.appendChild(li);
    });
});