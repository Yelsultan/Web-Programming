var daysEl = document.getElementById("days");
var hoursEl = document.getElementById("hours");
var minsEl = document.getElementById("mins");
var secondsEl = document.getElementById("seconds");

var date = document.getElementById("setData");

date.addEventListener("keydown", function (e) {
    document.getElementById("data").innerHTML = date.value;
    if (e.keyCode === 13) {
       
        setInterval(countdown, 1000);
        document.getElementById("d").style.display = "none";
        document.getElementById("o").style.display = "none";
        document.getElementById("n").style.display = "none";
        document.getElementById("e").style.display = "none";
            
        daysEl.style.display = "block";
        hoursEl.style.display = "block";
        minsEl.style.display = "block";
        secondsEl.style.display = "block";
    }

    function countdown(){
        var dateDate = new Date(date.value);
        var currentDate = new Date();
        var totalSeconds = (dateDate - currentDate) / 1000;

        var days = Math.floor(totalSeconds / 3600 / 24);
        var hours = Math.floor(totalSeconds / 3600) % 24;
        var mins = Math.floor(totalSeconds / 60) % 60;
        var seconds = Math.floor(totalSeconds) % 60;

        if(seconds == 0 && mins == 0 && hours == 0 && days == 0){
            document.getElementById("d").style.display = "block";
            document.getElementById("o").style.display = "block";
            document.getElementById("n").style.display = "block";
            document.getElementById("e").style.display = "block";
            
            daysEl.style.display = "none";
            hoursEl.style.display = "none";
            minsEl.style.display = "none";
            secondsEl.style.display = "none";
        } else {
            daysEl.innerHTML = days;
            hoursEl.innerHTML = hours;
            minsEl.innerHTML = mins;
            secondsEl.innerHTML = seconds;
        }
    }
});


var input = document.getElementById("input"), 
    input = document.querySelectorAll('textarea')[0], 
    characters = document.getElementById("chars"), 
    wrd = document.getElementById("word"), 
    sentences = document.getElementById("sentences"), 
    paragraphs = document.getElementById("paragraphs"), 
    readingTime = document.getElementById("rtime"), 
    avgWordsPerMin = 250, 
    keywordsDiv = document.querySelectorAll('.keywords')[0], 
    topKeywords = document.querySelector('#topKeywords');

