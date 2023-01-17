import React from 'react';
import { Config } from 'types';
import { Email, GitHub, LinkedIn, Resume } from 'icons';

const config: Config = {
  name: {
    display: 'Yaron Efrat',
    aria: 'My name is Yaron Efrat',
  },
  title: {
    display: 'Physicist => Software Developer',
    aria: 'I am a physicist turned software developer',
  },
  buttons: [
    {
      display: 'GitHub',
      aria: 'Visit my GitHub profile',
      icon: <GitHub />,
      href: 'https://github.com/yaron-E92/',
    },
    {
      display: 'LinkedIn',
      aria: 'Visit my LinkedIn profile',
      icon: <LinkedIn />,
      href: 'https://www.linkedin.com/in/yaron-efrat-351472176/',
    },
    {
      display: 'Resume',
      aria: 'View my resume in Google Drive',
      icon: <Resume />,
      href: 'https://drive.google.com/file/d/1wKpMuVcNXvDz2HrhpLvbIcjrd1mRwleq/view?usp=share_link',
    },
    {
      display: 'Email',
      aria: 'Send me an email',
      icon: <Email />,
      href: 'mailto:yaronefrat92@gmail.com',
    },
  ],
};

export default config;
