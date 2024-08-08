let next = document.getElementById("next");
let loadingPage = document.getElementById("loading_page");
let login_page = document.getElementById("login_page");
let language_select = document.getElementById("language-select");

next.addEventListener("click", function () {
  language_select.style.animation = "disappearToTop 0.6s";
  setTimeout(function () {
    language_select.style.opacity = "0";
  }, 500);
  loadingPage.style.animation = "disappearToTop 1s forwards";
  setTimeout(function () {
    language_select.style.opacity = "1";
    language_select.style.animation = "appearFromTop 1s";
    loadingPage.style.display = "none";
  }, 1000);
});

let fb = document.getElementById("fb");
let fb2 = document.getElementById("fb2");
let insta = document.getElementById("insta");
let insta2 = document.getElementById("insta2");
let linkedin = document.getElementById("in");
let linkedin2 = document.getElementById("in2");

let condorLogoDownRight = document.getElementById("condorLogoDownRight");

condorLogoDownRight.addEventListener("click", function () {
  window.open("https://groupecandor.com/", "_blank");
});

fb.addEventListener("click", function () {
  window.open("https://www.facebook.com/legroupecandor/", "_blank");
});

fb2.addEventListener("click", function () {
  window.open("https://www.facebook.com/legroupecandor/", "_blank");
});

insta.addEventListener("click", function () {
  window.open("https://www.instagram.com/groupecandor/?hl=fr", "_blank");
});

insta2.addEventListener("click", function () {
  window.open("https://www.instagram.com/groupecandor/?hl=fr", "_blank");
});

linkedin.addEventListener("click", function () {
  window.open("https://fr.linkedin.com/company/groupecandor", "_blank");
});

linkedin2.addEventListener("click", function () {
  window.open("https://fr.linkedin.com/company/groupecandor", "_blank");
});

let condor_logo = document.querySelector(".condor_logo");
condor_logo.addEventListener("click", function () {
  location.href = "https://groupecandor.com/";
});

document.addEventListener("DOMContentLoaded", () => {
  const languageSelect = document.getElementById("language-select");
  languageSelect.addEventListener("change", switchLanguage);

  function switchLanguage() {
    const selectedLanguage = languageSelect.value;
    const elements = document.querySelectorAll("[data-lang-en]");

    elements.forEach((element) => {
      const text = element.getAttribute(`data-lang-${selectedLanguage}`);
      if (text) {
        element.textContent = text;
      }
    });
  }

  // Set the default language based on the browser's language setting
  const browserLanguage = navigator.language.slice(0, 2); // Get the first two characters
  if (browserLanguage === "fr" || browserLanguage === "en") {
    languageSelect.value = browserLanguage;
    switchLanguage();
  }
});

let login_button = document.getElementById("login_button");
let auth = document.getElementById("auth");
let mdp = document.getElementById("mdp");
let errorMsg = document.getElementById("errorMsg");

login_button.addEventListener("click", function () {
  if (auth.value == "MACQSSE2024" && mdp.value == "QSSE#2024Secure!") {
    login_page.style.animation = "disappearToLeft 1s forwards";
    language_select.style.animation = "disappearToLeft 1s";
    setTimeout(function () {
      language_select.style.opacity = "0";
    }, 600);
    setTimeout(function () {
      language_select.style.opacity = "1";
      language_select.style.animation = "appearFromTop 1s";
      header_module.style.display = "flex";
      login_page.style.display = "none";
      homePage.style.display = "flex";
      homePage.style.animation = "appear 1s forwards";
      header_module.style.animation = "appearFromTop 1s forwards";
    }, 1000);
  } else {
    errorMsg.textContent = "Identifiants incorrects";
    errorMsg.style.display = "flex";
  }
});

document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    if (login_page.style.display != "none") {
      if (auth.value == "MACQSSE2024" && mdp.value == "QSSE#2024Secure!") {
        login_page.style.animation = "disappearToLeft 1s forwards";
        setTimeout(function () {
          login_page.style.display = "none";
          homePage.style.display = "flex";
          homePage.style.animation = "appear 1s forwards";
          header_module.style.display = "flex";
          header_module.style.animation = "appearFromTop 1s forwards";
        }, 1000);
      } else {
        errorMsg.textContent = "Identifiants incorrects";
        errorMsg.style.display = "flex";
      }
    }
  }
});

let homePage = document.getElementById("home_page_intro");
let homePageButton = document.getElementById("home_page_button");
let securitySpeach = document.getElementById("securitySpeach");

homePageButton.addEventListener("click", function () {
  homePage.style.animation = "disappearToLeft 1s forwards";
  setTimeout(function () {
    securitySpeach.style.display = "flex";
    homePage.style.display = "none";
  }, 1000);
});

let retour = document.getElementById("retour");

retour.addEventListener("click", function () {
  securitySpeach.style.animation = "disappear 0.5s forwards";

  setTimeout(function () {
    homePage.style.display = "flex";
    securitySpeach.style.display = "none";
    securitySpeach.style.animation = "appear 1s ease-in-out";
  }, 600);

  homePage.style.animation = "appearFromLeft 1s forwards";
});
let header_module = document.getElementById("header_module");
let suivantSecurite = document.getElementById("suivantSecurite");
let testZone = document.getElementById("testZone");

suivantSecurite.addEventListener("click", function () {
  setTimeout(function () {
    header_module.style.display = "none";
    header_module.style.animation = "none";
    securitySpeach.style.display = "none";
    testZone.style.display = "flex";
    securitySpeach.style.animation = "appear 1s forwards";
    language_select.style.opacity = "1";
  }, 1000);
  language_select.style.animation = "disappearToTop 0.6s";
  setTimeout(function () {
    language_select.style.opacity = "0";
  }, 500);
  language_select.style.color = "black";
  language_select.style.backgroundColor = "white";
  language_select.style.borderRadius = "180px";
  header_module.style.animation = "disappearToTop 1s forwards";
  securitySpeach.style.animation = "disappear 1s forwards";
});

let back = document.getElementById("back");

