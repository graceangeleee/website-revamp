import Header from '../header';
import GetInTouch from './getintouch';

export default function Contact() {
  return (
    <div className='bg-home bg-cover bg-no-repeat'>
      <Header />
      <div className='flex flex-row'>
        <GetInTouch />
      </div>
    </div>
  );
}
