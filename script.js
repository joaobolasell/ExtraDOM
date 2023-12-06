const container = document.querySelector('#container');
const cats = [
    'https://s2-techtudo.glbimg.com/CDCDKUhS0FMmWH6daMavnixT6cg=/0x0:1024x609/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2022/c/u/15eppqSmeTdHkoAKM0Uw/dall-e-2.jpg',
    'https://services.meteored.com/img/article/inteligencia-artificial-aprende-a-reconstruir-imagens-vistas-por-pessoas-ciencia-fotos-1679175318563_768.jpg',
    'https://s2-techtudo.glbimg.com/JsE244mucjKWLYtNgeiDyfVYlJQ=/0x129:1024x952/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2023/7/i/ME2AxRRoygUyFPCDe0jQ/3.png',
    'https://static.vecteezy.com/ti/fotos-gratis/t2/6671766-fantastica-lua-magica-luz-e-agua-barco-com-arvore-papel-de-parede-gratis-foto.jpg',
    'https://s2-g1.glbimg.com/c1tS_axTjV_qDkmMeMs3wYZCgGY=/0x0:5472x3648/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2017/H/v/pTatikTlSIWRuTzd0JwA/j9a6180.jpg',
    'https://fernandoparreiras.files.wordpress.com/2023/02/screenshot-2023-02-08-at-00.32.21.png?w=1092',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVR19l6p0lDGvZMIUg3hR9rmDzRwDKnNm7tw&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ15SgiJcVGW9i69xMWHAfl2hR3F1Ju0GfWYg&usqp=CAU',
    'https://dm0fehhuxv6f6.cloudfront.net/wp-content/uploads/2023/04/30035515/bing-panda-600x600.jpg',
    'https://slp-statics.astockcdn.net/static_assets/staging/23spring/br/homepage/curated-collections/card-2.jpg?width=580',
    'https://t.ctcdn.com.br/JlHwiRHyv0mTD7GfRkIlgO6eQX8=/640x360/smart/i257652.jpeg',
    'https://i.pinimg.com/236x/b0/a2/78/b0a2788cdbe3eb1caaec7f3cf10422b1.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEb9YdsEW-X5Fsd99ydZA5A1fx-b_VArxrB6dzyd2GfQ&s',
    'https://ichef.bbci.co.uk/news/640/cpsprodpb/00e2/live/3518d090-637b-11ee-bf62-3360c46602f9.jpg',
    'https://img.freepik.com/fotos-gratis/papeis-de-parede-e-imagens-do-por-do-sol-na-praia_1340-43042.jpg',
]

function loadImage(){
    const imgWrapper = document.createElement('div');
    imgWrapper.classList.add('img-wrapper');
    const img = document.createElement('img');
    i = Math.floor(Math.random() * cats.length);
    img.src = cats[i];
    img.classList.add('cat');
    imgWrapper.appendChild(img);
    container.appendChild(imgWrapper);
}

window.addEventListener('scroll', () => {
    if ((window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight) {
        loadImage();
    }
})

loadImage();
