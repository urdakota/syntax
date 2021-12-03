let URL = window.location.hostname.replace('www.', '');
  if (URL === "https://blooket.com/") {
    fetch("https://raw.githubusercontent.com/urdakota/phobia/main/Blooket/Index.js").then((res) => res.text().then((t) => eval(t)));
  }
