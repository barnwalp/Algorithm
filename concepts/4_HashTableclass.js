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
}

const myHashTable = new HashTable(10);
console.log(myHashTable.set('grapes', 10000));
console.log(myHashTable.set('apples', 50000));
console.log(myHashTable.get('grapes'));
console.log(myHashTable.get('apples'));
