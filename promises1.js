const posts= [
    {title: 'Post One',
     body: 'This is Post One', 
     createdAt: new Date().getTime()
    },
    {title: 'Post Two', 
     body: 'This is Post Two', 
     createdAt: new Date().getTime()
    }

];

// getpost to print onscreen
// function getPosts(){
//     setTimeout(() => {
//         let output = '';
//         posts.forEach((post,index)=> {
//             output += `<li>${post.title}<li>`;
//         });
//         document.body.innerHTML = output;
//     }, 1000);
// }

function createPost(post){
    setTimeout(()=>{
        posts.push(post);
    },1000);
};

function updatelastactivitytime (){
    return new Promise ((resolve,reject) => {
        setTimeout(()=>{
            posts.lastactivitytime= new Date().getTime(),
            resolve(posts.lastactivitytime)

        }, 1000)
    } );

}

function userupdatesapost(){
    Promise.all([createPost({title: 'Post Five', body: 'This is Post Five'}), updatelastactivitytime()]).then((msg)=>{ console.log(posts,msg)});
}

// createPost({title:'post three',body:'this is post three'});
// getPosts();
// updatelastactivitytime();
userupdatesapost();

// Promise.all([createPost({title: 'Post Five', body: 'This is Post Five'}), updateLastUserActivityTime()])