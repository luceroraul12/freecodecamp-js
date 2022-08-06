// Setup
const contacts = [
    {
        firstName: "Akira",
        lastName: "Laine",
        number: "0543236543",
        likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
        firstName: "Harry",
        lastName: "Potter",
        number: "0994372684",
        likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
        firstName: "Sherlock",
        lastName: "Holmes",
        number: "0487345643",
        likes: ["Intriguing Cases", "Violin"],
    },
    {
        firstName: "Kristian",
        lastName: "Vos",
        number: "unknown",
        likes: ["JavaScript", "Gaming", "Foxes"],
    },
];

function lookUpProfile(name, prop) {
    // Only change code below this line
    console.log("probando funcion");
    for(let i = 0; i < contacts.length; i++){
        if(name == contacts[i].firstName){
            if(prop in contacts[i]){
                var obtenido = contacts[i][prop];
                console.log(obtenido)
                return obtenido;
            } else {
                return "No such property";
            }
        }
    }
    return "No such contact";
}
// Only change code above this line
console.log("probando")
lookUpProfile("Akira", "likes");
console.log("probando")
lookUpProfile("Kristian", "lastName")
console.log("probando")
lookUpProfile("Bob", "number")