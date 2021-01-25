import React from "react";
import styles from "./AboutUs.module.css";

const AboutUs = () => {
  return (
    <>
      <div className={styles.containerheader} >
        <h1 className={styles.header}>Event Management creates opportunities</h1>
        <p className={styles.headerparag}>
          Event Management is a platform to find and build local communities.
          People use Event Management to meet new people, to learn new things,
          to find support, to leave their comfort zone and to pursue their
          passions together. When passionate people come together, it becomes
          something big. <br/>
          
          <span className={styles.indent}  > Event Management </span> 
          mission is to help people grow through real human
          connections and achieve their goals. From professional networking to
          brewery tours to programming workshops: With Event Management, people can 
          continue their
          dreams and find a supportive community.
        </p>
      </div>

      <div className={styles.containerfooter} >
        <ul className={styles.subcontainer}> 
          <li className={styles.contactus}>Contact Us</li>
          <li><i class="icon-home icon-2x"></i> Wandalenweg 30, 20097 Hamburg</li>
          
          <li><i class="icon-time icon-2x"></i>  Mondays-Fridays 9am-6pm</li>
          <li><i class="icon-phone-sign icon-2x"></i> 040 882157080</li>

        </ul>
        
        <ul className={styles.subcontainer1}> 
          <li className={styles.follow}>Follow</li>
          <li><a href="https://www.facebook.com/"><i class="icon-facebook-sign icon-2x btn-white" ></i> </a></li>
          <li><a href="https://www.instagram.com/"><i class="icon-instagram icon-2x btn-success"></i></a></li>
          <li><a href="https://www.youtube.com/"><i class="icon-youtube-sign icon-2x btn-danger"></i></a></li>
          <li><a href="https://github.com/jasmin-mn/Event-App"><i class="icon-github icon-2x"></i></a></li>
        </ul>
        


      </div>
    </>
  );
};

export default AboutUs;
