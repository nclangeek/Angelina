document.addEventListener('DOMContentLoaded', () => {

    const interviewsArticlesData = [
        // Norwegian Articles and Interviews
        {
            title: "Angelina Jordan | 8 Interviews Compilation | 8 to 18 years old",
            link: "https://www.youtube.com/watch?v=5dNfrbMFcXE",
            source: "Fan-made YouTube Compilation",
            type: "YouTube Video",
            year: "Various (8 to 18 years old)",
            notes: "This compilation includes various interviews from Norway's Got Talent and other appearances, with English subtitles provided for Norwegian segments.",
            category: "Norwegian"
        },
            {
            title: "Angelina Jordan (12) interviewed by Skavlan before performing Shield in November 2018",
            link: "https://www.youtube.com/watch?v=3HUQZFSPBNQ",
            source: "Skavlan",
            type: "YouTube Video",
            year: 2018,
            notes: "Another interview with Skavlan, offering insights into her thoughts on music.",
            category: "Norwegian"
        },
        // American Articles and Interviews
        {
            title: "Angelina Jordan On Joining The Industry Young, 'Million Miles,' And More",
            link: "https://thehoneypop.com/2021/03/23/angelina-jordan-on-joining-the-industry-young-million-miles-and-more/",
            source: "The Honey POP",
            type: "Article",
            year: 2021,
            notes: "An insightful interview about her career progression and latest singles.",
            category: "American"
        },
        {
            title: "The Uncarved Blog by Ken Chawkin",
            link: "https://theuncarvedblog.com/tag/angelina-jordan/",
            source: "The Uncarved Blog",
            type: "Blog",
            year: 2021,
            notes: "Blog posts about Angelina Jordan",
            category: "American"
        },

    {
            title: "Best TV audition of all time? Girl, 13, sings staggering original soul version of Queen's Bohemian Rhapsody",
            link: "https://www.smoothradio.com/artists/queen/girl-sings-bohemian-rhapsody-americas-got-talent-video/",
            source: "Smooth Radio Website",
            type: "Article",
            year: 2022,
            notes: "Article on Angelina Jordan's AGT Champions audition.",
            category: "British"
        },

        {
            title: "Angelina Jordan 10 Years in the Making",
            link: "https://www.youtube.com/watch?v=I_59PZXkusc&pp=0gcJCfwAo7VqN5tD",
            source: "Angelina Jordan Official Youtube",
            type: "YouTube Video",
            year: 2024,
            notes: "Angelina talks about the experience of performing throughout the first ten years of her career.",
            category: "American"
        },
        {
            title: "Angelina Jordan interview right after receiving Heidi Klum's Golden Buzzer on AGT Champions",
            link: "https://www.youtube.com/watch?v=oi30lSvTHiY",
            source: "America's Got Talent Youtube",
            type: "YouTube Video",
            year: 2020,
            notes: "Her reaction and appreciation for the Golden Buzzer.",
            category: "American"
        }
    ];

    // Get references to page sections
    const homeSection = document.getElementById('home');
    const rabbitHoleSection = document.getElementById('rabbit-hole');
    const interviewsArticlesSection = document.getElementById('interviews-articles');
    const aboutSection = document.getElementById('about');

    // Get references to navigation buttons
    const navHome = document.getElementById('nav-home');
    const navRabbitHole = document.getElementById('nav-rabbit-hole');
    const navInterviewsArticles = document.getElementById('nav-interviews-articles');
    const navAbout = document.getElementById('nav-about');

    function hideAllPages() {
        homeSection.classList.add('hidden');
        rabbitHoleSection.classList.add('hidden');
        interviewsArticlesSection.classList.add('hidden');
        aboutSection.classList.add('hidden');
    }

    function removeActiveClass() {
        navHome.classList.remove('active');
        navRabbitHole.classList.remove('active');
        navInterviewsArticles.classList.remove('active');
        navAbout.classList.remove('active');
    }

    function renderInterviewsArticles() {
        const interviewsArticlesContent = document.getElementById('interviews-articles-content');
        let htmlContent = '';

        const categories = [...new Set(interviewsArticlesData.map(item => item.category))];

        for (const category of categories) {
            htmlContent += `
                <h3 class="font-playfair text-3xl font-bold text-[#880000] mt-10 mb-4">${category} Articles and Interviews</h3>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            `;
            const filteredItems = interviewsArticlesData.filter(item => item.category === category);
            if (filteredItems.length > 0) {
                filteredItems.forEach(item => {
                    htmlContent += `
                        <div class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-[#D4AF37]">
                            <h4 class="font-playfair text-2xl font-bold text-[#880000]">${item.title}</h4>
                            <p class="mt-2 text-[#333333]"><strong>Source:</strong> ${item.source}</p>
                            <p class="mt-1 text-[#333333]"><strong>Type:</strong> ${item.type}</p>
                            <p class="mt-1 text-[#333333]"><strong>Year:</strong> ${item.year}</p>
                            ${item.notes ? `<p class="mt-2 text-[#333333]">${item.notes}</p>` : ''}
                            ${item.link ? `<a href="${item.link}" target="_blank" class="inline-block mt-4 btn-primary">View Content</a>` : ''}
                        </div>
                    `;
                });
                htmlContent += `</div>`;
            }
        }
        interviewsArticlesContent.innerHTML = htmlContent;
    }

    function showPage(pageId) {
        hideAllPages();
        removeActiveClass();

        switch (pageId) {
            case 'home':
                homeSection.classList.remove('hidden');
                navHome.classList.add('active');
                break;
            case 'rabbit-hole':
                rabbitHoleSection.classList.remove('hidden');
                navRabbitHole.classList.add('active');
                break;
            case 'interviews-articles':
                interviewsArticlesSection.classList.remove('hidden');
                navInterviewsArticles.classList.add('active');
                renderInterviewsArticles();
                break;
            case 'about':
                aboutSection.classList.remove('hidden');
                navAbout.classList.add('active');
                break;
            default:
                homeSection.classList.remove('hidden');
                navHome.classList.add('active');
                break;
        }
    }

    // Initial page load
    showPage('home');

    // Attach event listeners to navigation buttons
    navHome.addEventListener('click', () => showPage('home'));
    navRabbitHole.addEventListener('click', () => showPage('rabbit-hole'));
    navInterviewsArticles.addEventListener('click', () => showPage('interviews-articles'));
    navAbout.addEventListener('click', () => showPage('about'));

});