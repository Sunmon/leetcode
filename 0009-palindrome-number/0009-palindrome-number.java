class Solution {
    public boolean isPalindrome(int x) {
        String str1 = Integer.toString(x);
        String str2 = new StringBuffer(str1).reverse().toString();
        return str1.equals(str2);
    }
}