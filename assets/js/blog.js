// Select the element with the ID 'blog' and assign it to the variable blogPost
const blogPost = document.querySelector('#blog');

// Select the element with the ID 'back' and assign it to the variable backBtn
const backBtn = document.querySelector('#back');

// Initialize an empty array to store blog post objects
let blogStorageObject = [];

// Function to render blog posts onto the page
function renderBlogPosts() {
    // Retrieve stored blog posts from the blogStorageObject array
    const storedBlogPosts = blogStorageObject;
    // If there are no stored blog posts, return from the function
    if (storedBlogPosts.length === 0) {
        return;
    }
    // Clear the content of the blogPost element
    blogPost.textContent = '';
    // Loop through each stored blog post
    for (let i = 0; i < storedBlogPosts.length; i++) {
        const { title, content, username } = storedBlogPosts[i];
        // Create HTML elements for the blog post
        const div = document.createElement('div');
        const h2 = document.createElement('h2');
        const p = document.createElement('p');
        const span = document.createElement('span');
        // Set the text content of the HTML elements
        h2.textContent = title;
        p.textContent = content;
        span.textContent = 'Posted by: ' + username;
        // Append the HTML elements to the div container
        div.appendChild(h2);
        div.appendChild(p);
        div.appendChild(span);
        // Append the div container to the blogPost element
        blogPost.appendChild(div);
    }
}

// Function to initialize the page with stored blog posts
function init() {
    // Retrieve stored blog posts from local storage or initialize an empty array
    const storeBlogs = JSON.parse(localStorage.getItem('blogPosts')) || [];
    // If there are stored blog posts, assign them to the blogStorageObject array
    if (storeBlogs.length !== 0) {
        blogStorageObject = storeBlogs;
    }
    // Render the blog posts onto the page
    renderBlogPosts();
}

// Event listener for the back button to navigate to the index page
backBtn.addEventListener('click', function (event) {
    event.preventDefault();
    window.location.assign('index.html');
});

// Initialize the page
init();