import './HeroSection.css';
import Stack from 'react-bootstrap/Stack';

export default function HeroSection() {
    return (
        <div>
            <Stack direction="horizontal">
            <div id="title">
                <h1 id="bigHeader">Hi, I'm Niamh - A Software Developer</h1>
                <h3>Building .NET and native mobile applications</h3>
            </div>
            <img src="HeroSectionImage.png" />
            </Stack>
        </div>
    )
}