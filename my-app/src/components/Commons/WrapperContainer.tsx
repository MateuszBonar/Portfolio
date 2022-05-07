import { FC } from 'react';

const WrapperContainer: FC<{ classes: string[], id: string }> = ({ classes, id, children }): JSX.Element => {
  const [main, ...rest] = classes;

  return <div className={main} id={id}>
    <div className={rest.join('')}>
      {children}
    </div>
  </div>;
};

export default WrapperContainer;