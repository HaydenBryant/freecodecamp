// Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

function convertHTML(str) {

    str = str.split('');

    for (var i = 0; i < str.length; i++) {

        if (str[i] === '<') {
            str[i] = '&lt;';
        } else if (str[i] === '>') {
            str[i] = '&gt;';
        } else if (str[i] === '&') {
            str[i] = '&amp;';
            // str.join(element);
        } else if (str[i] === '"') {
            str[i] = '&quot;';
        } else if (str[i] === "'") {
            str[i] = '&apos;';
        }

    };

    str = str.join('');

    // &colon;&rpar;
    return str;
}

convertHTML("Dolce & Gabbana");