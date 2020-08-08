const students=[
    {id: 1, name: 'rajib sk'},
    {id: 2, name: 'shilpi khatun'},
    {id: 3, name: 'ramiz'},
    {id: 4, name: 'attab'},
    {id: 5, name: 'rasel'}
]
const names=students.map( s => s.name);
console.log(names);
const ids=students.map(i => i.id);
console.log(ids);
const filterId=students.filter(s => s.id>3);
console.log(filterId);
const find=students.find(s => s.id > 4);
console.log(find);