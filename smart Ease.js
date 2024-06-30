// Fullname Function
function getFullname(firstname, surname, useFormalName = false, gender = "male") {
    if (!firstname || !surname) {
        return "Name is incomplete";
    }
    let fullname = `${firstname}  ${surname}`;
    if (useFormalName) {
        fullname = (gender === "male" ? "Lord " : "Lady ") + fullname;
    }
    return fullname;
}

// Create variables fullname1 and fullname2
let fullname1 = getFullname("Meron", "Mathias");
let fullname2 = getFullname("Sarah", "Smith");

console.log(fullname1); // "Meron Mathias"
console.log(fullname2); // "Sarah Smith"
