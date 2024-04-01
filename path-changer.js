location.reload();
console.log("inside path-changer.js...");
var path = location.pathname;
if (path.includes('index.html')) {
    path = '';
}
else if (path.includes('.html')) {
    path = path.substring(0, path.length - 5);
}
// console.log(path);
document.getElementById("unix-style-pathname").innerHTML = 'clef@clefalto.github.io ~' + path + ' $';