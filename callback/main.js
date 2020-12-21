
/**
 * Nodejs : call back 
*/

function functionOne(x) { 
    console.log (x+ " -> from func one "); 
};

function functionTwo( val , callback ) {
    var y = val+" -> from func two "
    callback(y)
}

functionTwo("Test ", functionOne);