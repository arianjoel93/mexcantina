const data = [
    { "title": "Steak & Shrimp", "img": "img/ESPECIALES WEB/Recurso 24.png", 'alt': "carne_asada_1", 'info': "Ribeye steak and shrimp, covered with melted cheese. Served with rice, refried beans and tortillas." },
    { "title": "Carne Asada", "img": "img/ESPECIALES WEB/carne asada.jpg", 'alt': "carne_asada", 'info': " Grilled skirt steak. Served with rice, refried beans, guacamole salad, pico and tortillas." },
    { "title": "Chimichanga", "img": "img/ESPECIALES WEB/chimicanga2.jpg", 'alt': "chimicanga", 'info': "Two soft or deep-fried burritos topped with our in-house made cheese sauce. Served with rice and refried beans, sour cream and guacamole salad." },
    { "title": "Mexcantina Platter", "img": "img/ESPECIALES WEB/mexcantina plate.jpg", 'alt': "mexcantina_plate", 'info': "Chicken enchilada, grilled marinated chicken breast and skirt steak. Served with rice, black beans and tortillas." },
    { "title": "Enchiladas Oaxaqueñas", "img": "img/ESPECIALES WEB/enchilada oaxaca2.jpg", 'alt': "enchilada", 'info': "Supreme combination of four enchiladas, one chicken, one steak, one cheese and one beans, covered with creamy green tomatillo sauce, lettuce, sour cream and tomato" },
    { "title": "Carnitas Michoacan", "img": "img/ESPECIALES WEB/carnitas.jpg", 'alt': "carnitas", 'info': "DELICIOUS roasted pork tips, Served with guacamole salad, pico, rice, beans and tortillas." },
];


function agregarContenedores() {
    // Obtener el contenedor principal por su ID
    var container = document.getElementById('container_check');

    // Iterar sobre los datos y crear elementos dinámicos
    data.forEach(item => {
        var card = document.createElement('div');
        card.className = 'card_specials';

        var img = document.createElement('img');
        img.src = item.img;
        img.alt = item.alt;

        var infoDiv = document.createElement('div');
        infoDiv.className = 'card_specials_info';

        var title = document.createElement('h4');
        title.textContent = item.title;

        var info = document.createElement('p');
        info.textContent = item.info;

        // Agregar elementos al div de información
        infoDiv.appendChild(title);
        infoDiv.appendChild(info);

        // Agregar imagen y div de información al contenedor principal
        card.appendChild(img);
        card.appendChild(infoDiv);

        // Agregar la tarjeta al contenedor principal
        container.appendChild(card);
    });
}

// Llama a la función para agregar los contenedores
agregarContenedores();

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
    var modal = document.getElementById('overlay_modal');
    if (overlay.style.display === "none" || overlay.style.display === "") {
        overlay.style.display = "grid";
    } else {
        overlay.style.display = "none";
    }
}
