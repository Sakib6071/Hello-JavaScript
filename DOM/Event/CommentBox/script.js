document.getElementById('btn').addEventListener('click',function(){
    const commentField = document.getElementById('commentField')
    const newComment = commentField.value;
console.log(newComment);
    const p = document.createElement('p');
    p.innerText=newComment;

    const commentArea=document.getElementById('commentArea')

    commentArea.appendChild(p)

    commentField.value=''
})