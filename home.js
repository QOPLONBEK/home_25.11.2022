                            ////////////////////// HOME WORK ////////////////////////////////////////////

                                                     // 1 - ex  // 


                                                    /// 1 - uslub ///
    // function findIndex(arr, x){
    //   let a = []
    //   for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] !== x) {
    //       a = i;
    //     } else {
    //       return i;
    //     }
    //   }
    // }
                                                    
    
    // console.log(findIndex(["hi", "edabit", "fgh", "abc"], "fgh"));
    // console.log(findIndex(["Red", "blue", "Blue", "Green"], "blue"));
    // console.log(findIndex(["a", "g", "y", "d"], "d"));
    // console.log(findIndex(["Pineapple", "Orange", "Grape", "Apple"], "Pineapple"))

                                                    /// 2 - uslub ///
        

    // function findIndex(arr, str) {
    //     return arr.indexOf(str)
    //     }

    //   console.log(findIndex(["hi", "edabit", "fgh", "abc"], "fgh"));
    //   console.log(findIndex(["Red", "blue", "Blue", "Green"], "blue"));
    //   console.log(findIndex(["a", "g", "y", "d"], "d"));
    //   console.log(findIndex(["Pineapple", "Orange", "Grape", "Apple"], "Pineapple"))


                                                     // 2 - ex  // 
    
                                                     // 1 - uslub
    
    // function getLastItem(arr) {
    //     return arr.pop();                                            
    // }
                                                    

    // console.log(getLastItem([1,2,3]))
    // console.log(getLastItem(["cat", "dog", "duck"]))
    // console.log(getLastItem(["ture", "false", "ture"]))

                                                    // 2 - uslub //

    // function getLastItem(arr) {
    //     return arr.slice(-1).join();                                            
    // }

    // console.log(getLastItem([1,2,3]))
    // console.log(getLastItem(["cat", "dog", "duck"]))
    // console.log(getLastItem(["ture", "false", "ture"]))
    
                                            //////////////////   3 - usuli   ///////////////////////

    function getLastItem(array, n) {
        if (array == null) 
          return void 0;
        else if (n == null) 
           return array[array.length - 1];
        return array.slice(Math.max(array.length - n, 0));  
    };
      
        console.log(getLastItem([1,2,3]))
        console.log(getLastItem(["cat", "dog", "duck"]))
        console.log(getLastItem(["ture", "false", "ture"]))