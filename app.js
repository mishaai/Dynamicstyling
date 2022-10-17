Vue.createApp({
    data() {
      return {
        classes:'',
        styles:'#ccc',
        toggle:true,

      }
      
    },
    methods: {
        css_changer(event){
            this.classes = event.target.value;
        },
        style_changer(event){
            this.styles = event.target.value;
        }
    }
   
  }).mount('#assignment');