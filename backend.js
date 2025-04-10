const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute(
    "class",
    isOpen ? "ri-close-line" : "ri-menu-3-line"
  );
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-3-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__content h2", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header__btn", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".about__image img", {
  ...scrollRevealOption,
  origin: "left",
});
ScrollReveal().reveal(".about__content .section__header", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".about__content p", {
  ...scrollRevealOption,
  delay: 1000,
  interval: 500,
});
ScrollReveal().reveal(".about__btn", {
  ...scrollRevealOption,
  delay: 2000,
});

ScrollReveal().reveal(".blog__card", {
  duration: 1000,
  interval: 500,
});

ScrollReveal().reveal(".blog__btn", {
  ...scrollRevealOption,
  delay: 2000,
});

ScrollReveal().reveal(".contact__image img", {
  ...scrollRevealOption,
});

// LinkedIn Button
document.getElementById('linkedin-btn').addEventListener('click', function () {
  window.open("https://www.linkedin.com/in/santhosh-venkatesh-344814220/", '_blank');
});

// Gmail Button
document.getElementById('gmail-btn').addEventListener('click', function () {
  var gmail_address = "santhoshwiz24@gmail.com"; 
  var subject = "Hello"; 
  var body = "Hello,\n\nThis is a test email."; 
  var gmail_link = "mailto:" + gmail_address + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
  window.location.href = gmail_link;
});

// GitHub Button
document.getElementById('github-btn').addEventListener('click', function () {
  window.open("https://github.com/SanthoshV437", '_blank');
});

// WhatsApp Button
document.getElementById('whatsapp-btn').addEventListener('click', function () {
  var whatsapp_link = "https://wa.me/8867459608"; 
  window.open(whatsapp_link, '_blank');
});

// Map Button
document.getElementById('map-btn').addEventListener('click', function() {
  var mapsLink = "https://maps.app.goo.gl/kuzEd6z2ocZzGrmQ7"; 
  window.open(mapsLink, '_blank');
});

// YouTube Button
document.getElementById('youtube-btn').addEventListener('click', function () {
  window.open("https://www.youtube.com/channel/UC_yourChannelID", '_blank'); // Replace with your YouTube Channel link
});

// Instagram Button
document.getElementById('instagram-btn').addEventListener('click', function () {
  window.open("https://www.instagram.com/yourInstagramUsername", '_blank'); // Replace with your Instagram profile link
});
