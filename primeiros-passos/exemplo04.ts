// DEFININDO TIPOS COMPOSTOS

// Tipo MyBoll
type MyBool = true | false;

// Outros tipos compostos
type WindowStates = 'open' | 'closed' | 'minimized';
type LockState = 'locked' | 'unlocked';
type PositiveOddNumbersUnderTen = 1 | 3 | 5 | 7 | 9;

// Função que pode receber parâmetro de tipo diferente
function getLength(obj: string | string[]) {
    return obj.length;
}

/**
 * Função retorna valores diferentes
 * dependendo do tipo do parâmetro.
 */
function wrapInArray(obj: string | string[]) {
    if (typeof obj === 'string') {
        return [obj];
    }
    return obj;
}
