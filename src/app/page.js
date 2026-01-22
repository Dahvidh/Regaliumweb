"use client";
import React, { useState, useEffect } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

// Defining a custom hook to track screen width

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false); // ✅ safe default

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth <= 600);
    };

    checkScreen(); // ✅ run once on mount
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return isMobile;
};
const LandingPage = () => {
  const targetDate = new Date("2026-12-31T00:00:00");
  const isMobile = useIsMobile(); // Calling the custom hook here

  // Countdown timer logic
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const now = new Date();
    const difference = targetDate - now;

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      {/* Header */}
      {/* <Header />*/}

      {/* Main Content */}

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#151313ff",
        }}
      >
        <img
          src="/Regalium-removebg-preview.png" // Replace with the actual logo path
          alt="Regalium Logo"
          style={{ width: "150px", marginBottom: "1rem" }}
        />
      </div>

      <div
        style={{
          backgroundColor: "#151313ff",
          textAlign: isMobile ? "center" : "left",
          padding: "1rem",
          minHeight: "92vh",
          display: "flex",
          flexDirection: "column",
          //justifyContent: "center",
          alignItems: isMobile ? "flex-start" : "center",
          boxSizing: "border-box",
        }}
      >
        <h1
          style={{
            color: "#9d820bff",
            fontSize: isMobile ? "1.5rem" : "2rem",
            fontWeight: "bold",
            textAlign: isMobile ? "left" : "center",
          }}
        >
          WE ARE ALMOST READY!!!
        </h1>

        <br />

        {/* Countdown Timer */}
        <div
          style={{
            display: "flex",
            justifyContent: isMobile ? "flex-start" : "center",
            gap: "0.5rem",
            fontSize: isMobile ? "1.2rem" : "1.5rem",
            color: "#443804ff",
            marginBottom: "2rem",
            marginTop: "1rem",
          }}
        >
          {Object.keys(timeLeft).map((unit, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "#ccd1d466",
                padding: "0.5rem 1rem",
                borderRadius: "8px",
                textAlign: "center",
              }}
            >
              <span style={{ fontWeight: "bold" }}>
                {timeLeft[unit] || "0"}
              </span>
              <div style={{ fontSize: "0.75rem" }}>{unit}</div>
            </div>
          ))}
        </div>

        {/* Social Media Links */}
        <p
          style={{
            color: "#fff",
            fontSize: isMobile ? "0.8rem" : "0.9rem",
            marginTop: "2rem",
            textAlign: isMobile ? "left" : "center",
          }}
        >
          GOT ANY QUESTION? REACH US HERE!
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: isMobile ? "flex-start" : "center",
            gap: "1rem",
            marginTop: "1rem",
          }}
        >
          <a
            href="https://www.facebook.com/"
            style={{
              color: "#443804ff",
              fontSize: isMobile ? "2rem" : "1.5rem",
            }}
          >
            <i className="fab fa-facebook"></i>
          </a>
          <a
            href="https://x.com/"
            style={{
              color: "#443804ff",
              fontSize: isMobile ? "2rem" : "1.5rem",
            }}
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://www.linkedin.com/"
            style={{
              color: "#443804ff",
              fontSize: isMobile ? "2rem" : "1.5rem",
            }}
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://youtube.com"
            style={{
              color: "#443804ff",
              fontSize: isMobile ? "2rem" : "1.5rem",
            }}
          >
            <i className="fab fa-youtube"></i>
          </a>
          <a
            href="https://whatsapp.com"
            style={{
              color: "#443804ff",
              fontSize: isMobile ? "2rem" : "1.5rem",
            }}
          >
            <i className="fab fa-whatsapp"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
