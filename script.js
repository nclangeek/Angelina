document.addEventListener('DOMContentLoaded', function() {
    const navButtons = document.querySelectorAll('.nav-item');
    const pageSections = document.querySelectorAll('.page-section');
    const interviewsArticlesContent = document.getElementById('interviews-articles-content');

    console.log('DOM Loaded, interviewsArticlesContent:', interviewsArticlesContent);

    const interviewData = [
		{
            title: "You've never heard Elvis like this before, as America's Got Talent Teen Star Angelina Jordan strips back 'Suspicious Minds' to a heartbreaking ballad that had fans in tears",
            source: "The Music Man Website",
            link: "https://www.themusicman.uk/angelina-jordan-reimagines-elvis-classic/",
            date: "July 15, 2025",
            snippet: "We’ve all heard Elvis Presley’s classic hit “Suspicious Minds,” but did you know that beneath the lush production of the Presley version lies a heartbreaking ballad?"
        },
        {
            title: "Angelina Jordan on joining the industry young, 'Million Miles', and more",
            source: "The Honey Pop Website",
            link: "https://thehoneypop.com/2021/03/23/angelina-jordan-on-joining-the-industry-young-million-miles-and-more/",
            date: "March 23, 2021",
            snippet: "Those of you who are fans of Norway’s Got Talent may remember a very young girl who blew everyone away with her amazing voice back in 2014."
        },
        {
            title: "Angelina Jordan Interviewed by Anne Lindmo, NRK TV",
            source: "NRK TV",
            link: "https://www.youtube.com/watch?v=-cCLDY0CSZ8",
            date: "November 14, 2015",
            snippet: "Angelina Jordan visited the Norwegian TV show 'Lindmo' on November 14, 2015, to talk about her book 'Mellom To Hjerter' (Between Two Hearts) which was released earlier that week."
        },
    ];
    
    function showPage(pageId) {
        pageSections.forEach(section => {
            section.classList.add('hidden');
        });
        const activeSection = document.getElementById(pageId);
        if (activeSection) {
            activeSection.classList.remove('hidden');
        }
    }

    function setActiveNav(activeButtonId) {
        navButtons.forEach(button => {
            button.classList.remove('active');
        });
        const activeButton = document.getElementById(activeButtonId);
        if (activeButton) {
            activeButton.classList.add('active');
        }
    }

    function renderInterviews() {
        if (interviewsArticlesContent) {
            console.log('Rendering interviews, content element found');
            interviewsArticlesContent.innerHTML = interviewData.map(item => `
                <div class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-[#880000]">
                    <h3 class="font-playfair text-xl font-bold text-[#880000]">${item.title}</h3>
                    <p class="mt-2 text-[#555555] italic">Source: ${item.source} | Published: ${item.date}</p>
                    <p class="mt-4 text-[#333333]">${item.snippet}</p>
                    <a href="${item.link}" target="_blank" class="inline-block mt-4 btn-primary">Read More</a>
                </div>
            `).join('');
        } else {
            console.log('interviewsArticlesContent not found');
        }
    }

    navButtons.forEach(button => {
        button.addEventListener('click', function() {
            const pageId = this.id.replace('nav-', '');
            showPage(pageId);
            setActiveNav(this.id);
        });
    });

    // Initial load
    showPage('home');
    renderInterviews();
});
