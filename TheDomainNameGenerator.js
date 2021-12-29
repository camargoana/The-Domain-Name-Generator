var line;
var pronoun = ['the','our'];
var adj = ['great', 'big' ];
var noun = ['jogger','racoon'];
var ext = ['.com','.net','.us','.io','.com.ve'];

// Ejemplos Espanol: https://es.wikipedia.org/wiki/Domain_hack
// Ejemplos Ingles: https://en.wikipedia.org/wiki/Domain_hack
var hacks = ['.rome.ro','.delicio.us','.notici.as','.inter.net'
    ,'.pued.es','.juguet.es','.vacacion.es','.spoti.fi'
    ,'.taekwon.do','.flic.kr','.itun.es','.goo.gl','.youtu.be'
];

for (var i = 0; i < pronoun.length; i = i+1) {
    for (var j = 0; j < adj.length; j = j+1) {
        for (var k = 0; k < noun.length; k = k+1) {
            for (var l = 0; l < ext.length; l = l+1) {
                line = pronoun[i]+adj[j]+noun[k]+ext[l];
                console.log(line);
            }
        }
        for (var k = 0; k < hacks.length; k = k+1) {
            line = pronoun[i]+adj[j]+hacks[k];
            console.log(line);
        }
    }
}
