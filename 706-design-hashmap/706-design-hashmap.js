const SIZE = 8737;
const Node = function (key, value, next = null) {
  this.key = key;
  this.value = value;
  this.next = next;
};

const MyHashMap = function () {
  this.arr = Array(SIZE);
};

const getNode = function (hashMap, key) {
  const id = key % SIZE;
  let cur = hashMap.arr[id];
  while (cur) {
    if (cur.key === key) break;
    cur = cur.next;
  }
  return cur;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function (key, value) {
  const node = new Node(key, value);
  const id = key % SIZE;
  const exist = getNode(this, key);
  if (!exist) {
    node.next = this.arr[id];
    this.arr[id] = node;
  } else {
    exist.value = value;
  }
};

/**
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function (key) {
  const cur = getNode(this, key);
  return cur?.value ?? -1;
};

/**
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function (key) {
  const id = key % SIZE;
  if (this.arr[id]?.key === key) {
    this.arr[id] = this.arr[id].next;
    return;
  }
  let cur = this.arr[id]?.next;
  let prev = this.arr[id];
  while (cur) {
    if (cur.key === key) break;
    prev = cur;
    cur = cur.next;
  }

  if (cur) {
    prev.next = cur.next;
  }
};

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */