
export function logger(name:string){
    return (target:any, propKey:string, descriptor:PropertyDescriptor) => {
        const originalFn = target[propKey];
        descriptor.value = function(param:any) {
                console.log(`Game ${name} has been launched`)
                return originalFn.call(this, param)
            }
      }
}