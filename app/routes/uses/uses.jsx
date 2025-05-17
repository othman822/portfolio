import usesBackgroundPlaceholder from '~/assets/uses-background-placeholder.jpg';
import usesBackground from '~/assets/uses-background.mp4';
import { Footer } from '~/components/footer';
import { Link } from '~/components/link';
import { List, ListItem } from '~/components/list';
import { Table, TableBody, TableCell, TableHeadCell, TableRow } from '~/components/table';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectSection,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from '~/layouts/project';
import { baseMeta } from '~/utils/meta';
import styles from './uses.module.css';

export const meta = () => {
  return baseMeta({
    title: 'Uses',
    description: 'A list of languages, frameworks, tools, and technologies I use for software development',
  });
};

export const Uses = () => {
  return (
    <>
      <ProjectContainer className={styles.uses}>
        <ProjectBackground
          src={usesBackground}
          placeholder={usesBackgroundPlaceholder}
          opacity={0.7}
        />
        <ProjectHeader
          title="Uses"
          description="A comprehensive list of programming languages, frameworks, tools, and technologies that I use for software development, machine learning, and computer vision projects."
        />
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Programming Languages</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  <ListItem>
                    <Link href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">JavaScript</Link>{' '}
                    is my primary language for web and front-end development. I use it with React and Node.js
                    to build full-stack applications with responsive and interactive user interfaces.
                  </ListItem>
                  <ListItem>
                    <Link href="https://www.java.com">Java</Link> for enterprise applications and systems
                    that require robust performance. I've used it to develop my IT Task Management System
                    with multithreading and object-oriented design principles.
                  </ListItem>
                  <ListItem>
                    <Link href="https://www.python.org/">Python</Link> for data analysis, machine learning,
                    and AI applications. I use it extensively with libraries like TensorFlow for my
                    computer vision projects such as the Road Sign Detection system.
                  </ListItem>
                  <ListItem>
                    <Link href="https://www.w3.org/TR/html5/">HTML</Link> and{' '}
                    <Link href="https://www.w3.org/Style/CSS/">CSS</Link> for structuring and styling
                    web applications, focusing on responsive design and accessibility.
                  </ListItem>
                  <ListItem>
                    <Link href="https://www.postgresql.org/">SQL</Link> for database management and
                    querying, primarily with PostgreSQL for data persistence in my applications.
                  </ListItem>
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Frameworks & Tools</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  <ListItem>
                    <Link href="https://reactjs.org/">React</Link> for building user interfaces with reusable
                    components. I use it extensively in my web applications, focusing on performance
                    and maintainable code structure.
                  </ListItem>
                  <ListItem>
                    <Link href="https://nodejs.org/">Node.js</Link> for building server-side and backend
                    applications, creating RESTful APIs and microservices architecture.
                  </ListItem>
                  <ListItem>
                    <Link href="https://vitejs.dev/">Vite</Link> as a modern front-end build tool for faster
                    development and optimized production builds. I appreciate its speed and simplicity.
                  </ListItem>
                  <ListItem>
                    <Link href="https://www.tensorflow.org/">TensorFlow</Link> and{' '}
                    <Link href="https://opencv.org/">OpenCV</Link> for machine learning and computer vision
                    applications, including my road sign detection project.
                  </ListItem>
                  <ListItem>
                    <Link href="https://supabase.io/">Supabase</Link> (PostgreSQL) for database management and
                    real-time functionality in web applications.
                  </ListItem>
                  <ListItem>
                    <Link href="https://git-scm.com/">Git</Link> and{' '}
                    <Link href="https://github.com/">GitHub</Link> for version control, collaboration,
                    and CI/CD workflows.
                  </ListItem>
                  <ListItem>
                    <Link href="https://cursor.sh/">Cursor</Link> as my preferred code editor with AI assistance
                    for enhanced productivity and code suggestions.
                  </ListItem>
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow stretch width="m">
              <ProjectSectionHeading>System</ProjectSectionHeading>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableHeadCell>Desktop</TableHeadCell>
                    <TableCell>Custom built</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Operating system</TableHeadCell>
                    <TableCell>Windows 10 Pro</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Browser</TableHeadCell>
                    <TableCell>Chrome</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Monitor</TableHeadCell>
                    <TableCell>Samsung G5</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Keyboard</TableHeadCell>
                    <TableCell>Razer Huntsman Mini</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Mouse</TableHeadCell>
                    <TableCell>Razer Viper V2 Pro</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Headphones</TableHeadCell>
                    <TableCell>HyperX Cloud III</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </>
  );
};
