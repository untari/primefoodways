// Mobile nav toggle
document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".menu-toggle");
  var nav = document.querySelector(".main-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      nav.classList.toggle("open");
    });
  }

  // Contact form -> opens the visitor's email client with a pre-filled message.
  // (No backend on this static site yet.)
  var form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = form.name.value.trim();
      var company = form.company.value.trim();
      var role = form.role.value;
      var email = form.email.value.trim();
      var message = form.message.value.trim();

      var subject = "Website enquiry from " + (company || name);
      var body =
        "Name: " + name + "\n" +
        "Company: " + company + "\n" +
        "I am a: " + role + "\n" +
        "Email: " + email + "\n\n" +
        message;

      var mailto =
        "mailto:enquiries@primefoodways.com" +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(body);

      window.location.href = mailto;
    });
  }
});
