console.log("helloWorld")

fetch('https://vildskud-9634.restdb.io/rest/forestillinger', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'x-apikey': '6420a7ae22634c74fb00b1f5'
  }
})
.then(response => response.json())
.then(data => {
  let output = '<ul id="output" class="carrousel">';
  data.forEach(function(forestilling) {
    output += `
      <li class="bannerframe">
        <img src="assets/${forestilling.imageloc}">
        <div class="bannertekst">
        <h3 class="bannertitel">
            ${forestilling.Navn}
        </h3>
        <p class="ekstrainfo">
            ${forestilling.Dato_1}
        </p>
        <p>
            ${forestilling.short}
        </p>
        </div>
    </li>
    `;
  });
  output += '</ul>';
  document.getElementById('output').innerHTML = output;
})
.catch(err => console.log(err));