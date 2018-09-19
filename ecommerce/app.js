new Vue({
    el:"#app",
    data:{
        items:[
            {
                name:"cofee",
                price:15,
                url:"https://via.placeholder.com/100x100",
                active:false
            },
            {
                name:"Chair",
                price:30,
                url:"https://via.placeholder.com/100x100",
                active:false
            },
            {
                name:"Table2hand",
                price:650,
                url:"https://via.placeholder.com/100x100",
                active:false
            }

        ]
    },
    methods:{
        selected:function(item){
            item.active =!item.active;
        },
        total:function(){
            var total=0;
            this.items.forEach(function(item){
            if(item.active){
                total += item.price;
            }
            });
            return total;
        }
    }
});