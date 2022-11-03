{/* <div class="slide">
  <div class="text-content">
    <h2>${name}</h2>
    <p>${description}</p>
  </div>
  <img class="slider-image" src="${picture}" alt="${name}">
  </div>  */}



const { createApp } = Vue;

createApp({
  data(){
    
    return{
      cities :[
{
  name:"Bari",
  description:"Se Parigi avesse il mare sarebbe una piccola Bari",
  picture:"./assets/img/bari.jpg"
},

{
  name:"Roma",
  description:"Capitale italiana, è la città con più beni storici e architettonici al mondo",
  picture:"./assets/img/roma.jpg"
},

{
  name:"Milano",
  description:"Grande centro urbano, nonchè la capitale della moda e dell'economia italiana",
  picture:"./assets/img/milano.jpg"
},

{
  name:"Firenze",
  description:"Sviluppata sulle due sponde dell'Arno, è fra le città italiane una delle più rinominate per arte e storia ",
  picture:"./assets/img/firenze.jpg"
},

{
  name:"Napoli",
  description:"Ha uno dei più grandi centri storici del mondo e il suo orgoglio sono le 448 chiese storiche e monumentali",
  picture:"./assets/img/napoli.jpg"
},
],

counterImages: 0,


    }


  },



  methods:{

    changeImg(isNext){
      isNext ? this.counterImages++ : this.counterImages-- ;
      if(this.counterImages === this.cities.length) this.counterImages = 0 ;
      if(this.counterImages < 0)this.counterImages = this.cities.length -1;
    },

    autoplay(isPause){
      if(!isPause){
      setInterval(()=>{
        this.changeImg(true)
      },3000)}
      console.log(isPause);
    },
    
  },

  mounted(){
   
  },

  created(){
    this.autoplay(false)
  }

}).mount('#app')

