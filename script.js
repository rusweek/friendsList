window.addEventListener('load', function(e){
    let mainContainer = document.querySelector('.mainContainer');
    
    let inviteList = document.querySelector('.inviteList');
    let item = document.querySelectorAll('.item');
    let btnAdd = document.querySelector('.btnAdd');
    
    let btnClear = document.querySelector('.btnClear');
    let wrapper = document.querySelector('.wrapper');
    
    
    mainContainer.addEventListener('click', function (e) {
        let targetQ = e.target.parentNode;
        
        
        
        if (targetQ.getAttribute('class') === 'item') {
            console.log(targetQ);
            //var dupNode = targetQ.cloneNode(true);
            //inviteList.appendChild(dupNode);
            inviteList.appendChild(targetQ);
            
        }
    });
});