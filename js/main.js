//View Object
const view = {
    score : document.querySelector('#score strong'),
    question: document.querySelector('#question'),
    result: document.querySelector('#result'),
    info: document.querySelector('#info'),
    start: document.querySelector('#start'),
    response: document.querySelector('#response'),

    render (target, content, attributes){
        for (const key in attributes) {
            target.setAttribute(key, attributes[key]);
        }
        target.innerHTML = content;
    },

    show(element) {
        element.classList.remove('hide');
    },

    hide (element) {
        element.classList.add('hide');
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
        this.ask();
    },

    ask(){
        if(this.questions.length > 0) {
            this.question = this.questions.pop();
            const question = `What is ${this.question.name}'s real name?`
            view.render(view.question, question);
        } else {
            this.gameOver();
        }
    },

    check(event) {
        event.preventDefault();
        const response = view.response.answer.value;
        const answer = this.question.realName;
        if (response.toLowerCase().trim() === answer.toLowerCase()){
            view.render(result,"Correct", {'class':'correct'})
            this.score++;
            view.render(view.score, this.score);
        } else {
            view.render(result,`Wrong! The correct answer was ${answer}`, {'class':'wrong'});
        }
        this.ask();
    },

    gameOver() {
        view.render(view.info, (`Game Over dude!, You scored ${this.score} point${this.score === 1 ? '' : 's'}`));
        view.show(view.start);
        view.hide(view.response)
    }
}

view.start.addEventListener('click', () => {
    game.start(quiz);
});

view.response.addEventListener('submit', (event)=> {
    game.check(event);
}, false);