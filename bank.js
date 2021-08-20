
document.getElementById('submit-button').addEventListener('click', function(){
     const eamilFeild = document.getElementById('enter-email');
     const userEmail = eamilFeild.value;
    //   pass 

    const passwordFeild = document.getElementById('enter-password');
    const enterPassword = passwordFeild.value;
    
    if ( userEmail == 'sontan@gamil.com' && enterPassword == 'joy' ){
         window.location.href = 'banking.html';
    }
});




