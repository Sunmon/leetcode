const MyQueue = function () {
  this.list = [];
  this.ptr = 0;
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.list.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  return this.list[this.ptr++];
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  return this.list[this.ptr];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return this.ptr === this.list.length;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
