/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let l3 = new ListNode(0);
    let tmp = l3;
    let carry = 0;
    while (l1 || l2){
        const x = (l1 != null) ? l1.val : 0;
        const y = (l2 != null) ? l2.val : 0;
        const sum = x + y + carry;
        carry = Math.floor(sum/10);
        tmp.next = new ListNode(sum%10);
        tmp = tmp.next;
        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }
    if (carry > 0){
        tmp.next = new ListNode(carry);
    }
    return l3.next;
};