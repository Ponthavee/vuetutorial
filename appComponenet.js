//customer tag
Vue.component('ponytag',{
    data:function(){
        return{
            count:0
        }
    },
    template:'<button v-on:click="count++">Click:{{count}}</button>'
});

Vue.component('post',{
    template:'<h3>New Post</h3>'
});

Vue.component('postprops',{
    props:['title'],
    template:'<h2>{{title}}</h2>'
})

//custom Youtube
Vue.component('showview',{
    props:{
        title:{
            type:String,
            required:true
        },
        view:{
            type:Number,
            default:0
        }
    },
    template:'<h3>{{title}} | {{view}}</h3>'
})

Vue.component('showcomment',{
    props:['commentpost'],
    template:'<h4>{{commentpost}}</h4>'
});


new Vue({
    el:"#vue-app",
    data:{
        newComment:'',
        comments:[
            'Good morning','Say hi','Congratulations'
        ]
    },
    methods:{
        //add comment
        addComment:function(){
            this.comments.push(this.newComment)
            this.newComment=''
        }

    }
});  

