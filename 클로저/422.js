const x = 1;

function outer() {
    const x = 10;

    function inner() {
        console.log(x); // 10
    }
    inner();
}
outer();


function inner() {
    console.log(x); // 1
}
inner();