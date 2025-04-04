import { FaPython } from 'react-icons/fa'
import {
  upCmnPic1,
  upCmnPic2,
  upCmnPic3,
  webinarImg1,
  webinarImg2,
  webinarImg3,
  webinarImg4,
  webinarImg5,
  webinarImg6
} from './images'
import { VscVscode } from 'react-icons/vsc'
import {
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiCisco,
  SiFiverr,
  SiNumpy,
  SiPandas,
  SiPexels,
  SiUpwork,
  SiWireshark
} from 'react-icons/si'
import { MdOutlineNetworkWifi1Bar } from 'react-icons/md'

const upComingCourses = [
  {
    id: 1,
    category: 'Cyber Security',
    price: '$120',
    title: 'UI/UX Design for Web and Mobile for Kids',
    rating: 5,
    image: 'course-cat-1.jpg',
    hoverBgColor: 'bg-green-500',
    description:
      "We're your one-stop destination for unlocking your potential and conquering the digital.",
    details: {
      students: 29,
      duration: '12.5 hours'
    },
    crsDetails: `we're your one-stop destination for unlocking your potential and conquering the digital.
we're your one-stop destination for unlocking your potential and conquering the digital.we're your one-stop destination for unlocking your potential and conquering the digital.we're your one-stop destination for unlocking your potential and conquering the digital.we're your one-stop destination for unlocking your potential and conquering the digital. digital.we're your one-stop destination for unlocking your potential and conquering the digital.`,
    img: upCmnPic1
  },
  {
    id: 2,
    category: 'Cyber Security',
    price: '$120',
    title: 'Introduction to Python Programming',
    rating: 5,
    image: 'url-to-image2',
    hoverBgColor: 'bg-green-500',
    description:
      "We're your one-stop destination for unlocking your potential and conquering the digital.",
    details: {
      students: 29,
      duration: '12.5 hours'
    },
    crsDetails: `we're your one-stop destination for unlocking your potential and conquering the digital.
we're your one-stop destination for unlocking your potential and conquering the digital.we're your one-stop destination for unlocking your potential and conquering the digital.we're your one-stop destination for unlocking your potential and conquering the digital.we're your one-stop destination for unlocking your potential and conquering the digital. digital.we're your one-stop destination for unlocking your potential and conquering the digital.`,
    img: upCmnPic2
  },
  {
    id: 3,
    category: 'Graphics Design',
    price: '$20',
    title: 'UI/UX Design for Web and Mobile for Kids',
    rating: 5,
    image: 'url-to-image3',
    hoverBgColor: 'bg-green-500',
    description:
      "We're your one-stop destination for unlocking your potential and conquering the digital.",
    details: {
      students: 29,
      duration: '6.5 hours'
    },
    crsDetails: `we're your one-stop destination for unlocking your potential and conquering the digital.
we're your one-stop destination for unlocking your potential and conquering the digital.we're your one-stop destination for unlocking your potential and conquering the digital.we're your one-stop destination for unlocking your potential and conquering the digital.we're your one-stop destination for unlocking your potential and conquering the digital. digital.we're your one-stop destination for unlocking your potential and conquering the digital.`,
    img: upCmnPic3,
    button: {
      text: 'Enroll Now',
      bgColor: 'bg-green-500'
    }
  },
  {
    id: 4,
    category: 'Cyber Security',
    price: '$120',
    title: 'Data Science and Machine Learning',
    rating: 5,
    image: 'url-to-image4',
    hoverBgColor: 'bg-green-500',
    description:
      "We're your one-stop destination for unlocking your potential and conquering the digital.",
    details: {
      students: 29,
      duration: '12.5 hours'
    },
    crsDetails: `we're your one-stop destination for unlocking your potential and conquering the digital.
we're your one-stop destination for unlocking your potential and conquering the digital.we're your one-stop destination for unlocking your potential and conquering the digital.we're your one-stop destination for unlocking your potential and conquering the digital.we're your one-stop destination for unlocking your potential and conquering the digital. digital.we're your one-stop destination for unlocking your potential and conquering the digital.`,
    img: upCmnPic1
  },
  {
    id: 5,
    category: 'Cyber Security',
    price: '$120',
    title: 'UI/UX Design for Web and Mobile for Kids',
    rating: 5,
    image: 'url-to-image1',
    hoverBgColor: 'bg-green-500',
    description:
      "We're your one-stop destination for unlocking your potential and conquering the digital.",
    details: {
      students: 29,
      duration: '12.5 hours'
    },
    crsDetails: `we're your one-stop destination for unlocking your potential and conquering the digital.
we're your one-stop destination for unlocking your potential and conquering the digital.we're your one-stop destination for unlocking your potential and conquering the digital.we're your one-stop destination for unlocking your potential and conquering the digital.we're your one-stop destination for unlocking your potential and conquering the digital. digital.we're your one-stop destination for unlocking your potential and conquering the digital.`,
    img: upCmnPic1
  },
  {
    id: 6,
    category: 'Cyber Security',
    price: '$120',
    title: 'Introduction to Python Programming',
    rating: 5,
    image: 'url-to-image2',
    hoverBgColor: 'bg-green-500',
    description:
      "We're your one-stop destination for unlocking your potential and conquering the digital.",
    details: {
      students: 29,
      duration: '12.5 hours'
    },
    crsDetails: `we're your one-stop destination for unlocking your potential and conquering the digital.
we're your one-stop destination for unlocking your potential and conquering the digital.we're your one-stop destination for unlocking your potential and conquering the digital.we're your one-stop destination for unlocking your potential and conquering the digital.we're your one-stop destination for unlocking your potential and conquering the digital. digital.we're your one-stop destination for unlocking your potential and conquering the digital.`,
    img: upCmnPic2
  }
]

const freeWebinar = [
  {
    id: 1,
    category: 'Cyber Security',
    time: '9 oct 2024 9:00 pm',
    title: 'Introduction to Python Programming',
    duration: '1 Month',
    location: 'Kolkata (Hybrid)',
    img: webinarImg1
  },
  {
    id: 2,
    category: 'Cyber Security',
    time: '9 oct 2024 9:00 pm',
    title: 'Introduction to Python Programming',
    duration: '1 Month',
    location: 'Kolkata (Hybrid)',
    img: webinarImg2
  },
  {
    id: 3,
    category: 'Cyber Security',
    time: '9 oct 2024 9:00 pm',
    title: 'Introduction to Python Programming',
    duration: '1 Month',
    location: 'Kolkata (Hybrid)',
    img: webinarImg3
  },
  {
    id: 4,
    category: 'Cyber Security',
    time: '9 oct 2024 9:00 pm',
    title: 'Introduction to Python Programming',
    duration: '1 Month',
    location: 'Kolkata (Hybrid)',
    img: webinarImg4
  },
  {
    id: 5,
    category: 'Cyber Security',
    time: '9 oct 2024 9:00 pm',
    title: 'Introduction to Python Programming',
    duration: '1 Month',
    location: 'Kolkata (Hybrid)',
    img: webinarImg5
  },
  {
    id: 6,
    category: 'Cyber Security',
    time: '9 oct 2024 9:00 pm',
    title: 'Introduction to Python Programming',
    duration: '1 Month',
    location: 'Kolkata (Hybrid)',
    img: webinarImg6
  }
]
const upcommingEvents = [
  {
    id: 1,
    slug: 'graphics',
    category: 'Graphics Design',
    time: 'To be announce',
    title: 'Start Earning with Graphics Design',
    duration: '1 Month',
    location: 'Kolkata (Hybrid)',
    img: webinarImg1
  },
  {
    id: 2,
    slug: 'cnna',
    category: 'CCNA',
    time: 'To be announce',
    title: 'Networking Basics - CCNA',
    duration: '1 Month',
    location: 'Kolkata (Hybrid)',
    img: webinarImg2
  },
  {
    id: 3,
    slug: 'python',
    category: 'Python',
    time: 'To be announce',
    title: 'Understanding Python - Get Started',
    duration: '1 Month',
    location: 'Kolkata (Hybrid)',
    img: webinarImg3
  }
]

