// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
   let rev = '';
    for(let i of str){
        rev = i + rev;
        
    }
    return rev;
}

module.exports = reverse;
// function reverse(str) {
//     return str.split('').reverse().join(''); 
//  }