const getServicesBtn = document.getElementById("getServicesBtn");
const servicesSection = document.getElementById("services");

getServicesBtn.addEventListener("click", () => {
  servicesSection.scrollIntoView({ behavior: "smooth" });
});
