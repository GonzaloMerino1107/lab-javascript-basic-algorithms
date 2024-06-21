// Iteration 1: Names and Input
let hacker1 = `Gonzalo`;
let hacker2 = `Merino`;

// Iteration 2: Conditionals
if(hacker1.length > hacker2.length){
    console.log(`Hacker1 has the longest name, it has ${hacker1.length} characters`)
} else if(hacker1.length < hacker2.length){
    console.log(`Hacker2 has the longest name, it has ${hacker2.length} characters`)
} else {
    console.log(`Wow, you have equally long names, ${hacker1.length} characters`) 
}

// Iteration 3: Loops
let nameSpaced = ``;
for(character of hacker1){
    nameSpaced += `${character} `;
}
console.log(nameSpaced.toUpperCase());


let nameReversed = ``;
for(character of hacker1){
    nameReversed = character + nameReversed;
}
console.log(nameReversed)


let stringComparison = hacker1.localeCompare(hacker2);

if (stringComparison == -1){
    console.log(`Hacker1 goes first`);
} else if(stringComparison == 1){
    console.log(`Hacker2 goes first`);
} else {
    console.log(`Both names equal`)
}

let loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet mauris commodo quis. Mollis aliquam ut porttitor leo a diam sollicitudin tempor. Arcu odio ut sem nulla pharetra diam. Suspendisse sed nisi lacus sed viverra tellus in hac habitasse. Lectus magna fringilla urna porttitor rhoncus dolor. Platea dictumst quisque sagittis purus sit amet volutpat. Habitasse platea dictumst vestibulum rhoncus. Condimentum id venenatis a condimentum vitae. Cursus metus aliquam eleifend mi in nulla posuere sollicitudin aliquam. Nisl purus in mollis nunc. Purus in mollis nunc sed id semper risus. Condimentum mattis pellentesque id nibh tortor id aliquet lectus.

Sem nulla pharetra diam sit amet. Lobortis scelerisque fermentum dui faucibus in ornare quam. Sed arcu non odio euismod lacinia at. Pharetra pharetra massa massa ultricies mi quis hendrerit dolor. Arcu non odio euismod lacinia at quis. Odio ut sem nulla pharetra diam sit amet nisl suscipit. Et egestas quis ipsum suspendisse ultrices gravida dictum fusce ut. Eget duis at tellus at urna condimentum mattis pellentesque id. Scelerisque fermentum dui faucibus in ornare quam viverra. Eu lobortis elementum nibh tellus molestie. Morbi tristique senectus et netus et malesuada fames ac. Nibh mauris cursus mattis molestie a iaculis at. Purus semper eget duis at tellus. Condimentum lacinia quis vel eros donec ac odio.

Bibendum enim facilisis gravida neque. Augue interdum velit euismod in pellentesque massa placerat duis. Congue quisque egestas diam in arcu. In ornare quam viverra orci sagittis eu volutpat odio facilisis. Nunc lobortis mattis aliquam faucibus purus in massa tempor nec. Praesent tristique magna sit amet purus gravida quis. Eu sem integer vitae justo eget magna fermentum iaculis eu. Ac tortor dignissim convallis aenean et tortor. Diam ut venenatis tellus in metus vulputate. Netus et malesuada fames ac turpis egestas. Hac habitasse platea dictumst quisque. Duis convallis convallis tellus id interdum velit. Facilisis leo vel fringilla est ullamcorper eget nulla facilisi etiam. Dolor purus non enim praesent elementum facilisis. Id semper risus in hendrerit gravida rutrum quisque non. Ut sem nulla pharetra diam sit amet nisl. Netus et malesuada fames ac turpis egestas maecenas. Bibendum neque egestas congue quisque egestas diam in arcu. Amet dictum sit amet justo donec.`

let wordArr = loremIpsum.split(" ");
let wordCount = loremIpsum.split(" ").length;

console.log(wordCount);

let etCounter = 0;

for(word of wordArr){
    if(word.toLowerCase().includes("et")){
        etCounter++;
    }
}
console.log(etCounter)

//Bonus exercise palindrome

let possiblePalindrome = "race car";
let possiblePalindromeArr = possiblePalindrome.replaceAll(" ", "").split("");
let isPalindrome = true;

console.log(possiblePalindromeArr)

for(let i=0; i<possiblePalindromeArr.length; i++){
    if(possiblePalindromeArr[i] =! possiblePalindromeArr[possiblePalindromeArr.length - i]){
        isPalindrome = false;
        break;
    }
}

if(isPalindrome = true){
    console.log(`This word is indeed a palindorme`);
}else{
    console.log(`This word is not a palindrome`);
}