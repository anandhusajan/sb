export const JsonLd = () => {
    const schema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Organization",
                "@id": "https://satbodha.com/#organization",
                "name": "Satbodha",
                "url": "https://satbodha.com",
                "logo": "https://satbodha.com/logo.png",
                "sameAs": [
                    "https://twitter.com/satbodha",
                    "https://linkedin.com/company/satbodha",
                    "https://instagram.com/satbodha"
                ],
                "contactPoint": {
                    "@type": "ContactPoint",
                    "telephone": "+91-9037273007",
                    "contactType": "customer support",
                    "areaServed": "Global",
                    "availableLanguage": "English"
                }
            },
            {
                "@type": "LocalBusiness",
                "@id": "https://satbodha.com/#localbusiness",
                "name": "Satbodha",
                "image": "https://satbodha.com/hero.jpg",
                "telephone": "+91-9037273007",
                "email": "support@satbodha.com",
                "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "Alappuzha",
                    "addressLocality": "Alappuzha",
                    "addressRegion": "Kerala",
                    "postalCode": "688001",
                    "addressCountry": "IN"
                },
                "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": "9.4981",
                    "longitude": "76.3388"
                },
                "url": "https://satbodha.com"
            }
        ]
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
};
