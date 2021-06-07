import React from 'react';
import _ from 'lodash';
import ReactPlayer from 'react-player/youtube'

import {markdownify} from '../utils';
import CtaButtons from './CtaButtons';

export default class HeroSection extends React.Component {
    render() {
        let section = _.get(this.props, 'section', null);
        return (
            <section id={_.get(section, 'section_id', null)} className="hero">
              <div className="container container--lg">
                {_.get(section, 'title', null) && (
                <h1 className="hero__title line typing-animation">{_.get(section, 'title', null)}</h1>
                )}      
      {_.get(section, 'video', null) && (
<ReactPlayer  playing={true} width="100%" light={true} muted={true} volume={1} url={_.get(section, 'video', null)} />     
  )}
                {_.get(section, 'content', null) && (
                <div className="hero__body text-block">
                  {markdownify(_.get(section, 'content', null))}
                </div>
                )}
                {_.get(section, 'actions', null) && (
                <div className="hero__actions button-group">
                  <CtaButtons {...this.props} actions={_.get(section, 'actions', null)} />
                </div>
                )}
              </div>
            </section>
        );
    }
}
