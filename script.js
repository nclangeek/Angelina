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
            title: "Angelina Jordan 10 Years in the Making",
            source: "Angelina Jordan Official YouTube Channel",
            link: "https://www.themusicman.uk/angelina-jordan-reimagines-elvis-classic/",
            date: "March 29, 2024",
            snippet: "In that moment of performing for the first time on stage I was like I knew that my music was bigger than myself this one clip just went viral of Gloomy Sunday and everything really like changed in a way that I never expected."
        },		
		{
            title: "Angelina Teases Her Forthcoming Debut Album | UNFO 2022 Red Carpet with Steven Lim",
            source: "Character Media",
            link: "https://www.smoothradio.com/artists/queen/girl-sings-bohemian-rhapsody-americas-got-talent-video/",
            date: "January 25, 2023",
            snippet: "“America’s Got Talent” alum and viral sensation Angelina Jordan shares what’s coming up next for her and dishes on her new album."
        },
		{
            title: "Best TV audition of all time? Girl, 13, sings staggering original soul version of Queen's 'Bohemian Rhapsody'",
            source: "Smooth Radio Website",
            link: "https://www.smoothradio.com/artists/queen/girl-sings-bohemian-rhapsody-americas-got-talent-video/",
            date: "September 23, 2022",
            snippet: "A video of 13-year-old Angelina Jordan singing on America's Got Talent in January 2020 has been seen over 24 million times and dubbed 'the greatest audition of all time'."
        },
        {
            title: "Angelina Jordan on joining the industry young, 'Million Miles', and more",
            source: "The Honey Pop Website",
            link: "https://thehoneypop.com/2021/03/23/angelina-jordan-on-joining-the-industry-young-million-miles-and-more/",
            date: "March 23, 2021",
            snippet: "Those of you who are fans of Norway’s Got Talent may remember a very young girl who blew everyone away with her amazing voice back in 2014."
        },
		{
            title: "Viral Singing Prodigy Angelina Jordan Releases New Single 'Million Miles'",
            source: "People",
            link: "https://people.com/music/angelina-jordan-talks-child-stardom-new-single-million-miles/",
            date: "February 4, 2021",
            snippet: "Norwegian singer Angelina Jordan — who went viral with her giant vocals in 2014 — is back with her new single 'Million Miles'."
        },
        {
            title: "11-year-old Angelina Jordan performs 'It's Now or Never'",
            source: "Elvis Australia Official Elvis Presley Fan Club",
            link: "https://www.elvis.com.au/presley/11-year-old-angelina-jordan-performs-elvis-it-s-now-or-never.shtml",
            date: "September 5, 2019",
            snippet: "Here we have a video of 11-year-old Angelina Jordan performing Elvis Presley's legendary It's Now or Never in front of the crowd at Fredriksten castle in Halden."
        },		
		{
            title: "Another Kind of Ageless: Singer Angelina Jordan",
            source: "Escape Into Life Website",
            link: "https://www.escapeintolife.com/music/music-for-music-angelina-jordan/",
            date: "August 2018",
            snippet: "For four years this Norwegian singer has been a major YouTube presence, getting multi-million views for her videos. She is frequently compared to Dinah Washington, Elvis Presley, and Amy Winehouse, among others."
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
