//console.log('SW: hola mundo');
self.addEventListener('fetch',(event)=>{
    console.log('SW: install');
});
self.addEventListener('fetch',(event)=>{
    if(event.request.url.includes('.css')){
        console.log(event.request.url);

        const resp = new Response(
            'body{
                color:red;
                background-color: #000;
            }',
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