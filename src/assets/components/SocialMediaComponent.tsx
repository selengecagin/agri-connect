import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function SocialMediaComponent() {
    const socialMediaLinks = [
      { icon: faFacebook, url: "https://www.facebook.com/", label: "Facebook" },
      {
        icon: faInstagram,
        url: "https://www.instagram.com/",
        label: "Instagram",
      },
      { icon: faTwitter, url: "https://twitter.com", label: "Twitter" },
    ];
  return (
    <div >
      {socialMediaLinks.map((link, index) => {
        return (
          <a
            href={link.url}
            key={index}
            target="_blank"
            aria-label={`Follow us on ${link.label}`}
            rel="noopener noreferrer"
            className="text-lightTextColor hover:scale-110 transition duration-200"
          >
            <FontAwesomeIcon
              icon={link.icon}
              size="xl"
              style={{ color: "#23A6F0" }}
            />
          </a>
        );
      })}
    </div>
  );
}
