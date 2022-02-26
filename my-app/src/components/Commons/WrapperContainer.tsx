import {FC} from "react";

const WrapperContainer: FC<{ classes: string[] }> = ({classes, children}): JSX.Element => {
    const [main, ...rest] = classes

    return <div className={main}>
        <div className={rest.join('')}>
            {children}
        </div>
    </div>
}

export default WrapperContainer