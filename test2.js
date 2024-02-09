let incomes = [ 1000 , 2000 , 2500 ];

// let incom = incomes[0];

for (let i=0 ; i < incomes.length; i++){
    // incomes[i] = incomes[i] - 10
    if (incomes[i] > 1999){
        incomes[i] -= incomes[i] * .2
    }
}

console.log(incomes)