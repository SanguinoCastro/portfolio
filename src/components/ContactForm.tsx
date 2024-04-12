'use client';
import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { useLanguage } from '@/app/context/LanguageContext';

const ContactForm = () => {
  const { language } = useLanguage();
  const [state, handleSubmit] = useForm('mnqegdpk');
  const [errorMail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [error, setError] = useState('');
  const [emailData, setEmailData] = useState({
    email: '',
    message: '',
  });
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setErrorMessage('');
    setError('');
    const { message } = emailData;

    setEmailData({
      ...emailData,
      [e.target.name]: e.target.value,
    });
    // Validaciones

    if (!message.trim()) setErrorMessage('');
    if (!/\S/.test(message)) {
      setError(
        `${language === 'es' ? 'Por favor, indícame en qué te puedo ayudar.' : language === 'ca' ? "Si us plau, indica'm en què et puc ajudar." : 'Please, let me know how I can help you.'}`
      );
      setErrorMessage(
        `${language === 'es' ? 'Por favor, indícame en qué te puedo ayudar.' : language === 'ca' ? "Si us plau, indica'm en què et puc ajudar." : 'Please, let me know how I can help you.'}`
      );
    }
    if (errorMail || errorMessage || error) return;
  };

  return (
    <div className='contact__content w-full h-full flex  items-center justify-center p-[2.5rem]'>
      <div className='contact__title w-1/2 h-full flex flex-col text-left gap-[3rem]'>
        {language === 'es' ? (
          <>
            <h1 className='contact__title__h1' id='contact'>
              <span className='capital font-bold'>C</span>ontacto
            </h1>
            <p className='w-3/4 contact__title__p'>
              Puedes contactar conmigo mediante el siguiente formulario
            </p>
          </>
        ) : language === 'ca' ? (
          <>
            <h1 className='contact__title__h1'>
              <span className='capital font-bold'>C</span>ontacte
            </h1>
            <p className='w-3/4 contact__title__p'>
              Pots contactar amb mi mitjançant el següent formulari
            </p>
          </>
        ) : (
          <>
            <h1 className='contact__title__h1'>
              <span className='capital font-bold'>C</span>ontact
            </h1>
            <p className='w-3/4 contact__title__p'>
              You can contact me through the following form
            </p>
          </>
        )}
      </div>
      <form
        action='https://formspree.io/f/mnqegdpk'
        method='POST'
        className='contact__form flex flex-col justify-center items-center mt-[1.2rem]  w-[35rem] h-full gap-[1.1rem]'
      >
        {/* <label htmlFor='email'>Email</label> */}
        <input
          type='email'
          name='email'
          id='email'
          placeholder='*Email'
          className={`input input__email w-[35rem] h-[4rem] rounded-xl p-[1rem] text-[1.6rem] bg-[var(--secondary-input)] border-[0.2rem] border-[var(--secondary-border)]`}
          pattern='^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
          required
        />
        <ValidationError prefix='Email' field='email' errors={state.errors} />

        <textarea
          className={`input input__message h-[15rem] w-[35rem] rounded-xl p-[1rem] text-[1.6rem] bg-[var(--secondary-input)] border-[0.2rem] border-[var(--secondary-border)]`}
          name='message'
          id='message'
          placeholder={`${language === 'es' ? '*Mensaje' : language === 'ca' ? '*Missatge' : '*Message'}`}
          value={emailData.message}
          onChange={handleChange}
          required
        />

        <div className='input__privacity flex gap-4'>
          <input type='checkbox' name='privacity' id='privacity' required />
          <label htmlFor='privacity' className='privacity__label text-[1.4rem]'>
            *Acepto la{' '}
            <a
              href='/privacity'
              target='_blank'
              className='text-[var(--olive)] underline'
            >
              política de privacidad
            </a>
          </label>
        </div>
        <ValidationError
          prefix='Message'
          field='message'
          errors={state.errors}
        />

        <button
          type='submit'
          className={`input__button olive rounded-xl w-[35rem] h-[8rem] text-[2rem] mb-[-1rem] ${state.submitting && 'disabled'}`}
          disabled={state.submitting}
        >
          {language === 'es'
            ? 'Enviar mensaje'
            : language === 'ca'
              ? 'Enviar missatge'
              : 'Send message'}
        </button>

        <div className='h-[1.6rem]'>
          {errorMessage != '' && (
            <p className='input__error text-[1.6rem] self-center text-red-600'>
              {`${errorMessage}`}{' '}
            </p>
          )}
        </div>
      </form>
    </div>
  );
};
export default ContactForm;
