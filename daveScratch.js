https://c9.io/al-the-x/assignments-dig1102

var allStudents = [
    { vid: 'V1048684039458', name: 'Ann \"Killer\" O\'Keeffe' },
    { vid: 'V2486950239484', name: 'Rob McCaffrey' }
    // . . .
];

console.log(students.filter(function(item){
    return item.vid == 'V2486950239484';
}));

var students = [ 'Ann O\'Keeffe', 'Rob McCaffrey' ];

console.log(students.filter(function(item){
    return item == 'V2486950239484';
}))

var students = {
    'V2486950239484': {
        vid: 'V2486950239484', name: 'Rob McCaffrey', start_date: '2012-01-07', degree_program: 'Arts & Entertainment'
    }
    //'V2486950239484': 'Rob McCaffrey'
}

var studentsByClass = {
    'DIG1102': [
        {   
            vid: 'V2486950239484',
            name: 'Rob McCaffrey', 
            start_date: '2012-01-07',
            degree_program: 'Arts & Entertainment', 
            classes: [
                'DIG1102', 'DIG1108', 'DIG2000'
            ]
        },
        // . . .
    ],
    'DIG1108': [
        {   
            vid: 'V2486950239484', 
            name: 'Rob McCaffrey', 
            start_date: '2012-01-07',
            degree_program: 'Arts & Entertainment', 
            classes: [
                'DIG1102', 'DIG1108', 'DIG2000'
            ]
        }
    ]
}

console.log(students['V2486950239484']);
console.log(students.V2486950239484);



var blog = [ ];

var article = {
    headline: 'This is my first article',
    body: "Lorem ipsum dolor sit amet consequitir...",
    publishedOn: new Date('2012-01-01'),
    author: 'David Rogers'
}

blog.push(article);

var afterJune = blog.filter(function(article){
    return article.publishedOn > new Date('2011-06-30');
})