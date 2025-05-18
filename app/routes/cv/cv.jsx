import { Heading } from '~/components/heading';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { Button } from '~/components/button';
import { Link } from '~/components/link';
import { useInViewport } from '~/hooks';
import { useRef, useState, useEffect } from 'react';
import styles from './cv.module.css';

export function CV() {
  const [focused, setFocused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const cvRef = useRef();
  const isInViewport = useInViewport(cvRef, false, { threshold: 0.4 });

  useEffect(() => {
    setIsMobile(/Mobi|Android/i.test(window.navigator.userAgent));
  }, []);

  const sectionVisible = isInViewport || focused || isMobile;
  
  const handleFocus = () => {
    setFocused(true);
  };
  
  const handleBlur = () => {
    setFocused(false);
  };

  return (
    <div 
      className={styles.cv}
      ref={cvRef}
      onFocus={handleFocus}
      onBlur={handleBlur}
      tabIndex={-1}
    >
      <Section className={styles.section}>
        <Heading 
          level={2} 
          as="h1" 
          className={styles.title}
          data-visible={sectionVisible}
        >
          Curriculum Vitae
        </Heading>
        
        <div 
          className={styles.downloadContainer}
          data-visible={sectionVisible}
          style={{
            transitionDelay: sectionVisible ? '100ms' : '0ms',
          }}
        >
          <Button
            iconHoverShift
            href="/files/othman_al_bakri_cv.pdf"
            icon="download"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download PDF
          </Button>
        </div>

        <div 
          className={styles.headerInfo}
          data-visible={sectionVisible}
          style={{
            transitionDelay: sectionVisible ? '200ms' : '0ms',
          }}
        >
          <Heading level={1} className={styles.name}>
            OTHMAN AL BAKRI
          </Heading>
          <Heading level={4} className={styles.role}>
            Software Engineer
          </Heading>
          <div className={styles.contactInfo}>
            <Text>othmanbakri55@gmail.com</Text>
            <Text>+961 71 443 405</Text>
            <Link href="https://www.linkedin.com/in/othman-al-bakri-a829932ab">LinkedIn</Link>
            <Link href="https://github.com/othman822">GitHub</Link>
          </div>
        </div>

        <div 
          className={styles.sectionContent}
          data-visible={sectionVisible}
          style={{
            transitionDelay: sectionVisible ? '300ms' : '0ms',
          }}
        >
          <Heading level={3}>SUMMARY</Heading>
          <Text as="p">
            Software engineer specializing in AI, machine learning, and full-stack development. Led development on OSAT, an
            advanced analytics platform designed to deliver intelligent insights and real-world solutions. Independently created a
            Road Sign Detection system, applying deep learning and computer vision to achieve high-accuracy recognition for real-
            time applications. I build scalable, high-performance applications and intelligent models with a strong focus on precision,
            usability, and solving real-world problems.
          </Text>
        </div>

        <div 
          className={styles.sectionContent}
          data-visible={sectionVisible}
          style={{
            transitionDelay: sectionVisible ? '400ms' : '0ms',
          }}
        >
          <Heading level={3}>PERSONAL PROJECTS</Heading>
          
          <div className={styles.project}>
            <Heading level={4}>OSAT – AI-Powered Analytics Platform</Heading>
            <ul className={styles.bulletList}>
              <li>
                <Text>Led development of a full-stack platform delivering intelligent insights using machine learning and advanced analytics.</Text>
              </li>
              <li>
                <Text>Built scalable architecture with React, Node.js, and Python, improving system responsiveness and user engagement.</Text>
              </li>
              <li>
                <Text>Optimized AI models, significantly enhancing prediction accuracy and operational efficiency.</Text>
              </li>
            </ul>
          </div>
          
          <div className={styles.project}>
            <Heading level={4}>Road Sign Detection – Computer Vision Project</Heading>
            <ul className={styles.bulletList}>
              <li>
                <Text>Developed a deep learning model for real-time road sign detection using TensorFlow and OpenCV.</Text>
              </li>
              <li>
                <Text>Improved detection accuracy through data augmentation and hyperparameter tuning.</Text>
              </li>
              <li>
                <Text>Created a user-friendly testing interface to simulate real-world driving scenarios.</Text>
              </li>
            </ul>
          </div>
          
          <div className={styles.project}>
            <Heading level={4}>IT Task Management System – Java Application</Heading>
            <ul className={styles.bulletList}>
              <li>
                <Text>Designed and implemented a task management system using Java, leveraging priority queues for efficient task scheduling.</Text>
              </li>
              <li>
                <Text>Integrated features for dynamic task assignment, priority handling, and deadline tracking.</Text>
              </li>
              <li>
                <Text>Improved system reliability and performance through multithreading and object-oriented design principles.</Text>
              </li>
            </ul>
          </div>
        </div>

        <div 
          className={styles.sectionContent}
          data-visible={sectionVisible}
          style={{
            transitionDelay: sectionVisible ? '500ms' : '0ms',
          }}
        >
          <Heading level={3}>EDUCATION</Heading>
          <div className={styles.education}>
            <div className={styles.educationHeader}>
              <Heading level={4}>Beirut Arab University - BAU</Heading>
              <Text>June, 2025</Text>
            </div>
            <Text className={styles.degree}>B.S in Computer Science</Text>
            <Text>Relevant Courses: Data Structures, OOP, Web Development, Applied AI, Computer Security.</Text>
          </div>
        </div>

        <div 
          className={styles.sectionContent}
          data-visible={sectionVisible}
          style={{
            transitionDelay: sectionVisible ? '600ms' : '0ms',
          }}
        >
          <Heading level={3}>TECHNICAL SKILLS</Heading>
          <div className={styles.skillSection}>
            <Text className={styles.skillTitle}>Languages & Frameworks:</Text>
            <Text>JavaScript(React, Node.js), HTML, CSS, Java, SQL, Python</Text>
          </div>
          <div className={styles.skillSection}>
            <Text className={styles.skillTitle}>Frameworks & Tools:</Text>
            <Text>Cursor, Git/Github, Vite, React, Supabase (PostgreSQL)</Text>
          </div>
          <div className={styles.skillSection}>
            <Text className={styles.skillTitle}>Soft Skills:</Text>
            <Text>Strong Communication, Problem-Solving, Team Collaboration.</Text>
          </div>
          <div className={styles.skillSection}>
            <Text className={styles.skillTitle}>Languages:</Text>
            <Text>English (Fluent), Arabic (Native)</Text>
          </div>
        </div>
      </Section>
    </div>
  );
} 