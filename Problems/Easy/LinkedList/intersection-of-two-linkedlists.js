
// Solution #1
// Time: O(n+m)
// pace: O(n)
const getIntersectionNode = function (headA, headB) {
  let a = headA;
  let b = headB;
  const map = new Set();

  while (a) {
    map.add(a);
    a = a.next;
  }

  while (b) {
    if (map.has(b)) {
      return b;
    }
    b = b.next;
  }

  return null;
};

// Solution #2
// Time: O(n+m)
// Space: O(1)
const getIntersectionNode2 = function (headA, headB) {
  if (!headA || !headB) {
    return null;
  }

  let a = headA;
  let b = headB;

  while (a !== b) {
    a = a ? a.next : headB;
    b = b ? b.next : headA;
  }
  return a;
};