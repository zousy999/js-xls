// TODO: CP remap (need to read file version to determine OS)
function unescapexml(text){
	var s = text + '';
	for(var y in encodings) s = s.replace(new RegExp(y,'g'), encodings[y]);
	return s.replace(/_x([0-9a-fA-F]*)_/g,function(m,c) {return _chr(parseInt(c,16));});
}
/*
function escapexml(text){
	var s = text + '';
	rencstr.forEach(function(y){s=s.replace(new RegExp(y,'g'), rencoding[y]);});
	return s;
}
*/

function parsexmlbool(value, tag) {
	switch(value) {
		case '0': case 0: case 'false': case 'FALSE': return false;
		case '1': case 1: case 'true': case 'TRUE': return true;
		default: throw "bad boolean value " + value + " in "+(tag||"?");
	}
}

/*
var utf8read = function(orig) {
	var out = [], i = 0, c = 0, c1 = 0, c2 = 0, c3 = 0;
	while (i < orig.length) {
		c = orig.charCodeAt(i++);
		if (c < 128) out.push(_chr(c));
		else {
			c2 = orig.charCodeAt(i++);
			if (c>191 && c<224) out.push(_chr((c & 31) << 6 | c2 & 63));
			else {
				c3 = orig.charCodeAt(i++);
				out.push(_chr((c & 15) << 12 | (c2 & 63) << 6 | c3 & 63));
			}
		}
	}
	return out.join("");
};
*/

// matches <foo>...</foo> extracts content
function matchtag(f,g) {return new RegExp('<'+f+'(?: xml:space="preserve")?>([^\u2603]*)</'+f+'>',(g||"")+"m");}

/* TODO: handle codepages */
function fixstr(str) {
	str = str.replace(/&#([0-9]+);/g,function($$,$1) { return String.fromCharCode($1); });
	return (typeof cptable === "undefined") ? str : str;
}