import Header from '../header';
import Form from './form';
import ContactDetails from './contactDetails';
import GetInTouch from './getintouch';

export default function Contact() {
  return (
    <div className='flex flex-col bg-home bg-cover bg-no-repeat'>
      <Header />
      <div className='flex flex-row font-poppins text-white'>
        <div className='flex flex-col'>
          {/* <Form /> */}
          {/* <ContactDetails /> */}
          <GetInTouch />
        </div>
      </div>
    </div>
  );
}
