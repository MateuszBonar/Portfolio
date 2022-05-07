import React, { FC } from 'react';
import { Fade } from 'react-awesome-reveal';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { useTranslation } from 'react-i18next';

import './ProjectItem.scss';

const ProjectItem: FC<{
  tags: string[], img: string, title: string; link: string
}> = ({
        tags,
        img,
        title,
        link,
      }): JSX.Element => {
  const { t } = useTranslation();
  return <Fade className='project-item'>
    <div>
      <img src={img} alt={title} />
      <div className='project-item__content'>
        <div className='project-item__tags'>
          {tags.map(tag => <p className='project-item__tag'>{tag}</p>)}
        </div>
        <h3>{title}</h3>
        <div className='project-item__read-more'>
          <a href={link}>{t('inf_projects_read_more')}</a>
          <BsFillArrowRightCircleFill />
        </div>
      </div>
    </div>
  </Fade>;
};

export default ProjectItem;