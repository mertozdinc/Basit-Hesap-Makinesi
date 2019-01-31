const bir = document.getElementById('1')
const iki = document.getElementById('2')
const uc = document.getElementById('3')
const dort = document.getElementById('4')
const bes = document.getElementById('5')
const alti = document.getElementById('6')
const yedi = document.getElementById('7')
const sekiz = document.getElementById('8')
const dokuz = document.getElementById('9')
const sifir = document.getElementById('0')
const arti = document.getElementById('+')
const eksi = document.getElementById('-')
const carpi = document.getElementById('x')
const bolu = document.getElementById('/')
const hesapla = document.getElementById('calculate')
const islemtablosu = document.getElementById('islemui')

let birincieleman = "";
let islemisareti = "";
let ikincieleman = "";
let birinciekleme = false;
let ikinciekleme = false;
let birincilocked = false;


function addEventListeners(){
  bir.addEventListener('click',() => {
    if (birincilocked == false) {
      if (birinciekleme == false) {
        birincieleman = "1"
        islemui.innerHTML += birincieleman
        birinciekleme = true;
      }else {
        birincieleman = "1"
        islemui.innerHTML += birincieleman
      }
    }else{
      if (ikinciekleme == false) {
        ikincieleman = "1"
        islemui.innerHTML += ikincieleman
        ikinciekleme = true;
      }else {
        ikincieleman = "1"
        islemui.innerHTML += ikincieleman
      }
    }

  })
  iki.addEventListener('click',() => {
    if (birincilocked == false) {
      if (birinciekleme == false) {
        birincieleman = "2"
        islemui.innerHTML += birincieleman
        birinciekleme = true;
      }else {
        birincieleman = "2"
        islemui.innerHTML += birincieleman
      }
    }else{
      if (ikinciekleme == false) {
        ikincieleman = "2"
        islemui.innerHTML += ikincieleman
        ikinciekleme = true;
      }else {
        ikincieleman = "2"
        islemui.innerHTML += ikincieleman
      }
    }
  })
  uc.addEventListener('click',() => {
    if (birincilocked == false) {
      if (birinciekleme == false) {
        birincieleman = "3"
        islemui.innerHTML += birincieleman
        birinciekleme = true;
      }else {
        birincieleman = "3"
        islemui.innerHTML += birincieleman
      }
    }else{
      if (ikinciekleme == false) {
        ikincieleman = "3"
        islemui.innerHTML += ikincieleman
        ikinciekleme = true;
      }else {
        ikincieleman = "3"
        islemui.innerHTML += ikincieleman
      }
    }
  })
  dort.addEventListener('click',() => {
    if (birincilocked == false) {
      if (birinciekleme == false) {
        birincieleman = "4"
        islemui.innerHTML += birincieleman
        birinciekleme = true;
      }else {
        birincieleman = "4"
        islemui.innerHTML += birincieleman
      }
    }else{
      if (ikinciekleme == false) {
        ikincieleman = "4"
        islemui.innerHTML += ikincieleman
        ikinciekleme = true;
      }else {
        ikincieleman = "4"
        islemui.innerHTML += ikincieleman
      }
    }
  })
  bes.addEventListener('click',() => {
    if (birincilocked == false) {
      if (birinciekleme == false) {
        birincieleman = "5"
        islemui.innerHTML += birincieleman
        birinciekleme = true;
      }else {
        birincieleman = "5"
        islemui.innerHTML += birincieleman
      }
    }else{
      if (ikinciekleme == false) {
        ikincieleman = "5"
        islemui.innerHTML += ikincieleman
        ikinciekleme = true;
      }else {
        ikincieleman = "5"
        islemui.innerHTML += ikincieleman
      }
    }
  })
  alti.addEventListener('click',() => {
    if (birincilocked == false) {
      if (birinciekleme == false) {
        birincieleman = "6"
        islemui.innerHTML += birincieleman
        birinciekleme = true;
      }else {
        birincieleman = "6"
        islemui.innerHTML += birincieleman
      }
    }else{
      if (ikinciekleme == false) {
        ikincieleman = "6"
        islemui.innerHTML += ikincieleman
        ikinciekleme = true;
      }else {
        ikincieleman = "6"
        islemui.innerHTML += ikincieleman
      }
    }
  })
  yedi.addEventListener('click',() => {
    if (birincilocked == false) {
      if (birinciekleme == false) {
        birincieleman = "7"
        islemui.innerHTML += birincieleman
        birinciekleme = true;
      }else {
        birincieleman = "7"
        islemui.innerHTML += birincieleman
      }
    }else{
      if (ikinciekleme == false) {
        ikincieleman = "7"
        islemui.innerHTML += ikincieleman
        ikinciekleme = true;
      }else {
        ikincieleman = "7"
        islemui.innerHTML += ikincieleman
      }
    }
  })
  sekiz.addEventListener('click',() => {
    if (birincilocked == false) {
      if (birinciekleme == false) {
        birincieleman = "8"
        islemui.innerHTML += birincieleman
        birinciekleme = true;
      }else {
        birincieleman = "8"
        islemui.innerHTML += birincieleman
      }
    }else{
      if (ikinciekleme == false) {
        ikincieleman = "8"
        islemui.innerHTML += ikincieleman
        ikinciekleme = true;
      }else {
        ikincieleman = "8"
        islemui.innerHTML += ikincieleman
      }
    }
  })
  dokuz.addEventListener('click',() => {
    if (birincilocked == false) {
      if (birinciekleme == false) {
        birincieleman = "9"
        islemui.innerHTML += birincieleman
        birinciekleme = true;
      }else {
        birincieleman = "9"
        islemui.innerHTML += birincieleman
      }
    }else{
      if (ikinciekleme == false) {
        ikincieleman = "9"
        islemui.innerHTML += ikincieleman
        ikinciekleme = true;
      }else {
        ikincieleman = "9"
        islemui.innerHTML += ikincieleman
      }
    }
  })
  sifir.addEventListener('click',() => {
    if (birincilocked == false) {
      if (birinciekleme == false) {
        birincieleman = "0"
        islemui.innerHTML += birincieleman
        birinciekleme = true;
      }else {
        birincieleman = "0"
        islemui.innerHTML += birincieleman
      }
    }else{
      if (ikinciekleme == false) {
        ikincieleman = "0"
        islemui.innerHTML += ikincieleman
        ikinciekleme = true;
      }else {
        ikincieleman = "0"
        islemui.innerHTML += ikincieleman
      }
    }
  })
  arti.addEventListener('click', () => {
    islemisareti = "+"
    if (birincilocked == false){
      islemui.innerHTML += islemisareti
      birincilocked = true;
    }
  })
  eksi.addEventListener('click',() => {
    islemisareti = "-"
    if (birincilocked == false){
      islemui.innerHTML += islemisareti
      birincilocked = true;
    }
  })
  carpi.addEventListener('click', () => {
    islemisareti = "x"
    if (birincilocked == false) {
      islemui.innerHTML += islemisareti
      birincilocked = true;
    }
  })
  bolu.addEventListener('click', () => {
    islemisareti = "/"
    if (birincilocked == false) {
      islemui.innerHTML += islemisareti
      birincilocked = true;
    }
  })

  hesapla.addEventListener('click', () => {
    let islemhesabi = islemui.textContent
    let islemsayilari = islemhesabi.split(islemisareti)
    let islemicin = []
    let sonuc = 0;
    islemsayilari.forEach((sayi) => {
      sayi = Number(sayi)
      islemicin.push(sayi)
    })
    if (islemisareti == "+") {
      sonuc = islemicin[0] + islemicin[1]
    }else if (islemisareti == "-") {
      sonuc = islemicin[0] - islemicin[1]
    }else if (islemisareti == "x") {
      sonuc = islemicin[0] * islemicin[1]
    }else {
      sonuc = islemicin[0] / islemicin[1]
    }
    islemtablosu.innerHTML = sonuc
  })
}

addEventListeners();
