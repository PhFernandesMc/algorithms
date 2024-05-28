class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

// binary tree

//     a
//    / \
//   b   c
//  / \   \
// d   e   f

// ----------------------------------------------------------------------------- depth first value algorithm

// const depthFirstValues = (root) => {
//   const arr = [];
//   if (!root) {
//     return arr
//   }
//   const stack = [root];

//   while (stack.length > 0) {
//     const current = stack.pop();
//     arr.push(current.val);

//     if (current.right) stack.push(current.right);
//     if (current.left) stack.push(current.left);
//   }
//   return arr;
// };

const depthFirstValues = (root) => {
  if (!root) return [];

  const leftValues = depthFirstValues(root.left);
  const rightValues = depthFirstValues(root.right);
  return [root.val, ...leftValues, ...rightValues];
};

// const result = depthFirstValues(a);
// console.log(result);

// ----------------------------------------------------------------------------- breath first values

const breathFirstValues = (root) => {
  const arr = [];
  if (!root) return arr;

  const queue = [root];

  while (queue.length) {
    const current = queue.shift();
    arr.push(current.val);

    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }
  return arr;
};

// const result = breathFirstValues(a);
// console.log(result);

// ----------------------------------------------------------------------------- tree includes

const treeIncludes = (root, target) => {
  if (!root) return false;
  if (root.val === target) return true;
  return treeIncludes(root.left, target) || treeIncludes(root.right, target);
};

// const result = treeIncludes(a, "f");
// console.log(result);

// ----------------------------------------------------------------------------- tree sum

const num1 = new Node(5);
const num2 = new Node(11);
const num3 = new Node(3);
const num4 = new Node(4);
const num5 = new Node(2);
const num6 = new Node(1);

num1.left = num2;
num1.right = num3;
num2.left = num4;
num2.right = num5;
num3.right = num6;

const treeSum = (root) => {
  if (!root) return 0;
  return root.val + treeSum(root.left) + treeSum(root.right);
};

// const result = treeSum(num1);
// console.log(result);

// ----------------------------------------------------------------------------- tree min value

const treeMin = (root) => {
  if (!root) return Infinity;
  const leftMin = treeMin(root.left);
  const rightMin = treeMin(root.right);
  return Math.min(root.val, leftMin, rightMin);
};

// const result = treeMin(num1);
// console.log(result);

// ----------------------------------------------------------------------------- max root to leaf path

const maxPathSum = (root) => {
  if (!root) return 0;
  const leftMax = maxPathSum(root.left);
  const rightMax = maxPathSum(root.right);
  return root.val + Math.max(leftMax, rightMax);
};

const result = maxPathSum(num1);
console.log(result);
