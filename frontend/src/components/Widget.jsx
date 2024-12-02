const Widget = ({children, name, buttonLabel, onClick, className = '', bodyClassName = ''}) => {
    
    const baseStyle = "widget w-full p-4 rounded-2xl max-w-xl "
    
    return ( 
        <section className= {baseStyle + className}>
            <div className="flex justify-between w-full mb-4">
            <h4 className="uppercase text-sm">{name}</h4>
            {buttonLabel ? (
                <button onClick={onClick} className="uppercase text-primary text-sm ">
                    {buttonLabel}
                </button>
            ) :
            ''}
            </div>
            <div className={bodyClassName}>
                {children}
            </div>
        </section>
     );
}
 
export default Widget;