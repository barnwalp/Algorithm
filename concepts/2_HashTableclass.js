class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }
  
  // _ means it is a private method
  _hash(key) {
    let hash = 0;
    for (let i=0; i<key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(key, value) {
    let address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    return this.data;
  }

  get(key) {
    let address = this._hash(key);
    const currBucket = this.data[address];
    if (currBucket) {
      for(let i=0; i<currBucket.length; i++) {
        if (currBucket[i][0] === key) {
          return currBucket[i][1];
        }
      }
    }
    return undefined;
  }

  keys() {
    const keyArrays = [];
    for (let i=0; i<this.data.length; i++) {
      if (this.data[i]) {
        for (let j=0; j<this.data[i].length; j++){
          keyArrays.push(this.data[i][j][0]);
        }
      }
    }
    return keyArrays;
  }
}

const myHashTable = new HashTable(10);
myHashTable.set('grapes', 100);
myHashTable.set('apples', 500);
myHashTable.set('mangoes', 200);
myHashTable.set('bananas', 100);
myHashTable.set('oranges', 50);
console.log(myHashTable);
console.log(myHashTable.get('grapes'));
console.log(myHashTable.get('apples'));
console.log(myHashTable.keys());
