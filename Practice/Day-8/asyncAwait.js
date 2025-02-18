// async function asAw() {
//     setTimeout( function() {
//         console.log("Hello World");
//     }, 2000);}


//     console.log(asAw());

//     asAw().then( function() {
//         console.log("Hello World");
//     });

// instagram console demo for post,like,comeent,share


async function commentCode() {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Comment is added");
        },2000);
    })
}

async function shareCode() {      
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Post is shared");
        },2000);
    })
}

async function LikeCode() {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Post is Liked");
        },2000);
    })
}

 async function postCode() {
return new Promise((createPost) => {
        setTimeout(() => {
            createPost("Post is created");
        }, 2000);
    })

   
}


const[like,comment,share,pos]=await Promise.all([Likecode(),commentCode(),shareCode(),postCode()]);
    console.log( pos);
    console.log( like);
    console.log( comment);
    console.log( share);