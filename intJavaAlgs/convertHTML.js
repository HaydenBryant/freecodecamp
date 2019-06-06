// Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

function convertHTML(str) {

    str = str.split('');

    str.map(element =>{
        if(element === '<'){
            str.join('&lt;');
        } else if(element === '>'){
            str.join('&gt;');
        } else if(element === '&'){
            element.replace(element, '&amp;');
            // str.join(element);
        } else if(element === '"'){
            str.join('&quot;');
        } else if(element === "'"){
            str.join("&apos;");
        }

    });

    str.join('')

    // &colon;&rpar;
    return str;
  }
  
  convertHTML("Dolce & Gabbana");