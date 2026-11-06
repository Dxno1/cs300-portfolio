
// Find all filter buttons and project cards.
const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");
const filterStatus = document.querySelector("#filter-status");

// Add a click event to each filter button.
filterButtons.forEach(function(button) {
    button.addEventListener("click", function() {

        // Get the selected category.
        const category = button.dataset.category;

        // Check every project card.
        projectCards.forEach(function(card) {
            const matches =
                category === "all" ||
                card.dataset.category === category;

            // Show matching projects and hide others.
            card.hidden = !matches;
        });

        // Update the selected button.
        filterButtons.forEach(function(item) {
            item.classList.remove("active");
            item.setAttribute("aria-pressed", "false");
        });

        button.classList.add("active");
        button.setAttribute("aria-pressed", "true");

        // Tell visitors which projects are showing.
        const visibleCount = Array.from(projectCards).filter(
            function(card) {
                return !card.hidden;
            }
        ).length;

        filterStatus.textContent =
            category === "all"
                ? "Showing all projects."
                : "Showing " + visibleCount + " " +
                  category + " project.";
    });
});
