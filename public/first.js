console.log("Script loaded properly");
const postsContainer = document.getElementById("posts-container");

fetch('https://jsonplaceholder.typicode.com/posts')
  .then(res => res.json())
  .then(posts => {
    posts.forEach((item, idx) => {
      const postHTML = `
      <div class="post-card">
        <h3>${idx + 1}. ${item.title}</h3>
        <p>${item.body}</p>
      </div>`;
      postsContainer.innerHTML += postHTML;
    });
  })
  .catch(err => console.error("Error fetching data:", err));