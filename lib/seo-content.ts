export interface BlogPost {
    slug: string;
    title: string;
    description: string;
    publishDate: string;
    modifiedDate: string;
    author: string;
    image: string;
    toc: { id: string; title: string }[];
    content: {
        type: 'h2' | 'h3' | 'p' | 'ul' | 'faq';
        text?: string;
        items?: string[]; // for lists
        questions?: { q: string; a: string }[]; // for faq
        id?: string; // for headings
    }[];
}

export const SEO_BLOGS: BlogPost[] = [
    {
        slug: "best-cbse-school-burhanpur-guide",
        title: "Why The Oxford School is the Best CBSE School in Burhanpur: A Complete Parent's Guide (2025)",
        description: "Looking for the best CBSE school in Burhanpur? Discover why The Oxford School leads in academic excellence, English medium education, and holistic child development.",
        publishDate: "2024-01-24",
        modifiedDate: "2024-01-24",
        author: "The Oxford School Academic Team",
        image: "/images/campus_main_building.webp", // Validated asset
        toc: [
            { id: "academic-excellence", title: "Academic Excellence & CBSE Curriculum" },
            { id: "english-medium", title: "True English Medium Environment" },
            { id: "holistic-development", title: "Holistic Development Beyond Books" },
            { id: "safety-infrastructure", title: "Safety, Infrastructure & Location" },
            { id: "faq", title: "Frequently Asked Questions" },
        ],
        content: [
            {
                type: 'p',
                text: "Choosing the right school is one of the most critical decisions a parent makes. In Burhanpur, where educational options are growing, finding a competitive,safe, and values-based environment is key. The Oxford School, located in Naval Nagar, has firmly established itself as the **Best CBSE School in Burhanpur** by combining modern pedagogy with traditional values."
            },
            {
                type: 'h2',
                id: "academic-excellence",
                text: "1. Academic Excellence & CBSE Curriculum"
            },
            {
                type: 'p',
                text: "At The Oxford School, we strictly follow the **Central Board of Secondary Education (CBSE)** curriculum, which is designed to foster critical thinking rather than rote memorization. Our 'Conceptual Learning' approach ensures students understand the 'Why' and 'How' behind every topic."
            },
            {
                type: 'ul',
                items: [
                    "**Qualified Faculty:** Our teachers are not just educators but mentors who undergo regular training.",
                    "**Smart Learning:** Use of digital aids and modern teaching methods.",
                    "**Low Student-Teacher Ratio:** Ensures personal attention for every child."
                ]
            },
            {
                type: 'h2',
                id: "english-medium",
                text: "2. A True English Medium Environment"
            },
            {
                type: 'p',
                text: "Many schools claim to be English medium but fail to provide an environment where English is spoken naturally. We pride ourselves on being a premier **English Medium School in Burhanpur**. From the Nursery level, we emphasize Reading, Writing, Speaking, and Listening (LSRW skills) to ensure our students are global-ready."
            },
            {
                type: 'h2',
                id: "holistic-development",
                text: "3. Holistic Development: Beyond the Classroom"
            },
            {
                type: 'p',
                text: "Education is not just about marks. It's about confidence, creativity, and character. As a top **School in Burhanpur**, we offer a wide range of extracurricular activities:"
            },
            {
                type: 'ul',
                items: [
                    "**Sports:** Cricket, Football, Basketball, and Indoor games.",
                    "**Arts:** Music, Dance, and Fine Arts.",
                    "**Public Speaking:** Debates, Elocution, and Drama clubs to build confidence."
                ]
            },
            {
                type: 'h2',
                id: "safety-infrastructure",
                text: "4. Safety, Infrastructure & Location"
            },
            {
                type: 'p',
                text: "Located in the peaceful area of **Naval Nagar**, our campus is safe, secure, and conducive to learning. We have CCTV surveillance, secure transport facilities, and a dedicated support staff to ensure your child's safety is never compromised."
            },
            {
                type: 'h2',
                id: "faq",
                text: "Frequently Asked Questions (FAQs)"
            },
            {
                type: 'faq',
                questions: [
                    {
                        q: "Where is The Oxford School located?",
                        a: "We are located at Naval Nagar, Burhanpur, Madhya Pradesh. It is a peaceful and easily accessible location for students from all parts of the city."
                    },
                    {
                        q: "Is the school strictly CBSE board?",
                        a: "Yes, we are affiliated with the Central Board of Secondary Education (CBSE), New Delhi, following its world-class curriculum."
                    },
                    {
                        q: "Does the school provide transport facilities?",
                        a: "Yes, we have a fleet of safe and well-maintained buses covering all major routes in Burhanpur."
                    },
                    {
                        q: "What is the admission process?",
                        a: "Admissions are open for Nursery to Higher Secondary classes. You can visit the school office or fill out the enquiry form on our website to get started."
                    }
                ]
            }
        ]
    }
];
