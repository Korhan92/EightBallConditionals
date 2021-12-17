let username = 'Korhan'

username ? console.log(`Hello ${username}`) : console.log('Hello') //ternary

const userQuestion = 'Will I become a werewolf tonight?';
console.log(`The user asked: ${userQuestion}`);

let randomnumber = Math.floor(Math.random() * 8)
let eightBall = '';

console.log(randomnumber)

switch (randomnumber) {
    case 0:
        eightBall = 'It is certain'

        break;
    case 1:
        eightBall = 'It is decidedly so'
        break;
    case 2:
        eightBall = 'Reply hazy try again'
        break;
    case 3:
        eightBall = 'Cannot predict now'
        break;
    case 4:
        eightBall = 'Do not count on it'
        break;
    case 5:
        eightBall = 'My sources say no'
        break;
    case 6:
        eightBall ='Outlook not so good'
        break;





    default:
        eightBall='Signs point to yes'
        break;
}
console.log(eightBall)

 //IF else

 if (randomnumber===0) {
    eightBall = 'It is certain'
     
 }else if (randomnumber===1) {
    eightBall = 'It is decidedly so'
     
 }else if (randomnumber===2) {
    eightBall = 'Reply hazy try again'
     
 }else if (randomnumber===3) {
    eightBall ='Cannot predict now'
     
 }else if (randomnumber===4) {
    eightBall = 'Do not count on it'
     
 }else if (randomnumber===5) {
    eightBall = 'My sources say no'
     
 }else if (randomnumber===6) {
    eightBall = 'Outlook not so good'
     
 }else {
    eightBall = 'Signs point to yes'
 }
 console.log(eightBall)