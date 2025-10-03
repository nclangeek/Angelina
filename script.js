document.addEventListener('DOMContentLoaded', function() {
    const navButtons = document.querySelectorAll('.nav-item');
    const pageSections = document.querySelectorAll('.page-section');
    const interviewsArticlesContent = document.getElementById('interviews-articles-content');

    console.log('DOM Loaded, interviewsArticlesContent:', interviewsArticlesContent);

    // Object to store scroll positions for each page section
    const scrollPositions = {};
    // Track the current active section
    let currentSectionId = 'home'; // Initialize with the default section

    const interviewData = [
        {
            title: "You've never heard Elvis like this before, as America's Got Talent Teen Star Angelina Jordan strips back 'Suspicious Minds' to a heartbreaking ballad that had fans in tears",
            source: "The Music Man Website",
            link: "https://www.themusicman.uk/angelina-jordan-reimagines-elvis-classic/",
            date: "July 15, 2025",
            snippet: "Our next guest took Norway by storm when she appeared in Norske Talenter in 2014 a little paw at just 8 years old barefoot and with a voice the likes of which we had never heard, she sang her way to the top with legendary jazz songs"
        },
        {
            title: "Angelina Jordan interviewed on live TV in Norway (God Morgen Norge (Good Morning Norway))",
            source: "God Morgen Norge (Good Morning Norway)",
            link: "https://www.youtube.com/watch?v=fPGgGAJfGXY",
            date: "June 6, 2024",
            snippet: "In that moment of performing for the first time on stage I was like I knew that my music was bigger than myself this one clip just went viral of Gloomy Sunday and everything really like changed in a way that I never expected."
        },
        {
            title: "Angelina Jordan 10 Years in the Making",
            source: "Angelina Jordan Official YouTube Channel",
            link: "https://www.youtube.com/watch?v=I_59PZXkusc",
            date: "March 29, 2024",
            snippet: "In that moment of performing for the first time on stage I was like I knew that my music was bigger than myself this one clip just went viral of Gloomy Sunday and everything really like changed in a way that I never expected."
        },		
        {
            title: "Teen silences the room with her dreamy cover of 'Unchained Melody'",
            source: "See it Live Website",
            link: "https://seeitlive.co/teen-unchained-melody-angelina-jordan/?4f1e054b-09ef-44dd-bb70-6f5325e49f62=1",
            date: "February 26, 2024",
            snippet: "This remarkable rendition was part of a tribute to Nobel Peace Prize laureate Narges Mohammadi. Angelina’s interpretation of this timeless classic is not just a musical performance; it’s a profound expression of emotion and artistry."
        },		
        {
            title: "Angelina Jordan Blog Entries by Ken Chawkin",
            source: "The Uncarved Blog",
            link: "https://theuncarvedblog.com/tag/angelina-jordan/",
            date: "December 20, 2023",
            snippet: "On December 8, 2023 Angelina Jordan Official/Republic Records/UMG released her new 5-song Christmas album, Driving Home for Christmas."
        },		
        {
            title: "Angelina Jordan - The Next Great One | AMR Retrospective EP01",
            source: "Arab Man Reacts YouTube Channel",
            link: "https://www.youtube.com/watch?v=kbq9wwURy0w",
            date: "October 7, 2023",
            snippet: "Whispers fill the air a buzzing anticipation that's electric and tangible the audience sits at the edge of their seats waiting. Suddenly a soulful voice mature beyond its years envelops the room, every note dripping with raw emotion tells a story this isn't an ordinary talent this is a vocal prodigy from Norway painting stories with her voice this is Angelina."
        },		
        {
            title: "Angelina Jordan Releases New EP, 'Old Enough'",
            source: "Prelude Press",
            link: "https://preludepress.com/news/2023/07/21/angelina-jordan-old-enough/",
            date: "July 21, 2023",
            snippet: "Acclaimed songstress and vocal dynamo, Angelina Jordan has unveiled her brand-new EP, 'Old Enough' today via Republic Records.  To celebrate the project’s release, she also dropped the music video for the single 'Now I’m The Fool.'"
        },		
        {
            title: "Angelina Teases Her Forthcoming Debut Album | UNFO 2022 Red Carpet with Steven Lim",
            source: "Character Media",
            link: "https://www.smoothradio.com/artists/queen/girl-sings-bohemian-rhapsody-americas-got-talent-video/",
            date: "January 25, 2023",
            snippet: "“America’s Got Talent” alum and viral sensation Angelina Jordan shares what’s coming up next for her and dishes on her new album."
        },
        {
            title: "Angelina Jordan Documentary - Born to Sing - The Early Years",
            source: "Wrapped in a Warm Blanket Podcast",
            link: "https://www.youtube.com/watch?v=jE6x9V8Cnyw",
            date: "November 24, 2022",
            snippet: "The Angelina Jordan story is not just another story about a talented young singer. This is a special story of how dreams can come true. Some people in the business already know Angelina Jordan very well, and they're already very impressed with her. Quincy Jones, the legendary music producer, said that Angelina reminds him of Michael Jackson in younger days. And he should know."
        },
        {
            title: "13-yr-old's completely unique 'Bohemian Rhapsody' rendition was so great it even wowed Queen",
            source: "Upworthy",
            link: "https://www.upworthy.com/angelina-jordan-bohemian-rhapsody-ex1",
            date: "Unknown-2022?",
            snippet: "At Upworthy, we've shared a lot of memorable 'America's Got Talent' auditions, from physics-defying dance performances to jaw-dropping magic acts to heart-wrenching singer-songwriter stories. Now we're adding Angelina Jordan's 'AGT: The Champions' audition to the list because wow."
        },	
        {
            title: "Best TV audition of all time? Girl, 13, sings staggering original soul version of Queen's 'Bohemian Rhapsody'",
            source: "Smooth Radio Website",
            link: "https://www.smoothradio.com/artists/queen/girl-sings-bohemian-rhapsody-americas-got-talent-video/",
            date: "September 23, 2022",
            snippet: "A video of 13-year-old Angelina Jordan singing on America's Got Talent in January 2020 has been seen over 24 million times and dubbed 'the greatest audition of all time'."
        },
        {
            title: "Angelina Jordan on “Festivalsommer” at NRK TV",
            source: "NRK TV",
            link: "https://www.youtube.com/watch?v=HKK66K5u1Fc",
            date: "September 23, 2022",
            snippet: "We fell for her when she was 8 years old and sang on TV. And.. yes... She sings very very beautifully!"
        },	
        {
            title: "NRK TV Interview at Kongsberg Jazz Festival July 2022",
            source: "NRK TV - Kongsberg",
            link: "https://www.youtube.com/watch?v=u8zSWTlCltA",
            date: "July 7, 2022",
            snippet: "Angelina's Interview by NRK TV at Kongsberg July 7, 2022 (Subtitled in many languages) Aired on NRK TV in Norway August 6, 2022"
        },
        {
            title: "The Story of Angelina Jordan|Beyond Got Talent",
            source: "Epic Top Trending YouTube Channel",
            link: "https://www.youtube.com/watch?v=kOZda1fDw6o",
            date: "February 19, 2022",
            snippet: "Angelina Jordan is a 16-year-old singer who became a viral sensation when she auditioned for the 2014 season of Norway's Got Talent when she was just 8 years old."
        },
        {
            title: "What Angelina Jordan has been up to since AGT: The Champions Season 2",
            source: "Screen Rant Website",
            link: "https://screenrant.com/americas-got-talent-champions-angelina-jordan-career-update/",
            date: "July 3, 2021",
            snippet: "Angelina Jordan is one of the most memorable contestants from America's Got Talent: The Champions season two. "
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
            title: "Angelina Jordan interview Norwegian TV2",
            source: "Norwegian TV2",
            link: "https://www.youtube.com/watch?v=ni_bQ74Ga4A",
            date: "February 17, 2020",
            snippet: "Interview on Norwegian TV2 about AGT-Champions finale 18/2-2020"
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
        console.log('Switching to page:', pageId);
        console.log('Current scrollPositions:', scrollPositions);

        // Save the scroll position of the current section
        if (currentSectionId) {
            scrollPositions[currentSectionId] = window.scrollY;
            console.log(`Saved scroll position for ${currentSectionId}: ${scrollPositions[currentSectionId]}`);
        }

        // Hide all sections
        pageSections.forEach(section => {
            section.classList.add('hidden');
        });

        // Show the new section
        const activeSection = document.getElementById(pageId);
        if (activeSection) {
            activeSection.classList.remove('hidden');
            // Update the current section ID
            currentSectionId = pageId;
            // Restore saved scroll position or scroll to top
            const scrollToY = scrollPositions[pageId] || 0;
            console.log(`Restoring scroll position for ${pageId}: ${scrollToY}`);
            // Use requestAnimationFrame to ensure scroll happens after DOM update
            requestAnimationFrame(() => {
                window.scrollTo({ top: scrollToY, behavior: 'smooth' });
            });
        } else {
            console.log(`Section with ID ${pageId} not found`);
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
                <div class="bg-white p-6 rounded-lg shadow-lg border-l-4 border-[#04041C]">
                    <h3 class="font-playfair text-xl font-bold text-[#04041C]">${item.title}</h3>
                    <p class="mt-2 text-[#555555] italic">Source: ${item.source} | Published: ${item.date}</p>
                    <p class="mt-4 text-[#333333]">${item.snippet}</p>
                    <a href="${item.link}" target="_blank" class="inline-block mt-4 btn-primary">Read More</a>
                </div>
            `).join('');
        } else {
            console.log('interviewsArticlesContent not found');
        }
    }

    const menuToggle = document.getElementById('menu-toggle');
    const mainMenu = document.getElementById('main-menu');

    // Hamburger toggle
    if (menuToggle && mainMenu) {
        menuToggle.addEventListener('click', function() {
            mainMenu.classList.toggle('hidden');
        });
    }
    
    navButtons.forEach(button => {
        button.addEventListener('click', function() {
            const pageId = this.id.replace('nav-', '');
            showPage(pageId);
            setActiveNav(this.id);

            // Close menu on mobile after click
            if (window.innerWidth < 768 && mainMenu.classList.contains('flex-col')) {
                mainMenu.classList.add('hidden');
            }
        });
    });

    // Initial load: scroll to top and render interviews
    showPage('home');
    renderInterviews();
});