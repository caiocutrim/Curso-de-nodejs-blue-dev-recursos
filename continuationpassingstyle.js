'use strict';
function sayName(name) {
  // assíncrona customizada
  let promise = new Promise((resolve, reject)=> {
    process.nextTick(()=>{
      resolve(name);
    });
  });

  return promise;
}



// sayName("Diego Candido", (result)=> {
//   console.log(result);
//   sayName("Rodrigo Oler", (result) => {
//     console.log(result);
//     sayName("Caio Cutrim", (result) => {
//       console.log(result);
//     });
//   });
// });

sayName("Diego Candido")
.then((result) => {
  console.log(`com promise ${result}`);
  return result;
}).then(()=>{
  sayName("Rodrigo Oler")
  .then((result) => {
    console.log(result);
  });
});


Promise.all([sayName("Caio Cutrim"), sayName("Diego Candido"), sayName("Rodrigo Oler")]).then((data) => {
  console.log(" com all " + data);
});

