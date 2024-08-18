class Solution {
    public boolean isPalindrome(int x) {
        String str1 = Integer.toString(x);
        // String str2 = new StringBuffer(str1).reverse().toString();
        // return str1.equals(str2);
        for(int i = 0; i<str1.length(); i++){
            if (str1.charAt(i) != str1.charAt(str1.length() - 1 - i)) {
                return false;
            }
        }
        return true;
        
    }
}