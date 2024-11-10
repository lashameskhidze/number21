// 1. 1-დან 15-მდე რიცხვების დაბეჭდვა და თუ რიცხვი 5-ზე მეტია, დაბეჭდვა "დიდია 5-ზე":

// 2. მასივიდან [3, 6, 9, 12, 15] მხოლოდ ლუწი რიცხვების გამოტანა:
let numbers = [3, 6, 9, 12, 15];
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers);

// 3. სტრიქონის თითოეული ასოს დაბეჭდვა და თუ ასო 'a'-ია, დამატებითი ტექსტის დაბეჭდვა:
let str = "banana";
for (let i = 0; i < str.length; i++) {
    let char = str[i]; 
    console.log(char); 

    if (char === 'a') {
        console.log("'a'!");
    }
}

// 4. მასივიდან ["red", "green", "blue", "yellow"] მხოლოდ გრძელი სიტყვების (5 ასოზე მეტი) გამოტანა:
let colors = ["red", "green", "blue", "yellow"];

let longWords = colors.filter(word => word.length > 4);

console.log(longWords);

// 5. 1-დან 50-მდე რიცხვების გამოტანა, რომლებიც 7-ზე იყოფა და დაბეჭდვა "გაყოფადია 7-ზე":
for (let i = 1; i <= 50; i++) {
    if (i % 7 === 0) {
        console.log(i + " - გაიყოფა 7-ზე");
    }
}

// 6. მასივის [4, 8, 12, 16, 20] თითოეული ელემენტის გამრავლება 2-ზე და შედეგის დაბეჭდვა:
let numbers1 = [4, 8, 12, 16, 20];


let doubledNumbers = numbers1.map(num => num * 2);


console.log(doubledNumbers);

// 7. სტრიქონის 'javascript' თითოეული ასოს დაბეჭდვა და თუ ასო 'j'-ია, შეწყვეტა: (for loop-ს შეუძლია სტრინგსაც გადაუაროს let word = 'javascript';
// for (let i = 0; i < word.length; i++))
let word = 'javascript';

for (let i = 0; i < word.length; i++) {
    let char = word[i]; 
    console.log(char);   

    if (char === 'j') {
        break;  
    }
}

// 8. მასივიდან [5, 10, 15, 20, 25] მხოლოდ იმ რიცხვების დაბეჭდვა, რომლებიც 5-ზე იყოფა:
let numbers2 = [5, 10, 15, 20, 25];


for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 5 === 0) {
        console.log(numbers[i]); 
    }
}

// 9. სტრიქონში 'hello world' თითოეული ასოს დაბეჭდვა, გამოტოვებით ასო 'o':
let words = 'hello world';

for (let i = 0; i < words.length; i++) {
    let char = words[i]; 

    if (char === 'o') {
        continue;  
    }

    console.log(char); 
}

// 10. მასივიდან [1, 2, 3, 4, 5, 6] მხოლოდ ლუწი რიცხვების ჯამის გამოთვლა:
let numbers4 = [1, 2, 3, 4, 5, 6];


let Numbers = numbers4.filter(num => num % 2 === 0);


let sum = Numbers.reduce((acc, num) => acc + num, 0);

console.log(sum);

// 11. რიცხვის 10 გამრავლების ტაბულის დაბეჭდვა: (
// 10 x 1 = 10
// 10 x 2 = 20
// 10 x 3 = 30
// 10 x 4 = 40
// 10 x 5 = 50
// 10 x 6 = 60
// 10 x 7 = 70
// 10 x 8 = 80
// 10 x 9 = 90
// 10 x 10 = 100
// )

let number = 10;


for (let i = 1; i <= 10; i++) {
    console.log(`${number} x ${i} = ${number * i}`);
}

// 12. მასივიდან [2, 7, 4, 9, 5] თითოეული ელემენტის გამოთვლა და თუ რიცხვი 4-ზე მეტია, მისი გამრავლება 3-ზე:
let numbers5 = [2, 7, 4, 9, 5];

let modifiedNumbers = numbers5.map(num => {
    if (num > 4) {
        return num * 3;  
    }
    return num;  
});

console.log(modifiedNumbers);

// 13. 1-დან 30-მდე ყველა რიცხვის დაბეჭდვა, ხოლო თუ რიცხვი 10-ზე მეტია, დამატებითი 
// ტექსტის დაბეჭდვა:
for (let i = 1; i <= 30; i++) {
    console.log(i); 

    if (i > 10) {
        console.log("10-ზე მეტია"); 
    }
}

// 14. სტრიქონში 'frontend' ასოს 'e' პოვნისას, ტექსტის "ნაპოვნია e" დაბეჭდვა:
let numb = 'frontend';

for (let i = 0; i < str.length; i++) {
    if (numb[i] === 'e') {
        console.log("ნაპოვნია e");
        break; 
    }
}

// 15. მასივიდან [100, 200, 300, 400, 500] იმ ელემენტების გამოტანა, რომლებიც 250-ზე ნაკლებია:
let numbers6 = [100, 200, 300, 400, 500];
const filteredNumbers = numbers6.filter(num => num < 250);
console.log(filteredNumbers);
