// console.log(1);

// setTimeout(() =>{
//     console.log(2);
// }, 2000)

// console.log(3);

// document.getElementById('btn').addEventListener('click', () =>{
//     console.log('saved');
// })
console.log('start')
const login = (username, password , callback) =>{
    setTimeout(() =>{
        callback({
            username :username,
            email : "aytajguseyn@gmail.com"
        }) 
    }, 1000);
}
const getPostsByUsername = (username, callback) =>{
    setTimeout(() =>{
        callback(['post1', 'post2', 'post3']);
    }, 2000)
}

const getPostDetails = (posts, callback) => {
    setTimeout(() =>{
        callback('post details');
    }, 2000)
}

login('aytachuseynova', '12345', user =>{
    console.log(user.username);
    console.log(user.email);

    getPostsByUsername(user.username, (posts) =>{
        console.log(posts);

        getPostDetails((posts[0]), (details) =>{
            console.log(details);
        } )
    });
});
console.log('end');