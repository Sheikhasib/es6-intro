const kobe = 'Nemesis';
const kobita = 'kobita tumi sopno charini';
const meye = `Meye tumi ki dukkho chino`;
const multiLine = 'This is my first line.\n' + 
'this is second line.\n' +
'next line is three';

const newMultiLine =  `This is my first line. 
this is second line.
next line is three.
`;
const friends = ['rahim', 'karim','sagir'];
const count = 5;
const old1 = '<h3 class="friend-name">Friend-5</h3>';
const old2 = `<h3 class="friend-name">Friend-'+ ${count} + '</h3>`;
const new1 = `<h3 class="friend-name">Friend-${friends.length}</h3>`;

const first = 'Sheikh';
const last = 'Rozen';
const fullOLd = 'My name is: ' + first + '' + last;
const fullNew = `my name is: ${first} ${last}. has money ${friends.length * 450} and lives in Jashore`;
console.log(fullNew);