back.addEventListener("click", function () {
  
  header_module.style.display = "flex";
  securitySpeach.style.display = "flex";
  testZone.style.display = "none";
  language_select.style.color = "black";
  language_select.style.backgroundColor = "transparent";
  language_select.style.opacity = "0";
  setTimeout(function () {
    language_select.style.opacity = "1";
    language_select.style.animation = "appearFromTop 1s";
  }, 1000);
  language_select.style.animation = "none";
  header_module.style.animation = "appearFromTop 1s forwards";
  securitySpeach.style.animation = "appear 1s forwards";
});

let PGC = document.getElementById("PGC");
let PGCZone = document.getElementById("PGCZone");

PGC.addEventListener("click", function () {
  setTimeout(function () {
    testZone.style.display = "none";
    PGCZone.style.display = "flex";
    PGCZone.style.animation = "appear 1s forwards";
    testZone.style.animation = "appear 1s forwards";
  }, 1000);
  testZone.style.animation = "disappear 1s forwards";
});

let nextPGC = document.getElementById("nextPGC");
let backPGC = document.getElementById("backPGC");
let PGCSlide1 = document.getElementById("PGCSlide1");
let PGCSlide2 = document.getElementById("PGCSlide2");

nextPGC.addEventListener("click", function () {
  PGCSlide1.style.display = "none";
  PGCSlide2.style.display = "flex";
  PGCSlide3.style.display = "none";
  PGCSlide4.style.display = "none";
});

let PGCSlide3 = document.getElementById("PGCSlide3");
let backPGC1 = document.getElementById("backPGC1");
let nextPGC3 = document.getElementById("nextPGC3");

backPGC1.addEventListener("click", function () {
  PGCSlide4.style.display = "none";
  PGCSlide3.style.display = "none";
  PGCSlide2.style.display = "none";
  PGCSlide1.style.display = "flex";
});

nextPGC3.addEventListener("click", function () {
  PGCSlide1.style.display = "none";
  PGCSlide2.style.display = "none";
  PGCSlide3.style.display = "flex";
  PGCSlide4.style.display = "none";
});

let PGCSlide4 = document.getElementById("PGCSlide4");
let backPGC2 = document.getElementById("backPGC2");
let nextPGC4 = document.getElementById("nextPGC4");

backPGC2.addEventListener("click", function () {
  PGCSlide4.style.display = "none";
  PGCSlide3.style.display = "none";
  PGCSlide2.style.display = "flex";
  PGCSlide1.style.display = "none";
});

nextPGC4.addEventListener("click", function () {
  PGCSlide1.style.display = "none";
  PGCSlide2.style.display = "none";
  PGCSlide3.style.display = "none";
  PGCSlide4.style.display = "flex";
});

let backPGC3 = document.getElementById("backPGC3");
let nextPGC5 = document.getElementById("nextPGC5");

backPGC3.addEventListener("click", function () {
  PGCSlide4.style.display = "none";
  PGCSlide3.style.display = "flex";
  PGCSlide2.style.display = "none";
  PGCSlide1.style.display = "none";
});

let checkedPGC = document.getElementById("checkedPGC");

nextPGC5.addEventListener("click", function () {
  setTimeout(function () {
    PGCSlide4.style.display = "none";
    PGCSlide1.style.display = "flex";
    PGCZone.style.display = "none";
    testZone.style.display = "flex";
    PGCZone.style.animation = "appear 1s forwards";
    testZone.style.animation = "appear 1s forwards";
    if (
      checkedNEM.style.display == "flex" &&
      checkedSE.style.display == "flex" &&
      checkedEE.style.display == "flex" &&
      checkedESS.style.display == "flex" &&
      checkedPGC.style.display == "flex"
    ) {
      console.log("all checked");
      TVC.style.color = 'white';
      TVC.style.backgroundColor = '#4930e8';
      TVC.style.cursor = 'pointer';
    }
  }, 1000);
  checkedPGC.style.display = "flex";
  PGCZone.style.animation = "disappear 1s forwards";
});

let ESSZone = document.getElementById("ESSZone");
let ESS = document.getElementById("ESS");
let nextESS = document.getElementById("nextESS");
let backESS = document.getElementById("backESS");
let backESS2 = document.getElementById("backESS2");
let backESS3 = document.getElementById("backESS3");
let backESS4 = document.getElementById("backESS4");
let nextESS2 = document.getElementById("nextESS2");
let nextESS3 = document.getElementById("nextESS3");
let nextESS4 = document.getElementById("nextESS4");
let nextESS5 = document.getElementById("nextESS5");
let ESSSlide1 = document.getElementById("ESSSlide1");
let ESSSlide2 = document.getElementById("ESSSlide2");
let ESSSlide3 = document.getElementById("ESSSlide3");
let ESSSlide4 = document.getElementById("ESSSlide4");
let ESSSlide5 = document.getElementById("ESSSlide5");

ESS.addEventListener("click", function () {
  setTimeout(function () {
    testZone.style.display = "none";
    ESSZone.style.display = "flex";
    ESSSlide1.style.display = "flex";
    ESSZone.style.animation = "appear 1s forwards";
  }, 1000);
  testZone.style.animation = "disappear 1s forwards";
});

nextESS.addEventListener("click", function () {
  ESSSlide1.style.display = "none";
  ESSSlide2.style.display = "flex";
  ESSSlide3.style.display = "none";
  ESSSlide4.style.display = "none";
  ESSSlide5.style.display = "none";
});

backESS.addEventListener("click", function () {
  ESSSlide1.style.display = "flex";
  ESSSlide2.style.display = "none";
  ESSSlide3.style.display = "none";
  ESSSlide4.style.display = "none";
  ESSSlide5.style.display = "none";
});

nextESS2.addEventListener("click", function () {
  ESSSlide1.style.display = "none";
  ESSSlide2.style.display = "none";
  ESSSlide3.style.display = "flex";
  ESSSlide4.style.display = "none";
  ESSSlide5.style.display = "none";
});

backESS2.addEventListener("click", function () {
  ESSSlide1.style.display = "none";
  ESSSlide2.style.display = "flex";
  ESSSlide3.style.display = "none";
  ESSSlide4.style.display = "none";
  ESSSlide5.style.display = "none";
});

