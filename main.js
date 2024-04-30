import inquirer from "inquirer";
let score = 0;
let question1 = await inquirer.prompt({
    name: "one",
    message: "What is the capital city of Pakistan?",
    type: "list",
    choices: ["Karachi", "Islamabad", "Lahore"],
});
if (question1.one === "Islamabad") {
    console.log("Your answer is correct!\nYou have gained one point.");
    score++;
    console.log(`Your current score is ${score}. [^-^]`);
}
else {
    console.log("Wrong answer!");
    console.log(`Your current score is ${score}. [^~^']`);
}
let question2 = await inquirer.prompt({
    name: "two",
    message: "When did Pakistan came into being?",
    type: "list",
    choices: ["15th August, 1947", "14th August, 1947", "13th August, 1947"],
});
if (question2.two === "15th August, 1947") {
    console.log("Your answer is correct!\nYou have gained one point.");
    score++;
    console.log(`Your current score is ${score}. [^-^]`);
}
else {
    console.log("Wrong answer!");
    console.log(`Your current score is ${score}. [^~^']`);
}
let question3 = await inquirer.prompt({
    name: "three",
    message: "Who is the founder of Pakistan?",
    type: "list",
    choices: ["Sir Syed Ahmaed Khan", "Muhammad Ali Jinnah", "Allama Iqbal"],
});
if (question3.three === "Muhammad Ali Jinnah") {
    console.log("Your answer is correct!\nYou have gained one point.");
    score++;
    console.log(`Your current score is ${score}. [^-^]`);
}
else {
    console.log("Wrong answer!");
    console.log(`Your current score is ${score}. [^~^']`);
}
let question4 = await inquirer.prompt({
    name: "four",
    message: "What does the name Pakistan mean?",
    type: "list",
    choices: [
        "Land of the angels",
        "Land of the Minight Sun",
        "Land of the pure",
    ],
});
if (question4.four === "Land of the pure") {
    console.log("Your answer is correct!\nYou have gained one point.");
    score++;
    console.log(`Your current score is ${score}. [^-^]`);
}
else {
    console.log("Wrong answer!");
    console.log(`Your current score is ${score}. [^~^']`);
}
let question5 = await inquirer.prompt({
    name: "five",
    message: "What is the name of the mountain range that is located in the north of Pakistan?",
    type: "list",
    choices: ["Hindu Kush", "Tirch Mir", "Karakoram-2"],
});
if (question5.five === "Karakoram-2") {
    console.log("Your answer is correct!\nYou have gained one point.");
    score++;
    console.log(`Your current score is ${score}. [^-^]`);
}
else {
    console.log("Wrong answer!");
    console.log(`Your current score is ${score}. [^~^']`);
}
let question6 = await inquirer.prompt({
    name: "six",
    message: "Who wrote the national anthem of Pakistan",
    type: "list",
    choices: ["Hafeez Jalandhary", "Allama Iqbal", "Mirza Ghalib"],
});
if (question6.six === "Hafeez Jalandhary") {
    console.log("Your answer is correct!\nYou have gained one point.");
    score++;
    console.log(`Your current score is ${score}. [^-^]`);
}
else {
    console.log("Wrong answer!");
    console.log(`Your current score is ${score}. [^~^']`);
}
let question7 = await inquirer.prompt({
    name: "seven",
    message: "Which of the following is the national animal of Pakistan?",
    type: "list",
    choices: ["Parrot", "Markhor", "Chakor"],
});
if (question7.seven === "Markhor") {
    console.log("Your answer is correct!\nYou have gained one point.");
    score++;
    console.log(`Your current score is ${score}. [^-^]`);
}
else {
    console.log("Wrong answer!");
    console.log(`Your current score is ${score}. [^~^']`);
}
let question8 = await inquirer.prompt({
    name: "eight",
    message: "When did Pakistan become a nuclear power??",
    type: "list",
    choices: ["1999", "2001", "1998"],
});
if (question8.eight === "1998") {
    console.log("Your answer is correct!\nYou have gained one point.");
    score++;
    console.log(`Your current score is ${score}. [^-^]`);
}
else {
    console.log("Wrong answer!");
    console.log(`Your current score is ${score}. [^~^']`);
}
let question9 = await inquirer.prompt({
    name: "nine",
    message: "What is the rank of Pakistan population-wise??",
    type: "list",
    choices: ["5th", "4th", "7th"],
});
if (question9.nine === "5th") {
    console.log("Your answer is correct!\nYou have gained one point.");
    score++;
    console.log(`Your current score is ${score}. [^-^]`);
}
else {
    console.log("Wrong answer!");
    console.log(`Your current score is ${score}. [^~^']`);
}
let question10 = await inquirer.prompt({
    name: "ten",
    message: "Which international border was Afghanistan and Pakistan was established by a British diplomat of the Indian Civil Service in 1893?",
    type: "list",
    choices: ["Tashkent Line", "Durand Line", "Control Line"],
});
if (question10.ten === "Durand Line") {
    console.log("Your answer is correct!\nYou have gained one point.");
    score++;
    console.log(`Your current score is ${score}. [^-^]`);
}
else {
    console.log("Wrong answer!");
    console.log(`Your current score is ${score}. [^~^']`);
}
console.log("Congratulations for making this Far!\nYour total score is " +
    score +
    "! <[*-*]>");
