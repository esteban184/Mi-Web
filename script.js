/* =========================================================
   FISHER MOTO PARTS - comportamiento
   ========================================================= */

/* >>> CAMBIA ESTE NÚMERO por el WhatsApp de tu negocio (con código de país, sin + ni espacios) <<< */
var WHATSAPP = "573134487690";

document.documentElement.classList.add("js");

/* ---------- Catálogo (edita / agrega productos aquí) ---------- */
var CATEGORIAS = [
    { id: "llantas",   nombre: "Llantas y rines", icono: "🛞", img: "imagenes/llanta-deportiva.jpg" },
    { id: "frenos",    nombre: "Frenos",          icono: "🛑", img: "imagenes/freno-disco.jpg" },
    { id: "transmision", nombre: "Transmisión",   icono: "⛓️", img: "imagenes/engranajes.jpg" },
    { id: "motor",     nombre: "Motor",           icono: "⚙️", img: "imagenes/motor.jpg" },
    { id: "electrico", nombre: "Luces y eléctrico", icono: "💡", img: "imagenes/rueda-neon.jpg" },
    { id: "proteccion", nombre: "Cascos y protección", icono: "⛑️", img: "imagenes/casco-traje.jpg" },
    { id: "accesorios", nombre: "Accesorios",     icono: "🧰", img: "imagenes/kit-motero.jpg" }
];

var PRODUCTOS = [
    { n: "Llanta delantera", c: "llantas", i: "🛞", img: "imagenes/llanta-delantera.jpg", full: true, fit: "entera", d: "Llantas para calle y trocha, varias medidas.", k: "rueda neumatico caucho" },
    { n: "Llanta trasera", c: "llantas", i: "🛞", img: "imagenes/llanta-trasera.jpg", full: true, fit: "entera", d: "Mayor agarre y durabilidad para uso diario.", k: "rueda neumatico caucho" },
    { n: "Rines", c: "llantas", i: "⭕", img: "imagenes/rines.jpg", full: true, fit: "entera", d: "Rines en aluminio y acero para distintas motos.", k: "rueda aro" },
    { n: "Cámaras y neumáticos", c: "llantas", i: "🔘", img: "imagenes/camaras.jpg", full: true, d: "Cámaras, parches y válvulas.", k: "camara pinchazo rueda" },

    { n: "Pastillas de freno", c: "frenos", i: "🛑", img: "imagenes/pastillas-freno.jpg", d: "Pastillas delanteras y traseras de alto rendimiento.", k: "freno balatas frenar" },
    { n: "Discos de freno", c: "frenos", i: "💿", img: "imagenes/discos-freno.jpg", d: "Discos ventilados para frenar con total confianza.", k: "freno disco" },
    { n: "Bandas y zapatas", c: "frenos", i: "🔩", img: "imagenes/bandas-zapatas.jpg", d: "Bandas de freno de tambor.", k: "freno tambor zapata" },
    { n: "Cables y manguera de freno", c: "frenos", i: "〰️", img: "imagenes/cables-freno.jpg", d: "Cables de freno, clutch y acelerador.", k: "guaya cable clutch" },

    { n: "Kit de arrastre", c: "transmision", i: "⛓️", img: "imagenes/kit-arrastre.jpg", d: "Cadena, piñón y catalina en un solo kit.", k: "cadena pinon catalina cadenilla" },
    { n: "Cadena", c: "transmision", i: "🔗", img: "imagenes/cadena.jpg", d: "Cadenas reforzadas con retenes.", k: "cadenilla arrastre" },
    { n: "Clutch y embrague", c: "transmision", i: "🧲", img: "imagenes/clutch-embrague.jpg", d: "Discos de clutch, resortes y campana.", k: "embrague croche" },

    { n: "Filtro de aire", c: "motor", i: "🌬️", img: "imagenes/filtro-aire.jpg", d: "Filtros de aire y de aceite.", k: "filtro aceite" },
    { n: "Bujías", c: "motor", i: "⚡", img: "imagenes/bujias.jpg", d: "Bujías NGK y equivalentes para mejor encendido.", k: "chispa encendido ngk" },
    { n: "Aceite y lubricantes", c: "motor", i: "🛢️", img: "imagenes/aceite.jpg", d: "Aceites 4T y 2T, minerales y sintéticos.", k: "lubricante aceite 4t 2t" },
    { n: "Kit de pistón", c: "motor", i: "🔧", img: "imagenes/kit-piston.jpg", d: "Pistón, anillos y empaques.", k: "piston anillos cilindro empaque" },

    { n: "Bombillos y faros", c: "electrico", i: "💡", img: "imagenes/bombillos-faros.jpg", d: "Faros LED, bombillos y direccionales.", k: "luz led direccional stop" },
    { n: "Batería", c: "electrico", i: "🔋", img: "imagenes/bateria.jpg", d: "Baterías selladas con garantía.", k: "bateria arranque" },
    { n: "Regulador y CDI", c: "electrico", i: "📟", img: "imagenes/regulador-cdi.jpg", d: "Reguladores, CDI y bobinas.", k: "regulador cdi bobina electrico" },

    { n: "Cascos", c: "proteccion", i: "⛑️", img: "imagenes/cascos.jpg", full: true, d: "Integrales, abatibles y abiertos certificados.", k: "casco proteccion cabeza" },
    { n: "Guantes y chaquetas", c: "proteccion", i: "🧤", img: "imagenes/guantes-chaquetas.jpg", d: "Protección para cada recorrido.", k: "guante chaqueta airbag" },
    { n: "Rodilleras y coderas", c: "proteccion", i: "🛡️", img: "imagenes/rodillera-codera.jpg", d: "Protecciones articuladas para ruta.", k: "rodillera codera armadura" },

    { n: "Espejos", c: "accesorios", i: "🪞", img: "imagenes/espejos.jpg", d: "Espejos universales y originales.", k: "retrovisor" },
    { n: "Maletas y parrillas", c: "accesorios", i: "🧳", img: "imagenes/maletas-parrillas.jpg", d: "Baúles, maletas y parrillas.", k: "baul equipaje parrilla" },
    { n: "Candados y alarmas", c: "accesorios", i: "🔐", img: "imagenes/candados-alarmas.jpg", d: "Seguridad para tu moto.", k: "seguridad candado alarma" },
    { n: "Manubrios y manijas", c: "accesorios", i: "🎚️", img: "imagenes/manubrios-manijas.jpg", d: "Manubrios, manijas y puños.", k: "manillar manija puno" }
];

