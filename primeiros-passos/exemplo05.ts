// COMPOSING TYPES (Generics)

/**
 * Todo array que for declarado com
 * esse tipo deverá ser um array de
 * strings.
 */
type StringArray = Array<string>;

/**
 * Todo array que for declarado com
 * esse tipo deverá ser um array de
 * números.
 */
type NumberArray = Array<number>;

/**
 * Todo array que for declarado com
 * esse tipo deverá ser um array de
 * objetos com nome e valor string.
 */
type ObjectWithNameArray = Array<{name : string}>;

/**
 * A interface, quando implementada,
 * deve vir com um parâmetro de algum tipo.
 */
interface Backpack<Type> {
    /**
     * Método que recebe como parâmetro
     * um valor que deve ser do mesmo 
     * tipo do que foi passado à interface.
     * 
     * Retorno: void
     */ 
    add: (obj: Type) => void; 
    
    /**
     * Método que não recebe nenhum
     * parâmetro e retorna um valor
     * do mesmo tipo passado à interface.
     */
    get: () => Type;
}

// Constante que implementa a interface Backpack
declare const backpack: Backpack<string>;

// Constante que recebe o valor retornado de get()
const object = backpack.get();

// Adiciona um objeto string à constante backpack
backpack.add('23');
