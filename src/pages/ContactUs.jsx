import React, { useEffect } from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ep962r6",
        "template_icna3ff",
        form.current,
        "UtNeLGIo22vCCspSj"
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className='bg-[#f2f2f2] md:mt-[81px] xsm:mt-16 sm:h-[100vh] pt-20 xsm:h-auto pb-8'>
      <div className='px-5 max-w-[1260px] w-full mx-auto min-h-[20px]'>
        <div className='flex md:flex-row justify-between items-start xsm:flex-col gap-5'>
          <div className='max-w-[305px] w-full '>
            <div className='text-3xl font-semibold mb-4 text-[#4c5057]'>Contact</div>
            <h3 className='text-black m-0 text-5xl font-semibold leading-snug mb-8'>
              Contact us through the following channels.
            </h3>
            <a
              href='mailto:mandalosy13@gmail.com'
              className='color-black underline mb-4 text-4xl font-normal'>
              mandalosy13@gmail.com
            </a>
            <div className='gap-x-8 gap-y-4 items-center flex mt-10 mb-6'>
              <a
                href='https://twitter.com/mandalosy'
                className='max-w-full inline-block'>
                <img
                  src='https://uploads-ssl.webflow.com/642e7ef447d6adbabfead056/64352bdf95c54ec9011141a9_instagram-167-svgrepo-com.svg'
                  loading='lazy'
                  alt=''
                  className='h-12 max-w-full align-middle inline-block'
                />
              </a>
              <a
                href='https://twitter.com/mandalosy'
                className='max-w-full inline-block'>
                <img
                  src='https://uploads-ssl.webflow.com/642e7ef447d6adbabfead056/64352c33ac4abe14016630b6_facebook-svgrepo-com%20(1)-cropped.svg'
                  loading='lazy'
                  alt=''
                  className='h-12 max-w-full align-middle inline-block'
                />
              </a>
              <a
                href='https://twitter.com/mandalosy'
                className='max-w-full inline-block'>
                <img
                  src='https://uploads-ssl.webflow.com/642e7ef447d6adbabfead056/64352c3a04fc23ec267ce6e4_youtube-168-svgrepo-com.svg'
                  loading='lazy'
                  alt=''
                  className='h-12 max-w-full align-middle inline-block'
                />
              </a>
              <a
                href='https://twitter.com/mandalosy'
                className='max-w-full inline-block'>
                <img
                  src='https://uploads-ssl.webflow.com/642e7ef447d6adbabfead056/64353920be80c3391f787b74_patreon_black_logo_icon_147098.png'
                  loading='lazy'
                  alt=''
                  className='h-12 max-w-full align-middle inline-block'></img>
              </a>
            </div>
          </div>
          <div className='max-w-[630px] w-full '>
            <h2 className="text-black m-0 text-5xl font-semibold sm:leading-10 mb-8 xsm:leading-snug">For any questions, please contact with us</h2>
            <p className="mb-10 text-3xl">Fill the form below.</p>
            <div>
              <form autoComplete="off" action="" ref={form} method="send" onSubmit={sendEmail}>
                <input type="text" name="from_name" required placeholder="Name" className="w-full min-h-[50px] text-gray-700 bg-white rounded mb-4 h-[50px] px-2 py-3 text-3xl leading-7 block outline-[#9e9898] border border-[#e6e7e8]" />
                <input type="email" name="user_email" required placeholder="Email" className="w-full min-h-[50px] text-gray-700 bg-white rounded mb-4 h-[50px] px-2 py-3 text-3xl leading-7 block outline-[#9e9898] border border-[#e6e7e8]" />
                <input type="phone" name="number_phone" required placeholder="Phone" className="w-full min-h-[50px] text-gray-700 bg-white rounded mb-4 h-[50px] px-2 py-3 text-3xl leading-7 block outline-[#9e9898] border border-[#e6e7e8]" />
                <input name="subject _title" type="text" required placeholder="Subject (Optional)" className="w-full min-h-[50px] text-gray-700 bg-white rounded mb-4 h-[50px] px-2 py-3 text-3xl leading-7 block outline-[#9e9898] border border-[#e6e7e8]" />
                <textarea name="message" type="text" maxLength={5000} required placeholder="Message ...." className="w-full h-[auto] text-gray-700 bg-white rounded mb-4 px-2 py-3 text-3xl leading-7 block outline-[#9e9898] border border-[#e6e7e8]"></textarea>
                <input className="w-36 text-3xl rounded py-4 text-black border border-black hover:bg-black hover:text-white transition duration-500 mt-4" type="submit" value="Send"/>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;