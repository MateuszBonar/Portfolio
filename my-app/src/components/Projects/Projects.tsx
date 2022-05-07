import React, { FC } from 'react';
import { WrapperContainer } from 'Components';
import { Fade } from 'react-awesome-reveal';
import { useTranslation } from 'react-i18next';

import './Projects.scss';
import ProjectItem from 'Components/Projects/ProjectItem';

const Projects: FC = (): JSX.Element => {
  const { t } = useTranslation();

  return <WrapperContainer classes={['projects', 'container']} id='footer'>
    <div className='projects__content'>
      <Fade>
        <div className='projects__title'>
          <p>
            {t('inf_projects_title')}
          </p>
          <p>
            {t('inf_projects_subheader')}
          </p>
        </div>
      </Fade>
    </div>
    <div className="projects__carousel">
        <ProjectItem tags={['React', 'Javascript','Typescript']} img={'https://img.pakamera.net/i1/7/954/obrazy-i-plakaty-12320957_8726585954.jpg'} title={'Projekt do czegoś'} link={'test'}/>
        <ProjectItem tags={['React', 'Javascript','Typescript']} img={'https://img.pakamera.net/i1/7/954/obrazy-i-plakaty-12320957_8726585954.jpg'} title={'Projekt do czegoś'} link={'test'}/>
        <ProjectItem tags={['React', 'Javascript','Typescript']} img={'https://img.pakamera.net/i1/7/954/obrazy-i-plakaty-12320957_8726585954.jpg'} title={'Projekt do czegoś'} link={'test'}/>
        <ProjectItem tags={['React', 'Javascript','Typescript']} img={'https://img.pakamera.net/i1/7/954/obrazy-i-plakaty-12320957_8726585954.jpg'} title={'Projekt do czegoś'} link={'test'}/>
        <ProjectItem tags={['React', 'Javascript','Typescript']} img={'https://img.pakamera.net/i1/7/954/obrazy-i-plakaty-12320957_8726585954.jpg'} title={'Projekt do czegoś'} link={'test'}/>
        <ProjectItem tags={['React', 'Javascript','Typescript']} img={'https://img.pakamera.net/i1/7/954/obrazy-i-plakaty-12320957_8726585954.jpg'} title={'Projekt do czegoś'} link={'test'}/>
        <ProjectItem tags={['React', 'Javascript','Typescript']} img={'https://img.pakamera.net/i1/7/954/obrazy-i-plakaty-12320957_8726585954.jpg'} title={'Projekt do czegoś'} link={'test'}/>
    </div>
  </WrapperContainer>;
};

export default Projects;