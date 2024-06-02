// Написать функцию, получающую на вход два числа. Если оба числа чётные - функция возвращает их произведение. Если оба числа нечётные - функция возвращает их сумму. Если одно из чисел чётное, а второе нечётное - функция возвращает это нечётное число.
 

// function get_res(num1=0, num2=0){
//     if(num1 %2 ==0 && num2 %2 ==0){
//         return num1*num2;
//     }
//      else if(num1 %2 !==0 && num2 %2 !==0){
//        return num1 + num2;
//      }
//        else{
//         if(num1 %2 !==0){
//            return num1;
//      }
//         else{
//             return num2;
//         }
//      }
//     }  
      
    //  let result = (get_res(8, 10));
    // let result = (get_res(7, 9));
    //  let result = (get_res(7, 10));
    //  let result = (get_res(10, 13));


    // let num1 = +prompt('Enter the number');
    // let num2 = +prompt('Enter the number');
    //    console.log(get_res(num1, num2));




    // Написать  функцию, которая параметром будет принимать секунды, а возвращать количество суток, соответствующих этим секундам.  
    
    // function calc_day(sec = 0, day = 0){
    //     return sec/86400;
    // }

    // // let result = calc_day(+prompt('Enter number of seconds'));
    //  let result = calc_day(100000);
    //  console.log(result);
    




    // Написать функцию isPrime, которая принимает число и возвращает true, если оно простое (имеет только два делителя: 1 и само число), и false в противном случае.
 
    // function isPrime(num){
    //     for (let i = 2; i < num; i++) {
    //     if(num %i ===0){
    //         return 'false';
    //     }
    //     else{ 
    //         return 'true';
    //     }
    //    }
    // }
    //   let result = isPrime(+prompt('Enter the number'));
    // // let result = isPrime(21);
    //    console.log(result);
    



    // Написать функцию, которая в качестве аргументов получает два числа и выводит в консоль наименьшее.
      
    //  function getMin(num1 = 0, num2 = 0){
    //     if(num1 < num2){
    //         return num1;
    //     }
    //     else{
    //         return num2;
    //     }
    //    }

    
    //     //  let result = getMin(20, 15); 
    //     //  console.log(result);
         
        
    //     let num1 = +prompt('Enter the number');
    //       let num2 = +prompt('Enter the number');
    //       console.log(getMin(num1, num2));
 
      
   

   // Написать  функцию, которая в качестве аргументов получает два числа и возвращает массив чисел со значениями от меньшего числа к большему. 


    // function fillArray(num1, num2) {
    //     let start = Math.min(num1, num2);
    //     let end = Math.max(num1, num2);
    //     let result = [];

    //     for (let i = start; i <= end; i++) {
    //         result.push(i);
    //     }
    
    //     return result;
    // }
    
    // let num1 = +prompt('Введите первое число:');
    // let num2 = +prompt('Введите второе число:');
    // console.log(fillArray(num1, num2));

    