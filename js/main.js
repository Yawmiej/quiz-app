//View Object
const view = {
    score : document.querySelector('#score strong'),
    question: document.querySelector('#question'),
    result: document.querySelector('#result'),
    info: document.querySelector('#info'),

    render (target, content, attributes){
        for (const key in attributes) {
            target.setAttribute(key, attributes[key]);
        }
        target.innerHTML = content;
    }
}

const quiz = [
    {name : "Superman", realName : "Clark Kent"},
    {name: "Wonderwoman", realName: "Diana Prince"},
    {name: "Batman", realName: "Bruce Wayne"},
    {name: "Iron Man", realName: "Tony Stark"},
    {name: "The Flash", realName: "Barry Allen"},
    {name: "Captain America", realName: "Steve Rogers"}
];

const game = {
    start(quiz) {
        this.questions = [...quiz];
        this.score = 0;

        //Main quiz loop
        for (const question of this.questions) {
            this.question = question;
            this.ask();
        }
        this.gameOver();
    },

    ask(){
        const question = `What is ${this.question.name}'s real name?`
        const response = prompt(question);
        this.check(response);
    },

    check(response) {
        const answer = this.question.realName;
        if (response.toLowerCase().trim() === answer.toLowerCase()){
            alert(`Correct!`);
            this.score++;
        } else {
            alert(`Incorrect! the correct answer is ${answer}`);
        }
    },

    gameOver() {
        alert(`Game Over dude!, You scored ${this.score} point${this.score === 1 ? '' : 's'}`)
    }
}

game.start(quiz);