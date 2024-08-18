import React from 'react';

const Pathners = () => {
  const companies = [
    { name: 'Google', logo: 'Google' },
    { name: 'Amazon', logo: 'amazon' },
    { name: 'Spotify', logo: 'Spotify' },
    { name: 'Pinterest', logo: 'Pinterest' },
    { name: 'Coinbase', logo: 'coinbase' },
    { name: 'Netflix', logo: 'NETFLIX' },
  ];

  return (
    <div className="bg-gray-900 text-white py-8 px-4  p-2  mx-auto rounded-lg my-8"> 
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-2">Pathners</h2>
        <p className="text-3xl sm:text-2xl font-bold text-center mb-8">
           employees and owners of many of these <br /> companies and more
            </p>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {companies.map((company) => (
            <div key={company.name} className="text-2xl sm:text-3xl font-bold">
              {company.logo}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pathners;