nextESS3.addEventListener("click", function () {
  ESSSlide3.style.display = "none";
  ESSSlide4.style.display = "flex";
  ESSSlide5.style.display = "none";
  ESSSlide2.style.display = "none";
  ESSSlide1.style.display = "none";
});

backESS3.addEventListener("click", function () {
  ESSSlide3.style.display = "flex";
  ESSSlide4.style.display = "none";
  ESSSlide5.style.display = "none";
  ESSSlide2.style.display = "none";
  ESSSlide1.style.display = "none";
});

nextESS4.addEventListener("click", function () {
  ESSSlide3.style.display = "none";
  ESSSlide4.style.display = "none";
  ESSSlide5.style.display = "flex";
  ESSSlide2.style.display = "none";
  ESSSlide1.style.display = "none";
});

backESS4.addEventListener("click", function () {
  ESSSlide3.style.display = "none";
  ESSSlide4.style.display = "flex";
  ESSSlide5.style.display = "none";
  ESSSlide2.style.display = "none";
  ESSSlide1.style.display = "none";
});

let checkedESS = document.getElementById("checkedESS");

nextESS5.addEventListener("click", function () {
  setTimeout(function () {
    ESSSlide5.style.display = "none";
    ESSZone.style.display = "none";
    testZone.style.display = "flex";
    ESSZone.style.animation = "appear 1s forwards";
    testZone.style.animation = "appear 1s forwards";
    if (
      checkedNEM.style.display == "flex" &&
      checkedSE.style.display == "flex" &&
      checkedEE.style.display == "flex" &&
      checkedESS.style.display == "flex" &&
      checkedPGC.style.display == "flex"
    ) {
      console.log("all checked");
      TVC.style.color = 'white';
      TVC.style.backgroundColor = '#4930e8';
      TVC.style.cursor = 'pointer';
    }
  }, 1000);
  checkedESS.style.display = "flex";
  ESSZone.style.animation = "disappear 1s forwards";
});

let EEZone = document.getElementById("EEZone");
let EE = document.getElementById("EE");

EE.addEventListener("click", function () {
  setTimeout(function () {
    testZone.style.display = "none";
    EESlide1.style.display = "flex";
    EEZone.style.display = "flex";
    EEZone.style.animation = "appear 1s forwards";
  }, 1000);
  testZone.style.animation = "disappear 1s forwards";
});

let nextEE = document.getElementById("nextEE");
let nextEE2 = document.getElementById("nextEE2");
let backEE = document.getElementById("backEE1");
let EESlide1 = document.getElementById("EESlide1");
let EESlide2 = document.getElementById("EESlide2");

nextEE.addEventListener("click", function () {
  EESlide1.style.display = "none";
  EESlide2.style.display = "flex";
});

let checkedEE = document.getElementById("checkedEE");

nextEE2.addEventListener("click", function () {
  setTimeout(function () {
    EESlide2.style.display = "none";
    EEZone.style.display = "none";
    testZone.style.display = "flex";
    EEZone.style.animation = "appear 1s forwards";
    testZone.style.animation = "appear 1s forwards";
    if (
      checkedNEM.style.display == "flex" &&
      checkedSE.style.display == "flex" &&
      checkedEE.style.display == "flex" &&
      checkedESS.style.display == "flex" &&
      checkedPGC.style.display == "flex"
    ) {
      console.log("all checked");
      TVC.style.color = 'white';
      TVC.style.backgroundColor = '#4930e8';
      TVC.style.cursor = 'pointer';
    }
  }, 1000);
  checkedEE.style.display = "flex";
  EEZone.style.animation = "disappear 1s forwards";
});

backEE.addEventListener("click", function () {
  EESlide1.style.display = "flex";
  EESlide2.style.display = "none";
});

let SE = document.getElementById("SE");
let SEZone = document.getElementById("SEZone");
let SESlide1 = document.getElementById("SESlide1");
let SESlide2 = document.getElementById("SESlide2");
let SESlide3 = document.getElementById("SESlide3");
let backSE1 = document.getElementById("backSE1");
let backSE2 = document.getElementById("backSE2");
let nextSE1 = document.getElementById("nextSE");
let nextSE2 = document.getElementById("nextSE2");
let nextSE3 = document.getElementById("nextSE3");

SE.addEventListener("click", function () {
  setTimeout(function () {
    testZone.style.display = "none";
    SESlide1.style.display = "flex";
    SESlide2.style.display = "none";
    SESlide3.style.display = "none";
    SEZone.style.display = "flex";
    SEZone.style.animation = "appear 1s forwards";
  }, 1000);
  testZone.style.animation = "disappear 1s forwards";
});

nextSE1.addEventListener("click", function () {
  SESlide1.style.display = "none";
  SESlide2.style.display = "flex";
  SESlide3.style.display = "none";
});

backSE1.addEventListener("click", function () {
  SESlide1.style.display = "flex";
  SESlide2.style.display = "none";
  SESlide3.style.display = "none";
});

nextSE2.addEventListener("click", function () {
  SESlide1.style.display = "none";
  SESlide2.style.display = "none";
  SESlide3.style.display = "flex";
});

backSE2.addEventListener("click", function () {
  SESlide1.style.display = "none";
  SESlide2.style.display = "flex";
  SESlide3.style.display = "none";
});

let checkedSE = document.getElementById("checkedSE");

nextSE3.addEventListener("click", function () {
  setTimeout(function () {
    SESlide3.style.display = "none";
    SEZone.style.display = "none";
    testZone.style.display = "flex";
    SEZone.style.animation = "appear 1s forwards";
    testZone.style.animation = "appear 1s forwards";
    if (
      checkedNEM.style.display == "flex" &&
      checkedSE.style.display == "flex" &&
      checkedEE.style.display == "flex" &&
      checkedESS.style.display == "flex" &&
      checkedPGC.style.display == "flex"
    ) {
      console.log("all checked");
      TVC.style.color = 'white';
      TVC.style.backgroundColor = '#4930e8';
      TVC.style.cursor = 'pointer';
    }
  }, 1000);
  checkedSE.style.display = "flex";
  SEZone.style.animation = "disappear 1s forwards";
});

