import React from 'react';
import './ExploreContainer.css';

interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <div className="container">
      <link href="//www.snow-forecast.com/stylesheets/feed.css" media="screen" rel="stylesheet" type="text/css" />
      <iframe  src="//www.snow-forecast.com/resorts/Are-Duved/forecasts/feed/top/m" >
        <p>Your browser does not support iframes.</p>
        </iframe>
        <iframe  src="//www.snow-forecast.com/resorts/Are-Duved/forecasts/feed/mid/m" >
        <p>Your browser does not support iframes.</p>
        </iframe>
        <iframe  src="//www.snow-forecast.com/resorts/Are-Duved/forecasts/feed/bot/m" >
        <p>Your browser does not support iframes.</p>
        </iframe>
    </div>
  );
};

export default ExploreContainer;
