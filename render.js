const Renderer = function () {
    const renderPosts = function(posts) {
        $('#posts').empty()
        for (let post of posts) {
            let pId = post.id
            let newPost =``
            newPost+= `<div class = "post" data-id = ${pId} > <button class = "delete" >X</button> <h3 class = "post-text"> ${post.text}</h3>`
            for (let comment of post.comments) {
                let cId =comment.id 
                newPost+= ` <p class = "comment" data-id = ${cId} ><button class = "delete-comment" >X</button> ${comment.text}</p>`
            } 

            newPost+= `<p><input placeholder = "Write a comment"><button class ="comment-button" >Comment</button></p>`
            newPost+= `</div>` 
            $('#posts').append(newPost)
        }
    }

        return{
            renderPosts
        }
}