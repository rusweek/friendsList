window.addEventListener('load', function(e){

    // условие для загрузки из локального хранилища
    if(localStorage.length > 0){
        

        //var tmpRange = document.createRange(); // создаем рэндж
        //tmpRange.selectNodeContents(wrapper); // выбираем содержимое контейнера, если надо и контейнер то selectNode
        //tmpRange.deleteContents(); //Метод deleteContents удаляет всё содержимое объекта Range
        //tmpRange.detach(); // Метод detach извлекает текущий объект из DOM, так что на него больше нельзя сослаться.
        
        
        LocalStForMyApp();
        
    };

    let mainContainer = document.querySelector('.mainContainer');
    let inviteList = document.querySelector('.inviteList');
    let item = document.querySelectorAll('.item');
    let wrapper = document.querySelector('.wrapper');
    let btnClear = document.querySelector('.btnClear');
    let btnAdd = document.querySelector('.btnAdd');

    
    
    
    


    
    
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

    function LocalStForMyApp(){
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