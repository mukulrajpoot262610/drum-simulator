const bodyColor = document.querySelectorAll('.body')
const sounds = document.querySelectorAll('.sounds')

const keys = ['a','s','d','f','g','h','j','k','l',';']
const colours = [
    '#F1B24A',
    '#9DC88D',
    '#3F3F3F',
    '#3C403D',
    '#51e2f5',
    '#ffa8B6',
    '#e5eaf5',
    '#ff1d58',
    '#fff685',
    '#ffb766'
]



window.addEventListener('keydown', function(e){
        for(let j=0; j <= 10; j++){
            if (e.key === keys[j]){
                sounds[j].currentTime = 0
                sounds[j].play()
            }
        }        
})