const courses = [
  {
    id: 1,
    category: 'Cyber Security',
    price: '$120',
    title: 'UI/UX Design for Web and Mobile for Kids',
    rating: 5,
    image: 'course-cat-1.jpg',
    hoverBgColor: 'bg-green-500',
    description:
      "We're your one-stop destination for unlocking your potential and conquering the digital.",
    details: {
      students: 29,
      duration: '12.5 hours'
    },
    crsDetails: `we're your one-stop destination for unlocking your potential and conquering the digital.
we're your one-stop destination for unlocking your potential and conquering the digital.we're your one-stop destination for unlocking your potential and conquering the digital.we're your one-stop destination for unlocking your potential and conquering the digital.we're your one-stop destination for unlocking your potential and conquering the digital. digital.we're your one-stop destination for unlocking your potential and conquering the digital.`,
    img: upCmnPic1
  },
  {
    id: 2,
    category: 'Cyber Security',
    price: '$120',
    title: 'Introduction to Python Programming',
    rating: 5,
    image: 'course-cat-2.jpg',
    hoverBgColor: 'bg-green-500',
    description:
      "We're your one-stop destination for unlocking your potential and conquering the digital.",
    details: {
      students: 29,
      duration: '12.5 hours'
    },
    crsDetails: `we're your one-stop destination for unlocking your potential and conquering the digital.
we're your one-stop destination for unlocking your potential and conquering the digital.we're your one-stop destination for unlocking your potential and conquering the digital.we're your one-stop destination for unlocking your potential and conquering the digital.we're your one-stop destination for unlocking your potential and conquering the digital. digital.we're your one-stop destination for unlocking your potential and conquering the digital.`,
    img: upCmnPic2
  },
  {
    id: 3,
    category: 'Graphics Design',
    price: '$20',
    title: 'UI/UX Design for Web and Mobile for Kids',
    rating: 5,
    image: 'course-cat-3.jpg',
    hoverBgColor: 'bg-green-500',
    description:
      "We're your one-stop destination for unlocking your potential and conquering the digital.",
    details: {
      students: 29,
      duration: '6.5 hours'
    },
    crsDetails: `we're your one-stop destination for unlocking your potential and conquering the digital.
we're your one-stop destination for unlocking your potential and conquering the digital.we're your one-stop destination for unlocking your potential and conquering the digital.we're your one-stop destination for unlocking your potential and conquering the digital.we're your one-stop destination for unlocking your potential and conquering the digital. digital.we're your one-stop destination for unlocking your potential and conquering the digital.`,
    img: upCmnPic3,
    button: {
      text: 'Enroll Now',
      bgColor: 'bg-green-500'
    }
  },
  {
    id: 4,
    category: 'Cyber Security',
    price: '$120',
    title: 'Data Science and Machine Learning',
    rating: 5,
    image: 'course-cat-4.jpg',
    hoverBgColor: 'bg-green-500',
    description:
      "We're your one-stop destination for unlocking your potential and conquering the digital.",
    details: {
      students: 29,
      duration: '12.5 hours'
    },
    crsDetails: `we're your one-stop destination for unlocking your potential and conquering the digital.
we're your one-stop destination for unlocking your potential and conquering the digital.we're your one-stop destination for unlocking your potential and conquering the digital.we're your one-stop destination for unlocking your potential and conquering the digital.we're your one-stop destination for unlocking your potential and conquering the digital. digital.we're your one-stop destination for unlocking your potential and conquering the digital.`,
    img: upCmnPic1
  },
  {
    id: 5,
    category: 'Cyber Security',
    price: '$120',
    title: 'UI/UX Design for Web and Mobile for Kids',
    rating: 5,
    image: 'course-cat-5.jpg',
    hoverBgColor: 'bg-green-500',
    description:
      "We're your one-stop destination for unlocking your potential and conquering the digital.",
    details: {
      students: 29,
      duration: '12.5 hours'
    },
    crsDetails: `we're your one-stop destination for unlocking your potential and conquering the digital.
we're your one-stop destination for unlocking your potential and conquering the digital.we're your one-stop destination for unlocking your potential and conquering the digital.we're your one-stop destination for unlocking your potential and conquering the digital.we're your one-stop destination for unlocking your potential and conquering the digital. digital.we're your one-stop destination for unlocking your potential and conquering the digital.`,
    img: upCmnPic1
  },
  {
    id: 6,
    category: 'Cyber Security',
    price: '$120',
    title: 'Introduction to Python Programming',
    rating: 5,
    image: 'course-cat-6.jpg',
    hoverBgColor: 'bg-green-500',
    description:
      "We're your one-stop destination for unlocking your potential and conquering the digital.",
    details: {
      students: 29,
      duration: '12.5 hours'
    },
    crsDetails: `we're your one-stop destination for unlocking your potential and conquering the digital.
we're your one-stop destination for unlocking your potential and conquering the digital.we're your one-stop destination for unlocking your potential and conquering the digital.we're your one-stop destination for unlocking your potential and conquering the digital.we're your one-stop destination for unlocking your potential and conquering the digital. digital.we're your one-stop destination for unlocking your potential and conquering the digital.`,
    img: upCmnPic2
  },
  {
    id: 7,
    category: 'Cyber Security',
    price: '$120',
    title: 'UI/UX Design for Web and Mobile for Kids',
    rating: 5,
    image: 'course-cat-7.jpg',
    hoverBgColor: 'bg-green-500',
    description:
      "We're your one-stop destination for unlocking your potential and conquering the digital.",
    details: {
      students: 29,
      duration: '12.5 hours'
    },
    crsDetails: `we're your one-stop destination for unlocking your potential and conquering the digital.
we're your one-stop destination for unlocking your potential and conquering the digital.we're your one-stop destination for unlocking your potential and conquering the digital.we're your one-stop destination for unlocking your potential and conquering the digital.we're your one-stop destination for unlocking your potential and conquering the digital. digital.we're your one-stop destination for unlocking your potential and conquering the digital.`,
    img: upCmnPic1
  },
  {
    id: 8,
    category: 'Cyber Security',
    price: '$120',
    title: 'Introduction to Python Programming',
    rating: 5,
    image: 'course-cat-8.jpg',
    hoverBgColor: 'bg-green-500',
    description:
      "We're your one-stop destination for unlocking your potential and conquering the digital.",
    details: {
      students: 29,
      duration: '12.5 hours'
    },
    crsDetails: `we're your one-stop destination for unlocking your potential and conquering the digital.
we're your one-stop destination for unlocking your potential and conquering the digital.we're your one-stop destination for unlocking your potential and conquering the digital.we're your one-stop destination for unlocking your potential and conquering the digital.we're your one-stop destination for unlocking your potential and conquering the digital. digital.we're your one-stop destination for unlocking your potential and conquering the digital.`,
    img: upCmnPic2
  },
  {
    id: 9,
    category: 'Graphics Design',
    price: '$20',
    title: 'UI/UX Design for Web and Mobile for Kids',
    rating: 5,
    image: 'course-cat-9.jpg',
    hoverBgColor: 'bg-green-500',
    description:
      "We're your one-stop destination for unlocking your potential and conquering the digital.",
    details: {
      students: 29,
      duration: '6.5 hours'
    },
    crsDetails: `we're your one-stop destination for unlocking your potential and conquering the digital.
we're your one-stop destination for unlocking your potential and conquering the digital.we're your one-stop destination for unlocking your potential and conquering the digital.we're your one-stop destination for unlocking your potential and conquering the digital.we're your one-stop destination for unlocking your potential and conquering the digital. digital.we're your one-stop destination for unlocking your potential and conquering the digital.`,
    img: upCmnPic3,
    button: {
      text: 'Enroll Now',
      bgColor: 'bg-green-500'
    }
  },
  {
    id: 10,
    category: 'Cyber Security',
    price: '$120',
    title: 'Data Science and Machine Learning',
    rating: 5,
    image: 'course-cat-10.jpg',
    hoverBgColor: 'bg-green-500',
    description:
      "We're your one-stop destination for unlocking your potential and conquering the digital.",
    details: {
      students: 29,
      duration: '12.5 hours'
    },
    crsDetails: `we're your one-stop destination for unlocking your potential and conquering the digital.
we're your one-stop destination for unlocking your potential and conquering the digital.we're your one-stop destination for unlocking your potential and conquering the digital.we're your one-stop destination for unlocking your potential and conquering the digital.we're your one-stop destination for unlocking your potential and conquering the digital. digital.we're your one-stop destination for unlocking your potential and conquering the digital.`,
    img: upCmnPic1
  },
  {
    id: 11,
    category: 'Cyber Security',
    price: '$120',
    title: 'UI/UX Design for Web and Mobile for Kids',
    rating: 5,
    image: 'course-cat-11.jpg',
    hoverBgColor: 'bg-green-500',
    description:
      "We're your one-stop destination for unlocking your potential and conquering the digital.",
    details: {
      students: 29,
      duration: '12.5 hours'
    },
    crsDetails: `we're your one-stop destination for unlocking your potential and conquering the digital.
we're your one-stop destination for unlocking your potential and conquering the digital.we're your one-stop destination for unlocking your potential and conquering the digital.we're your one-stop destination for unlocking your potential and conquering the digital.we're your one-stop destination for unlocking your potential and conquering the digital. digital.we're your one-stop destination for unlocking your potential and conquering the digital.`,
    img: upCmnPic1
  },
  {
    id: 12,
    category: 'Cyber Security',
    price: '$120',
    title: 'Introduction to Python Programming',
    rating: 5,
    image: 'course-cat-12.jpg',
    hoverBgColor: 'bg-green-500',
    description:
      "We're your one-stop destination for unlocking your potential and conquering the digital.",
    details: {
      students: 29,
      duration: '12.5 hours'
    },
    crsDetails: `we're your one-stop destination for unlocking your potential and conquering the digital.
we're your one-stop destination for unlocking your potential and conquering the digital.we're your one-stop destination for unlocking your potential and conquering the digital.we're your one-stop destination for unlocking your potential and conquering the digital.we're your one-stop destination for unlocking your potential and conquering the digital. digital.we're your one-stop destination for unlocking your potential and conquering the digital.`,
    img: upCmnPic2
  }
]

