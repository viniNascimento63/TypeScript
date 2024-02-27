// TypeScript em orientação a objetos

interface User {
    name: string;
    id: number;
}

class UserAccount {
    name: string;
    id: number;

    // Método construtor
    constructor(name: string, id: number) {
        this.name = name;
        this.id = id;
    }
}

const usuario: User = new UserAccount('Ben-10', 0);

// Parâmetro é do tipo interface User
function deleteUser(user: User) {
    //...
}

// A função retorna valores que obedecem à interface
function getAdminUser(): User {
    return usuario;
}
