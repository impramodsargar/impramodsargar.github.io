if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("../sw.js").then(() => {});
  });
}

AOS.init({
  once: true,
});

const projectsList = [
  {
    title: "Gurugram Police Cyber Cell Internship",
    desc: "Completed Studies on different Cyber Crime Cases in 2021. \n",
    category: "default",
    certificate: "Certificate",
    alt: "Gurguram Police",
    url: "../assets/img/gurugram.jpg",
  },
  {
    title: "Hack-X Security Pune",
    desc: "Conducted Black box Pentest on different domains.\n Given a Presentation on Different types of attacks on server.",
    category: "default",
    certificate: "Certificate",
    alt: "Hack-X Security",
    url: "../assets/img/hack-x.jpg",
  },
  {
    title: "Internship At MindIT Services",
    desc: "Developed and designed a webapp on portfolio.",
    category: "default",
    certificate: "Certificate",
    alt: "Mind IT Services",
    url: "../assets/img/mindit.jpeg",
  },
  {
    title: "Freelancing on Hackerone",
    desc: "Currently I worked as a Freelancer on Hackerone",
    link: "https://hackerone.com/impramodsargar",
    category: "default",
  },
  {
    title: "Freelancing on Bugcrowd",
    desc: "I also do freelancing on Bugcrowd",
    link: "https://bugcrowd.com/impramodsargar",
    category: "default",
  },
];

document.querySelector("#contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  var name = document
    .querySelector("#contactForm")
    .getElementsByTagName("input")[0].value;
  var email = document
    .querySelector("#contactForm")
    .getElementsByTagName("input")[1].value;
  var message = document
    .querySelector("#contactForm")
    .getElementsByTagName("textarea")[0].value;

  var templateParams = {
    from_name: name,
    from_email: email,
    message_html: message,
  };

  emailjs.send("gmail", "template_y9g2f4i", templateParams).then(
    function () {
      document.querySelector("#messageSubmit").innerHTML = "✔️ Sent";
    },
    function (error) {
      console.log("FAILED...", error);
      document.querySelector("#messageSubmit").innerHTML = "❌ Failed";
    }
  );
});

function htmlToElement(html) {
  var template = document.createElement("template");
  html = html.trim(); // Never return a text node of whitespace as the result
  template.innerHTML = html;
  return template.content.firstChild;
}

projectsList.forEach((project) => {
  const newProject = htmlToElement(
    '<div class="card projectCard" data-aos="fade-down"><h3>' +
      project.title +
      "</h3><p>" +
      project.desc +
      '</p><div class="links">' +
      (project.certificate === undefined
        ? ""
        : '<a class="links" href="javascript:showImage(\'' +
          project.alt +
          "','" +
          project.url +
          '\')"><img alt="' +
          project.certificate +
          '" class="icon" width="16px" height="16px" src="./assets/img/certificate.png" /></a>') +
      (project.github === undefined
        ? ""
        : '<a href="' +
          project.github +
          '" class="links" target="_blank" rel="noreferrer" data-splitbee-event="Project Source Code" data-splitbee-event-type="' +
          project.title +
          '"><img alt="Github Repository" class="icon" width="16px" height="16px" src="./assets/img/github.png" /></a>') +
      (project.link === undefined
        ? ""
        : '<a href="' +
          project.link +
          '" class="links" target="_blank" rel="noreferrer" data-splitbee-event="Project Demo" data-splitbee-event-type="' +
          project.title +
          '"><img alt="Demo Link" width="16px" height="16px" class="icon" src="./assets/img/globe.png" /></a></div></div>')
  );
  document
    .querySelector(".projects .content ." + project.category + " .row")
    .appendChild(newProject);
});

function showImage(alt, url) {
  Swal.fire({
    imageUrl: url,
    imageAlt: alt,
  });
  return false;
}

var title = document.getElementById("textTypeWriter");
var typewriter = new Typewriter(title, {
  loop: true,
  delay: 80,
});

typewriter
  .typeString("<strong>Freelancer</strong>")
  .pauseFor(500)
  .deleteAll()
  .typeString("<strong>Penetration Tester</strong>")
  .pauseFor(500)
  .deleteAll()
  .typeString("<strong>Security Researcher</strong>")
  .pauseFor(500)
  .deleteAll()
  .pauseFor(500)
  .start();

var about = document.querySelector(".about .content h1");
var typewriter2 = new Typewriter(about, {
  loop: true,
});
typewriter2.typeString("ABOUT ME").pauseFor(1000).deleteAll().start();

var skills = document.querySelector(".skills .content h1");
var typewriter3 = new Typewriter(skills, {
  loop: true,
});
typewriter3.typeString("SKILLS").pauseFor(1000).deleteAll().start();

var projects = document.querySelector(".projects .content h1");
var typewriter4 = new Typewriter(projects, {
  loop: true,
});
typewriter4.typeString("EXPERIENCE").pauseFor(1000).deleteAll().start();

var achievements = document.querySelector(".achievements .content h1");
var typewriter5 = new Typewriter(achievements, {
  loop: true,
});
typewriter5.typeString("ACHIEVEMENTS").pauseFor(1000).deleteAll().start();

var hof = document.querySelector(".hof .content h1");
var typewriter6 = new Typewriter(hof, {
  loop: true,
});
typewriter6.typeString("HOF'S AND APPRECIATION FROM COMPANIES").pauseFor(1000).deleteAll().start();

var contact = document.querySelector(".contact .content h1");
var typewriter7 = new Typewriter(contact, {
  loop: true,
});
typewriter7.typeString("CONTACT").pauseFor(1000).deleteAll().start();

var end = document.querySelector(".end .content h1");
var typewriter8 = new Typewriter(end, {
  loop: true,
});
typewriter8.typeString("ABOUT").pauseFor(1000).deleteAll().start();
