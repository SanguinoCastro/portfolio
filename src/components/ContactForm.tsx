const ContactForm = () => {
  return (
    <div className='contact__content w-full h-full flex  items-center justify-center p-[2.5rem]'>
      <div className='contact__title w-1/2 h-full flex flex-col text-left gap-[3rem]'>
        <h1 className='contact__title__h1'>
          <span className='capital font-bold'>C</span>ontacto
        </h1>
        <p className='w-3/4 contact__title__p'>
          Puedes contactar conmigo mediante el siguiente formulario
        </p>
      </div>
      <form
        action='#'
        className='contact__form flex flex-col justify-center items-center   w-[35rem] h-full gap-[1rem]'
      >
        {/* <label htmlFor='email'>Email</label> */}
        <input
          type='email'
          name='email'
          placeholder='Email*'
          className='input input__email w-[35rem] h-[4rem] rounded-xl p-[1rem] text-[1.6rem] bg-[var(--secondary-input)] border-[0.2rem] border-[var(--secondary-border)]'
        />

        {/* <label htmlFor='message'>Message</label> */}
        <textarea
          name='message'
          placeholder='Mensaje*'
          className='input input__message h-[15rem] w-[35rem] rounded-xl p-[1rem] text-[1.6rem] bg-[var(--secondary-input)] border-[0.2rem] border-[var(--secondary-border)]'
        ></textarea>
        <button
          type='submit'
          className='input__button olive rounded-xl w-[35rem] h-[5rem] text-[2rem] mb-[-1rem]'
        >
          Enviar mensaje
        </button>
        <p className='input__error text-[1.6rem] self-center text-red-600'>
          Código error formulario
        </p>
      </form>
    </div>
  );
};
export default ContactForm;
