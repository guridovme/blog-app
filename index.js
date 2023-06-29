let post='';
const titleInputNode=document.querySelector('.js-title-input');
const newPostBtnNode=document.querySelector('.js-new-post-btn');
const postsNode=document.querySelector('.js-posts');


newPostBtnNode.addEventListener('click', function(){
    const postFromUser = getPostFromUser();
    setPost(postFromUser);
    renderPost();
});

function getPostFromUser(){
    const post = titleInputNode.value;
    return post;
};

function setPost(newPost){
    post=newPost;
};

function renderPost(){
    postsNode.innerText = post;
};
