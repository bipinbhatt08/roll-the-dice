const dice  = document.getElementById('dice');
const turn  = document.getElementById('turn');
const front  = document.getElementById('front');
const score1  = document.getElementById('score1');
const score2  = document.getElementById('score2');
const result  = document.getElementById('result');
const replay = document.getElementById('replay')
const gameScreen = document.getElementById('game-screen')
const winner = document.getElementById('winner')
const audio = document.getElementById('audio')
const congratsOrDraw = document.getElementById('congratsOrDraw')
let s1 , s2
let clickCount = 0



dice.addEventListener('click',()=>{
    audio.play()
    dice.classList.add('rotate') 
    const rollResult = Math.floor(Math.random()*6)+1
    front.innerHTML = `<p>${rollResult}</p>`
    setTimeout(() => {
     dice.classList.remove('rotate') 
     if(clickCount==0){
        clickCount++
        score1.textContent = rollResult 
        s1=rollResult
        turn.textContent = "Player 2"
     } else{
        clickCount = 0
        score2.textContent = rollResult
        s2= rollResult
        displayResult()
     }
    }, 500);


})


function displayResult(a){
    if(s1!==s2){
        const congratsEmoji = "\u{1F389}";
        congratsOrDraw.textContent = "Congratulations!!"+congratsEmoji
        s1>s2?winner.textContent='Player 1':winner.textContent = 'Player 2'
    }else{
        const drawEmoji = " \u{1F91D}"

        congratsOrDraw.textContent = "Draw!" + drawEmoji
        winner.textContent = `${s1}:${s2}`
    }
    dice.style.pointerEvents = 'none'
    setTimeout(()=>{
        gameScreen.classList.add('opacity-50')


        result.classList.remove('hidden')
    },400)
     
}


replay.addEventListener('click',()=>{
    score1.textContent = 0
    score2.textContent = 0
    turn.textContent = "Player 1"
    dice.style.pointerEvents = 'auto'

    result.classList.add('hidden')
    gameScreen.classList.remove('opacity-50')
    
})





