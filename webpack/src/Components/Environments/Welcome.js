import React from 'react';
import PropTypes from 'prop-types';
import { translate as __ } from 'foremanReact/common/I18n';
import EmptyState from 'foremanReact/components/common/EmptyState';
import { foremanUrl, getManualURL } from 'foremanReact/common/helpers';

export const WelcomeEnv = ({ canCreate }) => {
  const action = canCreate && {
    title: __('Create Puppet Environment'),
    url: foremanUrl('/foreman_puppet/environments/new'),
  };

  const content = __(`If you are planning to use Foreman as an external node classifier you should provide information about one or more environments.<br/>
  This information is commonly imported from a pre-existing Puppet configuration by the use of the <a target="_blank" href=${getManualURL(
    '4.2.2Classes'
  )}>Puppet classes and environment importer.</a>`);
  return (
    <EmptyState
      icon="th"
      iconType="fa"
      header={__('Environments')}
      description={<div dangerouslySetInnerHTML={{ __html: content }} />}
      documentation={{ url: getManualURL('4.2.1Environments') }}
      action={action}
    />
  );
};

WelcomeEnv.propTypes = {
  canCreate: PropTypes.bool,
};

WelcomeEnv.defaultProps = {
  canCreate: false,
};

export default WelcomeEnv;
