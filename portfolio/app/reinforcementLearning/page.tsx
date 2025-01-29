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
        <h2 className='text-4xl mt-16 md:mt-8 lg:mt-0'>AI Hockey Game</h2>
        <hr className="border-black w-80 lg:w-96" />
        <p className='text-center max-w-screen text-xs '>Date: Dec 2024</p>
        <p className='text-center max-w-screen'>An AI-powered hockey game using Unity&apos;s ML-Agents and
          deep reinforcement learning. The primary goal was to train agents capable of strategic gameplay,
          adaptive decision-making, and realistic interactions within a dynamic, physics-driven environment.</p>

        <div className="project-gallery-section">
        <iframe
            width="1920"
            height="1080"
            src="https://www.youtube.com/embed/ioIlWLB25G4?si=bG7LxeQpTdgXKsW7"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="w-80 lg:w-[900px] h-40 lg:h-[506px]"
          ></iframe>
        </div>

        <div className="project-gallery-section">
          <img className="drop-shadow-xl" ref={(el) => { if (el) imagesRef.current.push(el); }} src="reinforcementLearning/deepLearning.png" alt="deepLearning" />
        </div>

        <p className='text-center max-w-screen'>The project uses deep reinforcement learning to train agents. It is a combination of deep learning and reinforcement learning,
          where the agent learns to interact with the environment by performing actions and receiving rewards or penalties. The agent&apos;s goal is to maximize its rewards by learning the best actions to take in different situations.
        </p>
        <ul className='list-disc list-inside'>
          <li>Input layer: The agents observations of the environment.</li>
          <li>Hidden layers: Calculations and decision-making process.</li>
          <li>Output layer: The agents actions in the environment.</li>
        </ul>

        <div className="project-gallery-section">
          <img className="drop-shadow-xl" ref={(el) => { if (el) imagesRef.current.push(el); }} src="reinforcementLearning/raycast.png" alt="raycast" />
        </div>

        <p className='text-center max-w-screen'>The agents use raycasting to detect objects and obstacles in the environment. Raycasting is a technique used in computer graphics and physics simulations to detect collisions between objects. 
          The agents use raycasting to sense the environment and make decisions based on the information they receive.
        </p>

        <div className="project-gallery-section">
          <img className="drop-shadow-xl" ref={(el) => { if (el) imagesRef.current.push(el); }} src="reinforcementLearning/hockeyTraining.png" alt="hockeyTraining" />
        </div>

        <p className='text-center max-w-screen'>The agents are trained in multiple enviroments simultaneously (150 in this case) to speed up the training process.
        </p>

        <div className="project-gallery-section">
          <img className="drop-shadow-xl" ref={(el) => { if (el) imagesRef.current.push(el); }} src="reinforcementLearning/hockey.png" alt="hockey" />
        </div>

        <p className='text-center max-w-screen'>We explored various movement techniques and found
          that while kinematic movement was faster, physics-based
          movement was essential for interacting realistically with
          the environment. This approach allowed the agent to
          handle momentum, collisions, and friction in a way that
          mirrored real world dynamics, which was important for
          our hockey game.
        </p>
        <p className='text-center max-w-screen'>A low number of simple, well-defined rewards consis-
          tently produced the best results, as they minimized the
          risk of the agent exploiting unintended loopholes. This
          strategy aligns with the recommendations outlined in
          the ML-Agents documentation and underscores the im-
          portance of thoughtful reward design in reinforcement
          learning.
        </p>
        <p className='text-center max-w-screen'>
          Gradually increasing the complexity of the environment
          proved to be an effective training strategy. By starting
          with simpler tasks and progressively introducing more
          challenges, we were able to shape the agent&apos;s behavior
          to meet our specific goals. This approach gave faster and
          more precise learning, its effectiveness affirms it to be
          the optimal way to train reinforcement learning agents
          with higher complexity.
        </p>
      </div>
    </div>
  );
}