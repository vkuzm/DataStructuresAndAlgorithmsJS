
// https://leetcode.com/problems/repeated-dna-sequences/
// Time: O(n)
// Space: O(n)
const findRepeatedDnaSequences = function (s) {
   const result = [];
   const map = new Map();

   let index = 0;
   while (index + 10 <= s.length) {
     const seq = s.substring(index, index + 10);

     if (!map.has(seq)) {
       map.set(seq, 1);
     } else {
       map.set(seq, map.get(seq) + 1);
     }

     if (map.get(seq) === 2) {
       result.push(seq);
     }

     index++;
   }
   return result;
};

console.log(findRepeatedDnaSequences("AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"));