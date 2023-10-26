function generatePassword() {
    let length = document.getElementById('length').value;
    const uppercase = document.getElementById('uppercase').checked;
    const lowercase = document.getElementById('lowercase').checked;
    const numbers = document.getElementById('numbers').checked;
    const symbols = document.getElementById('symbols').checked;
    const meaningful = document.getElementById('meaningful').value;

    let allChars = '';
    if (uppercase) allChars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (lowercase) allChars += 'abcdefghijklmnopqrstuvwxyz';
    if (numbers) allChars += '0123456789';
    if (symbols) allChars += '!@#$%^&*()_+[]{}|;:,.<>?';

    if (!(uppercase || lowercase || numbers || symbols || meaningful)) {
        alert('Debes seleccionar al menos una casilla o ingresar una palabra significativa.');
        return;
    }

    let password = '';

    if (meaningful && meaningful.length > length) {
        alert('La palabra significativa no puede tener más caracteres que la longitud total de la contraseña.');
        return;
    }

    if (meaningful && meaningful.length > 0) {
        const meaningfulLength = meaningful.length;
        length -= meaningfulLength;
        
        if (length <= 0) {
            const passwordField = document.getElementById('password');
            passwordField.value = meaningful;
            passwordField.style.width = meaningfulLength * 10 + 'px';
            return;
        }
    }

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allChars.length);
        password += allChars[randomIndex];
    }

    password = password.split('').sort(() => Math.random() - 0.5).join('');

    if (meaningful && meaningful.length > 0) {
        const randomPosition = Math.floor(Math.random() * (length + 1));
        password = password.slice(0, randomPosition) + meaningful + password.slice(randomPosition);
    }

    const passwordField = document.getElementById('password');
    passwordField.value = password;

    passwordField.style.width = password.length * 10 + 'px';
}
