export interface DisclosureDocument {
    slug: string;
    title: string;
    fileUrl: string;
    previewImage: string;
}

export const DISCLOSURE_DOCUMENTS: DisclosureDocument[] = [
    {
        slug: 'grant-letter',
        title: 'Grant Letter',
        fileUrl: '/images/mandatory-disclosure/grant letter 1.pdf',
        previewImage: '/images/mandatory-disclosure/grant-letter-1.webp'
    },
    {
        slug: 'society-registration',
        title: 'Society Registration',
        fileUrl: '/images/mandatory-disclosure/society registration.pdf',
        previewImage: '/images/mandatory-disclosure/society-registration.webp'
    },
    {
        slug: 'noc',
        title: 'NOC (No Objection Certificate)',
        fileUrl: '/images/mandatory-disclosure/noc 1.pdf',
        previewImage: '/images/mandatory-disclosure/noc-1.webp'
    },
    {
        slug: 'recognition-certificate',
        title: 'Recognition Certificate',
        fileUrl: '/images/mandatory-disclosure/recognition certificate 1.pdf',
        previewImage: '/images/mandatory-disclosure/recognition-certificate-1.webp'
    },
    {
        slug: 'water-certificate',
        title: 'Water & Health Sanitary Certificate',
        fileUrl: '/images/mandatory-disclosure/water-certificate.pdf',
        previewImage: '/images/mandatory-disclosure/water-certificate.webp'
    },
    {
        slug: 'annual-calendar',
        title: 'Annual Calendar',
        fileUrl: '/images/mandatory-disclosure/annual calendar nursery to 10th 1.pdf',
        previewImage: '/images/mandatory-disclosure/annual-calendar-nursery-to-10th-1.webp'
    },
    {
        slug: 'school-management-committee',
        title: 'School Management Committee',
        fileUrl: '/images/mandatory-disclosure/school management committee.pdf',
        previewImage: '/images/mandatory-disclosure/school-management-committee.webp'
    },
    {
        slug: 'last-three-year-result',
        title: 'Last Three Year Result',
        fileUrl: '/images/mandatory-disclosure/last three year result.pdf',
        previewImage: '/images/mandatory-disclosure/last-three-year-result.webp'
    },
    {
        slug: 'self-certification',
        title: 'Self Certification',
        fileUrl: '/images/mandatory-disclosure/self certification oxford.pdf',
        previewImage: '/images/mandatory-disclosure/self-certification-oxford.webp'
    },
    {
        slug: 'mandatory-disclosure-main',
        title: 'Mandatory Public Disclosure',
        fileUrl: '/images/mandatory-disclosure/main-disclosure.pdf',
        previewImage: '/images/mandatory-disclosure/grant-letter-1.webp' // Fallback since main-disclosure.pdf is corrupt
    }
];