const filterCourse = [
  {
    id: 1,
    lecture: '24',
    duration: '3 months',
    projects: '9',
    Certificate:
      'Participants completing every assignment and the final exams with a minimum 50% mark will earn a course certificate. A digital copy of the certificate is available for download online. Hard copies will not be supplied.',
    Access:
      "Buying the course entitles you to access to all course content. Once the period ends, you don't have to worry about recurring charges.",
    interview:
      'Positions in Data Science and Machine Learning are in high demand in today’s competitive job market. As a Data Analyst, Machine Learning Engineer etc.The increased confidence gained through mastering these concepts will help you navigate interviews with ease!',
    curriculum: [
      { cid: 1, c: 'Foundations & Introduction of Data Science' },
      { cid: 2, c: 'Data Wrangling & Cleaning' },
      { cid: 3, c: 'Statistics for Data Science' },
      { cid: 4, c: 'Data Visualization' },
      { cid: 5, c: ' Introduction to Machine Learning' },
      { cid: 6, c: ' Supervised Learning - Regression' },
      { cid: 7, c: 'Supervised Learning - Classification' },
      { cid: 8, c: 'Unsupervised Learning' },
      { cid: 9, c: 'Neural Networks & Deep Learning' },
      { cid: 10, c: 'Neural Networks & Deep Learning' },
      { cid: 11, c: 'Natural Language Processing (NLP)' },
      { cid: 12, c: 'Big Data and Tools' },
      { cid: 13, c: 'Python' },
      { cid: 14, c: 'SQL' },
      { cid: 15, c: 'Google Colab' },
      { cid: 16, c: 'Microsoft Azure ML Studio' }
    ],

    features: [
      {
        title1: '12 Assignments',
        overView1:
          'Unlock the power of data with our Data Science and Machine Learning course! Dive into the art of analyzing and transforming raw data into actionable insights, while mastering cutting-edge machine learning algorithms. From data cleaning and statistical analysis to building predictive models with Python and TensorFlow. Learn how to harness data to make smarter choices, uncover patterns, and build intelligent systems that evolve. Get ready to shape the future—one dataset at a time!',
        description1:
          'Assignment solutions will be posted on GitHub or Slack after the course for self-practice.'
      },
      {
        title2: '30+ Quizzes',
        overView2:
          'Unlock the power of data with our Data Science and Machine Learning course! Dive into the art of analyzing and transforming raw data into actionable insights, while mastering cutting-edge machine learning algorithms. From data cleaning and statistical analysis to building predictive models with Python and TensorFlow. Learn how to harness data to make smarter choices, uncover patterns, and build intelligent systems that evolve. Get ready to shape the future—one dataset at a time!',
        description2:
          'At the end of each video, quizzes with answers and explanations are available, letting you monitor your learning progress.'
      },
      {
        title3: 'Live sessions',
        overView3:
          'Unlock the power of data with our Data Science and Machine Learning course! Dive into the art of analyzing and transforming raw data into actionable insights, while mastering cutting-edge machine learning algorithms. From data cleaning and statistical analysis to building predictive models with Python and TensorFlow. Learn how to harness data to make smarter choices, uncover patterns, and build intelligent systems that evolve. Get ready to shape the future—one dataset at a time!',
        description3:
          'Live meetings are scheduled weekly, engaging in crucial assignment discussions, allowing you to inquire about different topics directly.'
      },
      {
        title4: '9 Projects',
        overView4: `Unlock the power of data with our Data Science and Machine Learning course! Dive into the art of analyzing and transforming raw data into actionable insights, while mastering cutting-edge machine learning algorithms. From data cleaning and statistical analysis to building predictive models with Python and TensorFlow. Learn how to harness data to make smarter choices, uncover patterns, and build intelligent systems that evolve. Get ready to shape the future—one dataset at a time!`,
        description4: `We embraced a project-centric learning methodology for the duration of the course. There are 9 projects planned for completion in the course.`
      }
    ],

    overView:
      'Unlock the power of data with our Data Science and Machine Learning course! Dive into the art of analyzing and transforming raw data into actionable insights, while mastering cutting-edge machine learning algorithms. From data cleaning and statistical analysis to building predictive models with Python and TensorFlow. Learn how to harness data to make smarter choices, uncover patterns, and build intelligent systems that evolve. Get ready to shape the future—one dataset at a time!',
    para: "Welcome to the Data Science course—where numbers are your new best friends, and you'll be turning data into wow! Ever wonder how Netflix knows exactly what you want to watch next? Or how your email filters out those very important spam messages? It’s all thanks to data science! In this course, we’ll teach you how to wrangle data like a pro, predict the future like a fortune teller, and make decisions based on solid facts (no magic ball needed!). So grab your laptop, get ready to crack some codes, and let’s make data your superpower by analyzing data, building predictive models, and extracting valuable insights—because who says learning can’t be fun?",

    category: 'Data Science and AI',
    price: '$120',
    title: 'Data Science and Machine Learning Course',
    rating: 5,
    image: 'assets/images/course-cat-4.jpg',
    hoverBgColor: 'bg-green-500',
    description:
      "Welcome to the Data Science course—where numbers are your new best friends, and you'll be turning data into wow!...",
    details: {
      students: 29,
      duration: '12.5 hours'
    },
    crsDetails: `Welcome to the Data Science course—where numbers are your new best friends, and you'll be turning data into wow! Ever wonder how Netflix knows exactly what you want to watch next? Or how your email filters out those very important spam messages? It’s all thanks to data science! In this course, we’ll teach you how to wrangle data like a pro, predict the future like a fortune teller, and make decisions based on solid facts (no magic ball needed!). So grab your laptop, get ready to crack some codes, and let’s make data your superpower by analyzing data, building predictive models, and extracting valuable insights—because who says learning can’t be fun?`,
    img: upCmnPic2
  },

  {
    id: 2,
    lecture: '36',
    duration: '3 month',
    projects: '9',
    Certificate:
      'Participants completing every assignment and the final exams with a minimum 50% mark will earn a course certificate. A digital copy of the certificate is available for download online. Hard copies will not be supplied.',
    Access:
      "Buying the course entitles you to access to all course content. Once the period ends, you don't have to worry about recurring charges.",
    interview:
      'Graphic Design professionals are in high demand across industries as brands prioritize visual storytelling and digital presence. Roles such as Graphic Designer, Brand Designer, and Visual Content Creator are actively sought after by companies worldwide. This course equips you with the creative and technical skills to excel in design interviews, build an impressive portfolio, and contribute to impactful projects in the dynamic world of design.',
    curriculum: [
      { cid: 1, c: 'Introduction to Graphic Design' },
      { cid: 2, c: 'Principles of Design' },
      { cid: 3, c: 'Exploring Typography' },
      { cid: 4, c: 'Understanding Color Theory' },
      { cid: 5, c: 'Layout and Composition' },
      { cid: 6, c: 'Branding Essentials' },
      { cid: 7, c: 'Introduction to Digital Illustration' },
      { cid: 8, c: 'Social Media Graphics' },
      { cid: 9, c: 'Packaging Design' },
      { cid: 10, c: 'Web and Mobile Design' },
      { cid: 11, c: 'Capstone Project Guidance' },
      { cid: 12, c: 'Presentation and Portfolio Building' },
      { cid: 13, c: 'Adobe Photoshop' },
      { cid: 14, c: 'Adobe Illustrator' },
      { cid: 15, c: 'Pexels' }
    ],
    features: [
      {
        title1: '25 Assignments',
        overView1:
          'Unlock the power of data with our Data Science and Machine Learning course! Dive into the art of analyzing and transforming raw data into actionable insights, while mastering cutting-edge machine learning algorithms. From data cleaning and statistical analysis to building predictive models with Python and TensorFlow. Learn how to harness data to make smarter choices, uncover patterns, and build intelligent systems that evolve. Get ready to shape the future—one dataset at a time!',
        description1:
          'Assignment solutions will be posted on GitHub or Slack after the course for self-practice.'
      },
      {
        title2: '40+ Quizzes',
        overView2:
          'Unlock the power of data with our Data Science and Machine Learning course! Dive into the art of analyzing and transforming raw data into actionable insights, while mastering cutting-edge machine learning algorithms. From data cleaning and statistical analysis to building predictive models with Python and TensorFlow. Learn how to harness data to make smarter choices, uncover patterns, and build intelligent systems that evolve. Get ready to shape the future—one dataset at a time!',
        description2:
          'At the end of each video, quizzes with answers and explanations are available, letting you monitor your learning progress.'
      },
      {
        title3: 'Live sessions',
        overView3:
          'Unlock the power of data with our Data Science and Machine Learning course! Dive into the art of analyzing and transforming raw data into actionable insights, while mastering cutting-edge machine learning algorithms. From data cleaning and statistical analysis to building predictive models with Python and TensorFlow. Learn how to harness data to make smarter choices, uncover patterns, and build intelligent systems that evolve. Get ready to shape the future—one dataset at a time!',
        description3:
          'Live meetings are scheduled weekly, engaging in crucial assignment discussions, allowing you to inquire about different topics directly.'
      },
      {
        title4: '9 Projects',
        overView4: `Unlock the power of data with our Data Science and Machine Learning course! Dive into the art of analyzing and transforming raw data into actionable insights, while mastering cutting-edge machine learning algorithms. From data cleaning and statistical analysis to building predictive models with Python and TensorFlow. Learn how to harness data to make smarter choices, uncover patterns, and build intelligent systems that evolve. Get ready to shape the future—one dataset at a time!`,
        description4: `We embraced a project-centric learning methodology for the duration of the course. There are 9 projects planned for completion in the course.`
      }
    ],
    overView:
      'Unlock the power of data with our Data Science and Machine Learning course! Dive into the art of analyzing and transforming raw data into actionable insights, while mastering cutting-edge machine learning algorithms. From data cleaning and statistical analysis to building predictive models with Python and TensorFlow. Learn how to harness data to make smarter choices, uncover patterns, and build intelligent systems that evolve. Get ready to shape the future—one dataset at a time!',
    para: `Discover how to blend shapes, colors, and typography into designs that not only look good but also communicate effectively. Don't worry about starting from scratch—this course is tailored for beginners, so no previous experience is needed.
But this isn’t just another boring lecture series. Expect interactive activities, creative challenges, and even a few design "myths" busted along the way. ( As it says: You don’t need to be an artist to be a great designer! ) Get ready to shape the future—one design at a time. `,

    category: 'Graphics Design',
    price: '$120',
    title: 'Graphic Design Essentials: An Introductory Course',
    rating: 5,
    image: 'assets/images/course-cat-2.jpg',
    hoverBgColor: 'bg-green-500',
    description:
      'Discover how to blend shapes, colors, and typography into designs that not only look good but also communicate effectively...',
    details: {
      students: 29,
      duration: '12.5 hours'
    },
    crsDetails: `Discover how to blend shapes, colors, and typography into designs that not only look good but also communicate effectively. Don't worry about starting from scratch—this course is tailored for beginners, so no previous experience is needed.
But this isn’t just another boring lecture series. Expect interactive activities, creative challenges, and even a few design "myths" busted along the way. ( As it says: You don’t need to be an artist to be a great designer! ) Get ready to shape the future—one design at a time. `,
    img: upCmnPic1
  },

  {
    id: 3,
    lecture: '36',
    duration: '3 months',
    projects: '6',
    Certificate:
      'Participants completing every assignment and the final exams with a minimum 50% mark will earn a course certificate. A digital copy of the certificate is available for download online. Hard copies will not be supplied.',
    Access:
      "Buying the course entitles you to access to all course content. Once the period ends, you don't have to worry about recurring charges.",
    interview:
      'Positions in Data Science and Machine Learning are in high demand in today’s competitive job market. As a Data Analyst, Machine Learning Engineer, Data Science Consultant, Robotics Engineer etc.The increased confidence gained through mastering these concepts will help you navigate interviews with ease, positioning you as a strong contender for these coveted roles!',
    curriculum: [
      { cid: 1, c: 'Python Basics' },
      { cid: 2, c: 'Data Types and Variables' },
      { cid: 3, c: 'Control Flow' },
      { cid: 4, c: 'Functions and Modules' },
      { cid: 5, c: 'Working with Files' },
      { cid: 6, c: 'Error Handling' },
      { cid: 7, c: 'Data Structures' },
      { cid: 8, c: 'Python Libraries Introduction' },
      { cid: 9, c: 'Object-Oriented Programming (OOP)' },
      { cid: 10, c: 'Introduction to APIs' },
      { cid: 11, c: 'Final Project Preparation' },
      { cid: 12, c: 'Capstone Project Presentation' },
      { cid: 13, c: 'Jupyter Notebook' },
      { cid: 14, c: 'VS Code' },
      { cid: 15, c: 'NumPy' },
      { cid: 16, c: 'Matplotlib' },
      { cid: 17, c: 'Pandas' }
    ],

    features: [
      {
        title1: '25 Assignments',
        overView1:
          'Unlock the power of data with our Data Science and Machine Learning course! Dive into the art of analyzing and transforming raw data into actionable insights, while mastering cutting-edge machine learning algorithms. From data cleaning and statistical analysis to building predictive models with Python and TensorFlow. Learn how to harness data to make smarter choices, uncover patterns, and build intelligent systems that evolve. Get ready to shape the future—one dataset at a time!',
        description1:
          'Assignment solutions will be posted on GitHub or Slack after the course for self-practice.'
      },
      {
        title2: '40+ Quizzes',
        overView2:
          'At the end of each video, quizzes with answers and explanations are available, letting you monitor your learning progress.',
        description2:
          'At the end of each video, quizzes with answers and explanations are available, letting you monitor your learning progress.'
      },
      {
        title3: 'Live sessions',
        overView3:
          'Unlock the power of data with our Data Science and Machine Learning course! Dive into the art of analyzing and transforming raw data into actionable insights, while mastering cutting-edge machine learning algorithms. From data cleaning and statistical analysis to building predictive models with Python and TensorFlow. Learn how to harness data to make smarter choices, uncover patterns, and build intelligent systems that evolve. Get ready to shape the future—one dataset at a time!',
        description3:
          'Live meetings are scheduled weekly, engaging in crucial assignment discussions, allowing you to inquire about different topics directly.'
      },
      {
        title4: '6 Projects',
        overView4: `Unlock the power of data with our Data Science and Machine Learning course! Dive into the art of analyzing and transforming raw data into actionable insights, while mastering cutting-edge machine learning algorithms. From data cleaning and statistical analysis to building predictive models with Python and TensorFlow. Learn how to harness data to make smarter choices, uncover patterns, and build intelligent systems that evolve. Get ready to shape the future—one dataset at a time!`,
        description4: `We embraced a project-centric learning methodology for the duration of the course. There are 6 projects planned for completion in the course.`
      }
    ],
    overView:
      'Unleash your inner coder with our Introduction to Python Programming course! Learn the art of turning ideas into working code with a language that’s as versatile as it is beginner-friendly. From writing your first line of Python to automating tasks and solving real-world problems, this course covers it all. ',
    para: `Embark on a comprehensive React journey with our Python Programming Course, where coding becomes as intuitive as slicing through butter! This beginner-friendly course will introduce you to the magic of programming with Python, a language loved by techies and meme-makers alike.
From writing your first “Hello, World!” to create small programs that can actually do something, we’ll guide you every step of the way. By the end of this course, you’ll have the skills to solve real-world problems with Python and the confidence. `,

    category: 'Programming',
    price: '$120',
    title: 'Introduction to Python Programming',
    rating: 5,
    image: 'assets/images/course-cat-3.jpg',
    hoverBgColor: 'bg-green-500',
    description:
      'Embark on a comprehensive React journey with our Python Programming Course, where coding becomes as intuitive as slicing through butter! This beginner-friendly course will introduce...',
    details: {
      students: 29,
      duration: '12.5 hours'
    },
    crsDetails: `Embark on a comprehensive React journey with our Python Programming Course, where coding becomes as intuitive as slicing through butter! This beginner-friendly course will introduce you to the magic of programming with Python, a language loved by techies and meme-makers alike.
From writing your first “Hello, World!” to create small programs that can actually do something, we’ll guide you every step of the way. By the end of this course, you’ll have the skills to solve real-world problems with Python and the confidence. `,
    img: upCmnPic2
  },

  {
    id: 4,
    lecture: '24',
    duration: '3 months',
    projects: '6',
    Certificate:
      'Participants completing every assignment and the final exams with a minimum 50% mark will earn a course certificate. A digital copy of the certificate is available for download online. Hard copies will not be supplied.',
    Access:
      "Buying the course entitles you to access to all course content. Once the period ends, you don't have to worry about recurring charges.",
    interview:
      'Positions in Data Science and Machine Learning are in high demand in today’s competitive job market. As a Data Analyst, Machine Learning Engineer, Data Science Consultant, Robotics Engineer etc.The increased confidence gained through mastering these concepts will help you navigate interviews with ease, positioning you as a strong contender for these coveted roles!',
    curriculum: [
      { cid: 1, c: 'Foundations & Introduction of Data Science' },
      { cid: 2, c: 'Data Wrangling & Cleaning' },
      { cid: 3, c: 'Statistics for Data Science' },
      { cid: 4, c: 'Data Visualization' },
      { cid: 5, c: ' Introduction to Machine Learning' },
      { cid: 6, c: ' Supervised Learning - Regression' },
      { cid: 7, c: 'Supervised Learning - Classification' },
      { cid: 8, c: 'Unsupervised Learning' },
      { cid: 9, c: 'Neural Networks & Deep Learning' },
      { cid: 10, c: 'Neural Networks & Deep Learning' },
      { cid: 11, c: 'Natural Language Processing (NLP)' },
      { cid: 12, c: 'Big Data and Tools' },
      { cid: 13, c: 'Python' },
      { cid: 14, c: 'SQL' },
      { cid: 15, c: 'Google Colab' },
      { cid: 16, c: 'Microsoft Azure ML Studio' }
    ],
    features: [
      {
        title1: '12 Assignments',
        overView1:
          'Unlock the power of data with our Data Science and Machine Learning course! Dive into the art of analyzing and transforming raw data into actionable insights, while mastering cutting-edge machine learning algorithms. From data cleaning and statistical analysis to building predictive models with Python and TensorFlow. Learn how to harness data to make smarter choices, uncover patterns, and build intelligent systems that evolve. Get ready to shape the future—one dataset at a time!',
        description1:
          'Assignment solutions will be posted on GitHub or Slack after the course for self-practice.'
      },
      {
        title2: '30 Quizzes',
        overView2:
          'Unlock the power of data with our Data Science and Machine Learning course! Dive into the art of analyzing and transforming raw data into actionable insights, while mastering cutting-edge machine learning algorithms. From data cleaning and statistical analysis to building predictive models with Python and TensorFlow. Learn how to harness data to make smarter choices, uncover patterns, and build intelligent systems that evolve. Get ready to shape the future—one dataset at a time!',
        description2:
          'At the end of each video, quizzes with answers and explanations are available, letting you monitor your learning progress.'
      },
      {
        title3: 'Live sessions',
        overView3:
          'Unlock the power of data with our Data Science and Machine Learning course! Dive into the art of analyzing and transforming raw data into actionable insights, while mastering cutting-edge machine learning algorithms. From data cleaning and statistical analysis to building predictive models with Python and TensorFlow. Learn how to harness data to make smarter choices, uncover patterns, and build intelligent systems that evolve. Get ready to shape the future—one dataset at a time!',
        description3:
          'Live meetings are scheduled weekly, engaging in crucial assignment discussions, allowing you to inquire about different topics directly.'
      },
      {
        title4: '6 Projects',
        overView4: `Unlock the power of data with our Data Science and Machine Learning course! Dive into the art of analyzing and transforming raw data into actionable insights, while mastering cutting-edge machine learning algorithms. From data cleaning and statistical analysis to building predictive models with Python and TensorFlow. Learn how to harness data to make smarter choices, uncover patterns, and build intelligent systems that evolve. Get ready to shape the future—one dataset at a time!`,
        description4: `We embraced a project-centric learning methodology for the duration of the course. There are 6 projects planned for completion in the course.`
      }
    ],
    overView:
      "In this UI/UX Design for Web course, participants will  descend into the fundamentals of creating visually appealing and user-friendly websites. They'll learn how to design intuitive interfaces, build engaging user experiences, and apply best practices in layout, navigation, and accessibility. From wireframing to prototyping and usability testing, we’ll cover it all. Learn how to transform any website into a seamless, enjoyable experience for users.",
    para: "Welcome to the UI/UX Design for Web course, where we turn confusing websites into smooth, user-friendly experiences! Ever been on a site so confusing you felt like you needed a GPS to find the Contact Us button? Well, we’re here to fix that! In this course, you’ll learn to design websites that not only look awesome but are also easy to navigate. So, buckle up and let's create some web magic!",

    category: 'UI/UX Design',
    price: '$120',
    title: 'UI/UX Design for Web Course',
    rating: 5,
    image: 'assets/images/course-cat-1.jpg',
    hoverBgColor: 'bg-green-500',
    description:
      'Welcome to the UI/UX Design for Web course, where we turn confusing websites into smooth, user-friendly experiences! Ever been on a site so confusing you felt like you needed a GPS to...',
    details: {
      students: 29,
      duration: '12.5 hours'
    },
    crsDetails: `Welcome to the UI/UX Design for Web course, where we turn confusing websites into smooth, user-friendly experiences! Ever been on a site so confusing you felt like you needed a GPS to find the Contact Us button? Well, we’re here to fix that! In this course, you’ll learn to design websites that not only look awesome but are also easy to navigate. So, buckle up and let's create some web magic!`,
    img: upCmnPic1
  },

  {
    id: 5,
    lecture: '36',
    duration: '3 months',
    projects: '6',
    Certificate:
      'Participants completing every assignment and the final exams with a minimum 50% mark will earn a course certificate. A digital copy of the certificate is available for download online. Hard copies will not be supplied.',
    Access:
      "Buying the course entitles you to access to all course content. Once the period ends, you don't have to worry about recurring charges.",
    interview:
      'Positions in Ethical Hacking and Penetration Testing are in high demand as cybersecurity becomes a critical focus for businesses worldwide. Roles like Penetration Tester, Security Analyst, or Ethical Hacker offer exciting opportunities to safeguard digital infrastructures and protect sensitive data from cyber threats. This course will prepare you to confidently tackle technical interviews.',
    curriculum: [
      { cid: 1, c: 'Introduction to Ethical Hacking' },
      { cid: 2, c: 'Networking and Protocol Basics' },
      { cid: 3, c: 'Reconnaissance and Information Gathering' },
      { cid: 4, c: 'Vulnerability Analysis' },
      { cid: 5, c: 'Exploitation and Gaining Access' },
      { cid: 6, c: 'Web Application Security' },
      { cid: 7, c: 'Wireless Network Security' },
      { cid: 8, c: 'Social Engineering' },
      { cid: 9, c: 'Post-Exploitation and Reporting' },
      { cid: 10, c: 'Burp Suite' },
      { cid: 11, c: 'Metasploit Framework' },
      { cid: 12, c: 'Wireshark' },
      { cid: 13, c: 'Nmap' }
      // { cid: 14, c: "SQL" },
      // { cid: 15, c: "Google Colab" },
      // { cid: 16, c: "Microsoft Azure ML Studio" },
    ],
    features: [
      {
        title1: '12 Assignments',
        overView1:
          'Unlock the power of data with our Data Science and Machine Learning course! Dive into the art of analyzing and transforming raw data into actionable insights, while mastering cutting-edge machine learning algorithms. From data cleaning and statistical analysis to building predictive models with Python and TensorFlow. Learn how to harness data to make smarter choices, uncover patterns, and build intelligent systems that evolve. Get ready to shape the future—one dataset at a time!',
        description1:
          'Assignment solutions will be posted on GitHub or Slack after the course for self-practice.'
      },
      {
        title2: '30 Quizzes',
        overView2:
          'Unlock the power of data with our Data Science and Machine Learning course! Dive into the art of analyzing and transforming raw data into actionable insights, while mastering cutting-edge machine learning algorithms. From data cleaning and statistical analysis to building predictive models with Python and TensorFlow. Learn how to harness data to make smarter choices, uncover patterns, and build intelligent systems that evolve. Get ready to shape the future—one dataset at a time!',
        description2:
          'At the end of each video, quizzes with answers and explanations are available, letting you monitor your learning progress.'
      },
      {
        title3: 'Live sessions',
        overView3:
          'Unlock the power of data with our Data Science and Machine Learning course! Dive into the art of analyzing and transforming raw data into actionable insights, while mastering cutting-edge machine learning algorithms. From data cleaning and statistical analysis to building predictive models with Python and TensorFlow. Learn how to harness data to make smarter choices, uncover patterns, and build intelligent systems that evolve. Get ready to shape the future—one dataset at a time!',
        description3:
          'Live meetings are scheduled weekly, engaging in crucial assignment discussions, allowing you to inquire about different topics directly.'
      },
      {
        title4: '12 Projects',
        overView4: `Unlock the power of data with our Data Science and Machine Learning course! Dive into the art of analyzing and transforming raw data into actionable insights, while mastering cutting-edge machine learning algorithms. From data cleaning and statistical analysis to building predictive models with Python and TensorFlow. Learn how to harness data to make smarter choices, uncover patterns, and build intelligent systems that evolve. Get ready to shape the future—one dataset at a time!`,
        description4: `Positions in Ethical Hacking and Penetration Testing are in high demand  Roles like Penetration Tester, Security Analyst, or Ethical Hacker offer exciting opportunities to safeguard digital infrastructures and protect sensitive data from cyber threats. This course will prepare you to confidently tackle technical interviews.
`
      }
    ],
    overView: `Participants will master the art of securing systems by thinking like a hacker. They’ll learn how to identify vulnerabilities, test defenses, and protect networks from cyber threats. From reconnaissance and vulnerability scanning to exploitation and reporting, this will cover every phase of ethical hacking. Using industry-standard tools and real-world scenarios, participants will master the skills needed to safeguard digital environments and stay one step ahead of cybercriminals. 
`,
    para: `Ever wanted to legally hack into something and get praised for it? Well, you're in the right place! This course is your backstage pass to the world of ethical hacking—think of it as "Good Guy Hacking: 101."
We’ll teach you how to outsmart the cyber villains, uncover vulnerabilities, and turn weaknesses into strengths. Along the way, become the person companies call when they want their digital doors checked for cracks. Because let’s face it—someone’s needed to keep the internet safe. 
Ready to hack the system (ethically, of course)!
`,

    category: 'Ethical Hacking',
    price: '$120',
    title: 'Ethical Hacking and Penetration Testing',
    rating: 5,
    image: 'assets/images/course-cat-5.jpg',
    hoverBgColor: 'bg-green-500',
    description:
      "Ever wanted to legally hack into something and get praised for it? Well, you're in the right place! This course is your backstage pass to the world of ethical hacking—think of it as Good Guy Hacking: 101...",
    details: {
      students: 29,
      duration: '12.5 hours'
    },
    crsDetails: `Ever wanted to legally hack into something and get praised for it? Well, you're in the right place! This course is your backstage pass to the world of ethical hacking—think of it as "Good Guy Hacking: 101."
We’ll teach you how to outsmart the cyber villains, uncover vulnerabilities, and turn weaknesses into strengths. Along the way, become the person companies call when they want their digital doors checked for cracks. Because let’s face it—someone’s needed to keep the internet safe. 
Ready to hack the system (ethically, of course)!`,
    img: upCmnPic1
  },

  {
    id: 6,
    lecture: '36',
    duration: '3 month',
    projects: '9',
    Certificate:
      'Participants completing every assignment and the final exams with a minimum 50% mark will earn a course certificate. A digital copy of the certificate is available for download online. Hard copies will not be supplied.',
    Access:
      "Buying the course entitles you to access to all course content. Once the period ends, you don't have to worry about recurring charges.",
    interview:
      'Network Administrators are in high demand! This CCNA course prepares you to excel in roles like Network Engineer and IT Support Specialist. Ready to be the expert every company needs? Let’s dive in!',
    curriculum: [
      { cid: 1, c: 'Introduction to Networking' },
      { cid: 2, c: 'IP Addressing' },
      { cid: 3, c: 'Routing Basics' },
      { cid: 4, c: 'Switching Concepts' },
      { cid: 5, c: 'Routing Protocols Deep Dive' },
      { cid: 6, c: 'Network Security' },
      { cid: 7, c: 'Wireless Networking' },
      { cid: 8, c: 'Troubleshooting Basics' },
      { cid: 9, c: 'Advanced Routing and Switching' },
      { cid: 10, c: 'Network Automation' },
      { cid: 11, c: 'Real-World Network Scenarios' },
      { cid: 12, c: 'Final Project and Exam Preparation' },
      { cid: 13, c: 'Cisco Packet Tracer' },
      { cid: 14, c: 'GNS3' },
      { cid: 15, c: 'Wireshark' }
    ],
    features: [
      {
        title1: '25 Assignments',
        overView1:
          'Unlock the power of data with our Data Science and Machine Learning course! Dive into the art of analyzing and transforming raw data into actionable insights, while mastering cutting-edge machine learning algorithms. From data cleaning and statistical analysis to building predictive models with Python and TensorFlow. Learn how to harness data to make smarter choices, uncover patterns, and build intelligent systems that evolve. Get ready to shape the future—one dataset at a time!',
        description1:
          'Assignment solutions will be posted on GitHub or Slack after the course for self-practice.'
      },
      {
        title2: '40+ Quizzes',
        overView2:
          'Unlock the power of data with our Data Science and Machine Learning course! Dive into the art of analyzing and transforming raw data into actionable insights, while mastering cutting-edge machine learning algorithms. From data cleaning and statistical analysis to building predictive models with Python and TensorFlow. Learn how to harness data to make smarter choices, uncover patterns, and build intelligent systems that evolve. Get ready to shape the future—one dataset at a time!',
        description2:
          'At the end of each video, quizzes with answers and explanations are available, letting you monitor your learning progress.'
      },
      {
        title3: 'Live sessions',
        overView3:
          'Unlock the power of data with our Data Science and Machine Learning course! Dive into the art of analyzing and transforming raw data into actionable insights, while mastering cutting-edge machine learning algorithms. From data cleaning and statistical analysis to building predictive models with Python and TensorFlow. Learn how to harness data to make smarter choices, uncover patterns, and build intelligent systems that evolve. Get ready to shape the future—one dataset at a time!',
        description3:
          'Live meetings are scheduled weekly, engaging in crucial assignment discussions, allowing you to inquire about different topics directly.'
      },
      {
        title4: '9 Projects',
        overView4: `Unlock the power of data with our Data Science and Machine Learning course! Dive into the art of analyzing and transforming raw data into actionable insights, while mastering cutting-edge machine learning algorithms. From data cleaning and statistical analysis to building predictive models with Python and TensorFlow. Learn how to harness data to make smarter choices, uncover patterns, and build intelligent systems that evolve. Get ready to shape the future—one dataset at a time!`,
        description4: `We embraced a project-centric learning methodology for the duration of the course. There are 9 projects planned for completion in the course.`
      }
    ],
    overView: `Step into the world of networks. In this course, you’ll learn how to connect the dots or more accurately, the routers and switches! We’ll take you from zero to network hero, teaching you how to set up and manage networks like a pro.
You’ll master the basics of IP addressing, configure routers, troubleshoot network issues, and even secure your network from the digital bad guys.Think of it as your backstage pass to the tech world where Wi-Fi issues are no longer your problem, but your solutions!
`,
    para: `Welcome to the world of networks, where routers and switches aren't just gadgets they're the backbone of the digital universe! In this fun and interactive CCNA course, you'll learn how to connect, secure, and manage networks, turning you into the go-to tech hero for any connectivity problem.
From setting up your first network to troubleshooting like a pro, we'll cover the essentials of IP addressing, routing, switching, and network security without the jargon overload. Ready to build networks that work and stop that endless buffering? Let’s get started!
`,

    category: 'Cyber Security',
    price: '$120',
    title: 'Network Administration (CCNA)',
    rating: 5,
    image: 'assets/images/course-cat-6.jpg',
    hoverBgColor: 'bg-green-500',
    description:
      "Welcome to the world of networks, where routers and switches aren't just gadgets they're the backbone of the digital universe! In this fun and interactive CCNA course, you'll learn how to...",
    details: {
      students: 29,
      duration: '12.5 hours'
    },
    crsDetails: `Welcome to the world of networks, where routers and switches aren't just gadgets they're the backbone of the digital universe! In this fun and interactive CCNA course, you'll learn how to connect, secure, and manage networks, turning you into the go-to tech hero for any connectivity problem.
From setting up your first network to troubleshooting like a pro, we'll cover the essentials of IP addressing, routing, switching, and network security without the jargon overload. Ready to build networks that work and stop that endless buffering? Let’s get started!`,
    img: upCmnPic1
  },

  {
    id: 7,
    lecture: '36',
    duration: '3 months',
    projects: '6',

    Certificate:
      'Participants completing every assignment and the final exams with a minimum 50% mark will earn a course certificate. A digital copy of the certificate is available for download online. Hard copies will not be supplied.',
    Access:
      "Buying the course entitles you to access to all course content. Once the period ends, you don't have to worry about recurring charges.",
    interview:
      'Positions in Web Development are now in high demand globally . Roles such as Front-end Developer, Back-end Developer, Full-stack Developer, and Web Development Specialist are actively sought by companies across various industries. Mastering web development concepts will give you the confidence and skills to excel in technical interviews.',

    curriculum: [
      { cid: 1, c: 'Introduction to Web Development' },
      { cid: 2, c: 'HTML Basics' },
      { cid: 3, c: 'CSS Styling' },
      { cid: 4, c: 'JavaScript Fundamentals' },
      { cid: 5, c: 'Responsive Web Design' },
      { cid: 6, c: 'Advanced CSS Techniques' },
      { cid: 7, c: 'JavaScript and Web Interactivity' },
      { cid: 8, c: 'Version Control with Git and GitHub' },
      { cid: 9, c: 'Web Development Frameworks' },
      { cid: 10, c: 'Project Work' },
      { cid: 11, c: 'Deployment and Hosting' },
      { cid: 12, c: 'Visual Studio Code (VS Code)' },
      { cid: 13, c: 'GitHub' },
      { cid: 14, c: 'Bootstrap' }
      // { cid: 15, c: "Google Colab" },
      // { cid: 16, c: "Microsoft Azure ML Studio" },
    ],

    features: [
      {
        title1: '25 Assignments',
        overView1:
          'Assignment solutions will be posted on GitHub or Slack after the course for self-practice.',
        description1:
          'Assignment solutions will be posted on GitHub or Slack after the course for self-practice.'
      },
      {
        title2: '40+ Quizzes',
        overView2:
          'At the end of each video, quizzes with answers and explanations are available, letting you monitor your learning progress.',
        description2:
          'At the end of each video, quizzes with answers and explanations are available, letting you monitor your learning progress.'
      },
      {
        title3: 'Live sessions',
        overView3:
          'Live meetings are scheduled weekly, engaging in crucial assignment discussions, allowing you to inquire about different topics directly.',
        description3:
          'Live meetings are scheduled weekly, engaging in crucial assignment discussions, allowing you to inquire about different topics directly.'
      },

      {
        title4: '9 Projects',
        overView4: `We embraced a project-centric learning methodology for the duration of the course. There are 6 projects planned for completion in the course.`,
        description4: `We embraced a project-centric learning methodology for the duration of the course. There are 9 projects planned for completion in the course.`
      }
    ],
    overView:
      "Step into the world of web development, where creativity meets code! In this dynamic course, you'll learn to craft beautiful, functional websites using HTML, CSS, and JavaScript. We’ll guide you through every line of code with interactive lessons and real-world projects, turning you into a web-building pro. Whether you're starting from scratch or polishing your skills, we’ll make sure you’re ready to build the next big thing on the web.",
    para: 'Ready to turn your wild ideas into reality? Learn how to build stunning websites and unleash your inner tech genius. Whether you’re a complete newbie or you just want to level up, this course will teach you how to transform blank screens into beautiful, functional webpages. Let’s figure out how we can make the web a little cooler—one pixel at a time. Get ready to click, code, and conquer!',

    category: 'Web Development',
    price: '$120',
    title: 'Mastering Web Development',
    rating: 5,
    image: 'assets/images/course-cat-7.jpg',
    hoverBgColor: 'bg-green-500',
    description:
      'Ready to turn your wild ideas into reality? Learn how to build stunning websites and unleash your inner tech genius. Whether you’re a complete newbie or you just want to level up, this...',
    details: {
      students: 29,
      duration: '12.5 hours'
    },
    crsDetails: `Ready to turn your wild ideas into reality? Learn how to build stunning websites and unleash your inner tech genius. Whether you’re a complete newbie or you just want to level up, this course will teach you how to transform blank screens into beautiful, functional webpages. Let’s figure out how we can make the web a little cooler—one pixel at a time. Get ready to click, code, and conquer!`,
    img: upCmnPic2
  },
  {
    id: 8,
    lecture: '36',
    duration: '3 months',
    projects: '9',
    Certificate:
      'Participants completing every assignment and the final exams with a minimum 50% mark will earn a course certificate. A digital copy of the certificate is available for download online. Hard copies will not be supplied.',
    Access:
      "Buying the course entitles you to access to all course content. Once the period ends, you don't have to worry about recurring charges.",
    interview:
      'DevOps professionals are in high demand globally, with roles like DevOps Engineer and Automation Specialist highly sought after. This course prepares you to excel in interviews, automate deployment pipelines, and master CI/CD practices.',

    curriculum: [
      { cid: 1, c: 'Introduction to DevOps' },
      { cid: 2, c: 'Version Control Systems' },
      { cid: 3, c: 'Introduction to Continuous Integration (CI)' },
      { cid: 4, c: 'Basic Scripting and Automation' },
      { cid: 5, c: 'Jenkins - Continuous Integration Tool' },
      { cid: 6, c: 'Continuous Delivery & Continuous Deployment (CD)' },
      { cid: 7, c: 'Configuration Management Tools' },
      { cid: 8, c: 'Docker - Containerization for DevOps' },
      {
        cid: 9,
        c: 'Orchestration with KubernetesInfrastructure as Code (IaC)'
      },
      { cid: 10, c: 'Monitoring and Logging in DevOps' },
      { cid: 11, c: 'Security in DevOps (DevSecOps)' },
      { cid: 12, c: 'Git' },
      { cid: 13, c: 'Jenkins' },
      { cid: 14, c: 'Docker' }
    ],
    features: [
      {
        title1: '25 Assignments',
        overView1:
          'Unlock the power of data with our Data Science and Machine Learning course! Dive into the art of analyzing and transforming raw data into actionable insights, while mastering cutting-edge machine learning algorithms. From data cleaning and statistical analysis to building predictive models with Python and TensorFlow. Learn how to harness data to make smarter choices, uncover patterns, and build intelligent systems that evolve. Get ready to shape the future—one dataset at a time!',
        description1:
          'Assignment solutions will be posted on GitHub or Slack after the course for self-practice.'
      },
      {
        title2: '30+ Quizzes',
        overView2:
          'Unlock the power of data with our Data Science and Machine Learning course! Dive into the art of analyzing and transforming raw data into actionable insights, while mastering cutting-edge machine learning algorithms. From data cleaning and statistical analysis to building predictive models with Python and TensorFlow. Learn how to harness data to make smarter choices, uncover patterns, and build intelligent systems that evolve. Get ready to shape the future—one dataset at a time!',
        description2:
          'At the end of each video, quizzes with answers and explanations are available, letting you monitor your learning progress.'
      },
      {
        title3: 'Live sessions',
        overView3:
          'Unlock the power of data with our Data Science and Machine Learning course! Dive into the art of analyzing and transforming raw data into actionable insights, while mastering cutting-edge machine learning algorithms. From data cleaning and statistical analysis to building predictive models with Python and TensorFlow. Learn how to harness data to make smarter choices, uncover patterns, and build intelligent systems that evolve. Get ready to shape the future—one dataset at a time!',
        description3:
          'Live meetings are scheduled weekly, engaging in crucial assignment discussions, allowing you to inquire about different topics directly.'
      },
      {
        title4: '9 Projects',
        overView4: `We embraced a project-centric learning methodology for the duration of the course. There are 6 projects planned for completion in the course.`,
        description4: `DevOps professionals are in demand worldwide! This course equips you with the skills to ace DevOps interviews, automate deployment pipelines, and master CI/CD practices. Ready to excel?`
      }
    ],
    overView:
      'Ready to revolutionize the way you develop and deploy software? Dive into the world of DevOps and Continuous Integration, where automation meets innovation. Say goodbye to manual deployment headaches and hello to faster, seamless releases. Get hands-on with the tools that power modern software—because in DevOps, speed and reliability are everything!',

    para: 'Welcome to the world of DevOps. In this course, you’ll learn how to build, test, and deploy software faster and more reliably with Continuous Integration (CI) and Continuous Delivery (CD).Get ready to embrace the DevOps mindset and stop worrying about broken builds, deployment disasters, and downtime.',

    category: 'Programming',
    price: '$120',
    title: 'DevOps and Continuous Integration',
    rating: 5,
    image: 'assets/images/course-cat-8.jpg',
    hoverBgColor: 'bg-green-500',
    description:
      'Welcome to the world of DevOps. In this course, you’ll learn how to build, test, and deploy software faster and more reliably with Continuous Integration (CI) and Continuous Delivery (CD)...',
    details: {
      students: 29,
      duration: '6.5 hours'
    },
    crsDetails: `Welcome to the world of DevOps. In this course, you’ll learn how to build, test, and deploy software faster and more reliably with Continuous Integration (CI) and Continuous Delivery (CD).Get ready to embrace the DevOps mindset and stop worrying about broken builds, deployment disasters, and downtime.`,
    img: upCmnPic3,
    button: {
      text: 'Enroll Now',
      bgColor: 'bg-green-500'
    }
  }
]

