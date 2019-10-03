function titleCase(str) {
    var result = "";
  
    str.split(" ").forEach(word => {
      result += (word[0].toUpperCase() + word.slice(1).toLowerCase() + " ");
    });
  
    return(result.trim());
  
  }
  
  titleCase("I'm a little tea pot");