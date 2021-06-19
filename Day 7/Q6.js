var library = [ { title: 'The Road Ahead', author: 'Bill Gates', libraryID: 1254 }, 
{ title: 'The alter Isaacson', author: 'Steve Jobs', libraryID: 4264 }, 
{ title: 'Mockingjay: The Final Book of The Hunger Games', author: 'Suzanne Collins', libraryID: 3245 }];


function sortArray(x,y) {

    if(x.title < y.title){
        return -1;
    }
    else if(x.title > y.title){
        return 1;
    }
    
};    

console.log(library.sort(()=>{
    sortArray();
    console.log("sorting")
}));