var pronoun = ['the','our'];
var adj = ['great', 'big' ];
var noun = ['jogger','racoon'];
var line;

for (var i = 0; i < pronoun.length; i++) {
    for (var j = 0; j < adj.length; j++) {
        for (var k = 0; k < noun.length; k++) {
            line = pronoun[i]+adj[j]+noun[k]+".com";
            console.log(line);
        }
    }
}

for (var i = 0; i < pronoun.length; i++) {
    for (var j = 0; j < adj.length; j++) {
        for (var k = 0; k < noun.length; k++) {
            line = pronoun[i]+adj[j]+noun[k]+".us";
            console.log(line);
        }
    }
}

for (var i = 0; i < pronoun.length; i++) {
    for (var j = 0; j < adj.length; j++) {
        for (var k = 0; k < noun.length; k++) {
            line = pronoun[i]+adj[j]+noun[k]+".net";
            console.log(line);
        }
    }
}

for (var i = 0; i < pronoun.length; i++) {
    for (var j = 0; j < adj.length; j++) {
        for (var k = 0; k < noun.length; k++) {
            line = pronoun[i]+adj[j]+noun[k]+".pued.es";
            console.log(line);
        }
    }
}
