import arcadeIcon from '../assets/images/icon-arcade.svg';
import advancedIcon from '../assets/images/icon-advanced.svg';
import proIcon from '../assets/images/icon-pro.svg';

const response = [
  {
    title: 'Personal Information',
    description: 'Please provide your name, email, address, and phone number.',
    fields: [
      {
        id: 0,
        label: 'Name',
        placeholder: 'e.g. Stephen King',
        type: 'text',
      },

      {
        id: 1,
        label: 'Email',
        placeholder: 'e.g. stephenking@lorem.com',
        type: 'text',
      },
      {
        id: 2,
        label: 'Phone',
        placeholder: 'e.g. +1 234 567 890',
        type: 'text',
      },
    ],
  },
  {
    title: 'Select your plan',
    description: 'You have the option of monthly or yearly billing.',
    fields: [
      {
        id: 0,
        name: 'Arcade',
        monthly: 9,
        yearly: 90,
        promotion: '2 months free',
        icon: arcadeIcon,
        type: 'checkbox_1',
      },
      {
        id: 1,
        name: 'Advanced',
        monthly: 12,
        yearly: 120,
        promotion: '2 months free',
        icon: advancedIcon,
        type: 'checkbox_1',
      },
      {
        id: 2,
        name: 'Pro',
        monthly: 15,
        yearly: 150,
        promotion: '2 months free',
        icon: proIcon,
        type: 'checkbox_1',
      },
    ],
  },
  {
    title: 'Pick add-ons',
    description: 'Add-ons help enhance your gaming experience.',
    fields: [
      {
        id: 0,
        name: 'Online service',
        des: 'Access to multiplayer games',
        monthly: 1,
        yearly: 10,
        type: 'checkbox_2',
      },
      {
        id: 1,
        name: 'Larger storage',
        des: 'Extra 1TB of cloud save',
        monthly: 2,
        yearly: 20,
        type: 'checkbox_2',
      },
      {
        id: 2,
        name: 'Customizable profile',
        des: 'Custom theme on your profile',
        monthly: 2,
        yearly: 20,
        type: 'checkbox_2',
      },
    ],
  },
];

export default response;
