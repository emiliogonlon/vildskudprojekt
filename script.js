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
  let output = '<ul>';
  data.forEach(function(forestilling) {
    output += `
      <li>
        <h3>${forestilling.Navn}</h3>
        <p>${forestilling.konsulent}</p>
      </li>
    `;
  });
  output += '</ul>';
  document.getElementById('output').innerHTML = output;
})
.catch(err => console.log(err));