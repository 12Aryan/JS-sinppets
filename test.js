////////////////////      Pollyfills                 ///////////////////

let data = [22, 22, 22];

Array.prototype.mySummation = function () {
    let sum = 0;
    for (let i = 0; i < this.length; i++) {
      sum += this[i];
    }
    return sum;
  };

 

  console.log('Pollyfill mySummation', data.mySummation());

Array.prototype.myMap = function (cb){
    let tempArr = []
    for(let i = 0; i<this.length; i++){
        tempArr.push(cb(this[i], i, this))
    }

    return tempArr
}

const arr = [1,2,3,4]

console.log('Pollyfill myMap: ',arr.myMap((item)=>item*2))

Array.prototype.myFilter = function (cb){
    let tempArr = []
    for(let i = 0; i<this.length; i++){
        if(cb(this[i], i, this))
        tempArr.push(this[i])
    }

    return tempArr
}

const arr2 = [1,2,3,4]

console.log('Pollyfill My filter: ',arr2.myFilter((item)=>item>2))

Array.prototype.myReduce = function (cb, initialValue) {
  let accumulator = initialValue;
  let startIndex = 0;

  if (initialValue === undefined) {
    accumulator = this[0];
    startIndex = 1;
  }

  for (let i = startIndex; i < this.length; i++) {
    accumulator = cb(accumulator, this[i], i, this);
  }

  return accumulator;
}

const arr3 = [4,10,2]

console.log('Pollyfill myReduce: ',arr3.myReduce((acc,current)=>{
    return acc + current
}, 0))

//////////////////////////////////////////////////////////////////////

//////////////       MAP, FILTER, REDUCE     ////////////

const students = [
  {
    name: "aryan",
    age: 11,
  },
  {
    name: "beta",
    age: 21,
  },
  {
    name: "gama",
    age: 31,
  },
];

console.log(students.map((student)=>{
    return {
        name: student.name.toUpperCase(),
        age: student.age * 2
    }
    }
).filter((item)=>item.age>60))

console.log('Reduce example: ',students.reduce((acc, initialValue)=>acc +initialValue.age, 0))

/////////////////////////////////////////////////////////////////////////////////////

///////////          IIFE            ////////////




(function() {
    var localVar = 'This is a local variable';
    console.log(localVar); 
})();



//////////         Higher Order Function     /////////////

function square(num) {
  return num * num;
}

const displaySqaure = (func) => {
  console.log('Higher order function: ',func(12));
};

displaySqaure(square);

///////////////////////////////////////////////////////////

/////////////// CLOSURES ///////////////////////

const outer = () => {
  let name = "closure";
  const inner = () => {
    console.log('closure',name);
  };

  return inner;
};

const closure = outer();
closure();

// write a function that would allow you to do addition of base and value
// ex: base = 10 , value = 2 , output = 12

const createBase = (num) => {
  return (innerNum) => num + innerNum;
};

const add = createBase(10);

console.log('closure example: ',add(99));

//////create a private counter

const counter = () => {
  let _counter = 0;

  const add = (value) => {
    _counter += value;
  };

  const retrieve = () => {
    return "current value: " + _counter;
  };

  return {
    add,
    retrieve,
  };
};

const closureFun = counter();
closureFun.add(2);
closureFun.add(24);
console.log('closure private counter:',closureFun.retrieve());

////////////////////////////////////////////////////////////////////

/////////////////////CURYYING////////////////////////////////////
const evaluateNumber = (op) => {
  return (a) => {
    return (b) => {
      if (op === "sum") {
        return a + b;
      } else if (op === "sub") {
        return a - b;
      } else if (op === "mul") {
        return a * b;
      } else if (op === "div") {
        return a / b;
      } else return "invalid";
    };
  };
};

console.log('currying evaluate: ',evaluateNumber("d")(4)(2));
console.log('currying evaluate:',evaluateNumber("sub")(4)(2));
console.log('currying evaluate:',evaluateNumber("mul")(4)(2));
console.log('currying evaluate:',evaluateNumber("div")(4)(2));

/////////////Infinite currying////////////////////////

const infiniteCurrying = (a) => {
  return (b) => {
    if (b) {
       return infiniteCurrying(a + b)
    }
    return a
  };
};

console.log('infinite currying',infiniteCurrying(5)(15)());

/////////////////////////////////////////////////////////////////
