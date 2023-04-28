class MyArray{
  constructor() {
    this.length = 0;
    this.data = {};
  }
  get(index) {
    return this.data[index];
  }
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }
  pop() {
    const lastItem = this.data[this.length-1];
    delete this.data[this.length-1];
    this.length--;
    return lastItem;
  }
  delete(index) {
    const item = this.data[index];
    this.shiftItems(index);
    return item;
  }
  shiftItems(index) {
    for (let i=index; i<this.length-1; i++){
      this.data[i] = this.data[i+1];
    }
      delete this.data[this.length-1];
      this.length--;
  }
}

const newArr = new MyArray();
newArr.push(5);
newArr.push(15);
newArr.push(23);
newArr.push(5);
console.log(newArr);
// console.log(newArr.pop());
newArr.delete(1);
console.log(newArr);