const objs = [{ author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true }, { author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true }, { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', readingStatus: false }]
objs.map(obj =>{ 
    if(obj.readingStatus){console.log(`${obj.author}, ${obj.title}`);}
})