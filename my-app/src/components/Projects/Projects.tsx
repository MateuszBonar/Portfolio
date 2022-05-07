import React, { FC } from 'react';
import { WrapperContainer } from 'Components';
import { Fade } from 'react-awesome-reveal';
import { useTranslation } from 'react-i18next';

import './Projects.scss';
import ProjectItem from 'Components/Projects/ProjectItem';
import { appConfig } from 'Constants';

const Projects: FC = (): JSX.Element => {
  const { t } = useTranslation();

  return <WrapperContainer classes={['projects', 'container']} id='projects'>
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
    <div className='projects__carousel'>
      {
        appConfig.projects.map(el => <ProjectItem {...el} key={el.link}/>)
      }
    </div>
  </WrapperContainer>;
};

export default Projects;