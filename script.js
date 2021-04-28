let animatedForm = () => {
    const arrows = document.querySelectorAll('.arrow');

arrows.forEach(arrows =>{
     
    arrows.addEventListener('click', () => {
        
        // This will get the input element since it is the element just before the arrow icon in that div
        const input = arrows.previousElementSibling;
     
        // This is going to get the parent of the arrow element
        const parent = arrows.parentElement;

        // This will get the next parent element in the form
        const nextParent = parent.nextElementSibling;

        // Check for validation
     
         if(input.type === "text" && validateUser(input)){
           
           nextSlide(parent, nextParent); 
        } 
         else if(input.type === "email" && validateEmail(input)){
           nextSlide(parent, nextParent); 
        } 
         else if(input.type === "password" && validatePassword(input)){
           nextSlide(parent, nextParent); 
        }
        else{
            parent.style.animation = "shake 0.5s ease"
        } 
        
        // Remove animation

        // note that the animationend below is an event(a special keyword)
        parent.addEventListener('animationend', () =>{
            parent.style.animation = ''
        })
        });
    });
}

/* 
const validateUser = user => (user.value.length < 6) ? (alert('Not enough characters'), error('red'))
                                                     : error('rgb(23, 174, 66)'); */
                    

   
// This is an alternative way to write the above which is pretty longer
// But because we need to return something within the else tatement, we'll use this
const validateUser = user =>{
     const progress = document.getElementById('progress')
   if(user.value.length < 6){
        progress.innerHTML = 'characters not enough';
        progress.style.color = 'red';
        error('red');
    }else{
        error('rgb(23, 174, 66)')
        progress.innerHTML = 'Nice work';
        progress.style.color = 'rgb(23, 174, 66)'
         return true;
    }
} 

const validateEmail = email =>{
   const validation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   if(validation.test(email.value)){
       error('rgb(23, 174, 66)');
       progress.innerHTML = 'Great';
       progress.style.color = 'rgb(23, 174, 66)';
       return true;
       
    }else{
        progress.innerHTML = 'Invalid input, email must include "@" ';
        progress.style.color = 'red';
        error('red')
    }
} 

const validatePassword = password =>{
     const progress = document.getElementById('progress')
   if(password.value.length < 6){
        progress.innerHTML = 'Incorrect password';
        progress.style.color = 'red';
        error('red');
    }else{
        error('rgb(23, 174, 66)')
        progress.innerHTML = 'You have successfully subscribed';
        progress.style.color = 'rgb(23, 174, 66)'
         return true;
    }
}

function nextSlide(parent, nextParent){
    parent.classList.add('inactive');
    parent.classList.remove('active');
    nextParent.classList.add('active');
}

/* const nextSlide = (parent, nextParent) => {
    parent.classList.add('inactive');
    parent.classList.remove('active');
    nextParent.classList.add('active');
} */


const error = color =>{
    document.body.style.backgroundColor = color;
}
    animatedForm();