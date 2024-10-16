const numbers = [2, 8, 4, 7, 2, 87];

// Crea un nuovo array in cui tutti i numeri siano incrementati di 1
// Risultato: [3, 9, 5, 8, 3, 88]

// con ForEach
numbers.forEach((number,i, numbers) => {
    numbers[i] = number + 1;
});

console.log(numbers);


// con ciclo for

/*for (let i = 0; i < numbers.length; i++) {
    numbers[i] +=1 ;  
}
console.log(numbers);*/