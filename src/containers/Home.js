import React from 'react'
import { withRouteData } from 'react-static'
import convert from 'htmr'
import kate from './kate.png';
import CV from '../../cv/Zipp CV.pdf'

export default withRouteData(({ about, vitae, research, teaching }) => (
  <div>
    <section id="about" className="section">
      <div className="columns">
        <div className="column is-one-quarter">
          <figure className="image is-256x256">
            <img className="is-rounded" src={kate} />
          </figure>
          <p>Katherine Y. Zipp<br />
          Penn State University <br />
          <a target="_blank" href="https://aese.psu.edu/directory/kyz1" title="Penn State">AESE</a> and <a target="_blank" href="http://www.iee.psu.edu" title="Penn State IEE">IEE</a><br />
          112-F Armsby<br />
          University Park, PA 16802<br />
          kyz1@psu.edu</p>
        </div>
        <div className="column">
          <h1>Katherine Y. Zipp</h1>
          {convert(about.contents)}
        </div>
      </div>
    </section>
    <section className="section" id="vitae">
    <h1>Vitae</h1>
      <a href={CV}>
        Download My Vitae as a PDF
      </a>
    </section>
    <section className="section" id="research">
      {convert(research.contents)}
    </section>
    <section className="section" id="teaching">
      {convert(teaching.contents)}
    </section>
  </div >
))