/* ---------- Utilidades ---------- */
function normalizar(t){
    return (t || "").toString().toLowerCase()
        .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9\s]/g, " ").replace(/\s+/g, " ").trim();
}

function waLink(texto){
    return "https://wa.me/" + WHATSAPP + "?text=" + encodeURIComponent(texto);
}

function nombreCategoria(id){
    for (var i = 0; i < CATEGORIAS.length; i++){
        if (CATEGORIAS[i].id === id) return CATEGORIAS[i].nombre;
    }
    return "";
}

/* ---------- Filtro + búsqueda ---------- */
var estado = { q: "", cat: "todas" };

var elProductos = document.getElementById("productos");
var elInfo = document.getElementById("resultado-info");
var elSin = document.getElementById("sin-resultados");
var elFiltros = document.getElementById("filtros");
var inputMain = document.getElementById("buscar-main");
var inputTop = document.getElementById("buscar-top");

function coincide(p, palabras){
    var texto = normalizar(p.n + " " + p.d + " " + p.k + " " + nombreCategoria(p.c));
    for (var i = 0; i < palabras.length; i++){
        // coincidencia por prefijo/contiene (así "llant" encuentra "llanta")
        if (texto.indexOf(palabras[i]) === -1) return false;
    }
    return true;
}

function render(){
    var palabras = normalizar(estado.q).split(" ").filter(Boolean);
    var lista = PRODUCTOS.filter(function(p){
        var okCat = estado.cat === "todas" || p.c === estado.cat;
        return okCat && coincide(p, palabras);
    });

    elProductos.innerHTML = "";
    lista.forEach(function(p, idx){
        var art = document.createElement("article");
        art.className = "producto";
        art.style.animationDelay = (idx * 40) + "ms";
        art.innerHTML =
            (p.img
                ? '<div class="foto-marco' + (p.full ? ' foto-plena' : '') + (p.fit ? ' foto-entera' : '') + '"><img class="foto" src="' + p.img + '?v=8" alt="' + p.n + '" loading="lazy"></div>'
                : '<div class="icono" aria-hidden="true">' + p.i + '</div>') +
            '<span class="cat">' + nombreCategoria(p.c) + '</span>' +
            '<h3>' + p.n + '</h3>' +
            '<p>' + p.d + '</p>' +
            '<a class="btn btn-fuego" target="_blank" rel="noopener" href="' +
            waLink("Hola, quiero cotizar: " + p.n) +
            '" aria-label="Cotizar ' + p.n + ' por WhatsApp">Cotizar</a>';
        elProductos.appendChild(art);
    });

    var hayFiltro = estado.q.trim() !== "" || estado.cat !== "todas";
    if (lista.length === 0){
        elInfo.textContent = "Sin resultados.";
        elSin.hidden = false;
        var pedido = estado.q.trim() || nombreCategoria(estado.cat) || "un repuesto";
        document.getElementById("wa-sin-resultados").href = waLink("Hola, estoy buscando: " + pedido);
        document.getElementById("wa-sin-resultados").target = "_blank";
        document.getElementById("wa-sin-resultados").rel = "noopener";
    } else {
        elSin.hidden = true;
        elInfo.innerHTML = "Mostrando <strong>" + lista.length + "</strong> " +
            (lista.length === 1 ? "producto" : "productos") +
            (hayFiltro ? " según tu búsqueda." : ".");
    }
}

