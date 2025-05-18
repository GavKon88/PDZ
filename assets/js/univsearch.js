document.addEventListener("DOMContentLoaded", () => {
    const univInput = document.getElementById("univSearchInput");
    const univSuggestions = document.getElementById("univSuggestions");

    if (!univInput || !univSuggestions) return;

    const univPages = [
        { name: "Druzhna Blackout Arrests", url: "druzhna.html" },
        { name: "Konstantin Vezhar", url: "konstantin.html" },
        { name: "Kovchag Labor Crackdown", url: "kovchag.html" },
        { name: "PDZ Military", url: "military.html" },
        { name: "Antonovich Morozov (blank)", url: "morozov.html" },
        { name: "Operation Patriotic Veil (OPV)", url: "OPV.html" },
        { name: "PDZ Politics (ZDP/DPZ)", url: "politics.html" },
        { name: "Yelovsk Power Plant Shelling", url: "yelovsk.html" },
        { name: "Zegra Secession Crisis", url: "zegracrisis.html" },
        { name: "Zegra Technological Initiative (ZTI, blank)", url: "ZTI.html" }
    ];

    function escapeRegExp(string) {
        return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }

    function highlightMatch(text, filter) {
        if (!filter) return text;
        const regex = new RegExp(`(${escapeRegExp(filter)})`, 'gi');
        return text.replace(regex, '<span class="matched">$1</span>');
    }

    function showUnivSuggestions(filter) {
        univSuggestions.innerHTML = "";
        const lowerFilter = filter.toLowerCase();
        const filtered = univPages.filter(page =>
        page.name.toLowerCase().includes(lowerFilter)
        );

        filtered.forEach(page => {
        const div = document.createElement("div");
        div.classList.add("suggestion");
        div.innerHTML = highlightMatch(page.name, filter);
        div.onclick = () => window.location.href = page.url;
        univSuggestions.appendChild(div);
        });

        univSuggestions.style.display = filtered.length ? "block" : "none";
    }

    univInput.addEventListener("focus", () => {
        const value = univInput.value.trim();
        showUnivSuggestions(value);
    });

    univInput.addEventListener("input", () => {
        const value = univInput.value.trim();
        showUnivSuggestions(value);
    });

    document.addEventListener("click", (event) => {
        if (!univInput.contains(event.target) && !univSuggestions.contains(event.target)) {
        univSuggestions.style.display = "none";
        }
    });

    univSuggestions.style.display = "none";
});
