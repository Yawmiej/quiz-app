const quiz = [
    ["What is Superman's real name?", "Clark Kent"],
    ["What is Wonderwoman's real name?", "Diana Prince"],
    ["What is Batman's real name?", "Bruce Wayne"],
    ["What is Iron Man's real name?", "Tony Stark"],
    ["What is The Flash's real name", "Barry Allen"],
    ["What is Captain America's real name", "Steve Rogers"]
];
function start(quiz){
    let score = 0;

    // main game loop
    for (const [question, answer] of quiz) {
        const response = ask(question);
        check(response,answer);
    }

    gameOver();

    function ask(question) {
        return prompt(question);
    }


    function check(response, answer) {
        if(response.toLowerCase().trim() === answer.toLowerCase()) {
            alert(`Correct!`);
            score++;
        } else {
            alert(`Wrong, the correct answer was "${answer}"`);
        }
    }

    function gameOver() {
        alert(`Game over, You scored ${score} point${score !== 1 ? 's' : ''}`);
    }
}

start(quiz);