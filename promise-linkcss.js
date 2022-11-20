function fetchData(cdn) {
    return new Promise((resolve, reject) => {
        const link = document.createElement('link');
        link.rel = "stylesheet";
        link.href = cdn;

        link.onload = () => { resolve('load ok') }
        link.onerror = () => { resolve(new Error('load Nok')) }

        document.head.append(link)
    })
}

fetchData('./promise-linkcss.css')
    .then((res) => {
        console.log(res);
    }, (res) => {
        console.log(res);

    })
// console.log("fetchData('./promise-linkcss.css')", fetchData('./promise-linkcss.css'))
