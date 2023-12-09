var quiz = {
    "JS": [
    {
    "id": 1,
    "question": "Which one of the following river flows between Vindhyan and Satpura ranges?",
    "options": [
    {
    "a": "Narmada",
    "b": "Mahanadi",
    "c": "Son",
    "d": "Netravati"
    }
    ],
    "answer": "Narmada",
    "score": 0,
    "status": ""
    },
    {
    "id": 2,
    "question": "The Central Rice Research Station is situated in?",
    "options": [
    {
    "a": "Chennai",
    "b": "Cuttack",
    "c": "Bangalore",
    "d": "Quilon"
    }
    ],
    "answer": "Cuttack",
    "score": 0,
    "status": ""
    },
    {
    "id": 3,
    "question": "Who among the following wrote Sanskrit grammar?",
    "options": [
    {
    "a": "Kalidasa",
    "b": "Charak",
    "c": "Panini",
    "d": "Aryabhatta"
    }
    ],
    "answer": "Panini",
    "score": 0,
    "status": ""
    },
    {
    "id": 4,
    "question": "Which among the following headstreams meets the Ganges in last?",
    "options": [
    {
    "a": "Alaknanda",
    "b": "Pindar",
    "c": "Mandakini",
    "d": "Bhagirathi"
    }
    ],
    "answer": "False",
    "score": 0,
    "status": "Bhagirathi"
    },
    {
    "id": 5,
    "question": "The metal whose salts are sensitive to light is?",
    "options": [
    {
    "a": "Zinc",
    "b": "Silver",
    "c": "Copper",
    "d": "Aluminium"
    }
    ],
    "answer": "alert(&quot;Hello World&quot;);",
    "score": 0,
    "status": "Silver"
    },
    {
    "id": 6,
    "question": "Patanjali is well known for the compilation of –",
    "options": [
    {
    "a": "Panchatantra",
    "b": "Brahma Sutra",
    "c": "Ayurveda",
    "d": "Yoga Sutra"
    }
    ],
    "answer": "Yoga Sutra",
    "score": 0,
    "status": ""
    },
    {
    "id": 7,
    "question": "River Luni originates near Pushkar and drains into which one of the following?",
    "options": [
    {
    "a": "Rann of Kachchh",
    "b": "Arabian Sea",
    "c": "Gulf of Cambay",
    "d": "Lake Sambhar"
    }
    ],
    "answer": "Rann of Kachchh",
    "score": 0,
    "status": ""
    },
    {
    "id": 8,
    "question": "India is a federal union comprising twenty-eight states and how many union territories?",
    "options": [
    {
    "a": "6",
    "b": "7",
    "c": "8",
    "d": "9",
    }
    ],
    "answer": "8",
    "score": 0,
    "status": ""
    },
    {
    "id": 9,
    "question": "Which of the following is the capital of Arunachal Pradesh?",
    "options": [
    {
    "a": "Itanagar",
    "b": "Dispur",
    "c": "Imphal",
    "d": "Panaji"
    }
    ],
    "answer": "Itanagar",
    "score": 0,
    "status": ""
    },
    {
    "id": 10,
    "question": "What are the major languages spoken in Andhra Pradesh?",
    "options": [
    {
    "a": "Odia and Telugu",
    "b": "Telugu and Urdu",
    "c": "Telugu and Kannada",
    "d": "All of the above languages",
    }
    ],
    "answer": "Telugu and Urdu",
    "score": 0,
    "status": ""
    },
    {
    "id": 11,
    "question": "What is the state flower of Haryana?",
    "options": [
    {
    "a": "Lotus",
    "b": "Lily",
    "c": "Sunflower",
    "d": "Not Declared"
    }
    ],
    "answer": "Lotus",
    "score": 0,
    "status": ""
    },
    {
    "id": 12,
    "question": "Which of the following states is not located in the North?",
    "options": [
    {
    "a": "Jharkhand",
    "b": "Jammu and Kashmir",
    "c": "Himachal Pradesh",
    "d": "Haryana"
    }
    ],
    "answer": "Jharkhand",
    "score": 0,
    "status": ""
    },
    {
    "id": 13,
    "question": "In which of the following state, the main language is Khasi?",
    "options": [
    {
    "a": "Mizoram",
    "b": "Nagaland",
    "c": "Meghalaya",
    "d": "Tripura"
    }
    ],
    "answer": "Meghalaya",
    "score": 0,
    "status": ""
    },
    {
    "id": 14,
    "question": "Which is the largest coffee-producing state of India?",
    "options": [
    {
    "a": "Kerala",
    "b": "Tamil Nadu",
    "c": "Karnataka",
    "d": "Madhya Pradesh"
    }
    ],
    "answer": "Karnataka",
    "score": 0,
    "status": ""
    },
    {
    "id": 15,
    "question": "Which state has the largest area?",
    "options": [
    {
    "a": "Maharashtra",
    "b": "Madhya Pradesh",
    "c": "Uttar Pradesh",
    "d": "Rajasthan"
    }
    ],
    "answer": "Rajasthan",
    "score": 0,
    "status": ""
    }
    ]
    }
    var quizApp = function () {
    this.score = 0;
    this.qno = 1;
    this.currentque = 0;
    var totalque = quiz.JS.length;
    this.displayQuiz = function (cque) {
    this.currentque = cque;
    if (this.currentque < totalque) {
    $("#tque").html(totalque);
    $("#previous").attr("disabled", false);
    $("#next").attr("disabled", false);
    $("#qid").html(quiz.JS[this.currentque].id + '.');
    $("#question").html(quiz.JS[this.currentque].question);
    $("#question-options").html("");
    for (var key in quiz.JS[this.currentque].options[0]) {
    if (quiz.JS[this.currentque].options[0].hasOwnProperty(key)) {
    $("#question-options").append(
    "<div class='form-check option-block'>" +
    "<label class='form-check-label'>" +
    "<input type='radio' class='form-check-input' name='option' id='q" + key + "' value='" + quiz.JS[this.currentque].options[0][key] + "'><span id='optionval'>" +
    quiz.JS[this.currentque].options[0][key] +
    "</span></label>"
    );
    }
    }
    }
    if (this.currentque <= 0) {
    $("#previous").attr("disabled", true);
    }
    if (this.currentque >= totalque) {
    $('#next').attr('disabled', true);
    for (var i = 0; i < totalque; i++) {
    this.score = this.score + quiz.JS[i].score;
    }
    return this.showResult(this.score);
    }
    }
    this.showResult = function (scr) {
    $("#result").addClass('result');
    $("#result").html("<h1 class='res-header'>Total Score: &nbsp;" + scr + '/' + totalque + "</h1>");
    for (var j = 0; j < totalque; j++) {
    var res;
    if (quiz.JS[j].score == 0) {
    res = '<span class="wrong">' + quiz.JS[j].score + '</span><i class="fa fa-remove c-wrong"></i>';
    } else {
    res = '<span class="correct">' + quiz.JS[j].score + '</span><i class="fa fa-check c-correct"></i>';
    }
    $("#result").append(
    '<div class="result-question"><span>Q ' + quiz.JS[j].id + '</span> &nbsp;' + quiz.JS[j].question + '</div>' +
    '<div><b>Correct answer:</b> &nbsp;' + quiz.JS[j].answer + '</div>' +
    '<div class="last-row"><b>Score:</b> &nbsp;' + res +
    '</div>'
    );
    }
    }
    this.checkAnswer = function (option) {
    var answer = quiz.JS[this.currentque].answer;
    option = option.replace(/</g, "&lt;") //for <
    option = option.replace(/>/g, "&gt;") //for >
    option = option.replace(/"/g, "&quot;")
    if (option == quiz.JS[this.currentque].answer) {
    if (quiz.JS[this.currentque].score == "") {
    quiz.JS[this.currentque].score = 1;
    quiz.JS[this.currentque].status = "correct";
    }
    } else {
    quiz.JS[this.currentque].status = "wrong";
    }
    }
    this.changeQuestion = function (cque) {
    this.currentque = this.currentque + cque;
    this.displayQuiz(this.currentque);
    }
    }
    var jsq = new quizApp();
    var selectedopt;
    $(document).ready(function () {
    jsq.displayQuiz(0);
    $('#question-options').on('change', 'input[type=radio][name=option]', function (e) {
    //var radio = $(this).find('input:radio');
    $(this).prop("checked", true);
    selectedopt = $(this).val();
    });
    });
    $('#next').click(function (e) {
    e.preventDefault();
    if (selectedopt) {
    jsq.checkAnswer(selectedopt);
    }
    jsq.changeQuestion(1);
    });
    $('#previous').click(function (e) {
    e.preventDefault();
    if (selectedopt) {
    jsq.checkAnswer(selectedopt);
    }
    jsq.changeQuestion(-1);
    });