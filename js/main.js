var quoteImage = document.getElementById('quoteImage');
var quoteText = document.getElementById('quoteText');
var quoteAuthor = document.getElementById('quoteAuthor');
var quoterPosition = document.getElementById('quoterPosition');
var lastIndex = -1
var currentLang = 'en';

var imagesListEn = [
    "images/mohammed-ali.jpg",       
    "images/steve-jobs.webp",        
    "images/nelson-mandela.jpg",
    "images/bernard-m-baruch.webp"     
];

var quotesEn = [
    "What you’re thinking is what you’re becoming.",
    "The people who are crazy enough to think they can change the world are the ones who do.",
    "It always seems impossible until it's done.",
    "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind."
];

var authorsEn = [
    "Muhammad Ali",
    "Steve Jobs",
    "Nelson Mandela",
    "Bernard M. Baruch"
];

var positionsEn = [
    "World Heavyweight Boxing Champion",
    "Co-founder of Apple Inc.",
    "Anti-Apartheid Revolutionary & Former President of South Africa",
    "American Financier & Presidential Advisor"
];

var imagesListAr = [
    "images/ali.jpg",                 
    "images/salahuddin.jpg",          
    "images/Prophet-Muhammad.jpeg",   
    "images/omar-ibn-elkhattab.jpg",  
    "images/ibn-sina.jpg",            
    "images/al-khwarizmi.webp"         
];

var quotesAr = [
    "من كان له ألف صديق ليس له صديق، ومن كان له عدو واحد سيجده في كل مكان.",
    "كيف أبتسم والأقصى أسير؟",
    "أقواكم من يملك نفسه عند الغضب.",
    "إذا كان الشغل مجهدة فإن الفراغ مفسدة.",
    "العقل زينة.",
    "الرياضيات هي لغة الكون."
];

var authorsAr = [
    "الإمام علي بن أبي طالب",
    "صلاح الدين الأيوبي",
    "النبي محمد ﷺ",
    "عمر بن الخطاب",
    "ابن سينا",
    "الخوارزمي"
];

var positionsAr = [
    "رابع الخلفاء الراشدين",
    "قائد مسلم ومحرر القدس",
    "خاتم الأنبياء والمرسلين",
    "ثاني الخلفاء الراشدين",
    "طبيب وفيلسوف مسلم",
    "عالم رياضيات وفلك مسلم"
]




function generateQuote() {
    document.getElementById('hiddenContent').style.display = 'block';

    var randomIndex;
    var quotesLength;

    if (currentLang === 'ar') {
        quotesLength = quotesAr.length;
    } else {
        quotesLength = quotesEn.length;
    }

    do {
        randomIndex = Math.floor(Math.random() * quotesLength);
    } while (randomIndex === lastIndex);

    lastIndex = randomIndex;

    if (currentLang === 'ar') {
        quoteText.innerHTML = `<span class="double-quotes">”</span>${quotesAr[randomIndex]}<span class="double-quotes">“</span>`;
        quoteAuthor.innerHTML = authorsAr[randomIndex];
        quoterPosition.innerHTML = positionsAr[randomIndex];
        quoteImage.src = imagesListAr[randomIndex];
    } else {
        quoteText.innerHTML = `<span class="double-quotes">“</span>${quotesEn[randomIndex]}<span class="double-quotes">”</span>`;
        quoteAuthor.innerHTML = authorsEn[randomIndex];
        quoterPosition.innerHTML = positionsEn[randomIndex];
        quoteImage.src = imagesListEn[randomIndex];
    }
}

function setLanguage(lang) {
    currentLang = lang;
    if (lang === 'ar') {
        document.body.dir = "rtl";
        document.body.style.fontFamily = "sans-serif";
    } else {
        document.body.dir = "ltr";
        document.body.style.fontFamily = "sans-serif";
    }

    if (lastIndex !== -1) {
        if (currentLang === 'ar') {
            quoteText.innerHTML = `<span class="double-quotes">”</span>${quotesAr[lastIndex]}<span class="double-quotes">“</span>`;
            quoteAuthor.innerHTML = authorsAr[lastIndex];
            quoterPosition.innerHTML = positionsAr[lastIndex];
            quoteImage.src = imagesListAr[lastIndex];

        } else {
            quoteText.innerHTML = `<span class="double-quotes">“</span>${quotesEn[lastIndex]}<span class="double-quotes">”</span>`;
            quoteAuthor.innerHTML = authorsEn[lastIndex];
            quoterPosition.innerHTML = positionsEn[lastIndex];
            quoteImage.src = imagesListEn[lastIndex];

        }

    }
}
