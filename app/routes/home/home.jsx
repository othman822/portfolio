import gamestackTexture2Large from '~/assets/gamestack-list-large.jpg';
import gamestackTexture2Placeholder from '~/assets/gamestack-list-placeholder.jpg';
import gamestackTexture2 from '~/assets/gamestack-list.jpg';
import gamestackTextureLarge from '~/assets/gamestack-login-large.jpg';
import gamestackTexturePlaceholder from '~/assets/gamestack-login-placeholder.jpg';
import gamestackTexture from '~/assets/gamestack-login.jpg';
import sliceTextureLarge from '~/assets/slice-app-large.jpg';
import sliceTexturePlaceholder from '~/assets/slice-app-placeholder.jpg';
import sliceTexture from '~/assets/slice-app.jpg';
import taskSystemTextureLarge from '~/assets/task-managment-system-large.jpg';
import taskSystemTexturePlaceholder from '~/assets/task-managment-system-placeholder.jpg';
import taskSystemTexture from '~/assets/task-managment-system.jpg';
import trafficSignTextureLarge from '~/assets/traffic-sign-recognition-large.jpg';
import trafficSignTexturePlaceholder from '~/assets/traffic-sign-recognition-placeholder.jpg';
import trafficSignTexture from '~/assets/traffic-sign-recognition.jpg';
import sprTexture from '~/assets/OSAT.PNG';
import sprTextureLarge from '~/assets/OSAT.PNG';
import sprTexturePlaceholder from '~/assets/OSAT.PNG';
import { Footer } from '~/components/footer';
import { baseMeta } from '~/utils/meta';
import { Intro } from './intro';
import { Profile } from './profile';
import { ProjectSummary } from './project-summary';
import { useEffect, useRef, useState } from 'react';
import config from '~/config.json';
import styles from './home.module.css';

// Prefetch draco decoader wasm
export const links = () => {
  return [
    {
      rel: 'prefetch',
      href: '/draco/draco_wasm_wrapper.js',
      as: 'script',
      type: 'text/javascript',
      importance: 'low',
    },
    {
      rel: 'prefetch',
      href: '/draco/draco_decoder.wasm',
      as: 'fetch',
      type: 'application/wasm',
      importance: 'low',
    },
  ];
};

export const meta = () => {
  return baseMeta({
    title: 'Software Engineer',
    description: `Portfolio of ${config.name} — a software engineer specializing in building efficient and scalable applications with a focus on clean architecture and problem solving.`,
  });
};

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();
  const details = useRef();

  useEffect(() => {
    const sections = [intro, projectOne, projectTwo, projectThree, details];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    sections.forEach(section => {
      sectionObserver.observe(section.current);
    });

    indicatorObserver.observe(intro.current);

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  return (
    <div className={styles.home}>
      <Intro
        id="intro"
        sectionRef={intro}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />
      <ProjectSummary
        id="project-1"
        sectionRef={projectOne}
        visible={visibleSections.includes(projectOne.current)}
        index={1}
        title="OSAT - AI-Powered Analytics Platform"
        description="A full-stack platform delivering intelligent insights using machine learning and advanced analytics"
        buttonText="View project"
        buttonLink="/projects/osat"
        model={{
          type: 'laptop',
          alt: 'AI-Powered Analytics Platform interface',
          textures: [
            {
              srcSet: `${sprTexture} 1280w, ${sprTextureLarge} 2560w`,
              placeholder: sprTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-2"
        alternate
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={2}
        title="Road Sign Detection - Computer Vision"
        description="Real-time road sign detection system using TensorFlow and OpenCV with deep learning for high-accuracy recognition"
        buttonText="View project"
        buttonLink="/projects/road-sign-detection"
        model={{
          type: 'laptop',
          alt: 'Road sign detection application interface',
          textures: [
            {
              srcSet: `${trafficSignTexture} 800w, ${trafficSignTextureLarge} 1920w`,
              placeholder: trafficSignTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-3"
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={3}
        title="IT Task Management System"
        description="Task management system using Java, leveraging priority queues for efficient scheduling with multithreading and object-oriented design"
        buttonText="View project"
        buttonLink="/projects/task-management"
        model={{
          type: 'laptop',
          alt: 'IT Task Management System interface',
          textures: [
            {
              srcSet: `${taskSystemTexture} 800w, ${taskSystemTextureLarge} 1920w`,
              placeholder: taskSystemTexturePlaceholder,
            },
          ],
        }}
      />
      <Profile
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
        id="details"
      />
      <Footer />
    </div>
  );
};
