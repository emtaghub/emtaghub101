// ===============================
// 📰 EMTAGHub101 — Article Script
// ===============================

// 🧱 Article Data (with ID, URL, and Publish Date)
const articles = [
  // Article data...
];

// ===============================
// 📰 Update Latest Article
// ===============================
const latestArticleElement = document.getElementById("latest-article");
if (latestArticleElement) {
  const latest = articles[0];
  latestArticleElement.innerHTML = `
    <a href="${latest.url}" class="latest-blink" target="_blank">
      "${latest.title}"
    </a>`;
}

// ===============================
// 📑 Render Article Cards
// ===============================
const articlesContainer = document.getElementById("articlesContainer");

function renderArticles(list) {
  if (!articlesContainer) return;

  articlesContainer.innerHTML = "";
  list.forEach((a) => {
    const formattedDate = new Date(a.date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });

    const card = document.createElement("a");
    card.classList.add("article-card");
    card.href = a.url;
    card.target = "_blank";
    card.innerHTML = `
      <img src="${a.img}" alt="${a.title}">
      <div class="article-card-content">
        <h3>${a.title}</h3>
        <p>${a.desc}</p>
        <small>📅 Published: ${formattedDate}</small>
      </div>
    `;
    articlesContainer.appendChild(card);
  });
}

renderArticles(articles);

// ===============================
// 🔍 Search Filter + Results Dropdown
// ===============================
const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");

if (searchInput && searchResults) {
  searchInput.addEventListener("input", (e) => {
    const query = e.target.value.toLowerCase().trim();
    searchResults.innerHTML = "";

    if (query === "") {
      searchResults.style.display = "none";
      renderArticles(articles);
      return;
    }

    const filtered = articles.filter(
      (a) =>
        a.title.toLowerCase().includes(query) ||
        a.desc.toLowerCase().includes(query)
    );

    // Show filtered articles below
    renderArticles(filtered);

    // Show dropdown suggestions
    if (filtered.length > 0) {
      searchResults.style.display = "block";
      filtered.forEach((a) => {
        const item = document.createElement("div");
        item.classList.add("search-item");
        item.textContent = a.title;
        item.addEventListener("click", () => {
          window.open(a.url, "_blank");
        });
        searchResults.appendChild(item);
      });
    } else {
      searchResults.style.display = "block";
      searchResults.innerHTML = "<div class='no-result'>No results found</div>";
    }
  });
}

// Close dropdown if clicked outside the search area
document.addEventListener("click", (e) => {
  const searchContainer = document.querySelector("#searchResults");
  const searchInput = document.querySelector("#searchInput");
  if (!searchInput.contains(e.target) && !searchContainer.contains(e.target)) {
    searchResults.style.display = "none"; // Close the dropdown when clicked outside
  }
});

// ===============================
// 🍔 Mobile Navigation Toggle
// ===============================
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

if (hamburger && navLinks) {
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}

// ===============================
// 📝 Toggle Dropdowns for Mobile (if needed)
// ===============================
const dropdowns = document.querySelectorAll(".dropdown");
dropdowns.forEach((dropdown) => {
  dropdown.addEventListener("click", () => {
    const dropdownMenu = dropdown.querySelector(".dropdown-menu");
    if (dropdownMenu) {
      dropdownMenu.classList.toggle("active");
    }
  });
});
