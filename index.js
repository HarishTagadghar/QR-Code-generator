window.addEventListener('load',function(){
    let text  = this.document.querySelector('#text');
let enter = this.document.querySelector('#enter');
let img = this.document.querySelector('.img');
let poster = this.document.querySelector('.vr');
enter.addEventListener('click',function(){
    let baseurl = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data='
    img.src = `${baseurl}${text.value}`
    text.value = ''
    let pagaraph = document.createElement('p')
    pagaraph.classList.add('successfully')
    pagaraph.innerText = `you have successfully created your QR code`
    poster.appendChild(pagaraph)
})
})