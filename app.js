(function () {
  "use strict";

  function fetchText(path) {
    return fetch(path, { cache: "no-store" }).then(function (response) {
      if (!response.ok) throw new Error("Cannot load " + path + ": " + response.status);
      return response.text();
    });
  }

  function base64ToBytes(text) {
    var binary = atob(text.trim());
    var bytes = new Uint8Array(binary.length);
    for (var index = 0; index < binary.length; index += 1) {
      bytes[index] = binary.charCodeAt(index);
    }
    return bytes;
  }

  function decodeBase64Utf8(text) {
    return decodeURIComponent(escape(atob(text.trim())));
  }

  function decodeBundle(manifest, text) {
    if (manifest.compression !== "gzip") return Promise.resolve(decodeBase64Utf8(text));
    if (!window.DecompressionStream) throw new Error("This browser cannot read compressed files.");
    var stream = new Blob([base64ToBytes(text)]).stream().pipeThrough(new DecompressionStream("gzip"));
    return new Response(stream).text();
  }

  fetch("app_bundle.gz.chunks.json", { cache: "no-store" })
    .then(function (response) {
      if (!response.ok) throw new Error("Cannot load app manifest: " + response.status);
      return response.json();
    })
    .then(function (manifest) {
      return Promise.all((manifest.files || []).map(fetchText)).then(function (chunks) {
        return decodeBundle(manifest, chunks.join(""));
      });
    })
    .then(function (source) {
      (0, eval)(source);
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