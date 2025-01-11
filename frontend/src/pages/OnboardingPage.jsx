import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Paper, styled, IconButton, Divider } from '@mui/material';
import { useDropzone } from 'react-dropzone';
import DeleteIcon from '@mui/icons-material/Delete';

const Dropzone = styled('div')(({ theme }) => ({
    border: '2px dashed grey',
    borderRadius: '4px',
    padding: '20px',
    textAlign: 'center',
    cursor: 'pointer',
    backgroundColor: theme.palette.background.paper,
    marginBottom: theme.spacing(2),
}));

const OnboardingPage = () => {
    const [files, setFiles] = useState([]);
    const [formData, setFormData] = useState({
        loanUse: '',
        investmentSource: '',
        preparation: '',
        businessReason: '',
        statementOfPurpose: '',
        businessCulture: '',
        mentorship: '',
        bookkeeping: '',
        successReason: ''
    });

    const onDrop = (acceptedFiles) => {
        setFiles(prevFiles => [...prevFiles, ...acceptedFiles]);
    };

    const { getRootProps, getInputProps } = useDropzone({ onDrop, multiple: true });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleRemoveFile = (index) => {
        setFiles(prevFiles => prevFiles.filter((_, i) => i !== index));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(formData, files);
    };

    return (
        <Box sx={{ maxWidth: 600, mx: 'auto', mt: 4 }}>
            <Typography variant="h4" gutterBottom>
                Onboarding
            </Typography>
            <Paper sx={{ p: 3 }}>
                <form onSubmit={handleSubmit}>
                    <Typography variant="h6" gutterBottom>
                        Loan Details
                    </Typography>
                    <TextField
                        label="Please tell us how you plan to use the loan funds you are requesting."
                        name="loanUse"
                        value={formData.loanUse}
                        onChange={handleInputChange}
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                            style: { whiteSpace: 'normal' },
                        }}
                    />
                    <TextField
                        label="Where will the funds you are investing in this business come from?"
                        name="investmentSource"
                        value={formData.investmentSource}
                        onChange={handleInputChange}
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                            style: { whiteSpace: 'normal' },
                        }}
                    />
                    <Divider sx={{ my: 3 }} />
                    <Typography variant="h6" gutterBottom>
                        Business Preparation
                    </Typography>
                    <TextField
                        label="What have you done to help prepare to be a small business owner?"
                        name="preparation"
                        value={formData.preparation}
                        onChange={handleInputChange}
                        multiline
                        rows={4}
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                            style: { whiteSpace: 'normal' },
                        }}
                    />
                    <TextField
                        label="Why are you in business / Why do you want to own your own small business?"
                        name="businessReason"
                        value={formData.businessReason}
                        onChange={handleInputChange}
                        multiline
                        rows={4}
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                            style: { whiteSpace: 'normal' },
                        }}
                    />
                    <TextField
                        label="What is the ‘Statement of Purpose’ for your business AND what problem are you solving?"
                        name="statementOfPurpose"
                        value={formData.statementOfPurpose}
                        onChange={handleInputChange}
                        multiline
                        rows={4}
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                            style: { whiteSpace: 'normal' },
                        }}
                    />
                    <Divider sx={{ my: 3 }} />
                    <Typography variant="h6" gutterBottom>
                        Business Culture and Support
                    </Typography>
                    <TextField
                        label="What type of business culture have you created / will you create for your employees?"
                        name="businessCulture"
                        value={formData.businessCulture}
                        onChange={handleInputChange}
                        multiline
                        rows={4}
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                            style: { whiteSpace: 'normal' },
                        }}
                    />
                    <TextField
                        label="Who is helping you with your business? Do you have a mentor or trusted advisor not involved in the day-to-day operation?"
                        name="mentorship"
                        value={formData.mentorship}
                        onChange={handleInputChange}
                        multiline
                        rows={4}
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                            style: { whiteSpace: 'normal' },
                        }}
                    />
                    <Divider sx={{ my: 3 }} />
                    <Typography variant="h6" gutterBottom>
                        Bookkeeping and Success
                    </Typography>
                    <TextField
                        label="How will you be handling your bookkeeping and record-keeping? What accounting system or program will you be using?"
                        name="bookkeeping"
                        value={formData.bookkeeping}
                        onChange={handleInputChange}
                        multiline
                        rows={4}
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                            style: { whiteSpace: 'normal' },
                        }}
                    />
                    <TextField
                        label="Why are you / will you be successful with your business?"
                        name="successReason"
                        value={formData.successReason}
                        onChange={handleInputChange}
                        multiline
                        rows={4}
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                            style: { whiteSpace: 'normal' },
                        }}
                    />
                    <Divider sx={{ my: 3 }} />
                    <Typography variant="h6" gutterBottom>
                        File Upload
                    </Typography>
                    <Dropzone {...getRootProps()}>
                        <input {...getInputProps()} />
                        <Typography>
                            Drag & drop some files here, or click to select files
                        </Typography>
                    </Dropzone>
                    <Box sx={{ mt: 2 }}>
                        {files.map((file, index) => (
                            <Box key={index} sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                                <Typography sx={{ flexGrow: 1 }}>{file.name}</Typography>
                                <IconButton onClick={() => handleRemoveFile(index)} color="error">
                                    <DeleteIcon />
                                </IconButton>
                            </Box>
                        ))}
                    </Box>
                    <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
                        Submit
                    </Button>
                </form>
            </Paper>
        </Box>
    );
};

export default OnboardingPage;
