const remote = window.require('electron').remote;
function onClick()
{
    const idInLock=document.getElementById("idInLock");
    const win = remote.getCurrentWindow();
    if(win.isKiosk()){
        //处于非定模式
        win.setKiosk(false);
        idInLock.innerText="进入锁定模式";
    }
    else
    {
        //处于锁定模式
        win.setKiosk(true);
        idInLock.innerText="退出锁定模式";
    }
   
}