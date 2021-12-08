$(function(){
    const sounds =$('audio')
    const pads = $('.pads div')
    const visual = $('.visual')
    const title = $('.title')
    const colors = ['rebeccapurple','silver','crimson','darkgreen','goldenrod','paleturquoise']
    sounds.each(function(index,soundFile){
        soundFile.onended =function(){
            visual.text('')
            title.text('')
        }
    })
    pads.each(function(index,pad){
        $(pad).on('click',function(){
           sounds.each(function(index,soundFile){
               soundFile.pause()
           })
           if(sounds[index]){
               sounds[index].currentTie=0
               sounds[index].play()
               const strArray=sounds[index].src.split("sound/")
               title.text(strArray[1])
           }
           createBubbles(index)
        });
        
    })
    const createBubbles=function(index){
         visual.text('')
         const bubble = $('<img src="chi.jpg">')
         visual.append(bubble)
         bubble.css('background',colors[index]).
         css('top','300px').css('animation','animation 1500ms linear infinite both')


    }
})


