var store=new Vuex.Store({
    state:{          //初始数据
        arr:[
            {name:"郭",age:"18",sex:"男"},
            {name:"锡",age:"19",sex:"男"},
            {name:"坤",age:"18",sex:"男"}
        ],
        arr1:{
            name:"",
            age:"",
            sex:"男"
        }
    },
    mutations:{
        add(state,data){
            state.arr.push(data)
            state.arr1={
                name:"",
                age:"",
                sex:"男"
            }
        },
        visi(state,index){
            state.arr.splice(index,1)
        },
        chenge(state){
            state.arr1={
                name:"",
                age:"",
                sex:"男"
            }
        }

}
})
