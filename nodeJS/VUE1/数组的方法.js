


var arr=[
        {name:'syx',id:1},
        {name:'syx11',id:2},
        {name:'syx22',id:3},
        {name:'syx33',id:4},

    ];

// var a=arr.filter(function(item){
//    // console.log(item);
//     return item.id == 3;
// })
//console.log(a);

//[ { name: 'syx22', id: 3 } ]

//  数组里面关于map的方法  对数组进行重新组合


//  var b=arr.map(function(item){
//    // console.log(item);
//     return {
//         use:item.name,
//         num:item.id
//     }
// })

// console.log(b);
//
// console.log(arr);

// [ { use: 'syx', num: 1 },
//     { use: 'syx11', num: 2 },
//     { use: 'syx22', num: 3 },
//     { use: 'syx33', num: 4 } ]
//
//
//
//     [ { name: 'syx', id: 1 },
//     { name: 'syx11', id: 2 },
//     { name: 'syx22', id: 3 },
//     { name: 'syx33', id: 4 } ]






//{ name: 'syx', id: 1 }
//{ name: 'syx11', id: 2 }
//{ name: 'syx22', id: 3 }
//{ name: 'syx33', id: 4 }



//数组的方法  some  方法
// 整体判断 数组中到底有没有这项

 var  c= arr.some(function(item){
    //console.log(item)
    return item.id == 4

})

//console.log(c);  // true    //  false
// { name: 'syx', id: 1 }
// { name: 'syx11', id: 2 }
// { name: 'syx22', id: 3 }
// { name: 'syx33', id: 4 }


  var   newarr=[234,4535,32547,46,54665,6546];

 var d= newarr.some(function(item){
      return item>10000
  })


  console.log(d);
 

// forEach   filter   some  map