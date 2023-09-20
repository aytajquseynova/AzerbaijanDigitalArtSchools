async function fetchData() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    console.log(data);
    const ul = document.createElement('ul');
    data.map((post) => {
        const li = document.createElement('li');
        li.innerHTML = `
                        <h4>${post.title}</h4>
                        <p>${post.body}</p> `;
        ul.append(li)
    })
    document.querySelector('body').append(ul);
}
fetchData();