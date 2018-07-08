window.addEventListener('load', function(e){

    // условие для загрузки из локального хранилища
    if(localStorage.length > 0){
        
        LocalStForMyApp();
        
    };

    let mainContainer = document.querySelector('.mainContainer');
    let inviteList = document.querySelector('.inviteList');
    let item = document.querySelectorAll('.item');
    let wrapper = document.querySelector('.wrapper');
    let btnClear = document.querySelector('.btnClear');
    let btnAdd = document.querySelector('.btnAdd');
    let kill = document.querySelector('#kill');
    
    //модуль для перемещения item из  mainContainer в inviteList
    mainContainer.addEventListener('click', function (e) { 
        let targetQ = e.target.parentNode;
        
        
        
        if (targetQ.getAttribute('class') === 'item') {
            
            //модуль для замены кнопки на зеленую
            let dupNode = btnClear.cloneNode(true)
            let remBtnAdd = targetQ.lastElementChild;
            remBtnAdd.remove();
            targetQ.appendChild(dupNode);
            /////////////////////////////////////////
           
            inviteList.appendChild(targetQ);

            
        }
    });
    //конец модуля для перемещения item из  mainContainer в inviteList

    //модуль для перемещения item из    inviteList в mainContainer
    inviteList.addEventListener('click', function (e) { 
        let targetQ = e.target.parentNode;
        

        if (targetQ.getAttribute('class') === 'item') {
            
            //модуль для замены кнопки на красную
            let dupNode = btnAdd.cloneNode(true)
            let remBtnAdd = targetQ.lastElementChild;
            remBtnAdd.remove();
            targetQ.appendChild(dupNode);
            /////////////////////////////////////

            mainContainer.appendChild(targetQ);

            
        }
    });
    //конец модуля для перемещения item из    inviteList в mainContainer
    
    // мидуль для внесения изменений в локальное хранилице

    mainContainer.addEventListener('click', function () {
        localStorage.setItem(1, wrapper.innerHTML);
        
        
    });

    inviteList.addEventListener('click', function () {
        localStorage.setItem(1, wrapper.innerHTML);
        
        
    });

    kill.addEventListener('click', function (e) {
        localStorage.clear();
        window.location.reload();
    })

    function LocalStForMyApp(){//функция для загрузки страницы из локального хранилища
        if (localStorage.length > 0) {
            for (let i = 0; i < localStorage.length; i++) {
                let key = localStorage.key(i);
                let item = localStorage.getItem(key);
                let item2 = localStorage[key];
                let wrapper = document.querySelector('.wrapper');
                wrapper.innerHTML = item2;
                
                
            };
        };
    };

});