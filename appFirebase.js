//Mamange database

const database = firebase.database();
const messageRef = database.ref("message");


new Vue({
    el:"#comment",
    data:{
        messageText:'',
        messages:[],
        name:'kong'
    },
    methods:{
        storeMessage:function(){
           this.messages.push({
               text:this.messageText,
               name:this.name
           })
           this.messageText='';
           console.log(this.messages);
           
        }
    },
    created(){
        
    }
})