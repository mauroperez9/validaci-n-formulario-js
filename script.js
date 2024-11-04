
// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyCTQDgPmXOz7eRWe67kByGERj7JFwqJdFE",
    authDomain: "datos-formulario-c2600.firebaseapp.com",
    projectId: "datos-formulario-c2600",
    storageBucket: "datos-formulario-c2600.firebasestorage.app",
    messagingSenderId: "648253516264",
    appId: "1:648253516264:web:277b434afee74cfa349c5d",
    measurementId: "G-9YKD4QWZM1"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = firebase.firestore();






document.getElementById('formulario').addEventListener('submit', (event) => {
    event.preventDefault()

    //validar nombre
    let entradaNombre = document.getElementById('name');
    let errorNombre = document.getElementById('nameError');

    if(entradaNombre.value.trim() === ''){
        errorNombre.textContent = 'Por favor, ingrese su nombre'
        errorNombre.classList.add('error-message')
    }else{
        errorNombre.textContent = ''
        errorNombre.classList.remove('error-message')
    };




    //validar correo electronico
    let entradaEmail = document.getElementById('email');
    let errorEmail = document.getElementById('emailError');
    let emailPattern=  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailPattern.test(entradaEmail.value)){
        errorEmail.textContent = 'Por favor, ingrese un mail válido'
        errorEmail.classList.add('error-message')
    }else{
        errorEmail.textContent = ''
        errorEmail.classList.remove('error-message')
    };




    //validar contraseña
    let entradaPassword = document.getElementById('password');
    let errorPassword = document.getElementById('passwordError');
    let passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&#.$($)$-$_])[A-Za-z\d$@$!%*?&#.$($)$-$_]{8,15}$/;

    if(!passwordPattern.test(entradaPassword.value)){
        errorPassword.textContent = 'La contraseña debe tener al menos 8 caracteres, numeros , mayusculas, minusculas y caracteres especailes'
        errorPassword.classList.add('error-message')
    }else{
        errorPassword.textContent = ''
        errorPassword.classList.remove('error-message')
    };




    //si todos son validos, enviar formulario

    if(!errorNombre.textContent && !errorEmail.textContent && !errorPassword.textContent){
        
        
        db.collection("users").add({
            nombre: entradaNombre.value,
            email: entradaEmail.value,
            password: entradaPassword.value
        })
        .then((docRef) => {
           alert('El formulario se ha enviado correctamente', docRef.id)
            document.getElementById('formulario').reset(); 
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });

        
        
    }

})