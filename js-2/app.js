//create an array of objects

let data = [
    {
        name: 'Tyler',
        age: '30',
    },
    {
        name: 'Jason',
        age: '20',
    },
    {
        name: 'Marier',
        age: '35',
    },
    {
        name: 'Zahira',
        age: '24',
    },
    {
        name: 'papi',
        age: '30',
    },
    {
        name: 'John',
        age: '29',
    },
    {
        name: 'Tyler',
        age: '30',
    },
    {
        name: 'Jason',
        age: '20',
    },
    {
        name: 'Marier',
        age: '35',
    },
    {
        name: 'Zahira',
        age: '24',
    },
    {
        name: 'papi',
        age: '30',
    },
    {
        name: 'John',
        age: '29',
    },
    {
        name: 'Tyler',
        age: '30',
    },
    {
        name: 'Jason',
        age: '20',
    },
    {
        name: 'Marier',
        age: '35',
    },
    {
        name: 'Zahira',
        age: '24',
    },
    {
        name: 'papi',
        age: '30',
    },
    {
        name: 'John',
        age: '29',
    }
];

const info = document.querySelector('#info')

let squadInfo = data.map(function(item){
    return '<div>' + item.name + ' is ' + item.age + ' years old ' + '</div>';
})

info.innerHTML = squadInfo.join('\n');