const filterMicroCourses = [
  {
    id: 1,
    slug: 'python',
    lecture: '15',
    duration: '1 months',
    projects: '5',
    Certificate:
      'Participants completing every assignment and the final exams with a minimum 50% mark will earn a course certificate. A digital copy of the certificate is available for download online. Hard copies will not be supplied.',
    Access:
      "Buying the course entitles you to access to all course content. Once the period ends, you don't have to worry about recurring charges.",
    interview:
      'Graphic Design professionals are in high demand across industries as brands prioritize visual storytelling and digital presence. Roles such as Graphic Designer, Brand Designer, and Visual Content Creator are actively sought after by companies worldwide. This course equips you with the creative and technical skills to excel in design interviews, build an impressive portfolio, and contribute to impactful projects in the dynamic world of design.',
    job: 'We don’t just teach—we guide you straight into the job market. With dedicated placement support, career coaching, and interview prep, you’re backed all the way to your first paycheck.',
    international:
      'Experience a global learning journey with top-tier experts who are committed to guiding you towards success! World-class education that works for you—quality without compromise!',
    Mentorship:
      'Success starts with the right guidance! Learn from top mentors who inspire, support, and challenge you with real-world wisdom—helping you thrive and achieve greatness.',

    curriculum: [
      { cid: 1, c: 'Python Basics & Syntax' },
      { cid: 2, c: 'Variables, Loops & Conditional Statements ' },
      { cid: 3, c: 'Functions & Object-Oriented Programming' },
      { cid: 4, c: 'Data Handling & File Operations ' },
      { cid: 5, c: 'Automating Tasks with Python' },
      { cid: 6, c: ' Real-World Coding Projects' }
    ],

    tools: [
      { cid: 1, c: 'Python 3 & Jupyter Notebook', icon: FaPython },
      { cid: 2, c: 'VS Code & Google Colab', icon: VscVscode },
      { cid: 3, c: 'Pandas', icon: SiPandas },
      { cid: 3, c: 'NumPy for Data Handling', icon: SiNumpy }
    ],

    features: [
      {
        title1: '05 Assignments',
        overView1:
          'Unlock the power of data with our Data Science and Machine Learning course! Dive into the art of analyzing and transforming raw data into actionable insights, while mastering cutting-edge machine learning algorithms. From data cleaning and statistical analysis to building predictive models with Python and TensorFlow. Learn how to harness data to make smarter choices, uncover patterns, and build intelligent systems that evolve. Get ready to shape the future—one dataset at a time!',
        description1:
          'Assignment solutions will be available on GitHub or Slack for self-practice and review.'
      },
      {
        title2: '10 Quizzes',
        overView2:
          'Unlock the power of data with our Data Science and Machine Learning course! Dive into the art of analyzing and transforming raw data into actionable insights, while mastering cutting-edge machine learning algorithms. From data cleaning and statistical analysis to building predictive models with Python and TensorFlow. Learn how to harness data to make smarter choices, uncover patterns, and build intelligent systems that evolve. Get ready to shape the future—one dataset at a time!',
        description2:
          ' Each module comes with quizzes and explanations to track your learning progress.'
      },
      {
        title3: 'Live Sessions & Mentorship',
        overView3:
          'Unlock the power of data with our Data Science and Machine Learning course! Dive into the art of analyzing and transforming raw data into actionable insights, while mastering cutting-edge machine learning algorithms. From data cleaning and statistical analysis to building predictive models with Python and TensorFlow. Learn how to harness data to make smarter choices, uncover patterns, and build intelligent systems that evolve. Get ready to shape the future—one dataset at a time!',
        description3:
          'Engage in live discussions with industry experts to clarify doubts, review assignments, and gain valuable insights.'
      },
      {
        title4: '05 Projects',
        overView4: `Unlock the power of data with our Data Science and Machine Learning course! Dive into the art of analyzing and transforming raw data into actionable insights, while mastering cutting-edge machine learning algorithms. From data cleaning and statistical analysis to building predictive models with Python and TensorFlow. Learn how to harness data to make smarter choices, uncover patterns, and build intelligent systems that evolve. Get ready to shape the future—one dataset at a time!`,
        description4: ` A project-based learning approach ensures hands-on experience with real-world networking scenarios.`
      }
    ],

    overView:
      "Master Python programming and gain hands-on experience with real coding projects. Whether you're new to programming or looking to sharpen your skills, this course will teach you Python fundamentals, automation, and data handling, setting you up for success in the tech industry.",

    para: 'Learn Python & Start Coding in Just 1 Month! Ever wanted to learn programming but didn’t know where to start? Python is the perfect beginner-friendly language, used in everything from web development to data science and automation. This course will help you build a strong coding foundation, write real-world programs, and open doors to high-paying tech careers—all in just one month!',

    category: 'Data Science and AI',
    price: '$120',
    title: 'Python Essentials: From Basics to Brilliance',
    rating: 5,
    image: 'assets/images/course-cat-4.jpg',
    hoverBgColor: 'bg-green-500',
    description:
      "Welcome to the Data Science course—where numbers are your new best friends, and you'll be turning data into wow!...",
    details: {
      students: 29,
      duration: '12.5 hours'
    },
    crsDetails: `Welcome to the Data Science course—where numbers are your new best friends, and you'll be turning data into wow! Ever wonder how Netflix knows exactly what you want to watch next? Or how your email filters out those very important spam messages? It’s all thanks to data science! In this course, we’ll teach you how to wrangle data like a pro, predict the future like a fortune teller, and make decisions based on solid facts (no magic ball needed!). So grab your laptop, get ready to crack some codes, and let’s make data your superpower by analyzing data, building predictive models, and extracting valuable insights—because who says learning can’t be fun?`,
    img: upCmnPic2
  },

  {
    id: 2,
    slug: 'cnna',
    lecture: '15',
    duration: '1 month',
    projects: '5',
    Certificate:
      'Participants completing every assignment and the final exams with a minimum 50% mark will earn a course certificate. A digital copy of the certificate is available for download online. Hard copies will not be supplied.',
    Access:
      "Buying the course entitles you to access to all course content. Once the period ends, you don't have to worry about recurring charges.",
    interview:
      'Graphic Design professionals are in high demand across industries as brands prioritize visual storytelling and digital presence. Roles such as Graphic Designer, Brand Designer, and Visual Content Creator are actively sought after by companies worldwide. This course equips you with the creative and technical skills to excel in design interviews, build an impressive portfolio, and contribute to impactful projects in the dynamic world of design.',
    job: 'We don’t just teach—we guide you straight into the job market. With dedicated placement support, career coaching, and interview prep, you’re backed all the way to your first paycheck.',
    international:
      'Experience a global learning journey with top-tier experts who are committed to guiding you towards success! World-class education that works for you—quality without compromise!',
    Mentorship:
      'Success starts with the right guidance! Learn from top mentors who inspire, support, and challenge you with real-world wisdom—helping you thrive and achieve greatness.',

    curriculum: [
      { cid: 1, c: 'Networking Basics & Cisco Essentials' },
      { cid: 2, c: 'IP Addressing & Subnetting Simplified' },
      { cid: 3, c: 'Routing & Switching Fundamentals' },
      { cid: 4, c: 'Network Security & Troubleshooting' },
      { cid: 5, c: 'Configuring Cisco Routers & Switches' },
      { cid: 6, c: 'Real-World Networking Scenarios' }
    ],
    features: [
      {
        title1: '05 Assignments',
        overView1:
          'Unlock the power of data with our Data Science and Machine Learning course! Dive into the art of analyzing and transforming raw data into actionable insights, while mastering cutting-edge machine learning algorithms. From data cleaning and statistical analysis to building predictive models with Python and TensorFlow. Learn how to harness data to make smarter choices, uncover patterns, and build intelligent systems that evolve. Get ready to shape the future—one dataset at a time!',
        description1:
          'Assignment solutions will be available on GitHub or Slack for self-practice and review.'
      },
      {
        title2: '10 Quizzes',
        overView2:
          'Unlock the power of data with our Data Science and Machine Learning course! Dive into the art of analyzing and transforming raw data into actionable insights, while mastering cutting-edge machine learning algorithms. From data cleaning and statistical analysis to building predictive models with Python and TensorFlow. Learn how to harness data to make smarter choices, uncover patterns, and build intelligent systems that evolve. Get ready to shape the future—one dataset at a time!',
        description2:
          'Each module comes with quizzes and explanations to track your learning progress.'
      },
      {
        title3: ' Live Sessions & Mentorship',
        overView3:
          'Unlock the power of data with our Data Science and Machine Learning course! Dive into the art of analyzing and transforming raw data into actionable insights, while mastering cutting-edge machine learning algorithms. From data cleaning and statistical analysis to building predictive models with Python and TensorFlow. Learn how to harness data to make smarter choices, uncover patterns, and build intelligent systems that evolve. Get ready to shape the future—one dataset at a time!',
        description3:
          'Engage in live discussions with industry experts to clarify doubts, review assignments, and gain valuable insights'
      },
      {
        title4: '05 Projects',
        overView4: `Unlock the power of data with our Data Science and Machine Learning course! Dive into the art of analyzing and transforming raw data into actionable insights, while mastering cutting-edge machine learning algorithms. From data cleaning and statistical analysis to building predictive models with Python and TensorFlow. Learn how to harness data to make smarter choices, uncover patterns, and build intelligent systems that evolve. Get ready to shape the future—one dataset at a time!`,
        description4: ` A project-based learning approach ensures hands-on experience with real-world networking scenarios.`
      }
    ],

    tools: [
      { cid: 1, c: 'Cisco Packet Tracer & GNS3', icon: SiCisco },
      { cid: 2, c: 'Routers & Switches', icon: MdOutlineNetworkWifi1Bar },
      { cid: 3, c: 'Wireshark ', icon: SiWireshark }
    ],

    overView:
      "Build a strong foundation in networking and Cisco technologies while working on practical projects. Whether you're a beginner or looking to level up your IT career, this course will prepare you to pass the CCNA certification and stand out in the job market.",
    para: `Ever wondered how the internet works? Want to configure networks like a pro and secure a future in IT? This course is your gateway to mastering networking fundamentals and becoming a Certified Cisco Networking Associate (CCNA). Gain hands-on experience, troubleshoot real-world network issues, and build the skills required for in-demand IT roles—all in just one month! `,

    category: 'Graphics Design',
    price: '$120',
    title: 'Start Your IT Career with Networking Basics - CCNA',
    rating: 5,
    image: 'assets/images/course-cat-2.jpg',
    hoverBgColor: 'bg-green-500',
    description:
      'Discover how to blend shapes, colors, and typography into designs that not only look good but also communicate effectively...',
    details: {
      students: 29,
      duration: '12.5 hours'
    },
    crsDetails: `Discover how to blend shapes, colors, and typography into designs that not only look good but also communicate effectively. Don't worry about starting from scratch—this course is tailored for beginners, so no previous experience is needed.
But this isn’t just another boring lecture series. Expect interactive activities, creative challenges, and even a few design "myths" busted along the way. ( As it says: You don’t need to be an artist to be a great designer! ) Get ready to shape the future—one design at a time. `,
    img: upCmnPic1
  },

  {
    id: 3,
    slug: 'graphics',
    lecture: '16',
    duration: '1 Month',
    projects: '5',
    Certificate:
      'Your hard work deserves recognition! Successfully complete all assignments and the final exam with a minimum 50% score, and earn an official course certificate—a testament to your skills and dedication.',
    Access:
      'Get full access to hands-on projects & real-world exercises. No theory overload—just pure practical learning!',
    interview:
      'Our curriculum is built to match real-world industry standards, ensuring you gain the latest, in-demand skills that employers value.Train. Excel. Get Hired.',

    job: 'We don’t just teach—we guide you straight into the job market. With dedicated placement support, career coaching, and interview prep, you’re backed all the way to your first paycheck.',
    international:
      'Experience a global learning journey with top-tier experts who are committed to guiding you towards success! World-class education that works for you—quality without compromise!',
    Mentorship:
      'Success starts with the right guidance! Learn from top mentors who inspire, support, and challenge you with real-world wisdom—helping you thrive and achieve greatness.',
    curriculum: [
      { cid: 1, c: 'Graphic Design Fundamentals' },
      { cid: 2, c: 'Mastering Photoshop & Illustrator' },
      { cid: 3, c: 'Logo Design & Branding Basics' },
      { cid: 4, c: 'Social Media Graphics & Ad Creatives' },
      { cid: 5, c: 'How to Find Clients & Start Freelancing' },
      { cid: 6, c: 'Building a Winning Portfolio' }
    ],

    features: [
      {
        title1: '05 Assignments',
        overView1:
          'Unlock the power of data with our Data Science and Machine Learning course! Dive into the art of analyzing and transforming raw data into actionable insights, while mastering cutting-edge machine learning algorithms. From data cleaning and statistical analysis to building predictive models with Python and TensorFlow. Learn how to harness data to make smarter choices, uncover patterns, and build intelligent systems that evolve. Get ready to shape the future—one dataset at a time!',
        description1:
          'Assignment solutions will be posted on GitHub or Slack after the course for self-practice.'
      },
      {
        title2: '10 Quizzes',
        overView2:
          'At the end of each video, quizzes with answers and explanations are available, letting you monitor your learning progress.',
        description2:
          'At the end of each video, quizzes with answers and explanations are available, letting you monitor your learning progress.'
      },
      {
        title3: 'Live sessions & Mentorship',
        overView3:
          'Unlock the power of data with our Data Science and Machine Learning course! Dive into the art of analyzing and transforming raw data into actionable insights, while mastering cutting-edge machine learning algorithms. From data cleaning and statistical analysis to building predictive models with Python and TensorFlow. Learn how to harness data to make smarter choices, uncover patterns, and build intelligent systems that evolve. Get ready to shape the future—one dataset at a time!',
        description3:
          'Live meetings are scheduled with the mentors, engaging in crucial assignment discussions, allowing you to inquire about different topics directly with guidance. '
      },
      {
        title4: '05 Projects',
        overView4: `Unlock the power of data with our Data Science and Machine Learning course! Dive into the art of analyzing and transforming raw data into actionable insights, while mastering cutting-edge machine learning algorithms. From data cleaning and statistical analysis to building predictive models with Python and TensorFlow. Learn how to harness data to make smarter choices, uncover patterns, and build intelligent systems that evolve. Get ready to shape the future—one dataset at a time!`,
        description4: `We embraced a project-centric learning methodology for the duration of the course. There are 9 projects planned for completion in the course.`
      }
    ],

    tools: [
      { cid: 1, c: 'SiAdobephotoshop', icon: SiAdobephotoshop },
      { cid: 2, c: 'Illustrator', icon: SiAdobeillustrator },
      { cid: 3, c: 'Pexels', icon: SiPexels },
      { cid: 3, c: 'Fiverr ', icon: SiFiverr },
      { cid: 3, c: 'Upwork ', icon: SiUpwork }
    ],

    overView:
      'Transform your creativity into cash with our Graphics Design Course! Learn the essentials of Adobe Photoshop & Illustrator, create stunning visuals, and start landing clients.Get ready to design, earn, and make a name for yourself in the digital world! ',
    para: `Welcome to the world of creativity and income! Ever wondered how brands create stunning visuals that grab attention? Want to design eye-catching logos, social media posts, and digital art that actually sell? This course is your gateway to mastering the art of graphic design while learning how to monetize your skills. Whether you dream of freelancing or launching your own design business, this one-month journey will equip you with everything you need to turn your passion into profit. `,

    category: 'Programming',
    price: '$120',
    title: 'Start Earning with Graphics Design',
    rating: 5,
    image: 'assets/images/course-cat-3.jpg',
    hoverBgColor: 'bg-green-500',
    description:
      'Embark on a comprehensive React journey with our Python Programming Course, where coding becomes as intuitive as slicing through butter! This beginner-friendly course will introduce...',
    details: {
      students: 29,
      duration: '12.5 hours'
    },
    crsDetails: `Embark on a comprehensive React journey with our Python Programming Course, where coding becomes as intuitive as slicing through butter! This beginner-friendly course will introduce you to the magic of programming with Python, a language loved by techies and meme-makers alike.
From writing your first “Hello, World!” to create small programs that can actually do something, we’ll guide you every step of the way. By the end of this course, you’ll have the skills to solve real-world problems with Python and the confidence. `,
    img: upCmnPic2
  }
]

