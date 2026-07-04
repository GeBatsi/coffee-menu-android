const fs = require('fs');
const p = 'www/index.html';
let s = fs.readFileSync(p, 'utf8');
const decl = "const BASE_URL = 'https://home-coffee-menu.netlify.app';";
const anchor = 'async function loadCoffees()';
if (s.indexOf(decl) < 0 || s.indexOf(anchor) < 0) {
  console.log('HIBA: nem talalom a kod reszleteket!');
} else if (s.indexOf(anchor) < s.indexOf(decl)) {
  s = s.replace(decl, '// (BASE_URL athelyezve a loadCoffees ele)');
  s = s.replace(anchor, decl + '\n        ' + anchor);
  fs.writeFileSync(p, s);
  console.log('JAVITVA');
} else {
  console.log('MAR JO VOLT');
}
