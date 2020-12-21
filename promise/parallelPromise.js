
const promise1 = {status: 1 , msg: 10 };
const promise2 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve(100)
    },1000);
})
.then( result => { return {status: 1 , msg: result*result}    })  // making square of the result
.catch( err => console.log(err) );

const promise3 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        reject('some error')
    },900);
}).catch( err => { return {status: 0 , msg: err }  });

Promise.all([promise1, promise2, promise3])
    .then((values) => {console.log(values)})
    .catch( err => console.log(err))


  