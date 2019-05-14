function chunk(str) {

  let newS = str.replace(/[^0-9]/g, '').split('');
  console.log(newS);
  let container = [];
  for (let i=0; i<newS.length; i++) {
    let last = container[container.length -1];    
    if (!last || last.length===3) {
      container.push([newS[i]]);
    } else {
      last.push(newS[i]);
    }  
  }  
  debugger;
    console.log(container.join('-').replace(/,/g, ''));
  }

chunk('310   3846767');