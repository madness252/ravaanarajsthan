const cities = [
    {
        name: "Jaipur",
        image: "images/jaipur.jpg",
        cost: "₹15,000 / person",
        hotels: ["Taj Rambagh Palace", "ITC Rajputana", "Hotel Pearl Palace"],
        food: ["Dal Baati Churma", "Ghewar", "Laal Maas"],
        eat: ["Chokhi Dhani", "LMB", "Rawat Misthan Bhandar"],
        places: ["Amber Fort", "Hawa Mahal", "City Palace", "Jantar Mantar"]
    },
    {
        name: "Udaipur",
        image: "images/udaipur.jpg",
        cost: "₹18,000 / person",
        hotels: ["Taj Lake Palace", "Oberoi Udaivilas"],
        food: ["Gatte ki Sabzi", "Kachori"],
        eat: ["Ambrai", "Upre"],
        places: ["Lake Pichola", "City Palace"]
    },
    {
        name: "Jaisalmer",
        image: "images/jaisalmer.jpg",
        cost: "₹20,000 / person",
        hotels: ["Suryagarh", "Golden Haveli"],
        food: ["Ker Sangri"],
        eat: ["Trio"],
        places: ["Jaisalmer Fort", "Sam Sand Dunes"]
    },
    {
        name: "Jodhpur",
        image: "images/jodhpur.jpg",
        cost: "₹16,000 / person",
        hotels: ["Umaid Bhawan Palace"],
        food: ["Mirchi Vada"],
        eat: ["Gypsy"],
        places: ["Mehrangarh Fort"]
    },
    {
        name: "Mount Abu",
        image: "images/mountabu.jpg",
        cost: "₹12,000 / person",
        hotels: ["Hotel Hillock"],
        food: ["Rajasthani Thali"],
        eat: ["Mulberry Tree"],
        places: ["Dilwara Temples"]
    },
    {
        name: "Chittorgarh",
        image: "images/chittorgarh.jpg",
        cost: "₹14,000 / person",
        hotels: ["Hotel Padmini"],
        food: ["Kadhi Kachori"],
        eat: ["Gangaur Restaurant"],
        places: ["Chittorgarh Fort"]
    },
    {
        name: "Ranakpur",
        image: "images/ranakpur.jpg",
        cost: "₹10,000 / person",
        hotels: ["Ranakpur Hill Resort"],
        food: ["Jain Thali"],
        eat: ["Sankalp Restaurant"],
        places: ["Ranakpur Jain Temple"]
    }
];

const container = document.getElementById("cityContainer");

cities.forEach(city => {
    const card = document.createElement("div");
    card.className = "card";
    card.style.backgroundImage = `url(${city.image})`;

    card.innerHTML = `
        <div class="overlay">
            <h2>${city.name}</h2>
            <p>Explore Royal Beauty</p>
        </div>
    `;

    card.addEventListener("click", () => showDetails(city));
    container.appendChild(card);
});

function showDetails(city) {
    document.getElementById("details").style.display = "block";
    document.getElementById("detailsContent").innerHTML = `
        <img src="${city.image}" style="width:100%; border-radius:12px; margin-bottom:15px;">
        <h2>${city.name}</h2>

        <h3>Tour Cost</h3>
        <p>${city.cost}</p>

        <h3>Hotels</h3>
        <ul>${city.hotels.map(h => `<li>${h}</li>`).join("")}</ul>

        <h3>Famous Food</h3>
        <ul>${city.food.map(f => `<li>${f}</li>`).join("")}</ul>

        <h3>Best Places to Eat</h3>
        <ul>${city.eat.map(e => `<li>${e}</li>`).join("")}</ul>

        <h3>Places to Visit</h3>
        <ul>${city.places.map(p => `<li>${p}</li>`).join("")}</ul>
    `;
}

function closeDetails() {
    document.getElementById("details").style.display = "none";
}
