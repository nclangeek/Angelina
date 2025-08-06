document.addEventListener('DOMContentLoaded', function() {
    const navButtons = document.querySelectorAll('.nav-item');
    const pageSections = document.querySelectorAll('.page-section');
    const interviewsArticlesContent = document.getElementById('interviews-articles-content');

    console.log('DOM Loaded, interviewsArticlesContent:', interviewsArticlesContent);

    const interviewData = [
        {
            title: "Angelina Jordan Opens Up About Her New Single and Life in America",
            source: "Forbes",
            link: "https://www.forbes.com/sites/youdonthaveanews.com/angelina-jordan-interview",
            date: "October 26, 2021",
            snippet: "In an exclusive interview, Angelina discusses her creative process, musical influences, and the experience of moving to the United States to pursue her career."
        },
        {
            title: "The Voice That Silenced the World: A Profile of Angelina Jordan",
            source: "The Guardian",
            link: "https://www.theguardian.com/profile-angelina-jordan-2020",
            date: "January 20, 2020",
            snippet: "A deep dive into the journey of the young Norwegian singer who captivated millions on 'America's Got Talent: The Champions' with her powerful rendition of 'Bohemian Rhapsody'."
        },
        {
            title: "Angelina Jordan on the Power of Music and Her Barefoot Vow",
            source: "Norwegian Public Broadcasting (NRK)",
            link: "https://www.nrk.no/angelina-jordan-barefoot-vow-interview-2019",
            date: "September 5, 2019",
            snippet: "Angelina sits down with NRK to talk about the heartwarming story behind her barefoot performances and her commitment to helping children in need."
        },
        {
            title: "How Angelina Jordan's 'Fly Me to the Moon' Became a Viral Sensation",
            source: "Billboard",
            link: "https://www.billboard.com/articles/news/angelina-jordan-fly-me-to-the-moon-viral",
            date: "March 12, 2018",
            snippet: "Billboard charts the unexpected rise of Angelina's performance on 'The View' and its impact on her international career."
        },
	    {
            title: "Angelina Jordan's Jazz-Age Soul",
            source: "Vintage Jazz Magazine",
            link: "https://www.vintagejazzmag.com/angelina-jordan-feature",
            date: "February 1, 2017",
            snippet: "An article exploring Angelina's deep connection to classic jazz music and her ability to channel the spirit of legendary vocalists at a young age."
        },
        {
            title: "Angelina Jordan Interviewed by Anne Lindmo, NRK TV",
            source: "NRK TV",
            link: "https://www.youtube.com/watch?v=-cCLDY0CSZ8",
            date: "November 14, 2015",
            snippet: "Angelina Jordan visited the Norwegian TV show 'Lindmo' on November 14, 2015, to talk about her book 'Mellom To Hjerter' (Between Two Hearts) which was released earlier that week."
        },
        {
            title: "The Little Girl with a Big Voice",
            source: "Huffington Post",
            link: "https://www.huffingtonpost.com/entry/angelina-jordan-profile_n_6822452.html",
            date: "August 28, 2015",
            snippet: "This profile highlights Angelina's early viral success and her captivating stage presence, which many have compared to seasoned professionals."
        }
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
