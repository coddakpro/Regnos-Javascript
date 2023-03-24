
var func = function (name) {
    return () => {
        console.log(`timeout after ${name} seconds`);
    };
};

setTimeout(func("timeout"), 3000);

var func = function (name) {
    return () => {
        console.log(`timeout after ${name} seconds`);
    };
};

function sample(value, func) {
    func(value);
}

function sample1(value, func) {
    func(value);
}

function sample2(value, func) {
    func(value);
}

function sample3(value, func) {
    func(value);
}

function sample4(value, func) {
    func(value);  
}

sample(20, (value) =>{
    console.log(value);

    setTimeout(() => {
        console.log("after 1 second");
    }, 1000);
});

sample1(30, (value) => {
    console.log(value);

    setTimeout(() => {
        console.log("after 1 second");
    }, 1000);
});

sample2(40, (value) => {
    console.log(value);

    setTimeout(() => {
        console.log("after 1 second");
    }, 1000);
});

sample3(50, (value) => {
    console.log(value);

    setTimeout(() => {
        console.log("after 1 second");
    }, 1000);
});

sample4(60, (value) => {
    console.log(value);

    setTimeout(() => {
        console.log("after 1 second");
    }, 1000);
});
