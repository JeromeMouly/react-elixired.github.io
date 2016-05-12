window.onload = function() {
    var converter = new showdown.Converter();
    var pad = document.getElementById('pad');
    var markdownArea = document.getElementById('markdown');   

    var convertTextAreaToMarkdown = function(){
        var markdownText = pad.value;
        html = converter.makeHtml(markdownText);
        markdownArea.innerHTML = html;
    };

    pad.addEventListener('input', convertTextAreaToMarkdown);

    convertTextAreaToMarkdown();
};


// LocalStorage
/*localStorage.setItem('pad', pad);
var markd = localStorage.getItem('pad');

console.log(markd);*/

/*setInterval(function changetext(){
    var d = convertTextAreaToMarkdownbbb.getValue();
    document.getElementById(markdown).innerHTML = marked(d);
    sessionStorage.setItem("pad",d);
});*/