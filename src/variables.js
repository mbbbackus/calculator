const functions = [
    {
        index: 0, 
        name: null, 
        symbol: null, 
        fct: function(a,b) {return null},
    },
    {
        index: 1,
        name: 'add',
        symbol: '+',
        fct: function(a,b) {return a + b},   
    },
    {
        index: 2,
        name: 'subtract',
        symbol: '-',
        fct: function(a,b) {return a - b},  
    },
    {
        index: 3,
        name: 'multiply',
        symbol: '*',
        fct: function(a,b) {return a * b},  
    },
    {
        index: 4,
        name: 'divide',
        symbol: '/',
        fct: function(a,b) {return a / b},    
    },
    {
        index: 5,
        name: 'exponent',
        symbol: '^',
        fct: function(a,b) {return Math.pow(a, b)},    
    }
];

const defaultState = {
  inputOne: "",
  inputTwo: null,
  result: null,
  function: functions[0],
  functions: functions
};

export {functions};
export {defaultState};