input.addEventListener('keyup', function () {
    characters.innerHTML = input.value.length;

    var words = input.value.match(/\b[-?(\w+)?]+\b/gi);
    wrd.innerHTML = words.length;

    paragraphs.innerHTML = input.value.replace(/\n$/gm, '').split(/\n/).length;

    sentences.innerHTML = input.value.split(/[.|!|?]+/g).length - 1;

    readingTime.innerHTML = Math.ceil(input.value.match(/\b[-?(\w+)?]+\b/gi).length / avgWordsPerMin);

    var nonStopWords = [];
    var stopWords = ["a", "able", "about", "above", "abst", "accordance", "according", "accordingly", "across", "act", "actually", "added", "adj", "affected", "affecting", "affects", "after", "afterwards", "again", "against", "ah", "all", "almost", "alone", "along", "already", "also", "although", "always", "am", "among", "amongst", "an", "and", "announce", "another", "any", "anybody", "anyhow", "anymore", "anyone", "anything", "anyway", "anyways", "anywhere", "apparently", "approximately", "are", "aren", "arent", "arise", "around", "as", "aside", "ask", "asking", "at", "auth", "available", "away", "awfully", "b", "back", "be", "became", "because", "become", "becomes", "becoming", "been", "before", "beforehand", "begin", "beginning", "beginnings", "begins", "behind", "being", "believe", "below", "beside", "besides", "between", "beyond", "biol", "both", "brief", "briefly", "but", "by", "c", "ca", "came", "can", "cannot", "can't", "cause", "causes", "certain", "certainly", "co", "com", "come", "comes", "contain", "containing", "contains", "could", "couldnt", "d", "date", "did", "didn't", "different", "do", "does", "doesn't", "doing", "done", "don't", "down", "downwards", "due", "during", "e", "each", "ed", "edu", "effect", "eg", "eight", "eighty", "either", "else", "elsewhere", "end", "ending", "enough", "especially", "et", "et-al", "etc", "even", "ever", "every", "everybody", "everyone", "everything", "everywhere", "ex", "except", "f", "far", "few", "ff", "fifth", "first", "five", "fix", "followed", "following", "follows", "for", "former", "formerly", "forth", "found", "four", "from", "further", "furthermore", "g", "gave", "get", "gets", "getting", "give", "given", "gives", "giving", "go", "goes", "gone", "got", "gotten", "h", "had", "happens", "hardly", "has", "hasn't", "have", "haven't", "having", "he", "hed", "hence", "her", "here", "hereafter", "hereby", "herein", "heres", "hereupon", "hers", "herself", "hes", "hi", "hid", "him", "himself", "his", "hither", "home", "how", "howbeit", "however", "hundred", "i", "id", "ie", "if", "i'll", "im", "immediate", "immediately", "importance", "important", "in", "inc", "indeed", "index", "information", "instead", "into", "invention", "inward", "is", "isn't", "it", "itd", "it'll", "its", "itself", "i've", "j", "just", "k", "keep", "keeps", "kept", "kg", "km", "know", "known", "knows", "l", "largely", "last", "lately", "later", "latter", "latterly", "least", "less", "lest", "let", "lets", "like", "liked", "likely", "line", "little", "'ll", "look", "looking", "looks", "ltd", "m", "made", "mainly", "make", "makes", "many", "may", "maybe", "me", "mean", "means", "meantime", "meanwhile", "merely", "mg", "might", "million", "miss", "ml", "more", "moreover", "most", "mostly", "mr", "mrs", "much", "mug", "must", "my", "myself", "n", "na", "name", "namely", "nay", "nd", "near", "nearly", "necessarily", "necessary", "need", "needs", "neither", "never", "nevertheless", "new", "next", "nine", "ninety", "no", "nobody", "non", "none", "nonetheless", "noone", "nor", "normally", "nos", "not", "noted", "nothing", "now", "nowhere", "o", "obtain", "obtained", "obviously", "of", "off", "often", "oh", "ok", "okay", "old", "omitted", "on", "once", "one", "ones", "only", "onto", "or", "ord", "other", "others", "otherwise", "ought", "our", "ours", "ourselves", "out", "outside", "over", "overall", "owing", "own", "p", "page", "pages", "part", "particular", "particularly", "past", "per", "perhaps", "placed", "please", "plus", "poorly", "possible", "possibly", "potentially", "pp", "predominantly", "present", "previously", "primarily", "probably", "promptly", "proud", "provides", "put", "q", "que", "quickly", "quite", "qv", "r", "ran", "rather", "rd", "re", "readily", "really", "recent", "recently", "ref", "refs", "regarding", "regardless", "regards", "related", "relatively", "research", "respectively", "resulted", "resulting", "results", "right", "run", "s", "said", "same", "saw", "say", "saying", "says", "sec", "section", "see", "seeing", "seem", "seemed", "seeming", "seems", "seen", "self", "selves", "sent", "seven", "several", "shall", "she", "shed", "she'll", "shes", "should", "shouldn't", "show", "showed", "shown", "showns", "shows", "significant", "significantly", "similar", "similarly", "since", "six", "slightly", "so", "some", "somebody", "somehow", "someone", "somethan", "something", "sometime", "sometimes", "somewhat", "somewhere", "soon", "sorry", "specifically", "specified", "specify", "specifying", "still", "stop", "strongly", "sub", "substantially", "successfully", "such", "sufficiently", "suggest", "sup", "sure", "t", "take", "taken", "taking", "tell", "tends", "th", "than", "thank", "thanks", "thanx", "that", "that'll", "thats", "that've", "the", "their", "theirs", "them", "themselves", "then", "thence", "there", "thereafter", "thereby", "thered", "therefore", "therein", "there'll", "thereof", "therere", "theres", "thereto", "thereupon", "there've", "these", "they", "theyd", "they'll", "theyre", "they've", "think", "this", "those", "thou", "though", "thoughh", "thousand", "throug", "through", "throughout", "thru", "thus", "til", "tip", "to", "together", "too", "took", "toward", "towards", "tried", "tries", "truly", "try", "trying", "ts", "twice", "two", "u", "un", "under", "unfortunately", "unless", "unlike", "unlikely", "until", "unto", "up", "upon", "ups", "us", "use", "used", "useful", "usefully", "usefulness", "uses", "using", "usually", "v", "value", "various", "'ve", "very", "via", "viz", "vol", "vols", "vs", "w", "want", "wants", "was", "wasn't", "way", "we", "wed", "welcome", "we'll", "went", "were", "weren't", "we've", "what", "whatever", "what'll", "whats", "when", "whence", "whenever", "where", "whereafter", "whereas", "whereby", "wherein", "wheres", "whereupon", "wherever", "whether", "which", "while", "whim", "whither", "who", "whod", "whoever", "whole", "who'll", "whom", "whomever", "whos", "whose", "why", "widely", "willing", "wish", "with", "within", "without", "won't", "words", "world", "would", "wouldn't", "www", "x", "y", "yes", "yet", "you", "youd", "you'll", "your", "youre", "yours", "yourself", "yourselves", "you've", "z", "zero"];
    for (var i = 0; i < words.length; i++) {
        if (stopWords.indexOf(words[i].toLowerCase()) === -1 && isNaN(words[i])) {
            nonStopWords.push(words[i].toLowerCase());
        }
    }
    var keywords = {};
    for (var i = 0; i < nonStopWords.length; i++) {
        if (nonStopWords[i] in keywords) {
            keywords[nonStopWords[i]] += 1;
        } else {
            keywords[nonStopWords[i]] = 1;
        }
    }

    var sortedKeywords = [];
    for (var keyword in keywords) {
        sortedKeywords.push([keyword, keywords[keyword]])
    }
    sortedKeywords.sort(function (a, b) {
        return b[1] - a[1]
    });

    topKeywords.innerHTML = "";
    for (var i = 0; i < sortedKeywords.length && i < 4; i++) {
        var li = document.createElement('li');
        li.innerHTML = "<b>" + sortedKeywords[i][0] + "</b>: " + sortedKeywords[i][1];
        topKeywords.appendChild(li);
    }
});