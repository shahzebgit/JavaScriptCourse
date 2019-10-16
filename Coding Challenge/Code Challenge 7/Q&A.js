(function () {
    function Question(question, answers, correct) {

        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }

    Question.prototype.displayQuestion = function () {
        console.log(this.question);

        for (var i = 0; i < this.answers.length; i++) {
            console.log(i + ': ' + this.answers[i]);
        }
    }

    Question.prototype.checkAnswer = function (ans) {
        if (ans === this.correct) {
            console.log('Correct answer!!');

        } else {
            console.log('Wrong answer!!');
        }
    }
   
    var q1 = new Question('Are you enjoying this practice challenge?',
        ['Yes', 'No'], 0);

    var q2 = new Question('how much have you learned from this?',
        ['Pretty Much(lyinng :P)', 'Mastered it!! B)', 'Don\'t know'], 0);
   
    var question = [q1, q2];
    var num = Math.floor(Math.random() * question.length);
    question[num].displayQuestion();

    
    var answer = parseInt(prompt('Please write your down below.'));
    question[num].checkAnswer(answer);
    
})();