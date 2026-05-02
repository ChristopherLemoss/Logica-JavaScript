function zeroLeft (num) {
    return num >= 10 ? num: `0${num}`;
}

function formatoData(data) {
    const dia = zeroLeft(data.getDate())
    const mes = zeroLeft(data.getMonth() + 1);
    const ano = zeroLeft(data.getFullYear());
    const hora = zeroLeft(data.getHours());
    const min = zeroLeft(data.getMinutes());
    const seg = zeroLeft(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`
}

const data  = new Date();
const dataBrasil = formatoData(data);
console.log(dataBrasil);