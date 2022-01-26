const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let str = '';
    let s = '';
    let arr = [];
    let resultArray = [];
  
    for(let i = 0; i < expr.length/10; i++ ){
      str = expr.slice(i*10, i*10+10);
      if(str == '*'.repeat(10)){
        resultArray.push(' ');
        continue;
      }
  
      for(let j = 0; j < str.length/2; j++){
        s = str.slice(j*2, j*2+2);
        if(s == '11'){
          arr.push('-');
        } else if( s == '10'){
          arr.push('.');
        }
      }
      let result = arr.join('');
      resultArray.push(MORSE_TABLE[result]);
      arr = [];
    }
    return resultArray.join('');
}

module.exports = {
    decode
}