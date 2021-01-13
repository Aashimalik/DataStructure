class HashTable {
  constructor(size){
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for(let i =0; i < key.length; i++){
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }

    return hash;
  }

  set(key, value) {
    let address = this._hash(key);
    if(!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);

    return this.data;
  }

  get(key) {
    let address = this._hash(key);
    let currentBucket = this.data[address];
    if(currentBucket) {
      for(let i =0; i< currentBucket.length; i++){
        if(currentBucket[i][0] == key ){
          return currentBucket[i][1];
        } 
      }
    }

    return undefined;
  }

  keys(){
    const keysArray = [];
    for(let i=0; i< this.data.length; i++){
      if(this.data[i]){
        keysArray.push(this.data[i][0][0]);
      }
    }

    return keysArray;
  }
}

const myHashTable = new HashTable(50);
myHashTable.set("grapes", 1000);
myHashTable.set("apples", 40);
myHashTable.get("apples");
myHashTable.keys();

// Practice Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined

function firstRecurringCharacter(input) {
  for(let i =0; i< input.length; i++){
    for(let j =i+1; j < input.length; j++){
      if(input[i] === input[j]) {
        return input[i];
      }
    }
  }

  return undefined;
} // O(n^2)

function firstRecurringCharacter2(input) {
  let map = {};
  for (let i = 0; i < input.length; i++) {
    if (map[input[i]] !== undefined) {
      return input[i]
    } else {
      map[input[i]] = i;
    }
  }
  return undefined
} // O(n)

firstRecurringCharacter([1,5,5,1,3,4,6])