(this["webpackJsonpmusic-player"]=this["webpackJsonpmusic-player"]||[]).push([[0],{19:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(2),r=n.n(c),i=n(12),s=n.n(i),o=n(5),u=n.n(o),l=n(8),d=n(3),b=n(7),j=(n(19),n(6)),p=n(4),h=function(e){var t=e.audioRef,n=e.currentSong,c=e.isPlaying,r=e.setIsPlaying,i=e.songInfo,s=e.setSongInfo,o=e.songs,b=e.setCurrentSong,h=e.setSongs,f=function(e){var t=o.map((function(t){return t.id===e.id?Object(d.a)(Object(d.a)({},t),{},{active:!0}):Object(d.a)(Object(d.a)({},t),{},{active:!1})}));h(t)},g={transform:"translateX(".concat(i.animationPercentage,"%)")},m={background:"linear-gradient(to right, ".concat(n.color[0],",").concat(n.color[1],")")},O=function(e){return Math.floor(e/60)+":"+("0"+Math.floor(e%60)).slice(-2)},v=function(){var e=Object(l.a)(u.a.mark((function e(a){var r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=o.findIndex((function(e){return e.id===n.id})),"skip-forward"!==a){e.next=5;break}return e.next=4,b(o[(r+1)%o.length]);case 4:f(o[(r+1)%o.length]);case 5:if("skip-back"!==a){e.next=15;break}if((r-1)%o.length!==-1){e.next=12;break}return e.next=9,b(o[o.length-1]);case 9:return f(o[o.length-1]),c&&t.current.play(),e.abrupt("return");case 12:return e.next=14,b(o[(r-1)%o.length]);case 14:f(o[(r-1)%o.length]);case 15:c&&t.current.play();case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsxs)("div",{className:"player",children:[Object(a.jsxs)("div",{className:"time-control",children:[Object(a.jsx)("p",{children:O(i.currentTime)}),Object(a.jsxs)("div",{style:m,className:"track",children:[Object(a.jsx)("input",{min:0,max:i.duration||0,value:i.currentTime,type:"range",onChange:function(e){t.current.currentTime=e.target.value,s(Object(d.a)(Object(d.a)({},i),{},{currentTime:e.target.value}))}}),Object(a.jsx)("div",{style:g,className:"animate-track"})]}),Object(a.jsx)("p",{children:i.duration?O(i.duration):"0:00"})]}),Object(a.jsxs)("div",{className:"play-control",children:[Object(a.jsx)(j.a,{onClick:function(){return v("skip-back")},className:"skip-back",size:"2x",icon:p.a}),Object(a.jsx)(j.a,{onClick:function(){c?(t.current.pause(),r(!c)):(t.current.play(),r(!c))},className:"play",size:"2x",icon:c?p.d:p.e}),Object(a.jsx)(j.a,{onClick:function(){return v("skip-forward")},className:"skip-forward",size:"2x",icon:p.b})]})]})},f=function(e){var t=e.currentSong;return Object(a.jsxs)("div",{className:"song-container",children:[Object(a.jsx)("img",{alt:t.name,src:t.cover}),Object(a.jsx)("h2",{children:t.name}),Object(a.jsx)("h3",{children:t.artist})]})},g=function(e){var t=e.song,n=e.songs,c=e.setCurrentSong,r=e.id,i=e.audioRef,s=e.isPlaying,o=e.setSongs;return Object(a.jsxs)("div",{onClick:function(){c(t);var e=n.map((function(e){return e.id===r?Object(d.a)(Object(d.a)({},e),{},{active:!0}):Object(d.a)(Object(d.a)({},e),{},{active:!1})}));o(e),s&&i.current.play()},className:"library-song ".concat(t.active?"selected":""),children:[Object(a.jsx)("img",{alt:t.name,src:t.cover}),Object(a.jsxs)("div",{className:"song-description",children:[Object(a.jsx)("h3",{children:t.name}),Object(a.jsx)("h4",{children:t.artist})]})]})},m=function(e){var t=e.songs,n=e.setCurrentSong,c=e.audioRef,r=e.isPlaying,i=e.setSongs,s=e.libraryStatus;return Object(a.jsxs)("div",{className:"library ".concat(s?"active-library":""),children:[Object(a.jsx)("h2",{children:"Library"}),Object(a.jsx)("div",{className:"library-songs",children:t.map((function(e){return Object(a.jsx)(g,{songs:t,setCurrentSong:n,song:e,id:e.id,audioRef:c,isPlaying:r,setSongs:i},e.id)}))})]})},O=function(e){var t=e.setLibraryStatus,n=e.libraryStatus;return Object(a.jsxs)("nav",{children:[Object(a.jsx)("h1",{children:"Music"}),Object(a.jsxs)("button",{onClick:function(){return t(!n)},children:["Library",Object(a.jsx)(j.a,{icon:p.c})]})]})},v=n(27);var x=function(){return[{name:"Serendipity",cover:"https://chillhop.com/wp-content/uploads/2020/09/2899f7cc22ab12e17d0119819aac3ca9dbab46e6-1024x1024.jpg",artist:"Philanthrope",audio:"https://mp3.chillhop.com/serve.php/?mp3=10249",color:["#383b26","#aa3b33"],id:Object(v.a)(),active:!0},{name:"Ful Off",cover:"https://chillhop.com/wp-content/uploads/2020/07/c85a5f6166a48001820ba3dc7e1da639281e00b3-1024x1024.jpg",artist:"Nokiaa, Nofeels",audio:"https://mp3.chillhop.com/serve.php/?mp3=8888",color:["#c2bfac","#fed39e"],id:Object(v.a)(),active:!1},{name:"Slim Bobby",cover:"https://chillhop.com/wp-content/uploads/2020/10/23fdd99adc3e16abcb67b004ea3e748ebf433a49-1024x1024.jpg",artist:"Aviino",audio:"https://mp3.chillhop.com/serve.php/?mp3=10448",color:["#437abc","#ea7496"],id:Object(v.a)(),active:!1},{name:"The End",cover:"https://chillhop.com/wp-content/uploads/2020/07/f9ad13db0a7c6e6a086a3a17a15ff92cd69b2d7e-1024x1024.jpg",artist:"Philanthrope, Fujitsu",audio:"https://mp3.chillhop.com/serve.php/?mp3=8518",color:["#000000","#bababa"],id:Object(v.a)(),active:!1},{name:"Flushing the Stairs",cover:"https://chillhop.com/wp-content/uploads/2020/09/6defa6c89a6902fdd84bccd720c2b8fd29c40990-1024x1024.jpg",artist:"Leavv",audio:"https://mp3.chillhop.com/serve.php/?mp3=9917",color:["#559362","#acb17d"],id:Object(v.a)(),active:!1}]};var y=function(){var e=Object(c.useRef)(null),t=Object(c.useState)(!1),n=Object(b.a)(t,2),r=n[0],i=n[1],s=Object(c.useState)({currentTime:0,duration:0,animationPercentage:0}),o=Object(b.a)(s,2),j=o[0],p=o[1],g=Object(c.useState)(x()),v=Object(b.a)(g,2),y=v[0],S=v[1],k=Object(c.useState)(y[0]),N=Object(b.a)(k,2),C=N[0],P=N[1],w=Object(c.useState)(!1),T=Object(b.a)(w,2),I=T[0],L=T[1],M=function(e){var t=e.target.currentTime,n=e.target.duration,a=Math.round(t),c=Math.round(n),r=Math.round(a/c*100);p(Object(d.a)(Object(d.a)({},j),{},{currentTime:t,duration:n,animationPercentage:r}))},F=function(){var t=Object(l.a)(u.a.mark((function t(){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=y.findIndex((function(e){return e.id===C.id})),t.next=3,P(y[(n+1)%y.length]);case 3:I&&e.current.play();case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(a.jsxs)("div",{className:" App ".concat(r?"library-active":""),children:[Object(a.jsx)(O,{libraryStatus:r,setLibraryStatus:i}),Object(a.jsx)(f,{currentSong:C}),Object(a.jsx)(h,{songs:y,setSongInfo:p,songInfo:j,audioRef:e,setIsPlaying:L,isPlaying:I,currentSong:C,setCurrentSong:P,setSongs:S}),Object(a.jsx)(m,{audioRef:e,songs:y,setCurrentSong:P,isPlaying:I,setSongs:S,libraryStatus:r}),Object(a.jsx)("audio",{onLoadedMetadata:M,onTimeUpdate:M,ref:e,src:C.audio,onEnded:F})]})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,28)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))};s.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(y,{})}),document.getElementById("root")),S()}},[[25,1,2]]]);
//# sourceMappingURL=main.059cdde4.chunk.js.map