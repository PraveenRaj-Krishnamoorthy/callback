//simple callback method 1
const func = (x, y, callback) => {
    let z = x + y;
    callback(z);
};
const add = (z) => {
    console.log(z);
};
func(5, 5, add);
// ---------------------------//

// callback
const bio = {
    name: "Praveen raj K",
    gender: "Male",
    age: 28,
    location: "Chennai",
};
const nme = (bio, callback) => {
    console.log("What is the name?");
    setTimeout(() => {
        console.log(bio.name);
        callback(bio);
    }, 1000);
    // 1000milliseconds=>1s
};
const gen = (bio, callback) => {
    console.log("The gender is?");
    setTimeout(() => {
        console.log(bio.gender);
        callback(bio);
    }, 1000);
};

const age = (bio, callback) => {
    console.log("The age is?");
    setTimeout(() => {
        console.log(bio.age);
        callback(bio);
    }, 1000);
};

const local = (bio) => {
    console.log("The location is?");
    setTimeout(() => {
        console.log(bio.location);
    }, 1000);
};

nme(bio, function (bio) {
    gen(bio, function (bio) {
        age(bio, function (bio) {
            local(bio)
        });
    });
});
