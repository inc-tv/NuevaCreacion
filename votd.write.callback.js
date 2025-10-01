(function() {

/* Keep everything in BG variable
    augment existing variable if it exists.
*/
if ( !window.BG || typeof window.BG !== 'object') {
    window.BG = {};
}
var BG = window.BG;

BG.votdWriteCallback = function(json) {
    var votd = json.votd;
    document.write('<div>' + votd.text);
    document.write(' -<a href="' + votd.permalink +'">' + votd.display_ref + '</a>');
    if (votd.audiolink) {
      document.write(' <a href="' + votd.audiolink + '" title="Listen to chapter"><img alt="Listen to chapter" src="//www.biblegateway.com/assets/images/audio/sound.gif" border=0/></a>');
    }
    document.write(' <a href="' + votd.copyrightlink + '">' + votd.copyright + '</a>');
    document.write('<br/><br/>Powered by <a href="https://www.biblegateway.com/">BibleGateway.com</a>');
    document.write('</div>');
};

window.BG = BG;


})();
