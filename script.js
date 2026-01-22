document.addEventListener("DOMContentLoaded", () => {
  const getServicesBtn = document.getElementById("getServicesBtn");
  const servicesSection = document.getElementById("services");

  if (getServicesBtn && servicesSection) {
    getServicesBtn.addEventListener("click", () => {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    });
  }
});
