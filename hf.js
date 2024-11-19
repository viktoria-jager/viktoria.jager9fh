function udvozollek (vezeteknev, keresztnev) {
    console.log(`Üdvözöllek ${vezeteknev} ${keresztnev}!`);
}



udvozollek ("Jáger", "Viktória");
udvozollek ("Tóth", "Eszter");


function szorzas (a, b) {
    return a*b;
}

console.log(szorzas(5, 8));

console.log(szorzas(324, 610));

function szorzas(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        console.log(`Hibás paraméter: ${a}, ${b}`);
        return;
    }
    return a * b;
}

console.log(szorzas(5, "asdf")); 

let tomb = [3,6,12,53,86,43,934,201,53,87];

console.log(tomb[4]);

console.log(tomb.length);
for (let index = 0; index < tomb.length; index++){
    console.log(tomb[index]);
}

for (let index = 0; index < tomb.length; index++){
    console.log(tomb[index]*3); 
}

for (let index = 0; index < tomb.length; index++) {
    console.log(tomb[index] * 3 - 1);
}

for (let index = 0; index < tomb.length; i++) {
    if (tomb[index] % 2 !== 0) {  
        console.log(tomb[index]);
    }
}

