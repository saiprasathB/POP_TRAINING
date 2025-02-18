// //  function promise(){

// //     return new Promise((resolve, reject) => {

// //         setTimeout(() => {
// //             resolve('Promise is resolved');
// //         }, 3000);

// //     })

// //  }
// //  console.log(promise());

// function promise(value) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (value) {
//                 resolve('Promise is resolved');
//             } else { 
//                 reject('Promise is rejected');
//             }
//         }, 3000);
//     })
// }

// promise(true).then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// })

function locationFinder(loc,time)
  {
    var location = new Promise((locFound,locNotFound)=>{
        setTimeout(()=>
        {
            if(isLocationFound(loc,time))
            {
                locFound(loc);
            }
            else
            {
                locNotFound("Location Not Found");
            }
        },time)
    });
    location.then((locFound) =>
    {
        console.log(locFound);
    }).catch((locNotFound)=>
    {
        console.log(locNotFound);
    });
  }

function isLocationFound(loc,time)
{
    const location="Chennai";
    const t=1000;
    if(loc === location && t<=time)
    {
        return true;
    }
    else
    {
        return false;
    }
}

locationFinder("Chennai",3000);




