loadText();

function loadText() {
    allData[0].map(function(e, i, a) {
        headers[i].innerText = e;
    })
    allData[1].map(function(e, i, a) {
        subHeaders[i].innerText = e;
    })
    allData[2].map(function(e, i, a) {
        paras[i].innerText = e;
    })
    allData[3].map(function(e, i, a) {
        emph[i].innerText = e;
    })
}

function toggleUp() {
    $(this).slideUp();
    $(this)[0].nextElementSibling.innerText = "Read more...";
    saveData();
}

function learnMore(x) {
    let prev = x.previousElementSibling;
    $(prev).slideToggle();
    x.innerText = prev.offsetHeight < 3 ? x.dataset['label2'] : x.dataset['label1'];
    prev.offsetHeight < 3 ? prev.focus() : {};
}