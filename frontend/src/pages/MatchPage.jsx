import React from 'react';
import { Container, Typography } from '@mui/material';
import InvestorCard from '../components/InvestorCard';


const investors = [
    {
        name: 'John Doe',
        description: 'Experienced investor with a focus on early-stage technology startups. Looking for innovative solutions in AI, ML, and SaaS.',
        industry: 'Technology',
        location: 'San Francisco',
        funding: '$100k - $200k',
        image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a'
    },
    {
        name: 'Jane Doe',
        description: 'Passionate about investing in health and wellness startups. Interested in innovative healthcare solutions and medical technology advancements.',
        industry: 'Health',
        location: 'Los Angeles',
        funding: '$10k - $60k',
        image: 'https://thumbs.dreamstime.com/b/portrait-successful-mature-businesswoman-arms-crossed-confident-business-professional-female-smiling-smart-suit-business-180283728.jpg'
    },
    {
        name: 'Bob Smith',
        description: 'Dedicated to improving retail and commerce through innovative solutions and strategic investments.',
        industry: 'Retail',
        location: 'Toronto',
        funding: '$200k - $2M',
        image: 'https://media.istockphoto.com/id/1399565382/photo/young-happy-mixed-race-businessman-standing-with-his-arms-crossed-working-alone-in-an-office.jpg?s=612x612&w=0&k=20&c=buXwOYjA_tjt2O3-kcSKqkTp2lxKWJJ_Ttx2PhYe3VM='
    },
];

function MatchPage() {

    return (
        <Container maxWidth="xs">
            <Typography variant="h4" style={{ marginTop: '2rem' }}>Matched</Typography>
            <InvestorCard name="Greg Smith"
                description="Experienced investor with a focus on early-stage technology startups. Looking for innovative solutions in AI, ML, and SaaS."
                industry="Technology" location="San Francisco" funding="$100k - $200k" image="https://thumbs.dreamstime.com/b/hipster-business-man-walking-takeaway-cup-coffee-wall-background-trendy-old-person-wearing-casual-fashion-clothes-happy-169523000.jpg"
            />
            <Typography variant="h4" style={{ marginTop: '2rem' }}>Suggested for you</Typography>
            {investors.map((investor, index) => (
                <InvestorCard key={index} name={investor.name} description={investor.description}
                    industry={investor.industry} location={investor.location} funding={investor.funding} image={investor.image}
                />
            ))}
        </Container>
    );
}

export default MatchPage;
