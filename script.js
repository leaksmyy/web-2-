// setting up existing blogs
const setUpBlog = (blog) => {
    const title = blog.querySelector(".title")
    const contentText = blog.querySelector(".content-text")
    const editTitleBtn = blog.querySelector(".edit-title")
    const editContentBtn = blog.querySelector(".edit-blog")
    const deleteBtn = blog.querySelector(".delete-blog")

    editTitleBtn.addEventListener("click", () => {editTitle(title)})
    editContentBtn.addEventListener("click", () => editContent(contentText))
    deleteBtn.addEventListener("click", () => {deleteBlog(blog)})

}

// create blog dynamically
const createBlog = () => {
    // select html class
    const container = document.querySelector(".container")
    
    // assign html class name to newly created element 
    const blog = document.createElement("div")
    blog.className = "container-content"

    const blogTitle = document.createElement("h1")
    blogTitle.className = "title"
    blogTitle.textContent = "Title"
    
    const blogContent = document.createElement("p")
    blogContent.className = "content-text" 
    blogContent.textContent = "[Write your content here]"   
    //

    // edit title btn
    const editTitleBtn = document.createElement("button")
    editTitleBtn.className = "edit-title"
    editTitleBtn.textContent = "Edit Title"

    // edit content btn
    const editContentBtn = document.createElement("button")
    editContentBtn.className = "edit-blog"
    editContentBtn.textContent = "Edit content"

    // delete blog btn
    const deleteBlogBtn = document.createElement("button")
    deleteBlogBtn.className = "delete-blog"
    deleteBlogBtn.textContent = "Delete"


    blog.appendChild(blogTitle)
    blog.appendChild(editTitleBtn)
    blog.appendChild(blogContent)
    blog.appendChild(editContentBtn)
    blog.appendChild(deleteBlogBtn)
    container.appendChild(blog)
    
    setUpBlog(blog)
}

// edit blog title
const editTitle = (titleElement) => {
    const newTitle = prompt(`Enter new title:`)
    if (newTitle){
        titleElement.textContent = newTitle
    }
}

// edit blog content
const editContent = (contentElement) => {
    const newContent = prompt(`Enter new content:`)
    if (newContent) {
        contentElement.textContent = newContent
    }
}

// delete blog post
const deleteBlog = (blog) => {
    const titleText = blog.querySelector(".title").textContent
    const toDelete = confirm(`Are you sure you want to delete "${titleText}?"`)
    if (toDelete) {
        blog.remove()
        alert(`${titleText} is deleted sucessfully!`)
    }
}


window.onload = () => {
    const addBlogBtn = document.getElementById("add-blog")
    addBlogBtn.addEventListener("click", createBlog)

    let blogs = document.querySelectorAll(".container-content")
    for (let blog of blogs) {
        setUpBlog(blog)
    }
}
