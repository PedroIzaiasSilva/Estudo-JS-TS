const url = 'https://jsonplaceholder.typicode.com/posts'

fetch(url)
    .then(response => response.json())
    .then(json => {
        const out = document.getElementById('out');

        json.forEach(post => {
            const div = document.createElement('div');
            div.innerHTML = `
              <h2>${post.title}</h2>
              <p>${post.body}</p>
            `;
            out.appendChild(div);
            
        });
    })
    .catch(e=> console.log(e))