function crearFiltros(){
    var todas = [{ id: "todas", nombre: "Todas" }].concat(CATEGORIAS);
    todas.forEach(function(c){
        var b = document.createElement("button");
        b.type = "button";
        b.className = "filtro";
        b.dataset.cat = c.id;
        b.textContent = c.nombre;
        b.setAttribute("aria-pressed", c.id === "todas" ? "true" : "false");
        b.addEventListener("click", function(){ setCategoria(c.id); });
        elFiltros.appendChild(b);
    });
}

function setCategoria(id){
    estado.cat = id;
    var botones = elFiltros.querySelectorAll(".filtro");
    for (var i = 0; i < botones.length; i++){
        botones[i].setAttribute("aria-pressed", botones[i].dataset.cat === id ? "true" : "false");
    }
    render();
}

function setBusqueda(texto){
    estado.q = texto;
    if (inputMain.value !== texto) inputMain.value = texto;
    if (inputTop.value !== texto) inputTop.value = texto;
    render();
}

function irAlCatalogo(){
    document.getElementById("catalogo").scrollIntoView({ behavior: "smooth" });
}

// Búsqueda en vivo (ambos buscadores quedan sincronizados)
inputMain.addEventListener("input", function(){ setBusqueda(inputMain.value); });
inputTop.addEventListener("input", function(){ setBusqueda(inputTop.value); });

document.getElementById("form-main").addEventListener("submit", function(e){
    e.preventDefault();
    setBusqueda(inputMain.value);
});
document.getElementById("form-top").addEventListener("submit", function(e){
    e.preventDefault();
    setBusqueda(inputTop.value);
    irAlCatalogo();
});

/* ---------- Categorías (tarjetas) ---------- */
function crearCategorias(){
    var cont = document.getElementById("grid-categorias");
    CATEGORIAS.forEach(function(c){
        var total = PRODUCTOS.filter(function(p){ return p.c === c.id; }).length;
        var b = document.createElement("button");
        b.type = "button";
        b.className = "categoria reveal";
        b.setAttribute("aria-label", "Ver " + c.nombre + " (" + total + " productos)");
        b.innerHTML = '<span class="cat-foto"><img src="' + c.img + '?v=8" alt="" loading="lazy"></span>' +
            '<span class="cat-nombre"><span aria-hidden="true">' + c.icono + '</span> ' + c.nombre + '</span>' +
            '<small>' + total + ' productos · Ver →</small>';
        b.addEventListener("click", function(){
            setBusqueda("");
            setCategoria(c.id);
            irAlCatalogo();
        });
        cont.appendChild(b);
    });
}

/* ---------- Formulario de contacto -> WhatsApp ---------- */
document.getElementById("form-contacto").addEventListener("submit", function(e){
    e.preventDefault();
    var nombre = document.getElementById("c-nombre").value.trim();
    var moto = document.getElementById("c-moto").value.trim();
    var msg = document.getElementById("c-msg").value.trim();
    var texto = "Hola, soy " + nombre + ". " +
        (moto ? "Mi moto es: " + moto + ". " : "") +
        "Necesito: " + msg;
    window.open(waLink(texto), "_blank", "noopener");
});

var waFlot = document.getElementById("wa-flotante");
waFlot.href = waLink("Hola, quiero información sobre repuestos de moto.");
waFlot.target = "_blank";
waFlot.rel = "noopener";

/* ---------- Menú móvil ---------- */
var menuBtn = document.getElementById("menu-btn");
var nav = document.querySelector(".site-nav");
menuBtn.addEventListener("click", function(){
    var abierto = nav.classList.toggle("abierto");
    menuBtn.setAttribute("aria-expanded", abierto ? "true" : "false");
    menuBtn.setAttribute("aria-label", abierto ? "Cerrar menú" : "Abrir menú");
});
nav.addEventListener("click", function(e){
    if (e.target.tagName === "A"){
        nav.classList.remove("abierto");
        menuBtn.setAttribute("aria-expanded", "false");
    }
});

/* ---------- Resaltar sección activa en el menú ---------- */
var enlaces = document.querySelectorAll(".site-nav a");
var secciones = [];
for (var s = 0; s < enlaces.length; s++){
    var sec = document.querySelector(enlaces[s].getAttribute("href"));
    if (sec) secciones.push({ el: sec, link: enlaces[s] });
}
function marcarActivo(){
    var pos = window.scrollY + 160;
    var actual = secciones[0];
    for (var i = 0; i < secciones.length; i++){
        if (secciones[i].el.offsetTop <= pos) actual = secciones[i];
    }
    secciones.forEach(function(x){
        if (x === actual) x.link.classList.add("activo");
        else x.link.classList.remove("activo");
    });
}
window.addEventListener("scroll", marcarActivo, { passive: true });

