const posts = [];
const TITLE_VALIDATION_LIMIT = 100;
const TEXT_VALIDATION_LIMIT = 200;
const INITIAL_TITLE = 'Количество символов в заголовке:';
const INITIAL_TEXT = 'Количество символов в тексте:';

const postTitleInputNode=document.querySelector('.js-post-title-input');
const postTextInputNode=document.querySelector('.js-post-text-input');
const newPostBtnNode=document.querySelector('.js-new-post-btn');
const postsNode=document.querySelector('.js-posts');
const titleValidationNode = document.querySelector('.js-post-title-validation');
const textValidationNode = document.querySelector('.js-post-text-validation');


const validation = () => {
    const titleLen = postTitleInputNode.value.length;
    const textLen = postTextInputNode.value.length;

    if (titleLen <= TITLE_VALIDATION_LIMIT){
        titleValidationNode.innerText =`Количество символов в заголовке: ${titleLen}`; 
        newPostBtnNode.disabled = false;

    } else {
        titleValidationNode.innerText = `Максимум ${TITLE_VALIDATION_LIMIT} символов`;
    };        
    if (textLen <= TEXT_VALIDATION_LIMIT){
        textValidationNode.innerText =`Количество символов в тексте: ${textLen}`; 
        newPostBtnNode.disabled = false;

    }else {
        textValidationNode.innerText = `Максимум ${TEXT_VALIDATION_LIMIT} символов`;
    };  
};

const getPostFromUser = () => {
    const title = postTitleInputNode.value;
    const text = postTextInputNode.value;
    const currentDate = new Date();
    const options = {year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric'};
    const dt = `${currentDate.toLocaleString("fr-CH", options)}`;

    if (title == null || title == "" || title == 0) {
        alert('Заголовок должен быть заполнен корректно');
        newPostBtnNode.disabled = true;
        return;
    }
    if (text == null || text == "" || text == 0) {
        alert('Текст должен быть заполнен корректно');
        newPostBtnNode.disabled = true;
        return;
    }
    return {
        dt: dt,
        title: title,
        text: text
    };
};

const addPost = ({dt, title, text}) => {   
    posts.push({
    dt,
    title,
    text,
    });
};

const getPosts = () => {
    return posts;
};

const renderPosts = () => {

    const posts = getPosts ();

    let postsHTML = '';

    posts.forEach(post => {
        postsHTML += `
        <div class='post'>
        <p class='post__date'>${post.dt}</p>
        <p class='post__title'>${post.title}</p>
        <p class='post__text'>${post.text}</p>
        </div>
        `;
    });
    
    postsNode.innerHTML = postsHTML;
};

const clearInput  = () => {
    postTitleInputNode.value='';
    postTextInputNode.value='';
    titleValidationNode.innerHTML = INITIAL_TITLE;
    textValidationNode.innerHTML = INITIAL_TEXT;

};

const newPostBtnHandler = () => {
    const postFromUser = getPostFromUser();
    addPost(postFromUser);
    renderPosts();
    clearInput();
};

postTitleInputNode.addEventListener('input', validation);
postTextInputNode.addEventListener('input', validation);
newPostBtnNode.addEventListener('click', newPostBtnHandler);


