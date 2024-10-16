const zucchine = [
  { type: 'Napoletana', weight: 10, length: 4 },
  { type: 'Trombetta', weight: 13, length: 16 },
  { type: 'Napoletana', weight: 4, length: 23 },
  { type: 'Trombetta', weight: 11, length: 6 },
  { type: 'Napoletana', weight: 2, length: 17 },
  { type: 'Romana', weight: 5, length: 10 },
  { type: 'Romana', weight: 7, length: 9 },
  { type: 'Trombetta', weight: 3, length: 8 },
  { type: 'Calabrese', weight: 6, length: 27 },
  { type: 'Calabrese', weight: 14, length: 4 },
];

// A partire dall'array fornito, crea due array. Uno con le zucchine più lunghe di almeno 15cm. L'altro con le restanti.

// con filter
let lenghter_zucchine = zucchine.filter(zucchina => zucchina.length > 15);
let other_zucchine= zucchine.filter(zucchina => zucchina.length <= 15);

console.log(lenghter_zucchine);
console.log(other_zucchine);

// con ciclo for

let lenghter_zucchine_for = []
let other_zucchine_for = []

for (let i = 0; i < zucchine.length; i++) {
  const zucchina = zucchine[i];

  if (zucchina.length > 15) {
    lenghter_zucchine_for.push(zucchina)

  } else {
    other_zucchine_for.push(zucchina)
  }


}
console.log(lenghter_zucchine_for);
console.log(other_zucchine_for);
