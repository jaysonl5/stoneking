animals = [
    {
       type: "tiger",
       mammal: true
    }, {
        type: "lion",
        mammal: true
    }, {
        type: "platypus",
        mammal: false
    }
]

console.log(animals);

test = ["one", "two", "three"];

let mammals = [];
for(let i = 0; i < animals.length; ++i){
    if(animals[i].mammal == true){
        mammals.push(animals[i].type);
    }
}

console.log("Mammals: " + mammals);

