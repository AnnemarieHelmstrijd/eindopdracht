var current = -1;
for (var i = 0; i < document.links.length; i++) {
    if (document.links[i].href === document.URL && document.links[i].className == "link") {
        current = i;
        break;
    }
}
if(current != -1)
    document.links[current].id = 'current-page';