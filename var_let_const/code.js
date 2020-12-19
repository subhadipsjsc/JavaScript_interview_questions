function run() {
    var v1 = "Foo 1";
    let l1 = "Bar 1";

    console.log(v1); 
    console.log(l1); 

    {
        var v2 = "Foo 2";
        let l2 = "Bazz";
        console.log(v2);
        console.log(l2);
    }

    console.log(v2);
    console.log(l2);  // Reference Error
}

run();




function run2() {
    console.log(v3); // undefined
    var v3 = "Foo";
    console.log(v3); // Foo

    console.log(l3); // ReferenceError
    let l3 = "Foo";
    console.log(l3); // Foo
}
  
run2();


function run3() {
    var v4 = "foo1";
    var v4 = "foo2";  // no issue

    let l4 = "bar1";
    let l4 = "bar2"; // Identifier 'l4' has already been declared
}
run3()