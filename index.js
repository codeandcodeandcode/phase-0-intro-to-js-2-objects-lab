
const employee = {
    name: "John",
    streetAddress: "China",
}

function updateEmployeeWithKeyAndValue(eobj, key, value) {
    const newObj = {...eobj};
    newObj[key] = value;
}

function destructivelyUpdateEmployeeWithKeyAndValue(eobj, key, value) {
eobj[key] = value;
return eobj;
}
function deleteFromEmployeeByKey(object, key) {
    // let keys = Object.keys(object);
    const newObj = {...object};
    delete newObj.key;
    return newObj
    
    }
    
    function destructivelyDeleteFromEmployeeByKey(object, key) {
    delete object.key;
    return object;
    }