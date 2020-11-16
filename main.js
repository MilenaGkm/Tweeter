const tweeter = Tweeter()
const renderer = Renderer()

renderer.renderPosts(tweeter.getPosts()) 

const getPostId = ($post)=> $post.data().id


let post = function(){
    let text = $('#input').val()
    tweeter.addPost(text)
    renderer.renderPosts(tweeter.getPosts())
    $('#input').val('')
}


const delPost = function(){
    let post = $(this).parent()
    let pId =  getPostId(post)
    tweeter.removePost(pId)
    renderer.renderPosts(tweeter.getPosts())
}

$('#posts').on('click', '.delete', delPost)


const deleteComment = function() {
    let comment = $(this).closest('p') 
    let cId =  comment.data().id
    let post = comment.parent()
    let pId = getPostId(post)
    tweeter.removeComment(pId, cId)
    renderer.renderPosts(tweeter.getPosts())
}

$('#posts').on('click','.delete-comment', deleteComment)



const addComment = function(){
    let post = $(this).parent().parent()
    let pId  = getPostId(post) 
    let text = $(this).prev('input').val() 
    tweeter.addComment(text,pId) 
    renderer.renderPosts(tweeter.getPosts())
    $(this).prev('input').val('')
}

$('#posts').on('click','.comment-button', addComment)