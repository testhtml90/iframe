const txtEnim = document.querySelector('h1');

new Typewriter(txtEnim, {
   // deleteSpeed: 20
})

.typeString('Eymeric COLUSSI est ')
.pauseFor(300)
.typeString('<span> un développeur qui</span>')
.typeString('<span style="color: rgb(211, 31, 31);"> est mauvais sniff! sniff!</span>')
.pause(1000)
.deleteChars(25)
.typeString('<span style="color: rgb(89, 202, 37);" >est trop fort !!!</span>')
.start()

