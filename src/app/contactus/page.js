import Header from '../header';
import Form from './form';
import ContactDetails from './contactDetails';
import GetInTouch from './getintouch';

export default function Contact() {
  return (
    <div className='flex flex-col relative min-h-screen bg-home bg-cover bg-no-repeat'>
      <Header/>
      <div className='relative' style={{ paddingTop: '4rem' }}>
        <div className='flex flex-row font-poppins text-white'>
          <div className='flex-1 relative'>
            <div className='inset-0 flex items-center justify-end'>
              <GetInTouch />
            </div>
          </div>

          <div className='flex-1 relative'>
          <div className='flex justify-start'>
              <div className='inset-0 flex flex-col items-center space-y-6'>
                <Form />
                <ContactDetails />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}




  