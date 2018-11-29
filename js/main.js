const quiz = [
    ["What is Superman's real name?", "Clark Kent"],
    ["What is Wonderwoman's real name?", "Diana Prince"],
    ["What is Batman's real name?", "Bruce Wayne"],
    ["What is Iron Man's real name?", "Tony Stark"],
    ["What is The Flash's real name", "Barry Allen"],
    ["What is Captain America's real name", "Steve Rogers"]
];
let score = 0;
for (const [question, answer] of quiz){
    const response = prompt(question);
    if(response.toLowerCase().trim() === answer.toLowerCase()) {
        alert(`Correct!`);
        score++;
    } else {
        alert(`Wrong, the correct answer was "${answer}"`);
    }
}

alert(`Game over, You scored ${score} point${score !== 1 ? 's' : ''}`);