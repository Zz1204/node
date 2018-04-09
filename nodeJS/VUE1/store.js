
var store=new Vuex.Store({
    state:{
        arr:[
            {content:"HTML",onoff:false},
            {content:"CSS",onoff:false},
            {content:"JS",onoff:false},
            {content:"VUE",onoff:false}
        ],
        arr1:{
            content:"",
            onoff:false
        },
        arr3:[],
        hehe:{
            onoff:false
        }

    },
    mutations:{
        add(state,data){
            state.arr.push(data)
            state.arr1={
                content:"",
                onoff:false
            }
        },
        del(state){
            for(var i=0;i<state.arr.length;i++){
                if(!state.arr[i].onoff){
                    state.arr3.push(state.arr[i])
                }

            }
            state.arr=state.arr3;
            state.arr3=[];
            state.hehe.onoff=false
        },
        hehe(state){
            if(state.hehe.onoff==true){
                for(var i=0;i<state.arr.length;i++){
                    state.arr[i].onoff=true
                }
            }else{
                for(var i=0;i<state.arr.length;i++){
                    state.arr[i].onoff=false
                }
            }
        }
    }
})