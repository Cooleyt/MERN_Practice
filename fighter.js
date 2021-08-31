//building classes -  its just a ruberic - not actual data

class Fighter{
    constructor(name, playerNum = 1){
        this.name = name;
        this.playerNum = playerNum;
        this.percentage = 0;
    }

    attack(opponent){
        if(opponent instanceof Fighter){
            const damage = 5;
            opponent.percentage += damage;
            console.log(`${this.name} attacked ${opponent.name} for ${damage} damage!`)
        }
    }
}

let Steve = new Fighter("Steve");
let Greninja = new Fighter("Greninja", 2);


console.log(Steve.percentage);
Greninja.attack(Steve);
console.log(Steve.percentage);