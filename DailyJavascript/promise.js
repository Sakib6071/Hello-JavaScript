const aPromise = control =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(control){
                resolve()
            }else{
                reject()
            }
        },3000)
    })
}

aPromise(false).then(()=>{
    console.log("Success");
})
.catch(()=>{
    console.log("Failure");
})