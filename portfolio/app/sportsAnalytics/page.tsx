"use client";

import React, { useEffect, useRef } from 'react';
export default function Filmdle() {
  const imagesRef = useRef<HTMLImageElement[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      imagesRef.current.forEach((img) => {
        const rect = img.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          img.classList.add('in-view');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen gap-16 flex flex-col items-center justify-center m-0 md:m-16 lg:m-32 pb-32">
      <div className="project-gallery">
        <h2 className='text-4xl mt-16 md:mt-8 lg:mt-0'>UEFA Euro 2024 Predictions</h2>
        <hr className="border-black w-80 lg:w-96" />
        <p className='text-center max-w-screen text-xs '>Date: June 2024</p>
        <p className='text-center max-w-screen'>This project explores methods for predicting the results of the UEFA
          Euro 2024 Championship by calculating the odds of each team winning
          a match using machine learning models. By simulating the tournament
          multiple times, we aim to identify the most likely winners based on these
          predictions made by our created machine learning models.
        </p>

        <p className='text-center max-w-screen'>
        We identified key match features for accurate predictions: FIFA ranking, average goals scored/conceded, and match outcomes. 
        To improve relevance, we used data from 2014-2024, as national team compositions change over time. 
        We focused on UEFA Euro, Euro qualifications, FIFA World Cup, and friendlies for consistency. 
        Some factors like shots on target, possession, injuries, and fan activity were excluded due to data constraints. 
        Teams were labeled as "home" and "away" for clarity, without implying actual home advantage.
        </p>

        {/* <div className="project-gallery-section">
          <img className="drop-shadow-xl" ref={(el) => { if (el) imagesRef.current.push(el); }} src="sportsAnalytics/randomForestR.png" alt="randomForestR" />
        </div> */}

        <p className='text-center max-w-screen'>By integrating the RandomForest, XGBoost and Poisson regresson models, we leverage their individual strengths to form a more balanced prediction. 
        RandomForest and XGBoost are used to capture overall match outcome probabilities, considering various team and match-specific factors. 
        Meanwhile, Poisson regression focuses on the aspect of goal scoring, providing more precise predictions on the number of goals each team might score.
        </p>

        <p className='text-center max-w-screen font-bold'>
          OurModel = 0.4 * Poisson + 0.3 * XGBoost + 0.3 * RandomForest
        </p>

        <p className='text-center max-w-screen'>We predict goals for each team and use a Poisson distribution to simulate match results. 
          This method underestimates draws, so we apply a 30% "draw boost" and normalize probabilities. 
          To improve draw predictions, we use a RandomForest model trained to detect high-probability draws. 
          If flagged, these matches are adjusted to reflect a higher likelihood of a draw.
        </p>

        <div className="project-gallery-section">
        <img className="drop-shadow-xl" ref={(el) => { if (el) imagesRef.current.push(el); }} src="sportsAnalytics/confusionMatrix.png" alt="confusionMatrix" />
        </div>

        <p className='text-center max-w-screen'>We evaluated our models using a confusion matrix adapted for regression. 
          Training on 2014-2022 data, we tested predictions on 300+ matches from 2023-2024. 
          Random Forest achieved 64.61% accuracy but struggled with draws. 
          XGBoost had 62.99%, and Poisson regression performed similarly at 64.29%. 
          All models had difficulty balancing wins, losses, and draws. 
          By averaging model outputs, we improved accuracy to 65.58%, creating a more balanced prediction.
        </p>

        <div className="project-gallery-section">
        <img className="drop-shadow-xl" ref={(el) => { if (el) imagesRef.current.push(el); }} src="sportsAnalytics/confusionMatrix_refined.png" alt="confusionMatrix_refined" />
        </div>

        <p className='text-center max-w-screen'>We boosted draw probabilities after averaging model outputs, increasing accuracy to 66.56%. 
          A separate draw-classification model further improved accuracy to 67.53%, enhancing overall prediction performance for the UEFA European Championship.
        </p>

        <p className='text-center max-w-screen mt-8'>We simulated the tournament structure, including group stages and knockout rounds. 
          Top two teams from each group, plus four best third-place teams, advance to the Round of 16. Knockout matches include a virtual coin toss for penalties. 
          Results from 5,000 simulations were recorded in a CSV for analysis.
        </p>

        <div className="project-gallery-section">
        <img className="drop-shadow-xl" ref={(el) => { if (el) imagesRef.current.push(el); }} src="sportsAnalytics/team_dist.png" alt="team_dist" />
        </div>

        <p className='text-center max-w-screen'>Our simulations highlight the gap between strong and weaker teams. 
          Georgia advances past the group stage in 35% of cases, while Belgium does so in 96%, showing the models ability to predict team performance. 
          We will compare these results with betting odds from major sportsbooks to assess alignment with expert predictions.
        </p>
        <div className="project-gallery-section">
        <img className="drop-shadow-xl" ref={(el) => { if (el) imagesRef.current.push(el); }} src="sportsAnalytics/odds.png" alt="odds" />
        </div>

        <p className='text-center max-w-screen'>Our model differs from betting odds, ranking Belgium as the top contender, while sportsbooks do not list them in the top five. 
          This is likely due to our models heavy weighting on recent matches against weaker teams, inflating predictions. Adjusting for opponent strength using FIFA rankings could reduce this bias. 
          Betting odds also reflect market dynamics, public perception, and bookmaker profit strategies rather than pure probabilities. 
          Despite differences, our model provides reasonable forecasts, though adding more data and refining statistical methods could improve accuracy for UEFA Euro 2024 predictions.
        </p>
      </div>
    </div>
  );
}