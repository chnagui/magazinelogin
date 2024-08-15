document.addEventListener("DOMContentLoaded", function() {
    const totalPages = 60;
    const pagesPerView = 10;
    let currentPage = 0;

    const gallery = document.getElementById("gallery");

    function loadPages(page) {
        gallery.innerHTML = "";
        for (let i = page * pagesPerView; i < (page * pagesPerView) + pagesPerView && i < totalPages; i++) {
            const pageDiv = document.createElement("div");
            pageDiv.className = "page";

            const img = document.createElement("img");
            img.src = `images/page${i + 1}.jpg`; // Assumes images are named page1.jpg, page2.jpg, ..., page60.jpg
            img.alt = `Page ${i + 1}`;
            img.dataset.pageNumber = i + 1; // Store page number in a data attribute
            img.addEventListener('click', function() {
                window.location.href = `view.html?page=${i + 1}`;
            });

            const pageNumberLink = document.createElement("a");
            pageNumberLink.href = `view.html?page=${i + 1}`;
            pageNumberLink.textContent = `Page ${i + 1}`;
            pageNumberLink.className = "page-link";

            pageDiv.appendChild(img);
            pageDiv.appendChild(pageNumberLink);
            gallery.appendChild(pageDiv);
        }
    }

    document.getElementById("prev").addEventListener("click", function() {
        if (currentPage > 0) {
            currentPage--;
            loadPages(currentPage);
        }
    });

    document.getElementById("next").addEventListener("click", function() {
        if ((currentPage + 1) * pagesPerView < totalPages) {
            currentPage++;
            loadPages(currentPage);
        }
    });

    loadPages(currentPage);
});
