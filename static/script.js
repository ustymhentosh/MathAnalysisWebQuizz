
// get&set variables
var question_num = 0
forma = document.getElementById('forma');

var question_counter = document.getElementById('question_num')
var question = Object.keys(tests)[0]

question_counter.innerHTML = 'Question ' + (question_num + 1) + '/' + 4

var right_answ = 0

// set board
function setBoard(question, variants) {
    q_img_in_html = document.getElementById('ques')
    if (typ == 'integrals') {
        q_img_in_html.src = '/static/images/integrals/start_' + question + '.png'
    } else if (typ == 'series') {
        q_img_in_html.src = '/static/images/series/start_' + question + '.png'
    }
    count = 1
    for (var variant of variants) {
        v_in_html = document.getElementById('option' + count)
        v_img_in_html = document.getElementById('option' + count + 'img')

        // v_img_in_html.src = '/static/images/integrals/end_' + variant + '.png'

        if (typ == 'integrals') {
            v_img_in_html.src = '/static/images/integrals/end_' + variant + '.png'
        } else if (typ == 'series') {
            v_img_in_html.src = '/static/images/series/end_' + variant + '.png'
        }


        if (variant == question) {
            v_in_html.value = 'True'
        } else {
            v_in_html.value = 'False'
        }
        count += 1
    }
}


setBoard(question, tests[question])

// submit
forma.addEventListener("submit", (event) => {
    event.preventDefault();

    function getAnsw() {
        var answ = document.querySelector('input[name="option"]:checked').value;
        return answ
    }
    if (question_num < 3) {
        answ = getAnsw()
        if (answ == 'True') {
            right_answ += 1
        }
        question_num += 1
        question = Object.keys(tests)[question_num]
        question_counter.innerHTML = 'Question ' + (question_num + 1) + '/' + 4
        setBoard(question, tests[question])
        forma.reset()
    } else {
        if (answ == 'True') {
            right_answ += 1
        }
        modal.style.display = "block";
        document.getElementById('results').innerHTML = 'Result ' + right_answ + '/' + 4
    }


});


// modal
var modal = document.getElementById("modal");
var closeBtn = document.getElementsByClassName("close")[0];

closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
});

// window.addEventListener("click", function (event) {
//     if (event.target === modal) {
//         modal.style.display = "none";
//     }
// });

var reloadBtn = document.getElementById("reloadBtn");
var redirectBtn = document.getElementById("redirectBtn");

reloadBtn.addEventListener("click", function () {
    location.reload();
});

redirectBtn.addEventListener("click", function () {
    window.location.href = "./";
});