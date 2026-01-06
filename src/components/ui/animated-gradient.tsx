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
            #f8f9fa,
            #e9ecef,
            #f1f3f5,
            #dee2e6,
            #f8f9fa,
            #e9ecef
          );
          background-size: 400% 400%;
          animation: gradientShift 15s ease infinite;
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
          filter: blur(80px);
          opacity: 0.4;
          animation: float 20s ease-in-out infinite;
        }

        .gradient-orb-1 {
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(200, 200, 200, 0.8) 0%, transparent 70%);
          top: -200px;
          left: -100px;
          animation-delay: 0s;
        }

        .gradient-orb-2 {
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(180, 180, 180, 0.6) 0%, transparent 70%);
          bottom: -150px;
          right: -100px;
          animation-delay: -5s;
          animation-duration: 25s;
        }

        .gradient-orb-3 {
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(220, 220, 220, 0.5) 0%, transparent 70%);
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
