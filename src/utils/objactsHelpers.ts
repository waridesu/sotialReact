export  const updateObjectArray =(items:any, itemId:number, objPropName:string, newObjProps:any)=>
    items.map((u:any) => {
            if (u[objPropName] === itemId) {
                return {...u, ...newObjProps};
            }
            return u;
        })
