const quizData = [
    {
        question: 'সফ্টওয়্যারের অন্তর্ভুক্তি নয় কোনটি ?',
        a: 'স্প্রেডশীট টেমপ্লেট',
        b: 'ফটোশপ',
        c: 'মাইক্রোসফ্ট ওয়ার্ড',
        d: 'মনিটর',
        correct: 'd',
    },{
        question: 'ফাইল কপি বা স্থানান্তর প্রক্রিয়ার চুড়ান্ত নির্দেশ হল?',
        a: 'Edit',
        b: 'Rename',
        c: 'Copy',
        d: 'Delete',
        correct: "c",
    },{
        question: 'নােটপ্যাড এর ব্যবহার নয় কোনটি?',
        a: 'ডকুমেন্ট রাখা',
        b: 'ভিডিও দেখা',
        c: 'লিখালিখি করা',
        d: 'তথ্য রাখা',
        correct: 'b',
    },{
        question: 'উইন্ডােজ-৯৫ বাজারে এসেছিল?',
        a: '১৯৯৫ সালের ২৫ সেপ্টেম্বর।',
        b: '১৯৯০ সালের ১২ আগস্ট',
        c: '১৯৯৯ সালের ২৯ জুলাই',
        d: '২০২০ সালের ১৯ মে',
        correct: 'a',
    },{
        question: ' ইন্টারনেটের উদ্ভব হয় কোন দেশে?',
        a: 'কানাডা',
        b: 'যুক্তরাষ্ট্রে',
        c: 'ইউরোপ',
        d: 'নেদারল্যান্ড',
        correct: 'b',
    },{
        question: 'কোনটি চিত্রভিত্তিক ডাটাবেজ প্রােগ্রাম?',
        a: 'এক্সেল',
        b: 'ওয়ার্ড',
        c: 'প্রিমিয়ার প্রো ',
        d: 'নােটপ্যাড',
        correct: 'a',
    },{
        question: 'বিজয় কী বাের্ড ব্যবহার করার জন্য কী টাইপ করতে হয়?',
        a: 'Alt+Shift+B',
        b: 'Ctrl+Alt+B',
        c: 'Shift+Alt+B',
        d: 'Alt+Tab+Alt+G',
        correct: 'b',
    },{
        question: 'চন্দ্রাবতী হলাে?',
        a: 'হার্ডওয়ারের নাম',
        b: 'গেমসের নাম',
        c: 'বাংলা সফটওয়ারের নাম',
        d: 'বাংলা ফন্টের নাম',
        correct: 'd',
    },{
        question: 'কম্পিউটার মাউস কে তৈরী করেন?',
        a: 'টিম বার্নস লি',
        b: ' উইলিয়াম ইংলিস',
        c: 'অ্যাডা লাভলেস',
        d: 'জন ডাল্টন',
        correct: 'b',
    },{
        question: 'ইংরেজী বড় হাতের অক্ষর টাইপ করতে কোন বােতাম প্রয়ােজন?',
        a: 'Insert',
        b: 'Shift',
        c: 'Caps Lock',
        d: 'Tab',
        correct: 'c',
    }
];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');

const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();
    function loadQuiz(){
        deSelectedAnswer();
        const currentQuizData = quizData[currentQuiz];questionEl.innerText = currentQuizData.question;
        a_text.innerText = currentQuizData.a;  
        b_text.innerText = currentQuizData.b;
        c_text.innerText = currentQuizData.c;
        d_text.innerText = currentQuizData.d;
};

function getSelected(){
    let answer = undefined;
        answerEls.forEach((answerEls) => {
            if(answerEls.checked) {
                answer =  answerEls.id;
            }
        });
        return answer;
    }

function deSelectedAnswer() {
    answerEls.forEach((answerEls) => {
        answerEls.checked = false;
    });
}

submitBtn.addEventListener('click', () => {
    // check too see the answer
    const answer = getSelected();

    console.log(answer);

    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++;
        }
        currentQuiz++;
        if(currentQuiz < quizData.length){
            loadQuiz();
        } else {
            // TODO Show Results
            quiz.innerHTML = `<h1> You Answer Correctly at ${score}/${quizData.length} Question.</h1>`
        }
    }
});



