// Navbar //
const menu = document.querySelector('.menu')
const navbar = document.querySelector('.navbar')

menu.addEventListener('click',() => {
   navbar.classList.toggle('change')
   menu.classList.toggle('change') 
})
// End of Navbar //

// Section 2 video //

const video = document.querySelector('.video')
const btn = document.querySelector('.buttons i')
const bar = document.querySelector('.video-bar')

const playPause = () => {
   if (video.paused) {
      video.play()
      btn.className ='far fa-pause-circle'
      video.style.opacity ='.7'
   } else {
      video.pause()
      btn.className ='far fa-play-circle'
      video.style.opacity ='.3'
   } 
}

btn.addEventListener('click',() => {
   playPause()
})  

video.addEventListener('timeupdate', () => {
   const barWith = video.currentTime/video.duration
   bar.style.width = `${barWith*100}%`
   if(video.ended) {
      btn.className = 'fa fa-play-circle'
      video.style.opacity = '.3'
   }

   
})

// End of Section 2 video //


