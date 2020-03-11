
    let text  = this.document.querySelector('#text');
    let enter = this.document.querySelector('#enter');
    let img = this.document.querySelector('.img');
    enter.addEventListener('click',function(){
        let baseurl = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=';
        let url = `${baseurl}${text.value}`
        img.src = url
        
    })