let NEM = document.getElementById("NEM");
let NEMZone = document.getElementById("NEMZone");
let NEMSlide1 = document.getElementById("NEMSlide1");
let NEMSlide2 = document.getElementById("NEMSlide2");
let NEMSlide3 = document.getElementById("NEMSlide3");
let nextNEM = document.getElementById("nextNEM");
let backNEM1 = document.getElementById("backNEM1");
let backNEM2 = document.getElementById("backNEM2");
let nextNEM2 = document.getElementById("nextNEM2");
let nextNEM3 = document.getElementById("nextNEM3");

NEM.addEventListener("click", function () {
  setTimeout(function () {
    testZone.style.display = "none";
    NEMSlide1.style.display = "flex";
    NEMSlide2.style.display = "none";
    NEMSlide3.style.display = "none";
    NEMZone.style.display = "flex";
    NEMZone.style.animation = "appear 1s forwards";
  }, 1000);
  testZone.style.animation = "disappear 1s forwards";
});

nextNEM.addEventListener("click", function () {
  NEMSlide1.style.display = "none";
  NEMSlide2.style.display = "flex";
  NEMSlide3.style.display = "none";
});

backNEM1.addEventListener("click", function () {
  NEMSlide1.style.display = "flex";
  NEMSlide2.style.display = "none";
  NEMSlide3.style.display = "none";
});

nextNEM2.addEventListener("click", function () {
  NEMSlide1.style.display = "none";
  NEMSlide2.style.display = "none";
  NEMSlide3.style.display = "flex";
});

backNEM2.addEventListener("click", function () {
  NEMSlide1.style.display = "none";
  NEMSlide2.style.display = "flex";
  NEMSlide3.style.display = "none";
});

let checkedNEM = document.getElementById("checkedNEM");

nextNEM3.addEventListener("click", function () {
  setTimeout(function () {
    NEMSlide3.style.display = "none";
    NEMZone.style.display = "none";
    testZone.style.display = "flex";
    NEMZone.style.animation = "appear 1s forwards";
    testZone.style.animation = "appear 1s forwards";
    if (
      checkedNEM.style.display == "flex" &&
      checkedSE.style.display == "flex" &&
      checkedEE.style.display == "flex" &&
      checkedESS.style.display == "flex" &&
      checkedPGC.style.display == "flex"
    ) {
      console.log("all checked");
      TVC.style.color = 'white';
      TVC.style.backgroundColor = '#4930e8';
      TVC.style.cursor = 'pointer';
    }
  }, 1000);
  checkedNEM.style.display = "flex";
  NEMZone.style.animation = "disappear 1s forwards";
});



let TVC = document.getElementById("TVC");
let TVCzone = document.getElementById("TVCzone");

TVC.addEventListener("click", function () {
  if (
    checkedNEM.style.display == "flex" &&
    checkedSE.style.display == "flex" &&
    checkedEE.style.display == "flex" &&
    checkedESS.style.display == "flex" &&
    checkedPGC.style.display == "flex"
  ) {
    setTimeout(function () {
      testZone.style.display = "none";
      TVCzone.style.display = "flex";
      TVCzone.style.animation = "appear 1s forwards";
    }, 1000);
    testZone.style.animation = "disappear 1s forwards";
  }
});

let ready = document.getElementById("ready");
let start = document.getElementById("start");
let back2 = document.getElementById("back2");
let current = document.getElementById("current");
let question1 = document.getElementById("question1");
let q1r1 = document.getElementById("q1r1");
let q1r2 = document.getElementById("q1r2");
let q1r3 = document.getElementById("q1r3");
let question2 = document.getElementById("question2");
let q2r1 = document.getElementById("q2r1");
let q2r2 = document.getElementById("q2r2");
let q2r3 = document.getElementById("q2r3");
let question3 = document.getElementById("question3");
let q3r1 = document.getElementById("q3r1");
let q3r2 = document.getElementById("q3r2");
let q3r3 = document.getElementById("q3r3");
let question4 = document.getElementById("question4");
let q4r1 = document.getElementById("q4r1");
let q4r2 = document.getElementById("q4r2");
let q4r3 = document.getElementById("q4r3");
let question5 = document.getElementById("question5");
let q5r1 = document.getElementById("q5r1");
let q5r2 = document.getElementById("q5r2");
let q5r3 = document.getElementById("q5r3");
let question6 = document.getElementById("question6");
let q6r1 = document.getElementById("q6r1");
let q6r2 = document.getElementById("q6r2");
let q6r3 = document.getElementById("q6r3");
let question7 = document.getElementById("question7");
let q7r1 = document.getElementById("q7r1");
let q7r2 = document.getElementById("q7r2");
let q7r3 = document.getElementById("q7r3");

back2.addEventListener("click", function () {
  setTimeout(function () {
    TVCzone.style.display = "none";
    testZone.style.display = "flex";
    TVCzone.style.animation = "appear 1s forwards";
    testZone.style.animation = "appear 1s forwards";
  }, 1000);
  TVCzone.style.animation = "disappear 1s forwards";
});

let questionnaireForm = document.getElementById("questionnaireForm");
let submitForm = document.getElementById("submitForm");
let nom = document.getElementById("nom");
let prenom = document.getElementById("prenom");
let email = document.getElementById("email");
let entite = document.getElementById("entite");
let cadre = document.getElementById("cadre");
let dateNaissance = document.getElementById("ddn");

let formData; // Declare a global variable to store the form data

submitForm.addEventListener("click", function (e) {
  e.preventDefault();
  if (nom.value != "" && prenom.value != "" && email.value != "") {
    formData = {
      date: new Date().toLocaleString(),
      entite: entite.value,
      nom: nom.value,
      prenom: prenom.value,
      email: email.value,
      dateNaissance: dateNaissance.value,
      cadre: cadre.value,
    };
    questionnaireForm.style.display = "none";
    ready.style.display = "flex";
  }
  // Remove the fetch call from here
});

start.addEventListener("click", function () {
  setTimeout(function () {
    ready.style.display = "none";
    question1.style.display = "flex";
    ready.style.animation = "appear 1s forwards";
    question1.style.animation = "appear 1s forwards";
  }, 1000);
  ready.style.animation = "disappear 1s forwards";
});

