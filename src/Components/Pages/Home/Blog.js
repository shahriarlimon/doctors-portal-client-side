import React from 'react';
import PrimaryBtn from '../../PrimaryBtn/PrimaryBtn';
import treatment from '../../../assets/images/treatment.png'
const Blog = () => {
    return (
        <div class="hero min-h-screen px-5 lg:px-16">
  <div class="hero-content flex-col lg:flex-row lg:justify-around">
    <img src={treatment} class="max-w-sm rounded-lg shadow-2xl flex-1" alt='' />
    <div className='md:px-5'>
      <h1 class="text-5xl font-bold flex-1">Exceptional Dental Care, on Your Terms</h1>
      <p class="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
      <PrimaryBtn>Get Started</PrimaryBtn>
    </div>
  </div>
</div>
    );
};

export default Blog;