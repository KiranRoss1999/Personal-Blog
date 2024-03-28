// Define DOM elements
const blogUsername = document.querySelector('#username');
const blogTitle = document.querySelector('#title');
const blogContent = document.querySelector('#content');
const submitBtn = document.querySelector('#submit');

// Initialize blog storage object
let blogStorageObject = [];

// Function to initialize blog storage
function init() {
    const storeBlogs = JSON.parse(localStorage.getItem('blogPosts')) || [];
    blogStorageObject = storeBlogs;
}

// Function to update blog posts in local storage
function updateBlogPosts() {
    localStorage.setItem('blogPosts', JSON.stringify(blogStorageObject));
}

// Event listener for form submission
submitBtn.addEventListener('click', function (event) {
    event.preventDefault();
    
    // Retrieve input values and trim whitespace
    const userTemp = blogUsername.value.trim();
    const titleTemp = blogTitle.value.trim();
    const contentTemp = blogContent.value.trim();
    
    // Check if any field is empty
    if (userTemp === '' || titleTemp === '' || contentTemp === '') {
        alert("Please insert unfilled items before proceeding! Don't forget to try to switch between light and dark mode!");
        return; // Exit function if any field is empty
    }
    
    // Add new blog post to storage object
    blogStorageObject.unshift({
        username: userTemp,
        title: titleTemp,
        content: contentTemp,
    });
    
    // Update blog posts in local storage
    updateBlogPosts();
    
    // Redirect to blog page after submission
    window.location.assign('blog.html');
});

// Initialize the script
init();