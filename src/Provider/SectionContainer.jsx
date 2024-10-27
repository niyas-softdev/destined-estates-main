import React from 'react';

const SectionContainer = ({ children }) => {
  return (
    <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 xl:max-w-5xl xl:px-0">
      {children}
    </div>
  );
};

export default SectionContainer;
