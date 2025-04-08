import ChatBot from 'react-simple-chatbot'
import './chatbot.css'

const CourseBot = () => {
  const steps = [
    {
      id: '1',
      message: '👋 Hi there! Welcome to Eduden. How can I assist you today?',
      trigger: 'help-options'
    },
    {
      id: 'help-options',
      options: [
        {
          value: 'courses',
          label: 'See Courses',
          trigger: 'course-categories'
        },
        { value: 'contact', label: 'Contact', trigger: 'contact' },
        { value: 'faq', label: 'FAQs', trigger: 'faq' }
      ]
    },

    // Courses
    {
      id: 'course-categories',
      message: '📚 We offer courses in these categories. Pick one to explore!',
      trigger: 'course-options'
    },
    {
      id: 'course-options',
      options: [
        { value: 'web', label: 'Web Development', trigger: 'web-course' },
        { value: 'uiux', label: 'UI/UX Design', trigger: 'uiux-course' },
        {
          value: 'marketing',
          label: 'Digital Marketing',
          trigger: 'marketing-course'
        },
        { value: 'back', label: 'Back to Main Menu', trigger: '1' }
      ]
    },
    {
      id: 'web-course',
      message:
        '💻 Web Development: Learn HTML, CSS, JavaScript, React, and more!',
      trigger: 'enroll-prompt'
    },
    {
      id: 'uiux-course',
      message:
        '🎨 UI/UX Design: Master Figma, wireframing, and user flow design!',
      trigger: 'enroll-prompt'
    },
    {
      id: 'marketing-course',
      message:
        '📈 Digital Marketing: SEO, Social Media, Email Marketing & more!',
      trigger: 'enroll-prompt'
    },

    // Enroll
    {
      id: 'enroll-prompt',
      message:
        'Would you like a link to enroll or speak with a course advisor?',
      trigger: 'enroll-options'
    },
    {
      id: 'enroll-options',
      options: [
        {
          value: 'enroll',
          label: 'Send Me the Link',
          trigger: 'get-course-link'
        },
        { value: 'advisor', label: 'Talk to Advisor', trigger: 'contact' },
        { value: 'back', label: 'Go Back', trigger: 'course-options' }
      ]
    },
    {
      id: 'get-course-link',
      message: 'https://sre-eight.vercel.app',
      trigger: 'anything-else'
    },

    // Contact
    {
      id: 'contact',
      message: "You can reach our advisor at:\n📧 learn@eduden.io\n📞 +919239425164\nAvailable Mon–Fri, 9AM–6PM",
      // trigger: 'contact-details'
    },

    // {
    //   id: 'contact-details',
    //   options: [
    //     {
    //       value: 'enroll',
    //       label: 'Send Me the Link',
    //       trigger: 'get-course-link'
    //     },
    //     { value: 'advisor', label: 'Talk to Advisor', trigger: 'contact' },
    //     { value: 'back', label: 'Go Back', trigger: 'course-options' }
    //   ]
    // },

    // {
    //   id: 'get-name',
    //   user: true,
    //   trigger: 'get-email'
    // },
    // {
    //   id: 'get-email',
    //   user: true,
    //   trigger: 'contact-success'
    // },
    // {
    //   id: 'contact-success',
    //   message: '✅ Thank you! We’ll reach out to you shortly.',
    //   trigger: 'anything-else'
    // },

    // FAQs
    {
      id: 'faq',
      message: 'Here are common questions. Pick one:',
      trigger: 'faq-options'
    },
    {
      id: 'faq-options',
      options: [
        { value: 'price', label: 'What’s the price?', trigger: 'faq-price' },
        {
          value: 'cert',
          label: 'Do I get a certificate?',
          trigger: 'faq-cert'
        },
        {
          value: 'support',
          label: 'Is support available?',
          trigger: 'faq-support'
        },
        { value: 'back', label: 'Back to Main Menu', trigger: '1' }
      ]
    },
    {
      id: 'faq-price',
      message: '💰 Prices vary by course. Visit https://yourdomain.com/pricing',
      trigger: 'anything-else'
    },
    {
      id: 'faq-cert',
      message: '🎓 Yes! You’ll receive a certificate after course completion.',
      trigger: 'anything-else'
    },
    {
      id: 'faq-support',
      message: '🙋‍♂️ Absolutely! Our support team is available 24/7.',
      trigger: 'anything-else'
    },

    // Anything else
    {
      id: 'anything-else',
      message: 'Do you need help with anything else?',
      trigger: 'help-options'
    }
  ]

  return (
    <ChatBot
      steps={steps}
      headerTitle='Start with Eduden'
      placeholder='Ask me anything'
      botAvatar='https://res.cloudinary.com/joysutradhor/image/upload/v1744025789/2c5017c3-08ae-49dc-89ae-db4c70a5a077.png'
      floating={true}
      opened={false}
      enableMobileAutoFocus={false}
      width='25%'
      //   style={{background: "#000000" , }}
      //   headerComponent={{background: "#000000" , }}
      //   submitButtonStyle={{backgroundColor: "#FFD300" , marginBottom:"0px" }}
    />
  )
}

export default CourseBot
