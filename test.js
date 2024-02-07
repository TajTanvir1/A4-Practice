function checkNotString(variable) {
   if (typeof variable !== 'string') {
      // return "asjkfhsdjk"
     console.log('The variable is not a string.');
   } else {
     console.log('The variable is a string.');
   }
 }
 
 // Example usage:
 const myVariable = 42;
 
 checkNotString(myVariable);