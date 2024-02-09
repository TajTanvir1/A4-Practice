// monthlySavings()
// input -  Array , Number

// tax > 3000 / 20%
// income - livingCost = savings
// savings < 0 = earn more

//


function monthlySavings(incomes, livingCost){
    if(!Array.isArray(incomes) || typeof livingCost !== 'number'){
        return "invalid input"
    }

    for (let i=0 ; i < incomes.length; i++){
       if (incomes[i] >= 3000){
            incomes[i] -= incomes[i] * .2
        }
    }

    for (let i=0 ; i < incomes.length; i++){

    }
    
    
    // const savings = incomes - livingCost;
    // return incomes
}
// console.log(savings)
console.log(monthlySavings([2000, 1000], 2))