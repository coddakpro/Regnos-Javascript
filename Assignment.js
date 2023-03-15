function isSafe(password) {
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{6,}$/;
    return regex.test(password);
  }
  





console.log(isSafe("Abc123@"));
 // true
console.log(isSafe("abc123")); 
// false (no uppercase letter)
console.log(isSafe("ABC123")); 
// false (no lowercase letter)
console.log(isSafe("abcABC")); 
// false (no digit or special character)
console.log(isSafe("password")); 
// false (length is less than 6)