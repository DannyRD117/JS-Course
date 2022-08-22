const regresaTrue = () => {
    console.log('Regresa true');
    return true;
}

const regresaFalse = () => {
    console.log('Regresa false');
    return false;
}

console.warn('NOT');
console.log(true); // true
console.log(!true); // false
console.log(!false); //true

console.log(!regresaFalse()); // true

console.warn('AND');
console.log(true && true); // true
console.log(true && false); // false

console.log('==========');
console.log(regresaTrue() && regresaFalse()); // false, ejecuta ambas
console.log(regresaFalse() && regresaTrue()); // false, ejecuta solo la primera

console.log('-------------');
regresaFalse() && regresaTrue();

console.warn('OR');
console.log(true || true); // true
console.log(true || false); // false

console.log( regresaTrue() || regresaFalse()); // true, ejecuta solo la primera
console.log( '4 condiciones ', true || true || true || false ); // true

console.warn('Asignaciones');

const soyUndefined = undefined;
const soyNull = null;
const soyFalso = false;

const a1 = false && 'Hola mundo' && 150; // false
const a2 = 'Hola' && 'Mundo' && soyFalso && true; //false
const a3 = soyFalso || 'Ya no soy falso'; // Ya no soy falso
const a4 = soyFalso || soyUndefined || soyNull || 'Ya nos soy falso de nuevo' || true; // 'Ya no soy falso de nuevo'
const a5 = soyFalso || soyUndefined || regresaTrue() || 'Ya nos soy falso de nuevo' || true; // 'true'

console.log({ a1, a2, a3, a4, a5});