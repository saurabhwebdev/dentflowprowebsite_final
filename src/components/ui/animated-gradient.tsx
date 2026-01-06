import React from 'react';

export function AnimatedGradient() {
  return (
    <>
      {/* Animated gradient background */}
      <div className="absolute inset-0 animated-gradient-bg" />

      {/* Gradient orbs for depth */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="gradient-orb gradient-orb-1" />
        <div className="gradient-orb gradient-orb-2" />
        <div className="gradient-orb gradient-orb-3" />
      </div>

      <style>{`
        .animated-gradient-bg {
          background: linear-gradient(
            -45deg,
            #ffecd2,
            #fcb69f,
            #a1c4fd,
            #c2e9fb,
            #d4fc79,
            #96e6a1,
            #ffecd2,
            #dfe6e9,
            #fad0c4,
            #ffd1ff
          );
          background-size: 400% 400%;
          animation: gradientShift 20s ease infinite;
        }

        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          25% {
            background-position: 100% 50%;
          }
          50% {
            background-position: 100% 100%;
          }
          75% {
            background-position: 0% 100%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .gradient-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
          opacity: 0.6;
          animation: float 20s ease-in-out infinite;
        }

        .gradient-orb-1 {
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(161, 196, 253, 0.8) 0%, rgba(194, 233, 251, 0.4) 50%, transparent 70%);
          top: -200px;
          left: -100px;
          animation-delay: 0s;
        }

        .gradient-orb-2 {
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(250, 208, 196, 0.8) 0%, rgba(255, 209, 255, 0.4) 50%, transparent 70%);
          bottom: -150px;
          right: -100px;
          animation-delay: -5s;
          animation-duration: 25s;
        }

        .gradient-orb-3 {
          width: 450px;
          height: 450px;
          background: radial-gradient(circle, rgba(212, 252, 121, 0.6) 0%, rgba(150, 230, 161, 0.3) 50%, transparent 70%);
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          animation-delay: -10s;
          animation-duration: 30s;
        }

        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          25% {
            transform: translate(30px, -30px) scale(1.05);
          }
          50% {
            transform: translate(-20px, 20px) scale(0.95);
          }
          75% {
            transform: translate(20px, 10px) scale(1.02);
          }
        }

        .gradient-orb-3 {
          animation-name: floatCenter;
        }

        @keyframes floatCenter {
          0%, 100% {
            transform: translate(-50%, -50%) scale(1);
          }
          25% {
            transform: translate(-45%, -55%) scale(1.1);
          }
          50% {
            transform: translate(-55%, -45%) scale(0.9);
          }
          75% {
            transform: translate(-48%, -52%) scale(1.05);
          }
        }
      `}</style>
    </>
  );
}
