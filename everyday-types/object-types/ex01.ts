// The parameter's type annotation is an object type
function printCoord(pt: { x: number, y: number }) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 25, y: 60 });