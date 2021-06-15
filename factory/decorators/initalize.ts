
export function initialize(target:any, propKey:string, descriptor:PropertyDescriptor) {
        const originalFn = target[propKey];
        descriptor.value = function(param:any) {
                console.log(`Game portal has been loaded`)
                return originalFn.call(this, param)
            }
      }