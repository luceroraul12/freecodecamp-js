const greeting = (name = "Anonymous") => "Hello " + name;

const saludar = (saludo = "hola", nombre = "pipol") => saludo + " " + nombre;

console.log(greeting("John"));
console.log(greeting());
console.log("------");
console.log(saludar);
console.log(saludar("Buendia", "grupo"));
console.log(saludar(undefined, "juan"));

