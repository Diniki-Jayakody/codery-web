import outlineWebImg from '../assets/projects/project_outline_construction.png';
import veloFleetWebImg from '../assets/projects/velo_fleet_web.jpg';
import veloFleetMobileImg from '../assets/projects/velo_fleet_mobile.png';
import thompsonWebsite from '../assets/projects/thompson_website.png';


export const portfolio = [
    {
      id: 'thompsons-group-website',
      title: "Thompson's Group Website",
      type: 'Web Development',
      url: 'https://thompsons-group.co.uk/',
      tech: ['HTML', 'CSS', 'CMS'],
      category: 'Web',
      imageUrl:
      thompsonWebsite,
    },
    {
      id: 'outline-construction-website',
      title: 'Outline Construction Website',
      type: 'Web Development',
      url: 'https://outlineconstruction.co.uk/',
      tech: ['React', 'Tailwind'],
      category: 'Web',
      imageUrl:
        outlineWebImg,
    },
    {
      id: 'velo-fleet-platform',
      title: 'Velo Fleet – Fleet Management System',
      type: 'Enterprise Platform',
      url: null,
      tech: ['Java', 'Angular', 'Apache Superset'],
      category: 'Enterprise',
      imageUrl:
        veloFleetWebImg,
    },
    {
      id: 'fleet-management-mobile-app',
      title: 'Fleet Management Mobile App',
      type: 'Mobile Application',
      url: null,
      tech: ['React Native', 'REST API'],
      category: 'Mobile',
      imageUrl:
        veloFleetMobileImg
    },
  ];
  
  export default portfolio;