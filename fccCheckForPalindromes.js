function palindrome(str) {
  var cleaned = str.toLowerCase().replace(/[\W_]/g,"");
  var reversed = cleaned.split("").reverse().join("");
  return cleaned === reversed;
}
