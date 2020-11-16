const Tweeter = function(){
    let posts = [ 
        {
        text: "First post!",
        id: "p1",
        comments: [
            { id: "c1", text: "First comment on first post!" },
            { id: "c2", text: "Second comment on first post!!" },
            { id: "c3", text: "Third comment on first post!!!" }
        ]
    },
    {
        text: "Aw man, I wanted to be first",
        id: "p2",
        comments: [
            { id: "c4", text: "Don't wory second poster, you'll be first one day." },
            { id: "c5", text: "Yeah, believe in yourself!" },
            { id: "c6", text: "Haha second place what a joke." }
        ]
    }
]

    let postCounter = 0
    let postIdGenerator = 2
    let commentIdGenerator = 6

    const getPost = function(postID, which) {
        for (let i in posts) {
            if(posts[i].id === postID) {
                if (which == 0) {
                    
                    return posts[i]
                } else if (which == 1){
                    return i
                }
            }
        }
    }

    const getComment = function(postID, commentID, which) {
        let post = getPost(postID, 0)
        let comments = post.comments
        for (i in comments) {
            if(comments[i].id === commentID) {
                if (which == 0) {
                return comments[i]
                }else if(which == 1) {
                    return i
                }
            }
        }
    }

    const getPosts = function() {
        return posts
    }

    const addPost = function (text) {
        postIdGenerator++
        posts.push({
            id:"p"+(postIdGenerator),
            text,
            comments:[]
        })
    }
    const removePost = function(postID) {
        let posti = getPost(postID, 1) 
        posts.splice(posti, 1)
    }

    const addComment = function(text, postID) {
        let post = getPost(postID, 0)
        commentIdGenerator++
        post.comments.push({
            text,
            id: "c"+commentIdGenerator
        })
    }

    const removeComment = function(postID, commentID){
        let post = getPost(postID,0)
        let commenti = getComment(postID, commentID, 1)
        post.comments.splice(commenti, 1)
    }

    return {
        getPosts,
        addPost,
        removePost,
        addComment,
        removeComment
    }
}

