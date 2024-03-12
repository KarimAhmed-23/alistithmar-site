import React from 'react'
import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionary';

export default async function Contact({ lang }: { lang: Locale }) {
  const { page } = await getDictionary(lang);

	return (
		<section className="section-style contact-section w-bg d-none" id="contactSection">
        <div className="contact-area">
          <div className="container">
            <h1 className="main-title more-mb">
							{page.home.contact.title}</h1>
            <div className="contact-box">
              <form className="contact-form" method="post" role="send data" action="#">
                <div className="row gx-3 gx-lg-4">
                  <div className="col-md-4">
                    <div className="form-group">
                      <input type="text" className="form-control input-focus" name="name" placeholder={page.home.contact.form.name} id="formName" />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <input type="tel" className="form-control input-focus" name="phone" placeholder={page.home.contact.form.phone}  id="formPhone" />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <input type="email" className="form-control input-focus" name="email" placeholder={page.home.contact.form.email}  id="formEmail" />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <input type="text" className="form-control input-focus" name="subject" placeholder={page.home.contact.form.subject} id="formSubject" />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <textarea className="form-control input-focus" name="message" placeholder={page.home.contact.form.message} id="formMessage" rows={4} />
                    </div>
                  </div>
                  <div className="col-12 text-start">
                    <button type="button" role="submit" className="submit-btn">
										{page.home.contact.form.submit}
                      <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M-2.7466e-06 10.0001L16 19.6L14.9885 11.8163L9.37931 10.0001L14.9885 8.18387L16 0.400156L-2.7466e-06 10.0001Z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
	)
}
