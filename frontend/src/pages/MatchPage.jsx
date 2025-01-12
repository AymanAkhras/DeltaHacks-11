import React from 'react';
import { Container, Modal, Typography, Box, Button } from '@mui/material';
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
    const [openBooking, setOpenBooking] = React.useState(false);
    const [openSuccess, setOpenSuccess] = React.useState(false);

    const handleClose = () => {
        setOpenBooking(false);
        setOpenSuccess(true);
    }

    return (
        <Container maxWidth="xs">
            <Typography variant="h4" style={{ marginTop: '2rem' }}>Matched with you 👀</Typography>
            <InvestorCard name="Greg Smith"
                description="Experienced investor with a focus on early-stage technology startups. Looking for innovative solutions in AI, ML, and SaaS."
                industry="Technology" location="San Francisco" funding="$100k - $200k" image="https://thumbs.dreamstime.com/b/hipster-business-man-walking-takeaway-cup-coffee-wall-background-trendy-old-person-wearing-casual-fashion-clothes-happy-169523000.jpg"
                buttonText='Book a meeting'
                onClick={() => setOpenBooking(true)}
            />
            <Modal open={openBooking} onClose={handleClose} >
                <Box style={style} bgcolor="white">
                    <Typography variant="h6" style={{ marginTop: '2rem' }}>Book a meeting with Greg Smith!</Typography>
                    <Typography>Times available:</Typography>
                    <form>
                        <label>
                            <input type="radio" name="timeSlot" value="Monday: 10:00 AM - 11:00 AM" />
                            Monday Jan 13: 10:00 AM - 11:00 AM
                        </label>
                        <br />
                        <label>
                            <input type="radio" name="timeSlot" value="Tuesday: 2:00 PM - 3:00 PM" />
                            Tuesday Jan 14: 2:00 PM - 3:00 PM
                        </label>
                        <br />
                        <label>
                            <input type="radio" name="timeSlot" value="Wednesday: 1:00 PM - 2:00 PM" />
                            Wednesday Jan 15: 1:00 PM - 2:00 PM
                        </label>
                        <br />
                        <label>
                            <input type="radio" name="timeSlot" value="Thursday: 4:00 PM - 5:00 PM" />
                            Thursday Jan 16: 4:00 PM - 5:00 PM
                        </label>
                        <br />
                        <label>
                            <input type="radio" name="timeSlot" value="Friday: 9:00 AM - 10:00 AM" />
                            Friday Jan 17: 9:00 AM - 10:00 AM
                        </label>
                        <br />
                        <Button onClick={handleClose}>Submit</Button>
                    </form>
                </Box>
            </Modal>
            <Modal open={openSuccess} onClose={() => setOpenSuccess(false)}>
                <Box style={style} bgcolor="white">
                    <Typography variant="h6" style={{ marginTop: '2rem' }}>Meeting booked! 🎉</Typography>
                    <Typography>Greg Smith has been notified and will confirm the meeting shortly. The event has been added to your calendar.</Typography>
                    <br />
                    <Button onClick={() => setOpenSuccess(false)}>Close</Button>
                </Box>

            </Modal>
            <Typography variant="h4" style={{ marginTop: '2rem' }}>Suggested for you</Typography>

            <Typography variant="body2" color="textSecondary" style={{ marginTop: '1rem' }}>Connects left today: 3</Typography>
            <Typography variant="body2" color="textSecondary" style={{ marginTop: '1rem' }}>Base on your interests and history, you might like these investors...</Typography>

            {investors.map((investor, index) => (
                <InvestorCard key={index} name={investor.name} description={investor.description}
                    industry={investor.industry} location={investor.location} funding={investor.funding} image={investor.image}
                />
            ))}
        </Container>
    );
}

export default MatchPage;


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'white',
    boxShadow: 24,
    borderRadius: '16px',
    padding: '2rem',
};