let bonneReponse = document.getElementById("bonneReponse");
let mauvaiseReponse = document.getElementById("mauvaiseReponse");
let descriptif = document.querySelectorAll(".descriptif");
let nextQuestion = document.querySelectorAll(".nextQuestion");
let QCM_image = document.querySelectorAll(".QCM_image");
let questionCount = 0;
console.log(descriptif);
// Function to disable other buttons in the same question group
// Function to disable other buttons in the same question group
function disableQuestionButtons(buttons) {
  buttons.forEach((button) => {
    button.removeEventListener("click", button._clickHandler);
  });
}

// Assign click handlers to question buttons
function assignClickHandler(button, clickHandler) {
  button._clickHandler = clickHandler;
  button.addEventListener("click", clickHandler);
}

function countGoodAnswers() {
  let goodAnswers = 0;
  if (q1r2.style.backgroundColor == "green") {
    goodAnswers++;
  }
  if (q2r2.style.backgroundColor == "green") {
    goodAnswers++;
  }
  if (q3r3.style.backgroundColor == "green") {
    goodAnswers++;
  }
  if (q4r2.style.backgroundColor == "green") {
    goodAnswers++;
  }
  if (q5r1.style.backgroundColor == "green") {
    goodAnswers++;
  }
  if (q6r2.style.backgroundColor == "green") {
    goodAnswers++;
  }
  if (q7r3.style.backgroundColor == "green") {
    goodAnswers++;
  }
  console.log(goodAnswers);
  return goodAnswers;
}

// Question 1
let q1Buttons = [q1r1, q1r2, q1r3];
assignClickHandler(q1r1, function () {
  disableQuestionButtons(q1Buttons);
  q1r1.style.backgroundColor = "red";
  q1r1.style.animation = "blinking 0.2s infinite";
  setTimeout(function () {
    question1.style.display = "none";
    mauvaiseReponse.style.display = "flex";
    question1.style.animation = "appear 1s forwards";
    mauvaiseReponse.style.animation = "appear 1s forwards";
    descriptif.forEach((element) => {
      element.textContent =
        "Pour chaque tâche sa couleur, pour un nettoyage sans erreur!";
    });
  }, 2000);
  question1.style.animation = "disappear 1s forwards 1s";
});

assignClickHandler(q1r2, function () {
  disableQuestionButtons(q1Buttons);
  q1r2.style.backgroundColor = "green";
  q1r2.style.animation = "blinking 0.2s infinite";
  setTimeout(function () {
    question1.style.display = "none";
    bonneReponse.style.display = "flex";
    question1.style.animation = "appear 1s forwards";
    bonneReponse.style.animation = "appear 1s forwards";
    descriptif.forEach((element) => {
      element.textContent =
        "Pour chaque tâche sa couleur, pour un nettoyage sans erreur!";
    });
  }, 2000);
  question1.style.animation = "disappear 1s forwards 1s";
});

assignClickHandler(q1r3, function () {
  disableQuestionButtons(q1Buttons);
  q1r3.style.backgroundColor = "red";
  q1r3.style.animation = "blinking 0.2s infinite";
  setTimeout(function () {
    question1.style.display = "none";
    mauvaiseReponse.style.display = "flex";
    question1.style.animation = "appear 1s forwards";
    mauvaiseReponse.style.animation = "appear 1s forwards";
    descriptif.forEach((element) => {
      element.textContent =
        "Pour chaque tâche sa couleur, pour un nettoyage sans erreur!";
    });
  }, 2000);
  question1.style.animation = "disappear 1s forwards 1s";
});

// Question 2
let q2Buttons = [q2r1, q2r2, q2r3];
assignClickHandler(q2r1, function () {
  disableQuestionButtons(q2Buttons);
  q2r1.style.backgroundColor = "red";
  q2r1.style.animation = "blinking 0.2s infinite";
  setTimeout(function () {
    question2.style.display = "none";
    mauvaiseReponse.style.display = "flex";
    question2.style.animation = "appear 1s forwards";
    mauvaiseReponse.style.animation = "appear 1s forwards";
    descriptif.forEach((element) => {
      element.textContent = "Avec la godille, le sol scintille!";
    });
    QCM_image.forEach((element) => {
      element.style.background = "url('images/QCM_images/2.png')";
      element.style.backgroundSize = "contain";
      element.style.backgroundRepeat = "no-repeat";
      element.style.height = "200px";
    });
  }, 2000);
  question2.style.animation = "disappear 1s forwards 1s";
});

assignClickHandler(q2r2, function () {
  disableQuestionButtons(q2Buttons);
  q2r2.style.backgroundColor = "green";
  q2r2.style.animation = "blinking 0.2s infinite";
  setTimeout(function () {
    question2.style.display = "none";
    bonneReponse.style.display = "flex";
    question2.style.animation = "appear 1s forwards";
    bonneReponse.style.animation = "appear 1s forwards";
    descriptif.forEach((element) => {
      element.textContent = "Avec la godille, le sol scintille!";
    });
    QCM_image.forEach((element) => {
      element.style.background = "url('images/QCM_images/2.png')";
      element.style.backgroundSize = "contain";
      element.style.backgroundRepeat = "no-repeat";
      element.style.height = "200px";
    });
  }, 2000);
  question2.style.animation = "disappear 1s forwards 1s";
});

assignClickHandler(q2r3, function () {
  disableQuestionButtons(q2Buttons);
  q2r3.style.backgroundColor = "red";
  q2r3.style.animation = "blinking 0.2s infinite";
  setTimeout(function () {
    question2.style.display = "none";
    mauvaiseReponse.style.display = "flex";
    question2.style.animation = "appear 1s forwards";
    mauvaiseReponse.style.animation = "appear 1s forwards";
    descriptif.forEach((element) => {
      element.textContent = "Avec la godille, le sol scintille!";
    });
    QCM_image.forEach((element) => {
      element.style.background = "url('images/QCM_images/2.png')";
      element.style.backgroundSize = "contain";
      element.style.backgroundRepeat = "no-repeat";
      element.style.height = "200px";
    });
  }, 2000);
  question2.style.animation = "disappear 1s forwards 1s";
});

