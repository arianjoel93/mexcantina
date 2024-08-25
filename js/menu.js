const tacos = [
    { title: "PASTOR", description: "Marinated pork in special sauce, onions, cilantro, lime, and tomatillo hot sauce.", price: "$4.99" },
    { title: "SWEET CHICK", description: "Sweet and spicy marinated chicken, topped with feta cheese, cilantro, lime and tomatillo hot sauce.", price: "$4.99" },
    { title: "POLLO", description: "Marinated chicken, onions, cilantro and feta cheese.", price: "$4.99" },
    { title: "CARNE ASADA", description: "Grilled Angus steak, onions, cilantro, lime, and tomatillo hot sauce.", price: "$4.99" },
    { title: "SHRIMP", description: "Shrimp gild to perfection, lettuce, slaw, chipotle sauce and lime.", price: "$5.99" },
    { title: "PESCADO", description: "Fish tacos, lettuce, coleslaw, chipotle sauce and lime.", price: "$5.99" },
    { title: "CARNITAS", description: "Roasted pork with special mango and pineapple sauce, lime and tomatillo hot sauce.", price: "$4.99" },
    { title: "TACOS DE COCHINITA PIBIL", description: "Yucatan style marinated and baked pork. Served with three flour tortillas, rice and beans, lettuce, guacamole, sour cream, pico de gallo.", price: "$15.99" },
    { title: "QUESABIRRIA TACOS", description: "Three Mozzarella cheese quesadillas filled with guajillo slow roasted meat. Served with its own beef broth, onion, cilantro, lime and spicy tomatillo sauce.", price: "$15.99" }
];

const container = document.getElementById('taco_container');
tacos.forEach(taco => {
    const tacoInfo = document.createElement('div');
    tacoInfo.classList.add('taco_info');

    const tacoInfoLeft = document.createElement('div');
    tacoInfoLeft.classList.add('taco_info_left');

    const title = document.createElement('h2');
    title.id = 'title';
    title.textContent = taco.title;

    const description = document.createElement('p');
    description.classList.add('taco_description');
    description.textContent = taco.description;

    tacoInfoLeft.appendChild(title);
    tacoInfoLeft.appendChild(description);

    const price = document.createElement('div');
    price.id = 'taco_price';
    price.classList.add('taco_price');

    // Separar el precio en signo de dólar y parte decimal
    const [dollarSign, priceDecimal] = taco.price.split('.');

    // Crear un span para la parte decimal
    price.innerHTML = `${dollarSign}.<span class="span_tacos">${priceDecimal}</span>`;

    tacoInfo.appendChild(tacoInfoLeft);
    tacoInfo.appendChild(price);

    container.appendChild(tacoInfo);
});

function toggleMenu() {
    var navbar = document.getElementById('navbar');
    if (navbar.style.display === "none" || navbar.style.display === "") {
        navbar.style.display = "flex";
    } else {
        navbar.style.display = "none";
    }
}

function toggleModal() {
    var overlay = document.getElementById('overlay_modal');
    if (overlay.style.display === "none" || overlay.style.display === "") {
        overlay.style.display = "grid";
    } else {
        overlay.style.display = "none";
    }
}
