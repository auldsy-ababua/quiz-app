$(document).ready(function() {


    $(".inst").click(function() {
        $(".overlay").fadeIn(1000);
    });
    $(".close").click(function() {
        $(".game").fadeIn(1000);
    });
    $(".navbar-brand").click(function() {
        location.reload();
    });
    $(".newGame").click(function() {
        $(".game").fadeIn(1000);
    });
    var nextQuestion = $(".next-question");

    nextQuestion.click(function() {
    console.log($('input:radio:checked').val());
    });
    var questions = [
        {
            question: "How many legs does a dog have?",
            options: [" 2", " 3", " 4", " other"],
            answerIndex: 2
        },
        {
            question: "How many eyes does a spider have?",
            options: [" 6", " 8", " 10", " other"],
            answerIndex: 1
        },
        {
            question: "What are young wolves called?",
            options: [" kits", " cubs", " pups", " kids"],
            answerIndex: 2
        },
        {
            question: "Which of the following facts about Giraffe's isn't true?",
            options: [" A giraffe's heart weighs 50 lbs", " Giraffe's used to be called camelopards", " Newborn giraffes can run within hours of birth", " Giraffes have very long tongues"],
            answerIndex: 0
        },
        {
            question: "Which of the following facts about Koala bears isn't true?",
            options: [" Koalas have unique fingerprints", " Koalas are members of the bear family", " Koalas have 4 thumbs", " Koalas live in Australia"],
            answerIndex: 1
        }
    ];

    /*--- functions ---*/
    var loadQuestion = function (){
        $('.question-name').html(name + (qnum) +"/"+ total);
        $('.question').html(questions[count].question);
        for(var i=0; i<questions[count].options.length; i++) {
            $('.inputs').append('<input type="radio" name="question" value="'+questions[count].options[i]+'">'+questions[count].options[i]+'<br>')
        }
        //At this point, we have the radio buttons in the dom
        //We can assign events to them
        $('input[type=radio]').click(function() {
            $('.next-question').prop("disabled", false);
        })
    };


    /*--- First Question ---*/
    var name = "Question ";
    var qnum = 1;
    var count = 0;
    var total = questions.length;
    loadQuestion();



    /*--- When the Next Question Button is Hit ---*/
    /*$('.next-question').keypress(function(e){
       if(e.which == 13){//Enter key pressed
            $('.inputs').html("");
            qnum++;
            count++;
            if(qnum == 5) {
                loadQuestion();
                $('.next-question').html("Get Score!");
            } else {
                loadQuestion();
            }
        }
    });*/
    nextQuestion.click(function() {
        $('.inputs').html("");
        qnum++;
        count++;
        if (qnum <= 4) {
            loadQuestion();
        } else if (qnum == 6) {
            $('.question-name').html("Your Score:");
            $('.question').html("You got X out of 5 questions correct!");
            nextQuestion.html("Home Screen").click(function() {
                location.reload();
            });
        } else if (qnum == 5){
            loadQuestion();
            $('.next-question').html("Get Score!");
        }
    });
});

