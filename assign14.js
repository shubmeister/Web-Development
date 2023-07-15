
const blog=[{title:"Blog1"}];

const lastTime=[];

function createPost()
{
    return new Promise((res,rej)=>{

        setTimeout(()=>{
            blog.push({title:"Blog After"})
            res();
        },2000)
    })
}

function lastActivityTime()
{
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            let createdAt=new Date().getTime();
            lastTime.push({lastActivity: createdAt});
            res("Last Activity Time="+createdAt);
        },1000)
    })
}

function deletePost()
{
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            let post=blog.pop();
            res(post);
        },2000)
    })
}

function userActivity()
{
    Promise.all([createPost(),lastActivityTime()]).then(([cPost,lTime])=>{

        console.log(lTime);
    }).catch(err=>console.log(err))
}

function userDeleteActivity()
{
    Promise.all([deletePost(),lastActivityTime()]).then(([dPost,lTime])=>{

        console.log(dPost.title);
        console.log(lTime);
    }).catch(err=>console.log(err));
}

userActivity();

userDeleteActivity();
