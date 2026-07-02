(function () {
  "use strict";

  function decodeBase64Utf8(text) {
    return decodeURIComponent(escape(atob(text.trim())));
  }

  fetch("app_bundle.b64", { cache: "no-store" })
    .then(function (response) {
      if (!response.ok) throw new Error("Cannot load app bundle: " + response.status);
      return response.text();
    })
    .then(function (bundle) {
      (0, eval)(decodeBase64Utf8(bundle));
    })
    .catch(function (error) {
      var node = document.getElementById("statusLine");
      if (node) {
        node.textContent = error.message;
        node.className = "status-line warn";
      } else {
        console.error(error);
      }
    });
})();