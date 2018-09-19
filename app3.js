var post=new Vue({
    el:"#post",
    data:{
        title:'project',
        message: 'Project Detail'
    }
    
});

var comment=new Vue({
    el:"#comment",
    data:{
        text:'อากาศดีมาก'
    }
});

var likeSystem=new Vue({
    el:"#likeSystem",
    data:{
        like:false
    },
    methods:{
        changeLike:function(){
           console.log("like")
        }
    }
    
});