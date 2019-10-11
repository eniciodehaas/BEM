const verwerkScrollEvent = () => {
    let scrollWaarde = this.pageYOffset;
    console.log(scrollWaarde);

    changeProgress(scrollWaarde);
}

window.addEventListener('scroll', verwerkScrollEvent);
const documentHeight = document.body.offsetHeight;
const viewportHeight = window.innerHeight;
console.log(documentHeight);


// change progress
const changeProgress = (value) => {
    let progress = value * 100 / (documentHeight - viewportHeight);
    document.getElementById('progressBar').style.width = progress + '%';
}