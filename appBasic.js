new Vue({
el:"#vue-app",
data:{
    name:"Pontahvee Sitipol",
    job:"Programmer",
    age: 37,
    status:false,
    website: 'http://www.korchafae.com',
    count:0,
    foods:[],
    gender:'',
    job:'',
    like:false,
    product:['Vue','Ajax','jQuery','php','react'],
    employee:[
        {name:'ponthavee',age:37,status:false},
        {name: 'sompong',age:45,status:true}
    ]
},
methods:{
    getName:function(){
        return this.name
    },
    setName:function(n){
        return this.name=n
    },
    addAge:function(){
        this.age++
        console.log(this.age)
    },
    SubtractAge:function(){
        this.age--
        console.log(this.age)
    },
    addCount:function(){
        this.count++
    }

}
})