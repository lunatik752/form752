import { Link } from 'react-router-dom';


const StartPage: React.FC = () => {

    return (
        <div className='container min-h-screen mx-auto py-4 px-2 flex justify-center'>
            <Link to="/form">
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                    FORM
                </button>
            </Link>
        </div>
    );
};

export default StartPage;