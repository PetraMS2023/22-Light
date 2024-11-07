document.addEventListener("DOMContentLoaded", () => {
    const filterLinks = document.querySelectorAll(".sections a");
    const projects = document.querySelectorAll(".projects .proj");

    filterLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const filter = link.getAttribute("data-filter");

            filterLinks.forEach(link => link.classList.remove("active"));
            link.classList.add("active");

            projects.forEach(project => {
                if (filter === "all" || project.getAttribute("data-category") === filter) {
                    project.style.display = "block";
                } else {
                    project.style.display = "none";
                }
            });
        });
    });
});
