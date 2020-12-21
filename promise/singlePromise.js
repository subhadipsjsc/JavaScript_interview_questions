
/**
 * Nodejs : call back 
*/
var x =true

let myPromise = ()=>{
    return new Promise(function(resolve, reject) {
        setTimeout(()=> {
            if (x) {
                resolve({msg: 'It works', data: 'some data'});
            } else {
                reject(new Error({msg: 'It does not work'}));
            }
        }, 1000);
    })
    .then((result) => {
        console.log("Everything Resolved");
        console.log(result)
    })
    .catch( (err) => {
        console.log("Something rejected");
        console.log(result)
    });
}

myPromise()