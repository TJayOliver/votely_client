import {RotatingLines} from 'react-loader-spinner';

export const Loading = () => {
    return (
        <div className=' flex justify-center'>
        <RotatingLines width='50' strokeWidth='3' />
        </div>
    )
}