const distensionInfo = [
  {
    course: 'Data Science and Machine Learning',
    duration: '6 month',
    lecture: '48',
    projects: '20',
    id: 1,
    para: 'Embark on a comprehensive React journey with our React Front To Back course. Designed for beginners and seasoned developers alike, this course covers the fundamentals and dives deep into advanced topics. From building interactive user interfaces to managing state and integrating with APIs, you’ll gain hands-on experience. Elevate your React skills and stay at the forefront of web development trends with this immersive and practical learning experience.'
  },
  {
    course: 'Introduce About Graphic Design for Beginners',
    duration: '6 month',
    lecture: '48',
    projects: '20',
    id: 1,
    para: 'Embark on a comprehensive React journey with our React Front To Back course. Designed for beginners and seasoned developers alike, this course covers the fundamentals and dives deep into advanced topics. From building interactive user interfaces to managing state and integrating with APIs, you’ll gain hands-on experience. Elevate your React skills and stay at the forefront of web development trends with this immersive and practical learning experience.'
  },
  {
    course: 'Introduction to Python Programming',
    duration: '6 month',
    lecture: '48',
    projects: '20',
    id: 1,
    para: 'Embark on a comprehensive React journey with our React Front To Back course. Designed for beginners and seasoned developers alike, this course covers the fundamentals and dives deep into advanced topics. From building interactive user interfaces to managing state and integrating with APIs, you’ll gain hands-on experience. Elevate your React skills and stay at the forefront of web development trends with this immersive and practical learning experience.'
  },
  {
    course: 'UI/UX Design for Web and Mobile for Kids',
    duration: '6 month',
    lecture: '48',
    projects: '20',
    id: 1,
    para: 'Embark on a comprehensive React journey with our React Front To Back course. Designed for beginners and seasoned developers alike, this course covers the fundamentals and dives deep into advanced topics. From building interactive user interfaces to managing state and integrating with APIs, you’ll gain hands-on experience. Elevate your React skills and stay at the forefront of web development trends with this immersive and practical learning experience.'
  },
  {
    course: 'Ethical Hacking and Penetration Testing',
    duration: '6 month',
    lecture: '48',
    projects: '20',
    id: 1,
    para: 'Embark on a comprehensive React journey with our React Front To Back course. Designed for beginners and seasoned developers alike, this course covers the fundamentals and dives deep into advanced topics. From building interactive user interfaces to managing state and integrating with APIs, you’ll gain hands-on experience. Elevate your React skills and stay at the forefront of web development trends with this immersive and practical learning experience.'
  },

  {
    course: 'Network Administration (CCNA)',
    duration: '6 month',
    lecture: '48',
    projects: '20',
    id: 1,
    para: 'Embark on a comprehensive React journey with our React Front To Back course. Designed for beginners and seasoned developers alike, this course covers the fundamentals and dives deep into advanced topics. From building interactive user interfaces to managing state and integrating with APIs, you’ll gain hands-on experience. Elevate your React skills and stay at the forefront of web development trends with this immersive and practical learning experience.'
  },

  {
    course: 'Popular course in Web Development',
    duration: '6 month',
    lecture: '48',
    projects: '20',
    id: 1,
    para: 'Embark on a comprehensive React journey with our React Front To Back course. Designed for beginners and seasoned developers alike, this course covers the fundamentals and dives deep into advanced topics. From building interactive user interfaces to managing state and integrating with APIs, you’ll gain hands-on experience. Elevate your React skills and stay at the forefront of web development trends with this immersive and practical learning experience.'
  },
  {
    course: 'DevOps and Continuous Integration',
    duration: '6 month',
    lecture: '48',
    projects: '20',
    id: 1,
    para: 'Embark on a comprehensive React journey with our React Front To Back course. Designed for beginners and seasoned developers alike, this course covers the fundamentals and dives deep into advanced topics. From building interactive user interfaces to managing state and integrating with APIs, you’ll gain hands-on experience. Elevate your React skills and stay at the forefront of web development trends with this immersive and practical learning experience.'
  }
]

export {
  courses,
  filterCourse,
  freeWebinar,
  upComingCourses,
  distensionInfo,
  upcommingEvents,
  filterMicroCourses
}
