import string from './css.js'






const player = {
    n : 1,
    time : 100,
    ui:{
        dome : document.querySelector('#dome'),
        dome2 : document.querySelector('#dome2')
    },
    id : undefined,
    init : ()=>{
        player.ui.dome.innerText = string.substr(0,player.n)
        player.ui.dome2.innerHTML = string.substr(0,player.n)
        player.bindEvent()
        player.play()
    },
    events : {
        '#btnPause' :  'pause',
        '#btnPlay'  :  'play',
        '#btnSlow'  :  'slow',
        '#btnNormal':  'normal',
        '#btnFast'  :  'fast'
    },
    bindEvent: ()=>{   
        for(let key in player.events){
            if(player.events.hasOwnProperty(key)){
                const value = player.events[key]
                document.querySelector(key).onclick = player[value]
            } 
        }
        
    },
     run : ()=>{
        player.n +=1
        if( player.n> string.length){
            window.clearInterval(player.id)
            return 
        }   
        player.ui.dome.innerText = string.substr(0,player.n)
        player.ui.dome2.innerHTML = string.substr(0,player.n)
        player.ui.dome.scrollTop = dome.scrollHeight
    },
     pause: () =>{
        window.clearInterval(player.id)
    },
     play :()=>{
         window.clearInterval(player.id)
        player.id = setInterval(player.run,player.time)
    },
    
     slow :() =>{
        player.pause()
        player.time = 300
        player.play()
    },
     normal:()=>{
        player.pause()
        player.time = 100
        ayer.play()
    },
     fast :()=>{
        player.pause()
        player.time = 0
        player.play()
    }
}
player.init()


