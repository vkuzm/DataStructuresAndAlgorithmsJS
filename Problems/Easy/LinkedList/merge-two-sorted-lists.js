
// Time: O(n)
// Space: O(1)
function mergeTwoLists(l1, l2) {
  let result = new ListNode(-1);
  let head = result;

  while (l1 != null && l2 != null) {
    if (l1.val < l2.val) {
      result.next = l1;
      l1 = l1.next;
    } else {
      result.next = l2;
      l2 = l2.next;
    }

    result = result.next;
  }

  if (l1 != null) {
    result.next = l1;
  }

  if (l2 != null) {
    result.next = l2;
  }

  return head.next;
}

console.log(mergeTwoLists([1, 2, 4], [1, 3, 4]));