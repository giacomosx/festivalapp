import {Link} from "react-router-dom";

const sizeVariants = {
    'xs' : 'min-w-10 h-10 text-base',
    'sm' : 'min-w-12 h-12 text-lg',
    'md' : 'min-w-16 h-16 text-xl',
    'lg' : 'min-w-24 h-24 text-3xl',
}

const Avatar = ({user, path, size = 'sm'}) => {
    const getInitials = name => name.split(' ').map(word => word[0].toUpperCase()).join('');
    const sizeStyle = sizeVariants[size] || size;

    return (
        <Link
            to={path}
            className={`${sizeStyle} leading-none flex justify-center items-center text-black bg-primary hover:bg-primary-hover focus:ring-2 focus:ring-primary rounded-full transition-all`}
        >
            {getInitials(user?.name || user?.username)}
        </Link>
    );
};

export default Avatar;
