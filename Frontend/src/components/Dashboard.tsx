import React from 'react';
import Navbar from './Navbar';
import { CardDemo } from './Cards';



const Dashboard: React.FC = () => {
  return (
    <div>
      <Navbar/>
      <div className="container mx-auto p-6 my-[95px]">
        <h2 className="text-2xl font-bold mb-4">
        Empowering Small Vendors with AI</h2>
        <p className="mb-6">
        Our platform leverages AI to help small vendors and shopkeepers in the rural and developing areas optimize their business strategies, increase daily income, and access relevant resources. Join us to transform your business with the data-driven insights and tailored recommendations.
        </p>
        <h3 className="text-xl font-semibold mb-4 mt-16">Tutorials</h3>
        <p>There are very good explanations that are provided by the core development team of this platform. These tutorials will help you to effectively manage and use this platform. We have created comprehensive tutorials that guide you through the various features and functionalities of the platform. From setting up your profile to analyzing business data and accessing tailored recommendations, our step-by-step tutorials will ensure you make the most of our AI-powered tools. Join us today and transform your business with data-driven insights and expert guidance.</p>
        <div className='flex flex-wrap mt-20'>
            <CardDemo 
            image='https://images.pexels.com/photos/5981927/pexels-photo-5981927.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            title='Tutorial 1'
            time='15min'
            author='Mayank'
            content='It contains information about how to use this platform effectively.'
            />
            <CardDemo 
            image='https://images.pexels.com/photos/5981927/pexels-photo-5981927.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            title='Tutorial 2'
            time='20min'
            author='Suyash'
            content='It contains information about how to use this platform effectively.'
            />
            <CardDemo 
            image='https://images.pexels.com/photos/5981927/pexels-photo-5981927.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            title='Tutorial 3'
            time='15min'
            author='Tanuj'
            content='It contains information about how to use this platform effectively.'
            />
            <CardDemo 
            image='https://images.pexels.com/photos/5981927/pexels-photo-5981927.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            title='Tutorial 4'
            time='15min'
            author='Mukesh'
            content='It contains information about how to use this platform effectively.'
            />
            <CardDemo 
            image='https://images.pexels.com/photos/5981927/pexels-photo-5981927.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            title='Tutorial 5'
            time='25min'
            author='Suyash'
            content='It contains information about how to use this platform effectively.'
            />
            <CardDemo 
            image='https://images.pexels.com/photos/5981927/pexels-photo-5981927.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            title='Tutorial 6'
            time='15min'
            author='Dev'
            content='It contains information about how to use this platform effectively.'
            />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
