import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex items-center justify-center mt-4">
        <div className="bg-blue-900 rounded-lg shadow-lg p-4">
          <h2 className="text-white text-center text-2xl font-bold">ABOUT US</h2>
        </div>
      </div>

      <div className="container mx-auto mt-8">
        <h3 className="text-center text-3xl font-bold text-blue-900 mb-4">About NSS Logo</h3>
        <div className="flex justify-center">
          <div className="w-full lg:w-8/12 bg-white rounded-lg shadow-lg p-6">
            <p className="text-base text-justify text-gray-700">
              The logo for the NSS has been designed based on the giant Rath Wheel of the world famous Konark Sun Temple (The Black Pagoda) situated in Orissa, India. The giant wheels of the Sun Temple portray the cycle of creation, preservation and release, and signify the movement in life across time and space.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-8">
        <h4 className="text-center text-3xl font-bold text-blue-900 mb-4">History of NSS</h4>
        <div className="flex justify-center">
          <div className="w-full lg:w-8/12 bg-white rounded-lg shadow-lg p-6">
            <p className="text-base text-justify text-gray-700">
              Dr. V.K.R.V. Rao, On September 24, 1969, the then Union Education Minister Dr. V.K.R.V. Rao, launched the NSS programme in 37 universities involving 40000 students. The motto of National Service Scheme is “NOT ME BUT YOU” Principal elements of NSS: There are four principal elements in the NSS programme process; they are Students, Teachers, Community and the programme. 'Education through Service' is the purpose of the NSS.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
