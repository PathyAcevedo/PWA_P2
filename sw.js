const IMAGES [
    'images/img2.jpg'
];

const EXTENSION = /\.(jpg|jpeg|png|gif|webp)$/gi;

self.addEventListener('fetch',(event)=>{
    console.log('SW: install');
});

self.addEventListener('fetch',(event)=>{
    if(event.request.url.includes('.css')){
        console.log(event.request.url);

        const resp = new Response(
            ´body{
                color:#fff;
                background-color: darkred;
            }´,
            {
                headers:{
                    'Content-Type':'text/css',
                },
            }
        );
        event.respondWith(resp);

        /*event.respondWith(
            fetch('images/img2.jpg'));*/
    }
    /*event.respondWith(
        fetch(event.request));*/
});