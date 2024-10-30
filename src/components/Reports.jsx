/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react'
import Title from './Title'

const Reports = () => {
  return (
    <section>
      <Title name={'Reports (US)'} />
      <section>
        <h3 className='text-lg md:text-2xl font-semibold mb-5'>Geographical Sales Data</h3>
        <iframe className='aspect-square lg:aspect-[9/4]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52911152.012123786!2d-161.6554510990339!3d35.96065628178862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited%20States!5e0!3m2!1sen!2seg!4v1730152454783!5m2!1sen!2seg" width="100%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </section>
    </section>
  )
}

export default Reports
