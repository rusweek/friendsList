window.addEventListener('load', function(e){
    let mainContainer = document.querySelector('.mainContainer');
    
    
    let inviteList = document.querySelector('.inviteList');
    let item = document.querySelectorAll('.item');
    let btnAdd = document.querySelector('.btnAdd');
    
    let btnClear = document.querySelector('.btnClear');
    let wrapper = document.querySelector('.wrapper');
    let wrapper2 = document.querySelector('.wrapper2');


    // условие для загрузки из локального хранилища
    if(this.localStorage.length>0){
        LocalStForMyApp();
    };
    
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
        
        LocalStForMyApp();
    });

    inviteList.addEventListener('click', function () {
        localStorage.setItem(1, wrapper.innerHTML);
        
        LocalStForMyApp();
    });

    function LocalStForMyApp(){
        if (localStorage.length > 0) {
            for (let i = 0; i < localStorage.length; i++) {
                let key = localStorage.key(i);
                let item = localStorage.getItem(key);
                let item2 = localStorage[key];
                wrapper2.innerHTML = item2;
                
                
            };
        };
    };

});