var names = {
    "girls": {
        "ga":"Kathrine"
    },
    "boys": {
        "ga":"Brad"
    }
}

console.log(names.girls.ga);
names.boys.ga = "Gabe";
console.log(names.boys.ga);
names.boys.ga = "Brad";
console.log(names.boys.ga +" and "+ names.girls.ga);