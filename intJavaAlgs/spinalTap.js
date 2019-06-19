function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins

  var whtSpce = /\s+|_+/g;

  str = str.replace(/([a-z])([A-Z])/g, '$1 $2');

  return str.replace(whtSpce, '-').toLowerCase();
}

spinalCase('This Is Spinal Tap');
