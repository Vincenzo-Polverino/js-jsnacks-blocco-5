const names = ['Edoardo', 'Simone', 'Francesco'];

// Stampa in console tutti i nomi
// Risultato: 'Edoardo', 'Simone', 'Francesco'

// senza ciclo for
names.forEach(name => {
    console.log(name);
});


// con ciclo for
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}