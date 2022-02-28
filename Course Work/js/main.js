function missionNumber(array){

    
    let myArr = [...array];
    myArr.sort((a,b) => a-b);
    console.log(myArr);
    for(let i = myArr[0]; i < myArr.length; i++){
        if(i !== myArr[i]){
            return i;
        }
    }
    return "No missing numbers";
}



let numbers = [3,8,7,9,6,0,1,12,5,14,4,2,19,16,18,11,10,15,13,17,20];


console.log(missionNumber(numbers));