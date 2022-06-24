
const userNum = Math.floor(Math.random() * 6) + 1;


const aiNum = Math.floor(Math.random() * 6) + 1;

console.log(userNum);
console.log(aiNum);

if (userNum < aiNum) {

    console.log('Hai perso..')

} else if (userNum > aiNum) {

    console.log('Hai vinto!!')

} else {

    console.log('Pari!');

}