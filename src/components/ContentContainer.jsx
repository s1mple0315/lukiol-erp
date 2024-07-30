import React from "react";

const ContentContainer = ({ img, statusText, children, type }) => {
  return (
    <section className={`container tab-content ${type}`}>
      <h4>
        <span className="me-2">{img}</span>
        {statusText}
      </h4>
      <div className="item-card-list row gap-4 mb-5 mt-3 px-lg-0 px-3">
        {/* Pass the type prop to each child */}
        {React.Children.map(children, (child) =>
          React.cloneElement(child, { type })
        )}
      </div>
    </section>
  );
};

export default ContentContainer;
