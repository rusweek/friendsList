window.addEventListener('load', function(e){
    let mainContainer = document.querySelector('.mainContainer');
    
    let inviteList = document.querySelector('.inviteList');
    let item = document.querySelectorAll('.item');
    let btnAdd = document.querySelector('.btnAdd');
    
    let btnClear = document.querySelector('.btnClear');
    let wrapper = document.querySelector('.wrapper');
    
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

});