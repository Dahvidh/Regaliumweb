"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import "@fortawesome/fontawesome-free/css/all.min.css";

// --------------------
// Custom Hook: Mobile Detection
// --------------------
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth <= 600);
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return isMobile;
};

// --------------------
// Landing Page Component
// --------------------
const LandingPage = () => {
  const isMobile = useIsMobile();

  // Memoized countdown calculator (no changing dependencies)
  const calculateTimeLeft = useCallback(() => {
    const targetDate = new Date("2026-12-31T00:00:00");
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
  }, []);

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [calculateTimeLeft]);

  return (
    <div>
      {/* Logo Section */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#151313ff",
          alignItems: "center",
          paddingTop: "1rem",
        }}
      >
        <Image
          src="/Regalium-removebg-preview.png"
          alt="Regalium Logo"
          width={150}
          height={150}
          priority
        />
      </div>

      {/* Main Content */}
      <div
        style={{
          backgroundColor: "#151313ff",
          textAlign: isMobile ? "center" : "left",
          padding: "1rem",
          minHeight: "92vh",
          display: "flex",
          flexDirection: "column",
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
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div
              key={unit}
              style={{
                backgroundColor: "#ccd1d466",
                padding: "0.5rem 1rem",
                borderRadius: "8px",
                textAlign: "center",
              }}
            >
              <span style={{ fontWeight: "bold" }}>{value}</span>
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
          {[
            { icon: "facebook", url: "https://www.facebook.com/" },
            { icon: "twitter", url: "https://x.com/" },
            { icon: "instagram", url: "https://www.instagram.com/" },
            { icon: "youtube", url: "https://youtube.com" },
            { icon: "whatsapp", url: "https://whatsapp.com" },
          ].map(({ icon, url }) => (
            <a
              key={icon}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#443804ff",
                fontSize: isMobile ? "2rem" : "1.5rem",
              }}
            >
              <i className={`fab fa-${icon}`}></i>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
