function myReplace(str, before, after) {

    var regex = new RegExp(before, "gi");
    
    if(/[A-Z]/.test(before[0])){
      after = after.charAt(0).toUpperCase()+after.slice(1);
    }
    var str = str.replace(regex, after);
  
  
    return str;
  }
  
  myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");