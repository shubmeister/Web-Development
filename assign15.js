
//Promises

console.log("person1: shows ticket");
console.log("person2: shows ticket");

const wifeBringTicket = new Promise((res,rej)=>{
    setTimeout(()=>{
        res('ticket')
    },2000)
});

const getPopcorn = wifeBringTicket.then((m)=>{
    console.log('husband: should we go in');
    console.log('wife: no i am hungry');
    return new Promise((res,rej)=> res(`${m} popcorn`))
});

const getButter=getPopcorn.then((m)=>{
    console.log('husband: should we go in');
    console.log('wife: no i need butter on my popcorn');
    return new Promise((res,rej)=>{res(`${m} butter`)});
});

const getColdDrinks=getButter.then((m)=>{
    
    console.log('husband: shall we go in');
    console.log('wife: no i need cold drinks');
    return new Promise((res,rej)=>{res(`${m} colddrinks`)})
});

getColdDrinks.then((m)=>{console.log(m)
                         console.log('person3: shows ticket');
     });

console.log('person4: shows ticket');
console.log('person5: shows ticket');

//Async Await=================================================

console.log("person1: shows ticket");
console.log("person2: shows ticket");

const preMovie = async ()=>{

    const wifeBringTicket = new Promise((res,rej)=>{
        setTimeout(()=>{
            res('ticket')
        },2000)
    });

    const getPopcorn1= new Promise((res,rej)=>{res('popcorn')});
    const getButter1=new Promise((res,rej)=>{res('butter')});
    const getColdDrinks1=new Promise((res,rej)=>{res('colddrinks')});

    let ticket= await wifeBringTicket;
    
    console.log(`wife: i have the ${ticket}`)
    console.log('husband: should we go in');
    console.log('wife: no i am hungry');
    
    let popcorn= await getPopcorn1;

    console.log(`husband: i got some ${popcorn}`);
    console.log('husband: should we go in');
    console.log('wife: no i need butter on my popcorn');

    let butter = await getButter1;

    console.log(`husband: i got some ${butter} for popcorn`);
    console.log('husband: shall we go in');
    console.log('wife: no i need cold drinks');

    let colddrinks=await getColdDrinks1;

    console.log(`husband: i got some ${colddrinks} for popcorn`);
    console.log('husband: shall we go in');
    console.log('wife: let go')

    let [pop,but,cold]=await Promise.all([getPopcorn1,getButter1,getColdDrinks1])

    console.log(`${pop},${but},${cold}`);

    return ticket;
}

preMovie().then(m=>console.log(`person3: shows ${m}`));

console.log('person4: shows ticket');
console.log('person5: shows ticket');

//converting js14 code from promise to async await

const preUser = async ()=>{

    const blog=[];

    const lastTime=[];

    const lastEntry=new Promise((res,rej)=>{
        setTimeout(()=>{
            let createdAt=new Date().getTime();
            lastTime.push({lastActivity: createdAt});
            res("Last Activity Time="+createdAt);
        },1000)
    })

    const addUser=new Promise((res,rej)=>{

        setTimeout(()=>{
            blog.push({title:"Blog After"})
            res();
        },2000)
    })

    let user=await addUser;

    let time=await lastEntry;

    return time;
}

preUser().then((m)=>console.log(m));