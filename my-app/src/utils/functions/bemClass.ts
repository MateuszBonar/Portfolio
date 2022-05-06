import classnames from 'classnames';

const bemClass = (block: string, modifiers: { [key: string]: boolean }, ...others: string[]): string =>
    classnames(
        block,
        Object.keys(modifiers || {})
            .filter(modifier => (modifiers || {})[modifier])
            .map(modifier => `${block}--${modifier}`),
        ...others
    ).trim();

export default bemClass;