/* ---------- Efecto 3D (inclinación con el mouse) ---------- */
var reducir = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (!reducir){
    document.addEventListener("mousemove", function(e){
        var el = e.target.closest ? e.target.closest(".producto, .categoria, .ventaja") : null;
        if (!el) return;
        var r = el.getBoundingClientRect();
        var x = (e.clientX - r.left) / r.width - 0.5;
        var y = (e.clientY - r.top) / r.height - 0.5;
        el.style.transform = "rotateY(" + (x * 16) + "deg) rotateX(" + (-y * 16) + "deg) translateZ(10px)";
    });
    document.addEventListener("mouseout", function(e){
        var el = e.target.closest ? e.target.closest(".producto, .categoria, .ventaja") : null;
        if (el && !el.contains(e.relatedTarget)) el.style.transform = "";
    });

    // La moto grande del inicio sigue el mouse
    var hero = document.getElementById("inicio");
    var moto = document.getElementById("moto-3d");
    hero.addEventListener("mousemove", function(e){
        var r = hero.getBoundingClientRect();
        var x = (e.clientX - r.left) / r.width - 0.5;
        var y = (e.clientY - r.top) / r.height - 0.5;
        moto.style.transform = "rotateY(" + (x * 28) + "deg) rotateX(" + (-y * 18) + "deg)";
    });
    hero.addEventListener("mouseleave", function(){ moto.style.transform = ""; });
}

/* ---------- Aparecer al hacer scroll ---------- */
function activarReveal(){
    var items = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)){
        for (var i = 0; i < items.length; i++) items[i].classList.add("visible");
        return;
    }
    var obs = new IntersectionObserver(function(entradas){
        entradas.forEach(function(en){
            if (en.isIntersecting){
                en.target.classList.add("visible");
                obs.unobserve(en.target);
            }
        });
    }, { threshold: 0.12 });
    items.forEach(function(it){ obs.observe(it); });
}

/* ---------- Intro (se muestra una vez por visita) ---------- */
function iniciarIntro(){
    var intro = document.getElementById("intro");
    var yaVista = false;
    try { yaVista = sessionStorage.getItem("introVista") === "1"; } catch (err) {}

    if (yaVista || reducir){
        intro.parentNode.removeChild(intro);
        return;
    }

    document.body.classList.add("intro-activa");
    var cerrada = false;
    var temporizador = null;
    var video = document.getElementById("intro-video");

    function cerrar(){
        if (cerrada) return;
        cerrada = true;
        clearTimeout(temporizador);
        intro.classList.add("salir");
        document.body.classList.remove("intro-activa");
        try { sessionStorage.setItem("introVista", "1"); } catch (err) {}
        try { video.pause(); } catch (err) {}
        setTimeout(function(){
            if (intro.parentNode) intro.parentNode.removeChild(intro);
        }, 800);
    }

    // Plan B: si el video no carga, se usa la animación de la moto dibujada
    function usarRespaldo(){
        if (cerrada || intro.classList.contains("sin-video")) return;
        clearTimeout(temporizador);
        intro.classList.remove("con-video");
        intro.classList.add("sin-video");
        try { video.pause(); } catch (err) {}
        temporizador = setTimeout(cerrar, 4200);
    }

    document.getElementById("saltar-intro").addEventListener("click", cerrar);
    document.addEventListener("keydown", function(e){
        if (e.key === "Escape") cerrar();
    });

    var ahorroDatos = navigator.connection && navigator.connection.saveData;
    if (!video || !video.play || ahorroDatos){
        usarRespaldo();
        return;
    }

    // En celular (pantalla vertical) se usa el video vertical; en computador, el ancho
    var vertical = window.matchMedia("(max-aspect-ratio: 1/1)").matches;
    video.src = vertical ? "video/intro-vertical.mp4" : "video/intro.mp4";

    video.addEventListener("playing", function(){
        if (cerrada || intro.classList.contains("sin-video")) return;
        clearTimeout(temporizador);
        intro.classList.add("con-video");
        temporizador = setTimeout(cerrar, 12000);   // seguridad por si "ended" nunca llega
    });
    video.addEventListener("ended", cerrar);
    video.addEventListener("error", usarRespaldo);

    temporizador = setTimeout(usarRespaldo, 4500);  // si el video tarda mucho en arrancar
    var intento = video.play();
    if (intento && intento.catch) intento.catch(usarRespaldo);
}

/* ---------- Arranque ---------- */
crearFiltros();
crearCategorias();
render();
activarReveal();
marcarActivo();
iniciarIntro();
