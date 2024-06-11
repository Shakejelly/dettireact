import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Contact() {
    return (
        <div className='contact-wrapper'>
          <div className='contact-item'>
            <GitHubIcon fontSize='large' />
            <a href="https://github.com/Shakejelly">Github</a>
          </div>
          <div className='contact-item'>
            <LinkedInIcon fontSize='large' />
            <a href="https://www.linkedin.com/in/fredrich-benedetti-43a039290/">LinkedIn</a>
          </div>
          <div className='contact-item'>
            <InstagramIcon fontSize='large' />
            <a href="https://www.instagram.com/shakejelly/">Instagram</a>
          </div>
          <div className='contact-item'>
            <MailOutlineIcon fontSize='large' />
            <a href="mailto:fredrich93@gmail.com">Email Me</a>
          </div>
        </div>
      );
    }
export default Contact;