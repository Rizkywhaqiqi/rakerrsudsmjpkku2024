let shareData = {
title: 'Twibbon Generator',
text: 'Kalau mau lucu, panggil aja badut!',
url: 'https://badut.netlify.app/',
}

const btn = document.querySelector('em');
const resultPara = document.querySelector('.result');

btn.addEventListener('click', () => {
navigator.share(shareData)
.then(() =>
resultPara.textContent = 'Twibbon berhasil dibagikan.'
)
.catch((e) =>
resultPara.textContent = 'Error: ' + e
)
});
