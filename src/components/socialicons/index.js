import React from "react";
import {
  FaGithub,
  FaTelegram,
  FaVk
} from "react-icons/fa";
import { socialprofils } from "../../content_option";
import "./style.css";

export const Socialicons = (params) => {
  return (
    <div className="stick_follow_icon">
      <ul>
        {socialprofils.github && (
          <li>
            <a href={socialprofils.github}>
              <FaGithub />
            </a>
          </li>
        )}
        {socialprofils.telegram && (
          <li>
            <a href={socialprofils.telegram}>
              <FaTelegram />
            </a>
          </li>
        )}
        {socialprofils.vk && (
          <li>
            <a href={socialprofils.vk}>
              <FaVk />
            </a>
          </li>
        )}   
        
      </ul>
      <p>Follow Me</p>
    </div>
  );
};
