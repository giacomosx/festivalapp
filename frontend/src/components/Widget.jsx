import {Link} from "react-router-dom";

const Widget = ({children, name, buttonLabel, path, className = '', bodyClassName = ''}) => {
    
    const baseStyle = "widget w-full p-4 rounded-2xl max-w-xl "
    
    return ( 
        <section className= {baseStyle + className}>
            <div className="flex justify-between w-full mb-4">
            <h4 className="uppercase text-sm">{name}</h4>
            {buttonLabel ? (
                <Link to={path} className="uppercase text-primary text-sm ">
                    {buttonLabel}
                </Link>
            ) :
            ''}
            </div>
            <div className={bodyClassName + ' overflow-y-scroll'}>
                {children}
            </div>
        </section>
     );
}
 
export default Widget;