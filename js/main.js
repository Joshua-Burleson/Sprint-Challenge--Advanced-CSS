document.getElementsByClassName("submit")[0].addEventListener("click", function(event){
    event.preventDefault();
  });

const rocket = () => {
    
    let params = ['animation-name: takeOff', 'animation-delay: 0s', 'animation-duration: 3s',' animation-iteration-count: infinite'];

    let animationParameters = {};

    params.forEach(str => {
        let param = str.split(':');
        animationParameters[param[0]] = param[1].trim();
    });

    
    let form = document.getElementsByTagName('form')[0];

    let formContents = form.childNodes;

    formContents[1].style.visibility = 'hidden';

    Object.keys(animationParameters).forEach(param => {
        form.style[param] = animationParameters[param];
    });

    setTimeout(() => {
        form.style.visibility = 'hidden';
        document.getElementsByTagName('h2')[0].innerText = 'Thank You!';
    }, 1500);

    setTimeout(() => {
        window.location ='/';
    }, 2000);


}