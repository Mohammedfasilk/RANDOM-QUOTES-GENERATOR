


let btn = document.getElementById('btn');
const a =["“Be yourself; everyone else is already taken.”",
    "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",
     "“So many books, so little time.”","“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”","“A room without books is like a body without a soul.”"
    ,"“If you tell the truth, you don't have to remember anything.”","“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”","“You only live once, but if you do it right, once is enough.”"
    ,"“Be the change that you wish to see in the world.”","“In three words I can sum up everything I've learned about life: it goes on.”"]

const person = ["Oscar Wilde","Marilyn Monroe","Frank Zappa","Albert Einstein","Marcus Tullius Cicero","Mark Twain","Bernard M. Baruch","Mae West","Mahatma Gandhi","Robert Frost"]
    function show(){
    b = Math.random()*10
    ans = Math.floor(b)
    document.getElementById('field').innerHTML = a[ans];
    document.getElementById('name').innerHTML = "~ "+ person[ans]
    console.log(ans);
    
    
}



btn.addEventListener('click',show)