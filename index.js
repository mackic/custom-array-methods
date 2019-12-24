class ArrayClone {
    constructor(...elements){
        this.array = elements;
    }

    printArray(){
        console.log(this.array);
    }


    for_each(callback){
        for(let i = 0; i < this.array.length; i++){
            this.array[i] = callback(this.array[i], i, this.array);
        }
        return this.array;
    }

    mape(callback){
        let newArray = [];
        for(let i = 0; i < this.array.length; i++){
            newArray.push(callback(this.array[i], i, this.array));
        }
        return newArray;
    }

    find_index(callback){
        for(let i = 0; i < this.array.length; i++){
            if(callback(this.array[i], i, this.array)){
                return i;
            }
        }
        return -1;
    }

    filter(callback){
        let newArray = [];
        for(let i = 0; i < this.array.length; i++){
            if(callback(this.array[i], i, this.array)){
                newArray.push(this.array[i]);
            }
        }
        return newArray;
    }

    some(callback){
        for(let i = 0; i < this.array.length; i++){
            if(callback(this.array[i], i, this.array)){
                return true;
            }
        }
        return false;
    }

    every(callback){
        for(let i = 0; i < this.array.length; i++){
            if(callback(this.array[i], i, this.array) === false){
                return false;
            }
        }
        return true;
    }

    reverse()  {
        for (let i = 0; i < this.array.length / 2; i++) {
            const temp = this.array[i];
            this.array[i] = this.array[this.array.length - 1 - i];
            this.array[this.array.length - 1 - i] = temp;
        }
        return this.array;
    }

    reduce(initialValue = 0){
        let sum = 0;
        for(let i =0; i < this.array.length; i++){
            
            sum += this.array[i];
        }
        return sum + initialValue;
    }
}


let arr = new ArrayClone(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

console.log(arr.reduce(23));

/*
const arr2 = arr.filter((val => val > 4));
console.log(arr2); //[ 5, 6, 7, 8, 9, 10 ]

console.log(arr.some((val => val === 11)));


*/