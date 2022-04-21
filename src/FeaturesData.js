import React from 'react';

import { FaCreditCard } from 'react-icons/fa';
import { HiPhotograph } from 'react-icons/hi';
import {
  MdEventAvailable,
  MdDomainVerification,
  MdTouchApp,
} from 'react-icons/md';
import { SiBoost } from 'react-icons/si';

const FeaturesData = [
  {
    id: 1,
    icon: <FaCreditCard />,
    featureTitle: '100% Responsive',
    featureText:
      "No matter which the device you're on, our site is fully responsive and stories look beautiful on any screen.",
  },
  {
    id: 2,
    icon: <HiPhotograph />,
    featureTitle: 'No Photo Upload Limit',
    featureText:
      'Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go.',
  },
  {
    id: 3,
    icon: <MdEventAvailable />,
    featureTitle: 'Available to Embed',
    featureText:
      'Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more.',
  },
  {
    id: 4,
    icon: <MdDomainVerification />,
    featureTitle: 'Custom Domain',
    featureText:
      'With Photosnap subscription you can host your stories on your own domain. You can also remove our branding!',
  },
  {
    id: 5,
    icon: <SiBoost />,
    featureTitle: 'Boost Your Exposure',
    featureText:
      'Users that viewed your story or gallery can easily get notified of new and featured stories with our built in mailing list.',
  },
  {
    id: 6,
    icon: <MdTouchApp />,
    featureTitle: 'Drag & Drop Image',
    featureText:
      'Easily drag and drop your image and get beautiful shots everytime. No over the top tooling to add friction to creating stories.',
  },
];

export default FeaturesData;
