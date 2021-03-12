const form = document.querySelector("form");
const response = document.getElementById("response");

form.addEventListener("submit", event => {
  event.preventDefault();
  const url = form.elements.url.value;
  const slug = form.elements.slug.value;
  const body = { url: url, slug: slug };
  fetch("/api/create", {
    method: "POST",
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json" }
  })
    .then(response => response.json())
    .then(json => {
      if (json.success === true) {
        response.innerHTML = `<p><b>Your short url is: </b><a href="https://${window.location.hostname}/${json.slug}">https://${window.location.hostname}/${json.slug}</a></p>
        `;
      } else {
        response.innerHTML = `<p><b>Error: </b>${json.error}</p>`;
      }
      form.reset();
    });
});

function copytoken() {
  document.getElementById("token").select();
  document.execCommand("copy");
  const notyf = new Notyf();
  notyf.success("Delete Token Copied to Clipboard");
}






 document.getElementById('uri')
  .addEventListener('keyup', function(event) {
    if (event.code === 'Enter') {
      event.preventDefault();
      document.querySelector('form').submit();
    }
  });