import React from 'react'
import { withRouteData } from 'react-static'
import convert from 'htmr'
import kate from './kate.png';

export default withRouteData(({ about, vitae, research, publications, teaching }) => (
  < div >
    <section id="about" className="section">
      <div className="level">
        <figure class="image is-128x128 level-left">
          <img class="is-rounded" src={kate} />
        </figure>
        <h1>Katherine Y. Zipp</h1>
        <div className="level-right">
          {convert(about.contents)}
        </div>
      </div>
    </section>
    <section className="section" id="vitae">
      {convert(vitae.contents)}
    </section>
    <section className="section" id="research">
      {convert(research.contents)}
    </section>
    <section className="section" id="pubs">
      {convert(publications.contents)}
    </section>
    <section className="section" id="teaching">
      {convert(teaching.contents)}
    </section>
  </div >
))
