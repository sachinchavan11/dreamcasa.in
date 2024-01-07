import ContactUs from '@/components/contactus';
import React from 'react';
import SEO from '@/components/SEO';

const Contact = () => {
  return (
    <div>
      <SEO
        title="Get in Touch with DreamCasa - Contact Us"
        description="Have questions or need assistance in your real estate journey? Contact DreamCasa for expert advice and support"
        keywords="Real Estate Contact, Property Inquiry, Contact DreamCasa, Real Estate Assistance, DreamCasa Support"
      />
      <ContactUs />
    </div>
  );
};

export default Contact;
