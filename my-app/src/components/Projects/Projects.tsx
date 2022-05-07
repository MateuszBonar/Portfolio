import React, { FC } from 'react';
import { WrapperContainer } from 'Components';
import { Fade } from 'react-awesome-reveal';
import { useTranslation } from 'react-i18next';

import './Projects.scss';

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
  </WrapperContainer>;
};

export default Projects;