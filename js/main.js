//View Object
const view = {
    score : document.querySelector('#score strong'),
    question: document.querySelector('#question'),
    result: document.querySelector('#result'),
    info: document.querySelector('#info'),
    start: document.querySelector('#start'),

    render (target, content, attributes){
        for (const key in attributes) {
            target.setAttribute(key, attributes[key]);
        }
        target.innerHTML = content;
    },

    
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
        view.render(view.question, question)
        const response = prompt(question);
        this.check(response);
    },

    check(response) {
        const answer = this.question.realName;
        if (response.toLowerCase().trim() === answer.toLowerCase()){
            view.render(result,"Correct", {'class':'correct'})
            alert(`Correct!`);
            this.score++;
            view.render(view.score, this.score);
        } else {
            view.render(result,`Wrong! The correct answer was ${answer}`, {'class':'wrong'})
            alert(`Incorrect! the correct answer was ${answer}`);
        }
    },

    gameOver() {
        view.render(view.info, (`Game Over dude!, You scored ${this.score} point${this.score === 1 ? '' : 's'}`));
        alert(`Game Over dude!, You scored ${this.score} point${this.score === 1 ? '' : 's'}`)
    }
}


    game.start(quiz);
