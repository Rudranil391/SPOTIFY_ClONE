//initialize variable
let songIndex=0;
let songMastername=document.getElementById('masterSongName')
let audioElement=new Audio('song/1.mp3')
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar')
let gif=document.getElementById('gif')
let songItems=Array.from(document.getElementsByClassName("songItem"))

let songs=[
    {songName:"LetMeDownSlowly-Alec Benjamin",filePath:"song/1.mp3",coverPath:"cover/1.jpg"},
    {songName:"Cradles-SubUrban",filePath:"song/2.mp3",coverPath:"cover/2.jpg"},
    {songName:"LoveNwantiti-Ckay",filePath:"song/3.mp3",coverPath:"cover/3.jpg"},
    {songName:"OnAndOn-Cartoon",filePath:"song/4.mp3",coverPath:"cover/4.jpg"},
    {songName:"Peaches-JustinBieber",filePath:"song/5.mp3",coverPath:"cover/5.jpg"},
    {songName:"ShapeOfYou-EdSheeran",filePath:"song/6.mp3",coverPath:"cover/6.jpg"},
    {songName:"Stay-JustinBieber/KidLaroi",filePath:"song/7.mp3",coverPath:"cover/7.jpg"},
]

songItems.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src=songs[i].coverPath
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName
})




//audioElement.play()
//handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
      audioElement.play();
      masterPlay.classList.remove("fa-play")
      masterPlay.classList.add("fa-pause")
      gif.style.opacity=1;  
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove("fa-pause")
        masterPlay.classList.add("fa-play")
        gif.style.opacity=0;   
    }
})


//listen to events
audioElement.addEventListener('timeupdate',()=>{
    //Update Seekbar
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100)
    myProgressBar.value=progress

})

myProgressBar.addEventListener("change",()=>{
    audioElement.currentTime=myProgressBar.value* audioElement.duration/100
})

const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
        element.classList.remove('fa-pause')
        element.classList.add('fa-play')
    })
}

Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
    element.addEventListener('click',(e)=>{
           makeAllPlays()
           songIndex=parseInt(e.target.id)
           e.target.classList.remove('fa-play')
           e.target.classList.add('fa-pause')
           audioElement.src=`song/${songIndex+1}.mp3`
           songMastername.innerText=songs[songIndex].songName
           audioElement.currentTime=0
           audioElement.play()
           gif.style.opacity=1;
           masterPlay.classList.remove("fa-play")
           masterPlay.classList.add("fa-pause")
    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=6){
        songIndex=0
    }
    else{
        songIndex+=1
    }
    audioElement.src=`song/${songIndex+1}.mp3`
    songMastername.innerText=songs[songIndex].songName
    audioElement.currentTime=0
    audioElement.play()
    gif.style.opacity=1;
    masterPlay.classList.remove("fa-play")
    masterPlay.classList.add("fa-pause")
    
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0
    }
    else{
        songIndex-=1
    }
    audioElement.src=`song/${songIndex+1}.mp3`
    songMastername.innerText=songs[songIndex].songName
    audioElement.currentTime=0
    audioElement.play()
    gif.style.opacity=1;
    masterPlay.classList.remove("fa-play")
    masterPlay.classList.add("fa-pause")
    
})