// Question 3
let q3Buttons = [q3r1, q3r2, q3r3];
assignClickHandler(q3r1, function () {
  disableQuestionButtons(q3Buttons);
  q3r1.style.backgroundColor = "red";
  q3r1.style.animation = "blinking 0.2s infinite";
  setTimeout(function () {
    question3.style.display = "none";
    mauvaiseReponse.style.display = "flex";
    question3.style.animation = "appear 1s forwards";
    mauvaiseReponse.style.animation = "appear 1s forwards";
    descriptif.forEach((element) => {
      element.textContent =
        "Des gants aujourd'hui, des mains demain, mieux vaut marcher lourdement que boiter tristement.";
    });
    QCM_image.forEach((element) => {
      element.style.background = "url('images/QCM_images/3.png')";
      element.style.backgroundSize = "contain";
      element.style.backgroundRepeat = "no-repeat";
      element.style.height = "350px";
    });
  }, 2000);
  question3.style.animation = "disappear 1s forwards 1s";
});

assignClickHandler(q3r2, function () {
  disableQuestionButtons(q3Buttons);
  q3r2.style.backgroundColor = "red";
  q3r2.style.animation = "blinking 0.2s infinite";
  setTimeout(function () {
    question3.style.display = "none";
    mauvaiseReponse.style.display = "flex";
    question3.style.animation = "appear 1s forwards";
    mauvaiseReponse.style.animation = "appear 1s forwards";
    descriptif.forEach((element) => {
      element.textContent =
        "Des gants aujourd'hui, des mains demain, mieux vaut marcher lourdement que boiter tristement.";
    });
    QCM_image.forEach((element) => {
      element.style.background = "url('images/QCM_images/3.png')";
      element.style.backgroundSize = "contain";
      element.style.backgroundRepeat = "no-repeat";
      element.style.height = "350px";
    });
  }, 2000);
  question3.style.animation = "disappear 1s forwards 1s";
});

assignClickHandler(q3r3, function () {
  disableQuestionButtons(q3Buttons);
  q3r3.style.backgroundColor = "green";
  q3r3.style.animation = "blinking 0.2s infinite";
  setTimeout(function () {
    question3.style.display = "none";
    bonneReponse.style.display = "flex";
    question3.style.animation = "appear 1s forwards";
    bonneReponse.style.animation = "appear 1s forwards";
    descriptif.forEach((element) => {
      element.textContent =
        "Des gants aujourd'hui, des mains demain, mieux vaut marcher lourdement que boiter tristement.";
    });
    QCM_image.forEach((element) => {
      element.style.background = "url('images/QCM_images/3.png')";
      element.style.backgroundSize = "contain";
      element.style.backgroundRepeat = "no-repeat";
      element.style.height = "350px";
    });
  }, 2000);
  question3.style.animation = "disappear 1s forwards 1s";
});

// Question 4
let q4Buttons = [q4r1, q4r2, q4r3];
assignClickHandler(q4r1, function () {
  disableQuestionButtons(q4Buttons);
  q4r1.style.backgroundColor = "red";
  q4r1.style.animation = "blinking 0.2s infinite";
  setTimeout(function () {
    question4.style.display = "none";
    mauvaiseReponse.style.display = "flex";
    question4.style.animation = "appear 1s forwards";
    mauvaiseReponse.style.animation = "appear 1s forwards";
    descriptif.forEach((element) => {
      element.textContent = "Il vaut mieux prévenir que guérir.";
    });
    QCM_image.forEach((element) => {
      element.style.background = "url('images/QCM_images/4.png')";
      element.style.backgroundSize = "contain";
      element.style.backgroundRepeat = "no-repeat";
      element.style.height = "200px";
    });
  }, 2000);
  question4.style.animation = "disappear 1s forwards 1s";
});

assignClickHandler(q4r2, function () {
  disableQuestionButtons(q4Buttons);
  q4r2.style.backgroundColor = "green";
  q4r2.style.animation = "blinking 0.2s infinite";
  setTimeout(function () {
    question4.style.display = "none";
    bonneReponse.style.display = "flex";
    question4.style.animation = "appear 1s forwards";
    bonneReponse.style.animation = "appear 1s forwards";
    descriptif.forEach((element) => {
      element.textContent = "Il vaut mieux prévenir que guérir.";
    });
    QCM_image.forEach((element) => {
      element.style.background = "url('images/QCM_images/4.png')";
      element.style.backgroundSize = "contain";
      element.style.backgroundRepeat = "no-repeat";
      element.style.height = "200px";
    });
  }, 2000);
  question4.style.animation = "disappear 1s forwards 1s";
});

assignClickHandler(q4r3, function () {
  disableQuestionButtons(q4Buttons);
  q4r3.style.backgroundColor = "red";
  q4r3.style.animation = "blinking 0.2s infinite";
  setTimeout(function () {
    question4.style.display = "none";
    mauvaiseReponse.style.display = "flex";
    question4.style.animation = "appear 1s forwards";
    mauvaiseReponse.style.animation = "appear 1s forwards";
    descriptif.forEach((element) => {
      element.textContent = "Il vaut mieux prévenir que guérir.";
    });
    QCM_image.forEach((element) => {
      element.style.background = "url('images/QCM_images/4.png')";
      element.style.backgroundSize = "contain";
      element.style.backgroundRepeat = "no-repeat";
      element.style.height = "200px";
    });
  }, 2000);
  question4.style.animation = "disappear 1s forwards 1s";
});

// Question 5
let q5Buttons = [q5r1, q5r2, q5r3];
assignClickHandler(q5r1, function () {
  disableQuestionButtons(q5Buttons);
  q5r1.style.backgroundColor = "green";
  q5r1.style.animation = "blinking 0.2s infinite";
  setTimeout(function () {
    question5.style.display = "none";
    bonneReponse.style.display = "flex";
    question5.style.animation = "appear 1s forwards";
    bonneReponse.style.animation = "appear 1s forwards";
    descriptif.forEach((element) => {
      element.textContent = "Suivre les pictogrammes, c'est éviter les drames!";
    });
    QCM_image.forEach((element) => {
      element.style.background = "url('images/QCM_images/5.png')";
      element.style.backgroundSize = "contain";
      element.style.backgroundRepeat = "no-repeat";
      element.style.height = "350px";
    });
  }, 2000);
  question5.style.animation = "disappear 1s forwards 1s";
});

