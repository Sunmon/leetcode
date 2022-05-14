/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
const addBinary = function (a, b) {
  let i = a.length - 1;
  let j = b.length - 1;
  let answer = '';
  let carry = 0;

  const adder = [
    [
      [
        [0, 0],
        [1, 0],
      ],
      [
        [1, 0],
        [0, 1],
      ],
    ],
    [
      // a: 0
      [
        [1, 0],
        [0, 1],
      ],
      [
        [0, 1],
        [1, 1],
      ],
    ], // a: 1
  ]; // adder[a][b][carry]

  while (i >= 0 && j >= 0) {
    const [result, next] = adder[a[i--] - '0'][b[j--] - '0'][carry];
    answer = result + answer;
    carry = next;
  }

  while (i >= 0) {
    const [result, next] = adder[a[i--] - '0'][0][carry];
    answer = result + answer;
    carry = next;
  }

  while (j >= 0) {
    const [result, next] = adder[0][b[j--]][carry];
    answer = result + answer;
    carry = next;
  }
    
    if (carry) answer = '1' + answer;

  return answer;
};
