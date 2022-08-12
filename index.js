// code your solution here
function saturdayFun(specified = "roller-skate") {

    return `This Saturday, I want to ${specified}!`
}

const mondayWork = function (argument = "go to the office") {

   return `This Monday, I will ${argument}.` 
}


let wrapAdjective = function (vf="*") {
    return function (par ="special") {
        return `You are ${vf}${par}${vf}!`;
    } 
}

console.log(wrapAdjective()())