assignClickHandler(q5r2, function () {
  disableQuestionButtons(q5Buttons);
  q5r2.style.backgroundColor = "red";
  q5r2.style.animation = "blinking 0.2s infinite";
  setTimeout(function () {
    question5.style.display = "none";
    mauvaiseReponse.style.display = "flex";
    question5.style.animation = "appear 1s forwards";
    mauvaiseReponse.style.animation = "appear 1s forwards";
    descriptif.forEach((element) => {
      element.textContent = "Suivre les pictogrammes, c'est éviter les drames!";
    });
    QCM_image.forEach((element) => {
      element.style.background = "url('images/QCM_images/5.png')";
      element.style.backgroundSize = "contain";
      element.style.backgroundRepeat = "no-repeat";
      element.style.height = "350px";
    });
  }, 2000);
  question5.style.animation = "disappear 1s forwards 1s";
});

assignClickHandler(q5r3, function () {
  disableQuestionButtons(q5Buttons);
  q5r3.style.backgroundColor = "red";
  q5r3.style.animation = "blinking 0.2s infinite";
  setTimeout(function () {
    question5.style.display = "none";
    mauvaiseReponse.style.display = "flex";
    question5.style.animation = "appear 1s forwards";
    mauvaiseReponse.style.animation = "appear 1s forwards";
    descriptif.forEach((element) => {
      element.textContent = "Suivre les pictogrammes, c'est éviter les drames!";
    });
    QCM_image.forEach((element) => {
      element.style.background = "url('images/QCM_images/5.png')";
      element.style.backgroundSize = "contain";
      element.style.backgroundRepeat = "no-repeat";
      element.style.height = "350px";
    });
  }, 2000);
  question5.style.animation = "disappear 1s forwards 1s";
});

// Question 6
let q6Buttons = [q6r1, q6r2, q6r3];
assignClickHandler(q6r1, function () {
  disableQuestionButtons(q6Buttons);
  q6r1.style.backgroundColor = "red";
  q6r1.style.animation = "blinking 0.2s infinite";
  setTimeout(function () {
    question6.style.display = "none";
    mauvaiseReponse.style.display = "flex";
    question6.style.animation = "appear 1s forwards";
    mauvaiseReponse.style.animation = "appear 1s forwards";
    descriptif.forEach((element) => {
      element.textContent =
        "Respecter l'environnement, pour un avenir éclatant!";
    });
    QCM_image.forEach((element) => {
      element.style.background = "url('images/QCM_images/eco.png')";
      element.style.backgroundSize = "contain";
      element.style.borderRadius = "15px";
      element.style.backgroundRepeat = "no-repeat";
    });
  }, 2000);
  question6.style.animation = "disappear 1s forwards 1s";
});

assignClickHandler(q6r2, function () {
  disableQuestionButtons(q6Buttons);
  q6r2.style.backgroundColor = "green";
  q6r2.style.animation = "blinking 0.2s infinite";
  setTimeout(function () {
    question6.style.display = "none";
    bonneReponse.style.display = "flex";
    question6.style.animation = "appear 1s forwards";
    bonneReponse.style.animation = "appear 1s forwards";
    descriptif.forEach((element) => {
      element.textContent =
        "Respecter l'environnement, pour un avenir éclatant!";
    });
    QCM_image.forEach((element) => {
      element.style.background = "url('images/QCM_images/eco.png')";
      element.style.backgroundSize = "contain";
      element.style.borderRadius = "15px";
      element.style.backgroundRepeat = "no-repeat";
    });
  }, 2000);
  question6.style.animation = "disappear 1s forwards 1s";
});

assignClickHandler(q6r3, function () {
  disableQuestionButtons(q6Buttons);
  q6r3.style.backgroundColor = "red";
  q6r3.style.animation = "blinking 0.2s infinite";
  setTimeout(function () {
    question6.style.display = "none";
    mauvaiseReponse.style.display = "flex";
    question6.style.animation = "appear 1s forwards";
    element.style.borderRadius = "15px";
    mauvaiseReponse.style.animation = "appear 1s forwards";
    descriptif.forEach((element) => {
      element.textContent =
        "Respecter l'environnement, pour un avenir éclatant!";
    });
    QCM_image.forEach((element) => {
      element.style.background = "url('images/QCM_images/eco.png')";
      element.style.backgroundSize = "contain";
      element.style.borderRadius = "15px";
      element.style.backgroundRepeat = "no-repeat";
    });
  }, 2000);
  question6.style.animation = "disappear 1s forwards 1s";
});

// Question 7
let q7Buttons = [q7r1, q7r2, q7r3];
assignClickHandler(q7r1, function () {
  disableQuestionButtons(q7Buttons);
  q7r1.style.backgroundColor = "red";
  q7r1.style.animation = "blinking 0.2s infinite";
  setTimeout(function () {
    question7.style.display = "none";
    mauvaiseReponse.style.display = "flex";
    question7.style.animation = "appear 1s forwards";
    mauvaiseReponse.style.animation = "appear 1s forwards";
    descriptif.forEach((element) => {
      element.textContent =
        "Garder le dos droit, c'est éviter bien des tracas!";
    });
    QCM_image.forEach((element) => {
      element.style.background = "url('images/QCM_images/7.png')";
      element.style.backgroundSize = "contain";
      element.style.borderRadius = "0px";
      element.style.backgroundRepeat = "no-repeat";
      element.style.height = "350px";
    });
  }, 2000);
  question7.style.animation = "disappear 1s forwards 1s";
});

assignClickHandler(q7r2, function () {
  disableQuestionButtons(q7Buttons);
  q7r2.style.backgroundColor = "red";
  q7r2.style.animation = "blinking 0.2s infinite";
  setTimeout(function () {
    question7.style.display = "none";
    mauvaiseReponse.style.display = "flex";
    question7.style.animation = "appear 1s forwards";
    mauvaiseReponse.style.animation = "appear 1s forwards";
    descriptif.forEach((element) => {
      element.textContent =
        "Garder le dos droit, c'est éviter bien des tracas!";
    });
    QCM_image.forEach((element) => {
      element.style.background = "url('images/QCM_images/7.png')";
      element.style.backgroundSize = "contain";
      element.style.backgroundRepeat = "no-repeat";
      element.style.borderRadius = "0px";
      element.style.height = "350px";
    });
  }, 2000);
  question7.style.animation = "disappear 1s forwards 1s";
});

