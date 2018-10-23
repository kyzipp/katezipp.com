import React from 'react'
import { withRouteData } from 'react-static'
import convert from 'htmr'
import kate from './kate.png';

export default withRouteData(({ about, vitae, research, publications, teaching }) => (
  < div >
    <section id="about" className="section">
      <div className="columns">
        <div className="column is-one-fifth">
          <figure class="image is-256x256">
            <img class="is-rounded" src={kate} />
          </figure>
        </div>
        <div className="column">
          <h1>Katherine Y. Zipp</h1>
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
