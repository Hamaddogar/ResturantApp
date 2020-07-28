/*
 * Club
 *
 * List all the features
 */
import React from 'react';
import { Helmet } from 'react-helmet';


export default class Hall extends React.Component {
  // eslint-disable-line react/prefer-stateless-function

  // Since state and props are static,
  // there's no need to re-render this component
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div className="hall-page">
        <Helmet>
          <title>Feature Page</title>
          <meta
            name="Picasso Italino"
          />
        </Helmet>
        <div>

          <div>

            <div class="row">
              <div class="col s12">
                <h1>{this.props.injection.get('name')}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
