const Main = ({children, className = ''}) => {
    return ( 
        <main className={`max-w-screen-2xl text-white px-4 mx-auto w-full ${className}`}>
                {children}
        </main>
     );
}
 
export default Main;