assignClickHandler(q7r3, function () {
  disableQuestionButtons(q7Buttons);
  q7r3.style.backgroundColor = "green";
  q7r3.style.animation = "blinking 0.2s infinite";
  setTimeout(function () {
    question7.style.display = "none";
    bonneReponse.style.display = "flex";
    question7.style.animation = "appear 1s forwards";
    bonneReponse.style.animation = "appear 1s forwards";
    descriptif.forEach((element) => {
      element.textContent =
        "Garder le dos droit, c'est éviter bien des tracas!";
    });
    QCM_image.forEach((element) => {
      element.style.background = "url('images/QCM_images/7.png')";
      element.style.backgroundSize = "contain";
      element.style.borderRadius = "0px";
      element.style.backgroundRepeat = "no-repeat";
      element.style.height = "350px";
    });
  }, 2000);
  question7.style.animation = "disappear 1s forwards 1s";
});

let merci = document.getElementById("merci");
let finish = document.getElementById("finish");

nextQuestion.forEach((element) => {
  element.addEventListener("click", function () {
    console.log(questionCount);
    if (questionCount == 0) {
      setTimeout(function () {
        questionCount = 1;
        bonneReponse.style.display = "none";
        mauvaiseReponse.style.display = "none";
        question2.style.display = "flex";
        mauvaiseReponse.style.animation = "appear 1s forwards";
        bonneReponse.style.animation = "appear 1s forwards";
        question2.style.animation = "appear 1s forwards";
      }, 1000);
      mauvaiseReponse.style.animation = "disappear 1s forwards";
      bonneReponse.style.animation = "disappear 1s forwards";
    } else if (questionCount == 1) {
      setTimeout(function () {
        questionCount = 2;
        bonneReponse.style.display = "none";
        mauvaiseReponse.style.display = "none";
        question3.style.display = "flex";
        mauvaiseReponse.style.animation = "appear 1s forwards";
        bonneReponse.style.animation = "appear 1s forwards";
        question3.style.animation = "appear 1s forwards";
      }, 1000);
      mauvaiseReponse.style.animation = "disappear 1s forwards";
      bonneReponse.style.animation = "disappear 1s forwards";
    } else if (questionCount == 2) {
      setTimeout(function () {
        questionCount = 3;
        bonneReponse.style.display = "none";
        mauvaiseReponse.style.display = "none";
        question4.style.display = "flex";
        mauvaiseReponse.style.animation = "appear 1s forwards";
        bonneReponse.style.animation = "appear 1s forwards";
        question4.style.animation = "appear 1s forwards";
      }, 1000);
      mauvaiseReponse.style.animation = "disappear 1s forwards";
      bonneReponse.style.animation = "disappear 1s forwards";
    } else if (questionCount == 3) {
      setTimeout(function () {
        questionCount = 4;
        bonneReponse.style.display = "none";
        mauvaiseReponse.style.display = "none";
        question5.style.display = "flex";
        mauvaiseReponse.style.animation = "appear 1s forwards";
        bonneReponse.style.animation = "appear 1s forwards";
        question5.style.animation = "appear 1s forwards";
      }, 1000);
      mauvaiseReponse.style.animation = "disappear 1s forwards";
      bonneReponse.style.animation = "disappear 1s forwards";
    } else if (questionCount == 4) {
      setTimeout(function () {
        questionCount = 5;
        bonneReponse.style.display = "none";
        mauvaiseReponse.style.display = "none";
        question6.style.display = "flex";
        mauvaiseReponse.style.animation = "appear 1s forwards";
        bonneReponse.style.animation = "appear 1s forwards";
        question6.style.animation = "appear 1s forwards";
      }, 1000);
      mauvaiseReponse.style.animation = "disappear 1s forwards";
      bonneReponse.style.animation = "disappear 1s forwards";
    } else if (questionCount == 5) {
      setTimeout(function () {
        questionCount = 6;
        bonneReponse.style.display = "none";
        mauvaiseReponse.style.display = "none";
        question7.style.display = "flex";
        mauvaiseReponse.style.animation = "appear 1s forwards";
        bonneReponse.style.animation = "appear 1s forwards";
        question7.style.animation = "appear 1s forwards";
      }, 1000);
      mauvaiseReponse.style.animation = "disappear 1s forwards";
      bonneReponse.style.animation = "disappear 1s forwards";
    } else {
      countGoodAnswers();
      setTimeout(function () {
        question7.style.display = "none";
        mauvaiseReponse.style.display = "none";
        bonneReponse.style.display = "none";
        merci.style.display = "flex";
        merci.style.animation = "appear 1s forwards";
      }, 1000);
      mauvaiseReponse.style.animation = "disapear 1s forwards";
      bonneReponse.style.animation = "disapear 1s forwards";
    }
  });
});

let finishButton = document.getElementById("finish");

finishButton.addEventListener("click", function () {
  // Disable the button to prevent multiple clicks
  finishButton.disabled = true;

  let goodAnswers = countGoodAnswers(); // This will count the correct answers

  const dataToSend = {
    ...formData,
    goodAnswers: goodAnswers + "/7",
    result: goodAnswers >= 4 ? "Validé" : "Non validé",
  };

  // Send the combined data to Google Drive
  fetch(
    "https://script.google.com/macros/s/AKfycbxEZAjH-mIei53unNUN6aMBByEEQRKucJGpHeGYATU9lLPBszFPjNGgw2Z9C8Gkwt8/exec",
    {
      method: "POST",
      body: JSON.stringify(dataToSend),
    }
  )
    .then((response) => response.text())
    .then((data) => {
      console.log(data);
      alert("Responses submitted successfully!");
    })
    .catch((error) => console.error("Error:", error))
    .finally(() => {
      // Reload the page after 1 second
      setTimeout(function () {
        location.reload();
      }, 1000);
    });
});
