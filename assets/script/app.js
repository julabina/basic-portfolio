const modal = document.querySelector('.modalCarrou');
const screenSocial = ['social/1.webp', 'social/2.webp', 'social/3.webp', 'social/4.webp', 'social/5.webp'];
const screenAssoBack = ['asso-back/1.webp', 'asso-back/2.webp', 'asso-back/3.webp', 'asso-back/4.webp', 'asso-back/5.webp', 'asso-back/6.webp', 'asso-back/7.webp'];
const screenForum = ['forum/1.webp', 'forum/2.webp', 'forum/3.webp', 'forum/4.webp', 'forum/5.webp'];
const screenWeight = ['weight/1.webp', 'weight/2.webp', 'weight/3.webp', 'weight/4.webp', 'weight/5.webp', 'weight/6.webp', 'weight/7.webp'];
const screenOptic = ['optic/1.webp', 'optic/2.webp', 'optic/3.webp', 'optic/4.webp', 'optic/5.webp', 'optic/6.webp', 'optic/7.webp', 'optic/8.webp', 'optic/9.webp', 'optic/10.webp'];
const screenRentable = ['rentable/1.webp', 'rentable/2.webp'];
let imgArr = [];

const openModal = (project) => {
    const modalContainer = document.querySelector('.modalCarrou__modal__cont');
    modalContainer.innerHTML = "";
    modal.classList.remove('modalCarrou--hidden');
    
    if (project === "social") {
        imgArr = screenSocial;
    } else if(project === "asso-back") {
        imgArr = screenAssoBack;
    } else if(project === "forum") {
        imgArr = screenForum;
    } else if(project === "weight") {
        imgArr = screenWeight;
    } else if(project === "optic") {
        imgArr = screenOptic;
    } else if(project === "rentable") {
        imgArr = screenRentable;
    }
    
    for (let i = 0; i < imgArr.length; i++) {
        let div = document.createElement('div');
        let img = document.createElement('img');
        if (i === 0) {
            div.className = 'modalCarrou__modal__cont__imgCont';
        } else {
            div.className = 'modalCarrou__modal__cont__imgCont modalCarrou__modal__cont__imgCont--hidden';
        }
        img.src = 'assets/images/screenshot/' + imgArr[i];
        div.appendChild(img);
        modalContainer.appendChild(div);
    }
};

const prev = () => {
    const carrArr = document.querySelectorAll('.modalCarrou__modal__cont__imgCont');
    
    for (let i = 0; i < carrArr.length; i++) {
        if (!carrArr[i].classList.contains('modalCarrou__modal__cont__imgCont--hidden')) {
            const prevImg = i - 1;
            const lastImg = carrArr.length - 1;
            carrArr[i].classList.add('modalCarrou__modal__cont__imgCont--hidden');
            if (i  === 0) {
                carrArr[lastImg].classList.remove('modalCarrou__modal__cont__imgCont--hidden');
            } else {
                carrArr[prevImg].classList.remove('modalCarrou__modal__cont__imgCont--hidden');
            }
            break;
        }   
    }
};

const next = () => {
    const carrArr = document.querySelectorAll('.modalCarrou__modal__cont__imgCont');

    for (let i = 0; i < carrArr.length; i++) {
        if (!carrArr[i].classList.contains('modalCarrou__modal__cont__imgCont--hidden')) {
            const nextImg = i + 1;
            carrArr[i].classList.add('modalCarrou__modal__cont__imgCont--hidden');
            if (i + 1 === carrArr.length) {
                carrArr[0].classList.remove('modalCarrou__modal__cont__imgCont--hidden');
            } else {
                carrArr[nextImg].classList.remove('modalCarrou__modal__cont__imgCont--hidden');
            }
            break;
        }   
    }
};

const closeModal = () => {
    modal.classList.add('modalCarrou--hidden');
};