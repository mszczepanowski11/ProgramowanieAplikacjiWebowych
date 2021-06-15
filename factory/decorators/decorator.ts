export function disabled(constructorFn:Function):void{
    constructorFn.prototype.disabled = true;
}