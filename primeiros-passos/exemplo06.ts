// STRUCTURAL TYPE SYSTEM (sistema de tipo estrutural)

interface Point {
    x: number;
    y: number;
}

function logPoint(p: Point) {
    console.log(`${p.x}, ${p.y}`);
}

/**
 * Apesar de não ter sido declarado um tipo para point,
 * o TypeScript assume que tanto point quanto Point
 * são do mesmo tipo pois possuem formatos semelhantes.
 */
const point = { x: 14, y: 17}; // logs "14 e 17"
logPoint(point);

const point3 = { x: 12, y: 18, z: 55};
logPoint(point3);

const rect = { x: 33, y: 3, width: 30, height: 80 };
logPoint(rect);

const color = { hex: "#187ABF" };
logPoint(color); // color não tem o mesmo formato aceito de Point

/* O type-checking também se aplica à classes */
class VirtualPoint {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}

const newVPoint = new VirtualPoint(13, 9);
logPoint(newVPoint); // logs 13 e 9
