function htmlspecialchars_decode(string, quote_style) {
    // http://kevin.vanzonneveld.net
    // +   original by: Mirek Slugen
    // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   bugfixed by: Mateusz "loonquawl" Zalega
    // +      input by: ReverseSyntax
    // +      input by: Slawomir Kaniecki
    // +      input by: Scott Cariss
    // +      input by: Francois
    // +   bugfixed by: Onno Marsman
    // *     example 1: htmlspecialchars_decode("<p>this -&gt; &quot;</p>", 'ENT_NOQUOTES');
    // *     returns 1: '<p>this -> &quot;</p>'
    
    string = string.toString();
    
    // Always encode
    string = string.replace(/&amp;/g, '&');
    string = string.replace(/&lt;/g, '<');
    string = string.replace(/&gt;/g, '>');
    
    // Encode depending on quote_style
    if (quote_style == 'ENT_QUOTES') {
        string = string.replace(/&quot;/g, '"');
        string = string.replace(/&#039;/g, '\'');
    } else if (quote_style != 'ENT_NOQUOTES') {
        // All other cases (ENT_COMPAT, default, but not ENT_NOQUOTES)
        string = string.replace(/&quot;/g, '"');
    }
    
    return string;
}