import { useLanguage } from '@/app/context/LanguageContext';

const Privacity__text = () => {
  const { language } = useLanguage();
  return (
    <div className='content content__privacity w-[100%] border-rad flex flex-col py-[5rem] pb-[10rem] px-[10%]  !items-start !text-left'>
      {language === 'es' ? (
        <>
          <h2>
            <span className='capital'>P</span>olítica de privacidad
          </h2>

          <p>Última actualización: 07/04/2024</p>
          <br />
          <p>
            Gracias por visitar eduardsanguino.com. En eduardsanguino.com,
            respetamos tu privacidad y nos comprometemos a proteger tus datos
            personales. La presente política de privacidad explica cómo
            recopilamos, utilizamos y protegemos la información que obtengamos
            de ti a través de nuestro sitio web.
          </p>
          <br />
          <h3>
            <span className='capital'>I</span>nformación que recopilamos
          </h3>
          <br />
          <p>
            Cuando utilizas nuestro formulario de contacto, recopilamos tu
            dirección de correo electrónico para poder responder a tu consulta.
            No recopilamos ni solicitamos ningún otro tipo de información
            personal.
          </p>
          <br />
          <h3>
            <span className='capital'>U</span>so de la información
          </h3>
          <br />
          <p>
            Utilizamos tu dirección de correo electrónico únicamente para
            responder a tu consulta y brindarte la información o el servicio
            solicitado. No utilizamos tu dirección de correo electrónico para
            enviar publicidad de terceros ni para ningún otro propósito que no
            sea la comunicación directa contigo.
          </p>
          <br />
          <h3>
            <span className='capital'>A</span>lmacenamiento de la información
          </h3>
          <br />
          <p>
            Tu dirección de correo electrónico quedará almacenada en nuestra
            cuenta de correo electrónico como un contacto. Esta información se
            mantendrá en nuestra base de datos hasta que tú solicites su
            eliminación o nos indiques lo contrario.
          </p>
          <br />
          <h3>
            <span className='capital'>S</span>eguridad de la información
          </h3>
          <br />
          <p>
            Tomamos medidas de seguridad razonables para proteger la información
            personal que recopilamos. Sin embargo, debes tener en cuenta que
            ningún método de transmisión por Internet o almacenamiento
            electrónico es completamente seguro, por lo que no podemos
            garantizar la seguridad absoluta de tus datos.
          </p>
          <br />
          <h3>
            <span className='capital'>D</span>erechos del usuario
          </h3>
          <br />
          <p>
            Tienes derecho a acceder, rectificar, eliminar u oponerte al
            procesamiento de tu información personal. Si deseas ejercer alguno
            de estos derechos, por favor contáctanos a través de{' '}
            <a href='mailto:eduardsanguinodev@gmail.com'>
              eduardsanguinodev@gmail.com
            </a>
            .
          </p>
          <br />
          <h3>
            <span className='capital'>C</span>ambios en la política de
            privacidad
          </h3>
          <br />
          <p>
            Nos reservamos el derecho de actualizar o modificar esta política de
            privacidad en cualquier momento. Cualquier cambio importante será
            notificado mediante una publicación en nuestro sitio web. El uso
            continuado de nuestro sitio web después de dichos cambios
            constituirá tu aceptación de los mismos.
          </p>
          <br />
          <h3>
            <span className='capital'>C</span>ontacto
          </h3>
          <br />
          <p>
            Si tienes alguna pregunta o inquietud sobre nuestra política de
            privacidad, no dudes en contactarnos a través de{' '}
            <a href='mailto:eduardsanguinodev@gmail.com'>
              eduardsanguinodev@gmail.com
            </a>
            .
          </p>
        </>
      ) : language === 'ca' ? (
        <>
          <h2>
            <span className='capital'>P</span>olítica de privacitat
          </h2>

          <p>Última actualització: 07/04/2024</p>
          <br />
          <p>
            Gràcies per visitar eduardsanguino.com. A eduardsanguino.com,
            respectem la teva privacitat i ens comprometem a protegir les teves
            dades personals. La present política de privacitat explica com
            recopilem, utilitzem i protegim la informació que obtenim de tu a
            través del nostre lloc web.
          </p>
          <br />
          <h3>
            <span className='capital'>I</span>nformació que recopilem
          </h3>
          <br />
          <p>
            Quan utilitzes el nostre formulari de contacte, recopilem la teva
            adreça de correu electrònic per poder respondre a la teva consulta.
            No recopilem ni sol·licitem cap altre tipus d'informació personal.
          </p>
          <br />
          <h3>
            <span className='capital'>U</span>s de la informació
          </h3>
          <br />
          <p>
            Utilitzem la teva adreça de correu electrònic únicament per
            respondre a la teva consulta i proporcionar-te la informació o el
            servei sol·licitat. No utilitzem la teva adreça de correu electrònic
            per enviar publicitat de tercers ni per a cap altre propòsit que no
            sigui la comunicació directa amb tu.
          </p>
          <br />
          <h3>
            <span className='capital'>E</span>mmagatzematge de la informació
          </h3>
          <br />
          <p>
            La teva adreça de correu electrònic quedarà emmagatzemada al nostre
            compte de correu electrònic com un contacte. Aquesta informació es
            mantindrà a la nostra base de dades fins que tu sol·licitis la seva
            eliminació o ens indiquis el contrari.
          </p>
          <br />
          <h3>
            <span className='capital'>S</span>eguretat de la informació
          </h3>
          <br />
          <p>
            Prendrem mesures de seguretat raonables per protegir la informació
            personal que recopilem. No obstant això, has de tenir en compte que
            cap mètode de transmissió per Internet o emmagatzematge electrònic
            és completament segur, per la qual cosa no podem garantir la
            seguretat absoluta de les teves dades.
          </p>
          <br />
          <h3>
            <span className='capital'>D</span>rets de l'usuari
          </h3>
          <br />
          <p>
            Tens dret a accedir, rectificar, eliminar o oposar-te al
            processament de la teva informació personal. Si desitges exercir
            algun d'aquests drets, si us plau, contacta'ns a través del mail{' '}
            <a href='mailto:eduardsanguinodev@gmail.com'>
              eduardsanguinodev@gmail.com
            </a>
            .
          </p>
          <br />
          <h3>
            <span className='capital'>C</span>anvis en la política de privacitat
          </h3>
          <br />
          <p>
            Ens reservem el dret d'actualitzar o modificar aquesta política de
            privacitat en qualsevol moment. Qualsevol canvi important serà
            notificat mitjançant una publicació al nostre lloc web. L'ús
            continuat del nostre lloc web després d'aquests canvis constituirà
            la teva acceptació dels mateixos.
          </p>
          <br />
          <h3>
            <span className='capital'>C</span>ontacte
          </h3>
          <br />
          <p>
            Si tens alguna pregunta o preocupació sobre la nostra política de
            privacitat, no dubtis a contactar-nos a través d'{' '}
            <a href='mailto:eduardsanguinodev@gmail.com'>
              eduardsanguinodev@gmail.com
            </a>
            .
          </p>
        </>
      ) : (
        <>
          <h2>
            <span className='capital'>P</span>rivacy Policy
          </h2>

          <p>Last updated: 07/04/2024</p>
          <br />
          <p>
            Thank you for visiting eduardsanguino.com. At eduardsanguino.com, we
            respect your privacy and are committed to protecting your personal
            data. This privacy policy explains how we collect, use, and protect
            the information we obtain from you through our website.
          </p>
          <br />
          <h3>
            <span className='capital'>I</span>nformation we collect
          </h3>
          <br />
          <p>
            When you use our contact form, we collect your email address in
            order to respond to your inquiry. We do not collect or request any
            other type of personal information.
          </p>
          <br />
          <h3>
            <span className='capital'>U</span>se of information
          </h3>
          <br />
          <p>
            We use your email address solely to respond to your inquiry and
            provide you with the requested information or service. We do not use
            your email address to send third-party advertising or for any other
            purpose other than direct communication with you.
          </p>
          <br />
          <h3>
            <span className='capital'>S</span>torage of information
          </h3>
          <br />
          <p>
            Your email address will be stored in our email account as a contact.
            This information will be retained in our database until you request
            its deletion or indicate otherwise.
          </p>
          <br />
          <h3>
            <span className='capital'>S</span>ecurity of information
          </h3>
          <br />
          <p>
            We take reasonable security measures to protect the personal
            information we collect. However, please be aware that no method of
            transmission over the Internet or electronic storage is completely
            secure, so we cannot guarantee the absolute security of your data.
          </p>
          <br />
          <h3>
            <span className='capital'>U</span>ser rights
          </h3>
          <br />
          <p>
            You have the right to access, rectify, delete, or object to the
            processing of your personal information. If you wish to exercise any
            of these rights, please contact us at{' '}
            <a href='mailto:eduardsanguinodev@gmail.com'>
              eduardsanguinodev@gmail.com
            </a>
            .
          </p>
          <br />
          <h3>
            <span className='capital'>C</span>hanges to privacy policy
          </h3>
          <br />
          <p>
            We reserve the right to update or modify this privacy policy at any
            time. Any significant changes will be notified through a posting on
            our website. Your continued use of our website after such changes
            constitutes your acceptance of them.
          </p>
          <br />
          <h3>
            <span className='capital'>C</span>ontact
          </h3>
          <br />
          <p>
            If you have any questions or concerns about our privacy policy,
            please feel free to contact us at{' '}
            <a href='mailto:eduardsanguinodev@gmail.com'>
              eduardsanguinodev@gmail.com
            </a>
            .
          </p>
        </>
      )}
    </div>
  );
};
export default Privacity__text;
