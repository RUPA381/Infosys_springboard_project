import React from 'react';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailIcon from '@mui/icons-material/Mail';

function Footer() {
  const handleIconClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer'); 
  };

  return (
    <div className="w-full flex justify-center items-center flex-col pt-5 text-white">
      <div className="flex flex-col bg-cyan-950 w-[100%] items-center space-y-4 p-5">
        <div className="flex space-x-3 items-center justify-center">
          <div className="w-[15%]">
            <img
              src="https://i.ibb.co/kqX6J8W/freepik-background-27962.png"
              alt="CommUnity Logo"
            />
          </div>
          <div className="flex flex-col items-center justify-center text-white">
            <h1 className="text-2xl font-extrabold">CommUnity</h1>
            <p className="text-[10px]">Seamless Community Interaction and Management</p>
          </div>
        </div>
        <div className="font-bold text-xl">Simplifying Society, Connecting Lives</div>
        <div className="font-bold text-lg">Contact us on</div>
        <div className="flex flex-row space-x-3">
          <PinterestIcon onClick={() => handleIconClick('https://www.pinterest.com')} className="cursor-pointer" />
          <TwitterIcon onClick={() => handleIconClick('https://x.com/Infosys?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor')} className="cursor-pointer" />
          <FacebookIcon onClick={() => handleIconClick('https://www.facebook.com/Infosys/')} className="cursor-pointer" />
          <InstagramIcon
            onClick={() => handleIconClick('https://www.instagram.com/infosys/?hl=en')}
            className="cursor-pointer"
          />
        </div>
        <div className="w-[100%]">
          <div className="flex items-start space-x-3 text-sm">
            <div>
              <MailIcon />
            </div>
            <div className="flex flex-col">
              <p>CommUnityMail@gmail.com</p>
              <p>9988776655</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
